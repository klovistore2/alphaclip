// app/api/videos/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Vérifier l'authentification
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json(
        { error: 'Authentification requise' },
        { status: 401 }
      );
    }

    // Récupérer toutes les vidéos générées de l'utilisateur
    const videos = await prisma.generatedVideo.findMany({
      where: {
        userId: userId,
        isDeleted: false,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des vidéos' },
      { status: 500 }
    );
  }
}