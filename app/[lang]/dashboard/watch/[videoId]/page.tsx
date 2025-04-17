// app/[lang]/dashboard/watch/[videoId]/page.tsx

import { getDictionary, Localy } from '@/app/[lang]/dictionaries';
import { prisma } from '@/lib/prisma';
import { AssetStatus, Prisma } from '@prisma/client';
import { notFound } from 'next/navigation'; // Pour gérer les vidéos non trouvées
//import { VideoThumbnailCard } from '@/components/video-thumbnail-card'; // On réutilise la carte pour la sidebar
import { WatchPageClientContent } from './watch-page-client-content'; // Composant côté client pour le lecteur

// Type pour les données de la vidéo principale (similaire à VideoWithUserData mais peut être affiné)
export type MainVideoData = Prisma.GeneratedVideoGetPayload<{
    include: {
        user: {
            select: {
                id: true,
                name: true,
                image: true,
            }
        }
    }
}> & {
    // Assurez-vous que les champs nécessaires sont bien définis comme non-nullables si la logique le garantit
    cloudinaryPublicId: string;
    videoUrl: string;
    views?: number | null; // Ou 'number | undefined' ou 'number | null | undefined' selon votre config stricte
    description?: string | null;
    prompt?: string | null; // Le prompt peut être utilisé comme description alternative si pas de description
};

// Type pour les vidéos suggérées (le même que celui de la galerie)
export type SuggestedVideoData = Prisma.GeneratedVideoGetPayload<{
    include: {
        user: {
            select: {
                id: true,
                name: true,
                image: true,
            }
        }
    }
}> & {
    id: string;
    title: string | null;
    cloudinaryPublicId: string | null; // Garder nullable pour la validation dans la carte
    videoUrl: string | null;           // Garder nullable pour la validation dans la carte
    createdAt: Date;
    views?: number;
};

export default async function Page({ params }: {
    params: Promise<{ lang: Localy; videoId: string }> // <-- Type Promise correct
}) {
    const { lang, videoId } = await params; // <-- Utilisation de await OBLIGATOIRE
    const dict = await getDictionary(lang);

    // 1. Récupérer la vidéo principale
    const video = await prisma.generatedVideo.findUnique({
        where: {
            id: videoId,
            status: AssetStatus.COMPLETED, // S'assurer qu'elle est prête
            isDeleted: false,
            // On s'assure aussi qu'elle a les infos nécessaires pour être lue
            cloudinaryPublicId: { not: null },
            videoUrl: { not: null },
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            },
        },
    });

    // Si la vidéo n'est pas trouvée ou n'est pas complète/valide, afficher une page 404
    if (!video || !video.cloudinaryPublicId || !video.videoUrl) {
        console.warn(`Vidéo non trouvée ou invalide : ${videoId}`);
        notFound();
    }

    // Cast le type après vérification (ou ajuster le type MainVideoData)
    const mainVideoData = video as MainVideoData;

    // 2. Récupérer les vidéos suggérées (par exemple, les autres vidéos publiques)
    //    On exclut la vidéo actuelle de la liste des suggestions.
    const suggestedVideos: SuggestedVideoData[] = await prisma.generatedVideo.findMany({
        where: {
            id: { not: videoId }, // Exclure la vidéo actuelle
            public: true,
            status: AssetStatus.COMPLETED,
            isDeleted: false,
            cloudinaryPublicId: { not: null },
            videoUrl: { not: null },
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc', // Ou autre logique de suggestion
        },
        take: 10, // Limiter le nombre de suggestions
    });


    // On va passer les données à un composant client pour gérer le lecteur vidéo et potentiellement d'autres interactions
    return (
        <WatchPageClientContent
            lang={lang}
            dictionary={dict}
            mainVideoData={mainVideoData}
            suggestedVideos={suggestedVideos}
        />
    );
}