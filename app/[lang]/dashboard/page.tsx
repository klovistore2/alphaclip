// app/[lang]/page.tsx

import { getDictionary, Localy } from '../dictionaries'
//import Link from 'next/link'
//import { LanguageSwitcher } from '@/components/language-switcher'

import { prisma } from '@/lib/prisma';
import { AssetStatus } from '@prisma/client';
import { VideoThumbnailCard } from '@/components/video-thumbnail-card'; // On va créer ce composant
import { Prisma } from '@prisma/client';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Localy }>
}) {
  

  
  const { lang } = await params
  
  const dict = await getDictionary(lang) 

  console.log("langue courante",dict.metadata.title) 
  // Récupérer les vidéos publiques, complétées, avec infos utilisateur
  const publicVideos = await prisma.generatedVideo.findMany({
    where: {
      public: true,           // Uniquement les vidéos publiques
      status: AssetStatus.COMPLETED, // Uniquement celles qui sont prêtes
      isDeleted: false,       // Uniquement celles non supprimées
      cloudinaryPublicId: {  // S'assurer qu'on a l'ID pour la vignette
        not: null,
      },
      videoUrl: {           // S'assurer qu'on a l'URL pour le téléchargement
        not: null,
      }
    },
    include: {
      // Inclure les données de l'utilisateur associé
      user: {
        select: {
          id: true,
          name: true,
          image: true, // URL de l'avatar de l'utilisateur
        },
      },
    },
    orderBy: {
      createdAt: 'desc', // Trier par date de création (plus récentes d'abord)
      // ou par 'views: 'desc'` si vous ajoutez le champ views
    },
    // Limiter le nombre pour la pagination future ? ex: take: 20
  });

  return (
    // Adapter cette structure à votre layout global avec Sidebar
    <div className="flex h-full">
      {/* <Sidebar /> */} {/* Votre Sidebar existante ici */}

      {/* Zone de contenu principal */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6">{dict.sidebar.gallery_video}</h1>

        {publicVideos.length === 0 ? (
          <p className="text-muted-foreground">{dict.gallery.no_videos || dict.gallery.no_generated_images}</p>
        ) : (
          // Grille style YouTube
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
            {publicVideos.map((video) => (
              // Passer les données nécessaires à la carte de vignette
              <VideoThumbnailCard key={video.id} video={video} lang={lang} dictionary={dict} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}


export type VideoWithUserData = Prisma.GeneratedVideoGetPayload<{
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
  // --- MODIFICATION ICI ---
  // Accepter string | null, comme retourné par Prisma, même si on sait que ce sera string ici
  cloudinaryPublicId: string | null;
  videoUrl: string | null;
  // --- FIN MODIFICATION ---
  createdAt: Date;
  views?: number;
};