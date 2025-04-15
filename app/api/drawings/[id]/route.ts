// app/api/drawings/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
) {
  const id = request.nextUrl.pathname.split('/').pop() || '';
  try {
    // Accéder à l'id via l'URL
    const drawingId = id;
    // ------------------------

    // 1. Vérifier si l'ID est valide
    if (!drawingId || drawingId === '0') {
      return NextResponse.json({ error: "Invalid drawing ID" }, { status: 400 });
    }

    // 2. Vérifier l'authentification
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 3. Récupérer le dessin
    const drawing = await prisma.drawing.findUnique({
      where: { id: drawingId, userId: userId },
      select: { id: true, title: true, previewUrl: true }
    });

    // 4. Vérifier si trouvé
    if (!drawing) {
      return NextResponse.json({ error: "Drawing not found or access denied" }, { status: 404 });
    }

    // 5. Retourner les données
    return NextResponse.json(drawing);

  } catch (error) {
    console.error("[API_DRAWING_GET] Failed to fetch drawing:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}