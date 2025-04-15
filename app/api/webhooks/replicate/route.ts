//app/api/webhooks/replicate/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { AssetStatus } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function downloadAndUploadToCloudinary(url: string): Promise<string> {
  console.log('[WEBHOOK] Uploading video to Cloudinary from:', url);
  
  try {
    // Upload directement depuis l'URL de Replicate vers Cloudinary
    const result = await cloudinary.uploader.upload(url, {
      resource_type: 'video',
      folder: 'generated_videos',
    });
    
    console.log('[WEBHOOK] Cloudinary upload successful:', result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error('[WEBHOOK] Cloudinary upload failed:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    console.log('[WEBHOOK] Receiving webhook request');

    // Secret validation
    const searchParams = new URL(req.url).searchParams;
    const secret = searchParams.get('secret');
    const userId = searchParams.get('userId'); // Récupération de l'ID utilisateur

    if (secret !== process.env.REPLICATE_WEBHOOK_SECRET || !userId) {
      console.log('[WEBHOOK] Authentication failed - invalid secret or missing userId');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const event = await req.json();
    console.log('[WEBHOOK] Received payload:', JSON.stringify(event, null, 2));

    // Payload validation
    if (!event.id || typeof event.status !== 'string') {
      console.log('[WEBHOOK] Invalid payload:', event);
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Si le statut est 'succeeded' mais pas d'output, c'est une erreur
    if (event.status === 'succeeded' && !event.output) {
      console.log('[WEBHOOK] Success status but no output data:', event);
      return NextResponse.json({ error: 'Invalid payload: success without output' }, { status: 400 });
    }

    // Find video in database using replicatePredictionId
    const video = await prisma.generatedVideo.findFirst({
      where: { 
        replicatePredictionId: event.id,
        userId: userId // Double vérification utilisateur
      }
    });

    if (!video) {
      console.log('[WEBHOOK] Video not found for replicatePredictionId:', event.id);
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    // Handle video status mapping from Replicate to our system
    let newStatus: AssetStatus;
    switch (event.status) {
      case 'succeeded':
        newStatus = AssetStatus.COMPLETED;
        break;
      case 'failed':
        newStatus = AssetStatus.FAILED;
        break;
      case 'processing':
        newStatus = AssetStatus.PROCESSING;
        break;
      default:
        newStatus = AssetStatus.PENDING;
    }

    // Process video if generation succeeded
    let videoUrl: string | null = null;
    let videoData = {};
    
    if (newStatus === AssetStatus.COMPLETED && event.output) {
      try {
        // Déterminer l'URL source de la vidéo selon le format de la réponse
        let videoSourceUrl: string;
        
        if (typeof event.output === 'string') {
          videoSourceUrl = event.output;
        } else if (event.output.video) {
          videoSourceUrl = event.output.video;
        } else if (event.output.video_url) {
          videoSourceUrl = event.output.video_url;
        } else {
          // Pour le modèle minimax/video-01, l'output pourrait être différent
          // Parcourir les propriétés pour trouver une URL de vidéo
          const outputKeys = Object.keys(event.output);
          const videoKey = outputKeys.find(key => 
            typeof event.output[key] === 'string' && 
            (key.includes('video') || event.output[key].endsWith('.mp4'))
          );
          
          if (videoKey) {
            videoSourceUrl = event.output[videoKey];
          } else {
            throw new Error('No video URL found in the output');
          }
        }

        console.log('[WEBHOOK] Identified video source URL:', videoSourceUrl);

        // Upload à Cloudinary
        videoUrl = await downloadAndUploadToCloudinary(videoSourceUrl);
        
        // Stocker d'autres métadonnées si disponibles
        const videoParams = typeof video.parameters === 'object' && video.parameters !== null 
          ? video.parameters 
          : {};
          
        videoData = {
          parameters: {
            ...videoParams,
            replicateOutput: event.output,
            originalVideoUrl: videoSourceUrl,
          }
        };
        
      } catch (error) {
        console.error('[WEBHOOK] Error processing video:', error);
        newStatus = AssetStatus.FAILED;
        const errorParams = typeof video.parameters === 'object' && video.parameters !== null 
          ? video.parameters 
          : {};
        
        // Extraire le message d'erreur de manière sécurisée
        let errorMessage = 'Unknown error during video processing';
        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        } else if (error && typeof error === 'object' && 'message' in error) {
          errorMessage = String(error.message);
        }
          
        videoData = {
          parameters: {
            ...errorParams,
            error: errorMessage
          }
        };
      }
    } else if (newStatus === AssetStatus.FAILED) {
      // Stocker l'erreur si disponible
      const failParams = typeof video.parameters === 'object' && video.parameters !== null 
        ? video.parameters 
        : {};
        
      videoData = {
        parameters: {
          ...failParams,
          error: event.error || 'Unknown error'
        }
      };
    }

    // Update database
    console.log('[WEBHOOK] Updating database for video ID:', video.id);
    const updatedVideo = await prisma.generatedVideo.update({
      where: { id: video.id },
      data: {
        status: newStatus,
        ...(videoUrl && { videoUrl }),
        ...videoData
      }
    });

    // Mettre à jour le log de génération si existant
    const generationLog = await prisma.generationLog.findFirst({
      where: {
        replicatePredictionId: event.id,
      }
    });

    if (generationLog) {
      await prisma.generationLog.update({
        where: { id: generationLog.id },
        data: {
          status: newStatus,
          ...(videoUrl && { resultUrl: videoUrl }),
          ...(newStatus === AssetStatus.COMPLETED && { completedAt: new Date() }),
          ...(newStatus === AssetStatus.FAILED && { 
            errorMessage: event.error || 'Failed without specific error message' 
          })
        }
      });
    }

    console.log('[WEBHOOK] Processing completed successfully:', {
      id: updatedVideo.id,
      status: updatedVideo.status,
      videoUrl: updatedVideo.videoUrl
    });

    return NextResponse.json({
      success: true,
      video: {
        id: updatedVideo.id,
        status: updatedVideo.status,
        videoUrl: updatedVideo.videoUrl,
        sourceImageId: updatedVideo.sourceImageId
      }
    });

  } catch (error) {
    console.error('[WEBHOOK_ERROR]', error);
    if (error instanceof Error) {
      console.error('[WEBHOOK_ERROR] Stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}