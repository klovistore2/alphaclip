'use server';

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Action serveur pour basculer le statut public d'une vidéo
 */
export async function toggleVideoPublicStatus(videoId: string) {
  try {
    // 1. Vérifier l'authentification
    const session = await auth();
    const userId = session?.user?.id;
    
    if (!userId) {
      return { success: false, error: "Vous devez être connecté pour effectuer cette action." };
    }

    // 2. Trouver la vidéo actuelle pour obtenir son statut public actuel
    const video = await prisma.generatedVideo.findUnique({
      where: {
        id: videoId,
        userId: userId, // S'assurer que la vidéo appartient à l'utilisateur
      },
      select: {
        public: true,
      },
    });

    if (!video) {
      return { success: false, error: "Vidéo non trouvée ou vous n'êtes pas autorisé à la modifier." };
    }

    // 3. Mettre à jour la vidéo en inversant son statut public
    const updatedVideo = await prisma.generatedVideo.update({
      where: {
        id: videoId,
        userId: userId, // Double vérification
      },
      data: {
        public: !video.public, // Inverser le statut
      },
    });

    // 4. Revalider les chemins pertinents pour mettre à jour l'UI
    revalidatePath('/dashboard/gallery/videos');
    revalidatePath('/dashboard');
    revalidatePath('/');

    return { 
      success: true, 
      video: {
        id: updatedVideo.id,
        public: updatedVideo.public,
      },
    };
  } catch (error) {
    console.error("Erreur lors du basculement du statut public:", error);
    return { 
      success: false, 
      error: "Une erreur est survenue lors de la mise à jour du statut public." 
    };
  }
}