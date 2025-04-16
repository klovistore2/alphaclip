// components/video-thumbnail-card.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react'; // Ajout de useMemo
import Link from 'next/link'; // <-- Importer Link
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Download, Share2 } from "lucide-react"; // Correction: Espace insécable retiré avant Share2
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

// Assurez-vous que ce chemin d'import est correct pour votre structure
import type { VideoWithUserData } from '@/app/[lang]/dashboard/page';
import { getDictionary, Localy, TypeDictionary } from '@/app/[lang]/dictionaries';

interface VideoThumbnailCardProps {
  video: VideoWithUserData;
  lang: Localy;
  dictionary?: TypeDictionary;
}

// Fonction formatViews (inchangée)
function formatViews(views: number | undefined | null, viewsText: string): string {
    if (views === undefined || views === null) return '';
    if (views < 1000) return `${views} ${viewsText}`;
    if (views < 1000000) return `${Math.floor(views / 1000)} k ${viewsText}`;
    return `${(views / 1000000).toFixed(1)} M ${viewsText}`;
}

export function VideoThumbnailCard({ video, lang, dictionary }: VideoThumbnailCardProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [dict, setDict] = useState<TypeDictionary | null>(dictionary ?? null);

    useEffect(() => {
        async function loadDictionary() {
             // Charger seulement si ni la prop ni l'état local ne l'ont déjà
             if (!dictionary && !dict) {
                const loadedDict = await getDictionary(lang);
                setDict(loadedDict);
            } else if (dictionary && !dict) {
                // Si la prop dictionary est fournie initialement, utiliser celle-là
                setDict(dictionary);
            }
        }
        loadDictionary();
    }, [lang, dictionary, dict]); // Ajouter dict aux dépendances

    // Utiliser le dictionnaire de l'état local (chargé ou reçu via props)
    const translations = dict;

    // --- Formatage de la date côté client avec useMemo ---
    const timeAgo = useMemo(() => {
        if (!video.createdAt) return '';
        // S'assurer qu'on est côté client
        if (typeof window === 'undefined') return '';
        try {
            // Utiliser la locale dynamiquement si possible, sinon fallback sur 'fr'
            const locale = lang === 'fr' ? fr : undefined; // Ajouter d'autres locales si besoin
            return formatDistanceToNow(new Date(video.createdAt), { addSuffix: true, locale: locale });
        } catch (e) {
            console.error("Error formatting date", e);
            return new Date(video.createdAt).toLocaleDateString(); // Fallback
        }
    }, [video.createdAt, lang]); // Ajouter lang comme dépendance si la locale en dépend


    // Afficher un placeholder ou null tant que les traductions ne sont pas prêtes
    if (!translations) {
        // Optionnel: Squelette de chargement
        return <div className="flex flex-col group animate-pulse"><div className="relative aspect-video w-full overflow-hidden rounded-lg mb-2 bg-muted"></div><div className="flex items-start space-x-3"><div className="h-9 w-9 rounded-full bg-muted flex-shrink-0 mt-1"></div><div className="flex-1 min-w-0 space-y-2"><div className="h-4 bg-muted rounded w-3/4"></div><div className="h-3 bg-muted rounded w-1/2"></div></div></div></div>;
    }

    // Vérification des données cruciales
    if (!video.cloudinaryPublicId || !video.user) { // videoUrl n'est pas crucial pour l'affichage de la carte, mais l'est pour le téléchargement
        console.warn("Données manquantes (publicId ou user) pour VideoThumbnailCard", video.id);
        // Peut-être afficher une carte avec un message d'erreur ?
        return null;
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const thumbnailUrl = `https://res.cloudinary.com/${cloudName}/video/upload/w_400,h_225,c_fill,q_auto,f_auto,so_1/${video.cloudinaryPublicId}.jpg`;

    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation(); // Empêcher la navigation du Link parent
        if (!video.videoUrl) {
             console.warn("URL vidéo manquante pour le téléchargement", video.id);
             alert(translations.videoCard?.downloadFailed || "Erreur: URL de téléchargement manquante."); // Utiliser traduction si possible
             return;
        };
        const link = document.createElement('a');
        link.href = video.videoUrl;
        link.download = `${video.title || video.id || 'video'}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- Modification principale : Utilisation de Link ---
    // On enlève le onClick et la fonction navigateToVideoPage
    return (
        // Envelopper toute la carte avec Link
        <Link
            href={`/${lang}/dashboard/watch/${video.id}`} // <-- Chemin mis à jour
            className="flex flex-col group cursor-pointer"
            aria-label={`Regarder ${video.title || translations.videoCard?.untitled || "vidéo sans titre"}`}
        >
            {/* Contenu de la carte */}
            <div
                className="relative aspect-video w-full overflow-hidden rounded-lg mb-2 bg-muted"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                 {/* ... Image et CldVideoPlayer au survol (inchangés, s'assurer que cloudName est géré globalement) ... */}
                 {!isHovering ? (
                    <Image
                        src={thumbnailUrl}
                        alt={video.title || 'Vignette vidéo'}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={false}
                    />
                ) : (
                    cloudName && video.cloudinaryPublicId && // S'assurer qu'on a les infos
                    <CldVideoPlayer
                        id={`player-hover-${video.id}`}
                        width="400"
                        height="225"
                        src={video.cloudinaryPublicId}
                        // cloudName={cloudName} // Normalement géré globalement via env var
                        autoplay={true}
                        controls={false}
                        muted={true}
                        loop={true}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
            </div>

            {/* Informations sous la vignette */}
            <div className="flex items-start space-x-3">
                {/* Avatar */}
                <Avatar className="h-9 w-9 flex-shrink-0 mt-1">
                    <AvatarImage src={video.user?.image ?? undefined} alt={video.user?.name ?? 'Avatar'} />
                    <AvatarFallback>
                         {video.user?.name?.substring(0, 1).toUpperCase() || '?'}
                    </AvatarFallback>
                </Avatar>

                {/* Bloc Texte & Menu */}
                <div className="flex-1 min-w-0">
                    {/* Titre */}
                    <h3 className="text-sm font-medium leading-snug DrukTextWideCy W_90 Web_H7 N_4 VAD6 qJcS8d"> {/* Garder vos classes de style */}
                        <span className="block max-h-[2.8em] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                            {video.title || translations.videoCard?.untitled || "Untitled video"}
                        </span>
                    </h3>
                     {/* Infos User & Date */}
                    <div className="text-xs text-muted-foreground mt-1">
                        <p className="truncate">{video.user?.name || translations.videoCard?.unknownUser || "Unknown user"}</p>
                        <div className="flex items-center space-x-1">
                             {typeof video.views === 'number' && (
                                 <span>{formatViews(video.views, translations.videoCard?.views || "views")}</span>
                             )}
                             {typeof video.views === 'number' && <span>•</span>}
                             {/* Utiliser la date formatée côté client */}
                             {timeAgo && <span>{timeAgo}</span>}
                        </div>
                    </div>
                </div>

                {/* Menu Dropdown (stopPropagation est important ici) */}
                <div className="mt-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">{translations.videoCard?.options || "Options"}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                            <DropdownMenuItem onClick={handleDownload}>
                                <Download className="mr-2 h-4 w-4" />
                                {translations.videoCard?.download || "Download"}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); alert(translations.videoCard.shareAction || 'Partager (à implémenter)'); }}>
                                <Share2 className="mr-2 h-4 w-4" />
                                {translations.videoCard?.share || "Share"}
                            </DropdownMenuItem>
                            {/* Ajouter une clé pour l'alerte dans le dictionnaire */}
                            {/* "videoCard": { ..., "shareAction": "Partager (à implémenter)" } */}
                            {/* "videoCard": { ..., "downloadFailed": "Erreur: URL de téléchargement manquante." } */}

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </Link> // Fin du Link
    );
}
