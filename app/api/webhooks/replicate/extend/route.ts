//app/api/webhooks/replicate/extend/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { AssetStatus } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import Replicate from 'replicate';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Replicate client outside functions for reuse
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Interface for Cloudinary upload result
interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
}

// Download and upload to Cloudinary
async function downloadAndUploadToCloudinary(url: string): Promise<CloudinaryUploadResult> {
  console.log('[WEBHOOK_EXTEND] Uploading video to Cloudinary from:', url);

  try {
    const result = await cloudinary.uploader.upload(url, {
      resource_type: 'video' as const, // Type assertion with as const for Cloudinary's enum
      folder: 'generated_videos',
    });

    console.log('[WEBHOOK_EXTEND] Cloudinary upload successful:', result.secure_url, 'Public ID:', result.public_id);

    return {
      secure_url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    console.error('[WEBHOOK_EXTEND] Cloudinary upload failed:', error);
    throw error;
  }
}

// Add sound to video using Replicate
async function addSoundToVideo(videoUrl: string, sourceVideoId: string): Promise<CloudinaryUploadResult> {
  // Get the source video to extract its audio
  const sourceVideo = await prisma.generatedVideo.findUnique({
    where: { id: sourceVideoId },
  });
  
  if (!sourceVideo || !sourceVideo.videoUrl) {
    throw new Error('Source video not found or has no URL');
  }
  
  console.log('[WEBHOOK_EXTEND] Adding sound to extended video using source:', sourceVideo.videoUrl);
  
  // Use the audio model to apply sound
  const prediction = await replicate.predictions.create({
    version: "62871fb59889b2d7c13777f08deb3b36bdff88f7e1d53a50ad7694548a41b484", // mmaudio model
    input: {
      video: videoUrl,
      prompt: "same sound as original video",
      seed: -1,
    },
  });
  
  // Wait for the prediction to complete
  const result = await replicate.wait(prediction);
  
  // Define a custom interface for the output structure
  interface ReplicateVideoOutput {
    video: string;
    [key: string]: unknown;
  }
  
  // Cast the result to our known output structure
  const output = result.output as ReplicateVideoOutput;
  
  if (!output || typeof output !== 'object' || !output.video) {
    throw new Error('Failed to add sound to video');
  }
  
  // Upload the result to Cloudinary
  return await downloadAndUploadToCloudinary(output.video);
}

// Next.js inclut déjà fetch nativement, pas besoin d'importer

// Concatenate videos using external API service
async function concatenateVideos(sourceVideoId: string, extendedVideoUrl: string): Promise<CloudinaryUploadResult> {
  try {
    // Get the source video
    const sourceVideo = await prisma.generatedVideo.findUnique({
      where: { id: sourceVideoId },
    });
    
    if (!sourceVideo || !sourceVideo.videoUrl) {
      throw new Error('Source video not found or has no video URL');
    }
    
    console.log('[WEBHOOK_EXTEND] Concatenating videos using external API service');
    console.log('[WEBHOOK_EXTEND] Source video:', sourceVideo.videoUrl);
    console.log('[WEBHOOK_EXTEND] Extended video:', extendedVideoUrl);
    
    // Vérifier que l'URL de l'API est configurée
    if (!process.env.VIDEO_CONCAT_API_URL) {
      throw new Error('VIDEO_CONCAT_API_URL is not configured in environment variables');
    }
    
    // Appeler l'API externe pour concaténer les vidéos
    console.log('[WEBHOOK_EXTEND] Calling external concatenation API...');
    const response = await fetch(process.env.VIDEO_CONCAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Ajouter une clé API si nécessaire
        ...(process.env.VIDEO_CONCAT_API_KEY && {
          'Authorization': `Bearer ${process.env.VIDEO_CONCAT_API_KEY}`
        })
      },
      body: JSON.stringify({
        source_video_url: sourceVideo.videoUrl,
        extended_video_url: extendedVideoUrl,
        // Optionnellement, passer d'autres paramètres utiles
        source_video_id: sourceVideoId,
        timestamp: Date.now(),
        cloudinary_cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        // La clé et secret Cloudinary ne devraient pas être envoyés si votre API possède sa propre configuration
      })
    });
    
    // Vérifier la réponse
    if (!response.ok) {
      let errorMessage = `API returned status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        // Ignorer les erreurs lors de la lecture de la réponse
      }
      throw new Error(`Error calling video concatenation API: ${errorMessage}`);
    }
    
    // Traiter la réponse
    const apiResult = await response.json();
    
    // Vérifier que la réponse contient les données attendues
    if (!apiResult.secure_url || !apiResult.public_id) {
      throw new Error('Invalid response from concatenation API: missing secure_url or public_id');
    }
    
    console.log('[WEBHOOK_EXTEND] Concatenation successful with result:', {
      secure_url: apiResult.secure_url,
      public_id: apiResult.public_id
    });
    
    // Retourner les données de la vidéo concaténée
    return {
      secure_url: apiResult.secure_url,
      public_id: apiResult.public_id
    };
    
  } catch (error) {
    console.error('[WEBHOOK_EXTEND] Error in concatenateVideos function:', error);
    
    // En cas d'erreur, utiliser la vidéo étendue comme fallback
    const extendedUrlParts = extendedVideoUrl.split('/');
    const filenameWithExt = extendedUrlParts[extendedUrlParts.length - 1];
    const publicIdWithExt = filenameWithExt.split('.')[0];
    
    console.log('[WEBHOOK_EXTEND] Using extended video as fallback due to error');
    
    return {
      secure_url: extendedVideoUrl,
      public_id: `generated_videos/${publicIdWithExt}`
    };
  }
}

export async function POST(req: Request) {
  try {
    console.log('[WEBHOOK_EXTEND] Receiving webhook request');

    // Secret validation
    const searchParams = new URL(req.url).searchParams;
    const secret = searchParams.get('secret');
    const userId = searchParams.get('userId');
    const sourceVideoId = searchParams.get('sourceVideoId');
    const hasSound = searchParams.get('hasSound') === 'true';

    if (secret !== process.env.REPLICATE_WEBHOOK_SECRET || !userId) {
      console.log('[WEBHOOK_EXTEND] Authentication failed - invalid secret or missing userId');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const event = await req.json();
    console.log('[WEBHOOK_EXTEND] Received payload:', JSON.stringify(event, null, 2));

    // Payload validation
    if (!event.id || typeof event.status !== 'string') {
      console.log('[WEBHOOK_EXTEND] Invalid payload:', event);
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // If status is 'succeeded' but no output, it's an error
    if (event.status === 'succeeded' && !event.output) {
      console.log('[WEBHOOK_EXTEND] Success status but no output data:', event);
      return NextResponse.json({ error: 'Invalid payload: success without output' }, { status: 400 });
    }

    // Find video in database using replicatePredictionId
    const video = await prisma.generatedVideo.findFirst({
      where: { 
        replicatePredictionId: event.id,
        userId: userId
      }
    });

    if (!video) {
      console.log('[WEBHOOK_EXTEND] Video not found for replicatePredictionId:', event.id);
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
    let cloudinaryPublicId: string | null = null;
    let videoData = {};
    
    if (newStatus === AssetStatus.COMPLETED && event.output) {
      try {
        // Determine the video source URL based on response format
        let videoSourceUrl: string;
        
        if (typeof event.output === 'string') {
          videoSourceUrl = event.output;
        } else if (event.output.video) {
          videoSourceUrl = event.output.video;
        } else if (event.output.video_url) {
          videoSourceUrl = event.output.video_url;
        } else {
          // Find a video URL in the output
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

        console.log('[WEBHOOK_EXTEND] Identified video source URL:', videoSourceUrl);

        // Upload to Cloudinary
        const cloudinaryResult = await downloadAndUploadToCloudinary(videoSourceUrl);
        videoUrl = cloudinaryResult.secure_url;
        cloudinaryPublicId = cloudinaryResult.public_id;
        
        // Add sound if the source video had sound
        if (hasSound && sourceVideoId) {
          console.log('[WEBHOOK_EXTEND] Source video has sound, adding sound to extension');
          const withSoundResult = await addSoundToVideo(videoUrl, sourceVideoId);
          videoUrl = withSoundResult.secure_url;
          cloudinaryPublicId = withSoundResult.public_id;
        }
        
        // Concatenate the source video with the extended video
        if (sourceVideoId) {
          console.log('[WEBHOOK_EXTEND] Concatenating with source video');
          const concatenatedResult = await concatenateVideos(sourceVideoId, videoUrl);
          videoUrl = concatenatedResult.secure_url;
          cloudinaryPublicId = concatenatedResult.public_id;
        }
        
        // Store other metadata if available
        const videoParams = typeof video.parameters === 'object' && video.parameters !== null 
          ? video.parameters 
          : {};
        
        // Get source video information to include in parameters
        const sourceVideoData = sourceVideoId ? await prisma.generatedVideo.findUnique({
          where: { id: sourceVideoId },
          select: { videoUrl: true, cloudinaryPublicId: true, id: true }
        }) : null;
        
        // Extraire l'ID de la vidéo étendue pour comparaison
        const extendedUrlParts = videoUrl.split('/');
        const extendedFilename = extendedUrlParts[extendedUrlParts.length - 1];
        const videoPublicId = extendedFilename.split('.')[0];
        
        // Check if we're using the concatenated version or just the extended video as fallback
        const isUsingFallback = cloudinaryPublicId === videoPublicId || 
                              (cloudinaryPublicId && cloudinaryPublicId.includes(videoPublicId) &&
                               !cloudinaryPublicId.includes("concat_frames_"));
        
        videoData = {
          parameters: {
            ...videoParams,
            replicateOutput: event.output,
            originalVideoUrl: videoSourceUrl,
            sourceVideo: sourceVideoData,
            isExtension: true,
            hasBeenConcatenated: !isUsingFallback,
            concatenationMethod: isUsingFallback ? "none" : "ffmpeg_frames",
            concatenationAttempted: true,
            concatenationTimestamp: new Date().toISOString(),
            frameBasedConcatenation: !isUsingFallback,
            sourceVideoId: sourceVideoId,
            extendedVideoId: video.id
          }
        };
        
      } catch (error) {
        console.error('[WEBHOOK_EXTEND] Error processing video:', error);
        newStatus = AssetStatus.FAILED;
        const errorParams = typeof video.parameters === 'object' && video.parameters !== null 
          ? video.parameters 
          : {};
        
        // Extract error message safely
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
      // Store error if available
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
    console.log('[WEBHOOK_EXTEND] Updating database for video ID:', video.id);
    const updatedVideo = await prisma.generatedVideo.update({
      where: { id: video.id },
      data: {
        status: newStatus,
        ...(videoUrl && { videoUrl }),
        ...(cloudinaryPublicId && { cloudinaryPublicId }),
        ...(hasSound && { sound: true }),
        ...videoData
      }
    });

    // Update generation log if it exists
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

    console.log('[WEBHOOK_EXTEND] Processing completed successfully:', {
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
        cloudinaryPublicId: updatedVideo.cloudinaryPublicId,
        sourceVideoId: updatedVideo.parentVideoId || null
      }
    });

  } catch (error) {
    console.error('[WEBHOOK_EXTEND_ERROR]', error);
    if (error instanceof Error) {
      console.error('[WEBHOOK_EXTEND_ERROR] Stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}