// app/api/images/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
) {
  const id = request.nextUrl.pathname.split('/').pop() || '';
  try {
    // Accéder à l'id via l'URL
    const imageId = id;

    // 1. Vérifier si l'ID est valide
    if (!imageId || imageId === '0') {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    // 2. Vérifier l'authentification
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 3. Récupérer l'image généré
    const generatedImage = await prisma.generatedImage.findUnique({
      where: { id: imageId, userId: userId },
      select: { 
        id: true, 
        imageUrl: true,
        prompt: true,
        title: true,
        modelUsed: true,
        parameters: true 
      }
    });

    // 4. Vérifier si trouvé
    if (!generatedImage) {
      return NextResponse.json({ error: "Image not found or access denied" }, { status: 404 });
    }

    // 5. Préparer le titre basé sur les données disponibles
    let title = generatedImage.title;
    if (!title && generatedImage.parameters && typeof generatedImage.parameters === 'object' && 'sourceImageId' in generatedImage.parameters) {
      title = "Variation";
    } else if (!title) {
      title = "Image générée";
    }

    // 6. Retourner les données
    return NextResponse.json({
      ...generatedImage,
      title
    });

  } catch (error) {
    console.error("[API_IMAGE_GET] Failed to fetch image:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}