// components/video-card.tsx ou un chemin similaire
"use client"; // Important pour l'interactivité

import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css'; // Styles du player
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
import { MoreVertical, Download, Music } from "lucide-react"; // Icônes
import { useRouter } from "next/navigation"
// Définir le type pour les props du composant
interface VideoCardProps {
  video: {
    id: string;
    cloudinaryPublicId: string | null; // Peut être null, mais on filtre en amont
    title?: string | null;
    prompt?: string | null;
    videoUrl: string | null;
  };
}

export function VideoCard({ video }: VideoCardProps) {
  const router = useRouter()
  // Vérification au cas où, même si on filtre en amont
  if (!video.cloudinaryPublicId) {
    return (
      <Card className="flex items-center justify-center h-[250px]"> {/* Ajustez la hauteur */}
        <p className="text-destructive">Erreur: ID Cloudinary manquant.</p>
      </Card>
    );
  }

  const handleDownload = () => {
    if (!video.videoUrl) {
        alert("Impossible de télécharger : URL de la vidéo manquante.");
        return;
    }
    // Créer un lien temporaire et cliquer dessus pour forcer le téléchargement
    const link = document.createElement('a');
    link.href = video.videoUrl;
    // Essayer de donner un nom au fichier (peut ne pas marcher partout)
    link.download = `${video.title || video.id || 'video'}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddSound = () => {
    // Logique pour "Ajouter du son"
    // Pour l'instant, juste une alerte.
    // Plus tard, cela pourrait ouvrir un modal, ou rediriger vers une page d'édition
    // en passant l'ID de la vidéo : /edit-video/{video.id}/sound
    router.push(`/dashboard/improvevideo/addsound/${video.id}`)

  };

  return (
   <Card className="overflow-hidden flex flex-col h-full bg-black text-gray-100 border border-gray-800 rounded-lg">

      {/* === Modifications ici === */}
      {/* Ajout de padding (p-2) autour du lecteur vidéo */}
      <CardContent className="p-2 aspect-video"> {/* p-2 crée la marge autour du lecteur */}
        <CldVideoPlayer
          id={`player-${video.id}`}
          width="1920"
          height="1080"
          src={video.cloudinaryPublicId}
          autoplay={false}
          // Mettre controls={false} si on veut une apparence pure "vignette"
          // et peut-être ajouter un bouton play en superposition
          controls={true}
          className="w-full h-full object-cover rounded-sm" // Léger arrondi pour le lecteur lui-même
        />
      </CardContent>

      {/* === Modifications ici === */}
      {/* py-2: Padding vertical réduit */}
      {/* px-3: Padding horizontal (peut être px-2 si p-2 dans CardContent) */}
      <CardFooter className="flex flex-row items-center justify-between py-2 px-3 mt-auto">

        {/* === Modifications ici === */}
        {/* space-y-0: Espace vertical minimal entre titre et description */}
        <div className="flex-1 space-y-0 mr-2 overflow-hidden">
           {/* Texte plus clair si besoin (hérite de text-gray-100 normalement) */}
          <CardTitle className="text-sm font-medium truncate block text-white"> {/* Forcer blanc pour titre ? */}
            {video.title || video.prompt || "Vidéo sans titre"}
          </CardTitle>
          {(video.prompt && video.title && video.prompt !== video.title || video.prompt && !video.title) && (
             <CardDescription className="text-xs truncate block text-gray-400"> {/* Gris plus clair pour description */}
               {video.prompt}
             </CardDescription>
          )}
        </div>

        {/* Le bouton devrait hériter de text-gray-100 via Card, sinon ajouter text-gray-100 ici */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             {/* Le bouton fantôme sur fond sombre devrait avoir une icone claire */}
            <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0 text-gray-300 hover:text-white">
              <span className="sr-only">Ouvrir le menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end"> {/* Le menu lui-même aura le style par défaut du thème */}
            <DropdownMenuItem onClick={handleDownload} disabled={!video.videoUrl}>
              <Download className="mr-2 h-4 w-4" />
              <span>Télécharger</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleAddSound}>
              <Music className="mr-2 h-4 w-4" />
              <span>Ajouter du son</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>

    </Card>
  );
}