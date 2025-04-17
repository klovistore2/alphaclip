// components/video-card.tsx
"use client";

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical, Download, Music, Globe, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { toggleVideoPublicStatus } from "@/lib/actions/videoActions";

// Utilisé juste comme forme attendue par notre composant
interface Dictionary {
  gallery?: {
    thumbnail?: {
      download?: string;
      options?: string;
      untitled?: string;
    };
    image_unavailable?: string;
  };
  sidebar?: {
    improveVideo_addSound?: string;
  };
  videoCard?: {
    untitled?: string;
    unknownUser?: string;
    views?: string;
    download?: string;
    share?: string;
    loading?: string;
    options?: string;
    downloadFailed?: string;
    shareAction?: string;
    makePublic?: string;
    makePrivate?: string;
  };
}

interface VideoCardProps {
  video: {
    id: string;
    cloudinaryPublicId: string | null;
    title?: string | null;
    prompt?: string | null;
    videoUrl: string | null;
    public?: boolean;
    sound?: boolean;
  };
  dictionary?: Dictionary;
  lang?: string;
}

export function VideoCard({ video, dictionary, lang }: VideoCardProps) {
  const router = useRouter();
  
  // Fallback textes si le dictionnaire n'est pas fourni
  const texts = {
    download: dictionary?.gallery?.thumbnail?.download || "Télécharger",
    addSound: dictionary?.sidebar?.improveVideo_addSound || "Ajouter du son",
    openMenu: dictionary?.gallery?.thumbnail?.options || "Ouvrir le menu",
    untitled: dictionary?.gallery?.thumbnail?.untitled || "Vidéo sans titre",
    cloudinaryError: dictionary?.gallery?.image_unavailable || "Erreur: ID Cloudinary manquant.",
    makePublic: dictionary?.videoCard?.makePublic || "Rendre publique",
    makePrivate: dictionary?.videoCard?.makePrivate || "Rendre privée"
  };

  // Vérification au cas où, même si on filtre en amont
  if (!video.cloudinaryPublicId) {
    return (
      <Card className="flex items-center justify-center h-[250px]">
        <p className="text-destructive">{texts.cloudinaryError}</p>
      </Card>
    );
  }

  const handleDownload = () => {
    if (!video.videoUrl) {
      const errorMsg = lang === 'fr' 
        ? "Impossible de télécharger : URL de la vidéo manquante."
        : "Unable to download: Missing video URL.";
      alert(errorMsg);
      return;
    }
    
    const link = document.createElement('a');
    link.href = video.videoUrl;
    link.download = `${video.title || video.id || 'video'}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddSound = () => {
    const basePath = lang ? `/${lang}` : '';
    router.push(`${basePath}/dashboard/improvevideo/addsound/${video.id}`);
  };

  const handleTogglePublic = async () => {
    try {
      // Utilisation directe du Server Action au lieu d'un appel fetch
      const result = await toggleVideoPublicStatus(video.id);

      if (!result.success) {
        throw new Error(result.error);
      }

      // Pas besoin d'appeler router.refresh() car revalidatePath() est appelé dans l'action serveur
      // Mais on peut l'ajouter quand même pour s'assurer que l'UI est mise à jour
      router.refresh();
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut public:', error);
      alert(lang === 'fr' 
        ? "Impossible de modifier le statut public de la vidéo."
        : "Unable to update the public status of the video.");
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full bg-black text-gray-100 border border-gray-800 rounded-lg">
      <CardContent className="p-2 aspect-video">
        <CldVideoPlayer
          id={`${video.id}`}
          width="1920"
          height="1080"
          src={video.cloudinaryPublicId}
          autoplay={false}
          controls={true}
          className="w-full h-full object-cover rounded-sm"
        />
      </CardContent>

      <CardFooter className="flex flex-row items-center justify-between py-2 px-3 mt-auto">
        <div className="flex-1 space-y-0 mr-2 overflow-hidden">
          <div className="flex items-center space-x-1">
            <CardTitle className="text-sm font-medium truncate block text-white">
              {video.title || video.prompt || texts.untitled}
            </CardTitle>
            {video.sound && (
              <Music className="h-4 w-4 text-blue-400" />
            )}
          </div>
          {(video.prompt && video.title && video.prompt !== video.title || video.prompt && !video.title) && (
            <CardDescription className="text-xs truncate block text-gray-400">
              {video.prompt}
            </CardDescription>
          )}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0 text-gray-300 hover:text-white">
              <span className="sr-only">{texts.openMenu}</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleDownload} disabled={!video.videoUrl}>
              <Download className="mr-2 h-4 w-4" />
              <span>{texts.download}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleAddSound}>
              <Music className="mr-2 h-4 w-4" />
              <span>{texts.addSound}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleTogglePublic}>
              {video.public ? (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  <span>{texts.makePrivate}</span>
                </>
              ) : (
                <>
                  <Globe className="mr-2 h-4 w-4" />
                  <span>{texts.makePublic}</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
}