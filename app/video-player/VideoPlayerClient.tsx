// components/VideoPlayerClient.tsx
"use client"; // Indispensable

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { Loader2, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Garder l'interface ici ou l'importer si définie ailleurs
interface GeneratedVideo {
  id: string;
  videoUrl: string; // Assurez-vous que ce champ correspond à votre API
  prompt: string | null;
  title: string | null;
  createdAt: string; // Ou Date si votre API retourne une Date
}

// Fonction utilitaire (peut aussi être dans un fichier séparé)
const getCloudinaryId = (url: string): string => {
    if (!url) return '';
    try {
        // Attention: l'URL Cloudinary peut avoir des transformations
        // Cette logique suppose une URL simple se terminant par /version/public_id.extension
        // Ou /upload/public_id.extension
        const parts = url.split('/');
        const publicIdWithVersion = parts.slice(parts.findIndex(p => p === 'upload' || p.startsWith('v')) + 1).join('/');
        const publicId = publicIdWithVersion.substring(0, publicIdWithVersion.lastIndexOf('.')) || publicIdWithVersion;
        console.log("Extracted Cloudinary Public ID:", publicId); // Debug
        return publicId;
    } catch (err) {
        console.error('Erreur lors de l\'extraction de l\'ID Cloudinary:', err);
        return '';
    }
};


export default function VideoPlayerClient() {
  // --- Utilisation de useSearchParams ici ---
  const searchParams = useSearchParams();
  const videoId = searchParams.get('id');
  // ----------------------------------------

  const [video, setVideo] = useState<GeneratedVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideo() {
      if (!videoId) {
        setError('ID de vidéo non spécifié dans l\'URL.');
        setIsLoading(false);
        return;
      }
      console.log("Fetching video with ID:", videoId); // Debug
      setIsLoading(true); // Assurer le reset du loading
      setError(null); // Reset erreur
      setVideo(null); // Reset vidéo

      try {
        // Appel à votre API route (assurez-vous qu'elle existe et fonctionne)
        const response = await fetch(`/api/videos/${videoId}`);

        if (!response.ok) {
           const errorData = await response.json().catch(() => ({})); // Essaye de lire le corps de l'erreur
           console.error("API Error Response:", response.status, response.statusText, errorData);
           throw new Error(errorData.error || `Erreur ${response.status}: ${response.statusText}`);
        }

        const data: GeneratedVideo = await response.json();
        console.log("Video data received:", data); // Debug

        if (!data || !data.videoUrl) {
             throw new Error("Données vidéo invalides ou URL manquante reçue de l'API.");
        }

        setVideo(data);
      } catch (err) {
        console.error('Erreur lors du chargement de la vidéo:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du chargement.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideo();
  }, [videoId]); // L'effet dépend de videoId

  // Affichage Chargement
  if (isLoading) {
     // Vous pouvez utiliser votre composant LoadingSpinner ici si créé
     return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin mr-2" />
        <span>Chargement de la vidéo...</span>
      </div>
    );
  }

  // Affichage Erreur ou Vidéo non trouvée
  if (error || !video) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4 text-center">
        <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-destructive">Erreur</h1>
        <p className="text-muted-foreground mb-6">{error || "Vidéo non trouvée ou inaccessible."}</p>
        {/* Utiliser Link ou le router pour retourner à la galerie */}
        <Link href="/dashboard/gallery/videos"> {/* Adaptez ce lien */}
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la galerie Vidéos
          </Button>
        </Link>
      </div>
    );
  }

  // Affichage Lecteur Vidéo
  const cloudinaryPublicId = getCloudinaryId(video.videoUrl);
  if (!cloudinaryPublicId) {
      // Gérer le cas où l'ID n'a pas pu être extrait
       return <div className="container py-10 text-destructive">Erreur: Impossible dextraire lidentifiant Cloudinary de lURL ({video.videoUrl})</div>;
  }


  return (
    <div className="container max-w-5xl mx-auto py-8">
       {/* Adapter le lien retour si nécessaire */}
      <Link href="/dashboard/gallery/videos" className="inline-block mb-6">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la galerie Vidéos
        </Button>
      </Link>

      <div className="bg-card rounded-lg overflow-hidden shadow-lg border"> {/* Ajout border */}
        <div className="aspect-video bg-black"> {/* Fond noir pour la vidéo */}
          <CldVideoPlayer
            // Définir width/height est important pour le layout
            width="1920" // Largeur logique (sera responsive via CSS)
            height="1080" // Hauteur logique
            src={cloudinaryPublicId} // Utilise l'ID extrait
            className="w-full h-full" // Rendre responsive
            // --- Options Cloudinary Video Player ---
            colors={{ // Exemple de couleurs
              accent: '#ea580c', // Orange
              base: '#27272a', // Gris foncé
              text: '#ffffff'
            }}
            // logo={{ // Ajouter un logo si désiré
            //   imageUrl: '/path/to/your/logo.png',
            //   onClickUrl: 'https://yourwebsite.com'
            // }}
            autoPlay={true} // Lecture auto
            loop={true} // Boucle
            controls={true} // Afficher les contrôles natifs
            // Fluid rend le lecteur responsive (généralement true par défaut)
            // fluid={true}
            // ... autres options: https://cloudinary.com/documentation/video_player_parameters
          />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">
            {video.title || `Vidéo ${video.id.substring(0, 8)}...`} {/* Titre ou fallback */}
          </h1>
          {video.prompt && (
            <p className="text-muted-foreground mb-4 italic">
              &ldquo;{video.prompt}&rdquo;
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Créée le: {new Date(video.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}