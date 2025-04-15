// app/api/videos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest
) {
  const id = request.nextUrl.pathname.split('/').pop() || '';
  try {
    // 1. Vérifier si l'ID est valide
    if (!id || id === '0') {
      return NextResponse.json({ error: "ID de vidéo invalide" }, { status: 400 });
    }

    // 2. Vérifier l'authentification
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ error: "Authentification requise" }, { status: 401 });
    }

    // 3. Récupérer la vidéo de l'utilisateur
    const video = await prisma.generatedVideo.findUnique({
      where: { 
        id: id, 
        userId: userId 
      },
      select: {
        id: true,
        videoUrl: true,
        prompt: true,
        title: true,
        status: true,
        createdAt: true,
        parameters: true,
        modelUsed: true,
        sourceImageId: true,
        cloudinaryPublicId: true,
      }
    });

    // 4. Vérifier si trouvée
    if (!video) {
      return NextResponse.json(
        { error: 'Vidéo non trouvée ou non autorisée' },
        { status: 404 }
      );
    }

    // 5. Préparer le titre basé sur les données disponibles
    let title = video.title;
    if (!title && video.prompt) {
      // Utiliser les premiers mots du prompt comme titre
      title = video.prompt.length > 50 
        ? video.prompt.substring(0, 47) + "..." 
        : video.prompt;
    } else if (!title) {
      title = "Vidéo générée";
    }
    console.log("Titre de la vidéo :", title); // Pour le débogage
    // 6. Retourner les données
    return NextResponse.json({
      ...video,
      title
    });
  } catch (error) {
    console.error('[API_VIDEO_GET] Erreur lors de la récupération de la vidéo:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}