// app/gallery/page.tsx

import { auth } from "@/lib/auth"; // Adaptez le chemin vers vos options NextAuth
import { prisma } from "@/lib/prisma";   // Adaptez le chemin vers votre client Prisma
import { redirect } from "next/navigation";
import { VideoCard } from "@/components/video-card"; // Nous créerons ce composant ensuite
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
type Language = 'en' | 'fr';

export default async function GalleryPage({ // Renommé de HistoryPage à GalleryPage pour plus de clarté

  params,
  
  }: {
  
  params: Promise<{ lang: Language }>
  
  }) {
  
  
  
  const { lang } = await params;

  console.log("Langue sélectionnée :", lang); // Pour le débogage

  // 1. Récupérer la session utilisateur côté serveur
  const session = await auth();


  
  // 2. Vérifier si l'utilisateur est connecté
  if (!session?.user?.id) {
    // Rediriger vers la page de connexion si non connecté
    redirect("/api/auth/signin?callbackUrl=/gallery"); // Ou une autre page si vous préférez
  }

  // 3. Récupérer les vidéos de l'utilisateur depuis la base de données
  const userVideos = await prisma.generatedVideo.findMany({
    where: {
      userId: session.user.id, // Filtrer par l'ID de l'utilisateur connecté
      isDeleted: false,        // Ne pas afficher les vidéos marquées comme supprimées
      status: 'COMPLETED',     // Afficher uniquement les vidéos terminées
      cloudinaryPublicId: {    // S'assurer que le publicId existe pour l'affichage
        not: null
      }
    },
    orderBy: {
      createdAt: 'desc', // Trier par date de création (les plus récentes d'abord)
    },
    select: { // Sélectionner uniquement les champs nécessaires
      id: true,
      cloudinaryPublicId: true,
      title: true,
      prompt: true,
      videoUrl: true, // Important pour le téléchargement
      // Ajoutez d'autres champs si nécessaire pour l'affichage
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ma Galerie Vidéo</h1>

      {userVideos.length === 0 ? (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Aucune vidéo trouvée !</AlertTitle>
          <AlertDescription>
            Vous n avez pas encore généré de vidéos, ou elles sont encore en cours de traitement.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userVideos.map((video) => (
            // Passer les données nécessaires au composant VideoCard
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}