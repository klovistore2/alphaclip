// components/video-thumbnail-card.tsx
"use client";

import Image from 'next/image';
import { useState } from 'react'; // Pour l'état de survol (facultatif)
//import { useRouter } from 'next/navigation'; // Ou next/link pour la navigation
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale'; // Importer la locale française

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Download,  Share2 } from "lucide-react";
import { CldVideoPlayer } from 'next-cloudinary'; // Importé pour le survol
import 'next-cloudinary/dist/cld-video-player.css';

// Importer le type depuis page.tsx ou le redéfinir ici
import type { VideoWithUserData } from '@/app/[lang]/dashboard/page'; // Ajustez le chemin

interface VideoThumbnailCardProps {
  video: VideoWithUserData;
  lang: string;
}

// Fonction pour formater les vues (simple exemple)
function formatViews(views: number | undefined | null): string {
    if (views === undefined || views === null) return '';
    if (views < 1000) return `${views} vues`;
    if (views < 1000000) return `${Math.floor(views / 1000)} k vues`;
    return `${(views / 1000000).toFixed(1)} M de vues`;
}

export function VideoThumbnailCard({ video, lang }: VideoThumbnailCardProps) {
    //const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);

    console.log("Langue courante dans VideoThumbnailCard:", lang);
    // Vérifier si les données nécessaires sont présentes
    if (!video.cloudinaryPublicId || !video.user || !video.videoUrl) {
        // Peut-être afficher une carte d'erreur ou retourner null
        console.warn("Données manquantes pour VideoThumbnailCard", video.id);
        return null;
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Récupérer depuis les variables d'env publiques

    // Construire l'URL de la vignette Cloudinary
    const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/video/upload/w_400,h_225,c_fill,q_auto,f_auto,so_1/${video.cloudinaryPublicId}.jpg`;
    // q_auto, f_auto: optimisation auto format/qualité
    // so_1: start offset 1 seconde (souvent mieux que la frame 0 qui peut être noire) ou so_0

    // Formatage de la date ("il y a X temps")
    // Attention: ceci peut causer des mismatches d'hydratation si le serveur et le client n'ont pas la même notion du "maintenant".
    // Il est parfois préférable de faire ce formatage dans un useEffect pour s'assurer qu'il se fait côté client.
    let timeAgo = '';
    try {
        timeAgo = formatDistanceToNow(new Date(video.createdAt), { addSuffix: true, locale: fr });
    } catch (e) {
        console.error("Error formatting date", e);
        timeAgo = new Date(video.createdAt).toLocaleDateString(); // Fallback
    }


    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation(); // Empêcher la navigation si on clique sur l'item
        if (!video.videoUrl) return;
        const link = document.createElement('a');
        link.href = video.videoUrl;
        link.download = `${video.title || video.id || 'video'}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Navigation vers la page de la vidéo (à créer si besoin)
    const navigateToVideoPage = () => {
        // router.push(`/${lang}/watch/${video.id}`); // Exemple d'URL
        console.log("Navigation vers la page vidéo (à implémenter):", video.id);
    };


    return (
        <div className="flex flex-col group cursor-pointer" onClick={navigateToVideoPage}>
            {/* Vignette ou Lecteur vidéo au survol */}
            <div
                className="relative aspect-video w-full overflow-hidden rounded-lg mb-2 bg-muted"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {!isHovering ? (
                    <Image
                        src={thumbnailUrl}
                        alt={video.title || 'Vignette vidéo'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={false} // Mettre true pour les premières images visibles ? (LCP)
                    />
                ) : (
                     // --- EFFET SURVOL : Lecteur Vidéo --- (Optionnel)
                     // CldVideoPlayer peut être lourd si beaucoup de vignettes
                     <CldVideoPlayer
                         id={`player-hover-${video.id}`}
                         width="400" // Largeur "logique", la taille réelle est gérée par CSS
                         height="225"
                         src={video.cloudinaryPublicId}
                         autoplay={true} // Démarrer au survol
                         controls={false} // Pas de contrôles pour la preview
                         muted={true} // Essentiel pour autoplay sans interaction user
                         loop={true} // Boucler la preview
                         className="absolute inset-0 w-full h-full object-cover"
                         // videoRef pour contrôle plus fin si besoin
                     />
                     // --- Fin Effet Survol ---
                 )}
                 {/* Peut ajouter un overlay, durée, etc. sur la vignette */}
            </div>

            {/* Informations sous la vignette */}
            <div className="flex items-start space-x-3">
                {/* Avatar */}
                <Avatar className="h-9 w-9 flex-shrink-0 mt-1">
                    <AvatarImage src={video.user?.image ?? undefined} alt={video.user?.name ?? 'Avatar'} />
                    <AvatarFallback>
                         {/* Initiales si pas d'image */}
                         {video.user?.name?.substring(0, 1).toUpperCase() || '?'}
                    </AvatarFallback>
                </Avatar>

                {/* Bloc Texte & Menu */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium leading-snug DrukTextWideCy W_90 Web_H7 N_4 VAD6 qJcS8d">
                        {/* Limiter le nombre de lignes pour le titre */}
                        <span className="block max-h-[2.8em] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                            {video.title || "Vidéo sans titre"}
                        </span>
                    </h3>
                    <div className="text-xs text-muted-foreground mt-1">
                        <p className="truncate">{video.user?.name || "Utilisateur inconnu"}</p>
                        <div className="flex items-center space-x-1">
                             {/* Afficher les vues si le champ existe */}
                             {typeof video.views === 'number' && (
                                 <span>{formatViews(video.views)}</span>
                             )}
                             {typeof video.views === 'number' && <span>•</span>}
                            <span>{timeAgo}</span>
                        </div>
                    </div>
                </div>

                {/* Menu Dropdown */}
                 {/* Le bouton apparaît au survol ou focus sur la carte, ou toujours visible ? */}
                <div className="mt-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                                 <MoreVertical className="h-4 w-4" />
                                 <span className="sr-only">Options</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                            <DropdownMenuItem onClick={handleDownload}>
                                <Download className="mr-2 h-4 w-4" />
                                Télécharger
                            </DropdownMenuItem>
                             {/* Ajouter d'autres options */}
                             <DropdownMenuItem onClick={() => alert('Partager (à implémenter)')}>
                                <Share2 className="mr-2 h-4 w-4" />
                                Partager
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}