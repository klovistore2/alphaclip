// app/[lang]/watch/[videoId]/watch-page-client-content.tsx
"use client";

import { Localy, TypeDictionary } from '@/app/[lang]/dictionaries';
import type { MainVideoData, SuggestedVideoData } from './page'; // Importer les types
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { VideoThumbnailCard } from '@/components/video-thumbnail-card'; // Pour la sidebar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Utiliser Avatar pour l'auteur
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useMemo } from 'react'; // Pour la date formatée côté client

interface WatchPageClientContentProps {
    lang: Localy;
    dictionary: TypeDictionary;
    mainVideoData: MainVideoData;
    suggestedVideos: SuggestedVideoData[];
}

export function WatchPageClientContent({
    lang,
    dictionary,
    mainVideoData,
    suggestedVideos
}: WatchPageClientContentProps) {



    // Formatage de la date côté client pour éviter les mismatches d'hydratation
    const timeAgo = useMemo(() => {
        if (!mainVideoData.createdAt) return '';
        try {
            return formatDistanceToNow(new Date(mainVideoData.createdAt), { addSuffix: true, locale: fr });
        } catch (e) {
            console.error("Error formatting date", e);
            return new Date(mainVideoData.createdAt).toLocaleDateString(); // Fallback
        }
    }, [mainVideoData.createdAt]);

    return (
        // Layout principal Flex (ou Grid)
        // `lg:flex-row` pour passer en colonnes sur les grands écrans
        // `max-w-screen-2xl mx-auto` pour limiter la largeur comme YouTube
        <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 max-w-screen-2xl mx-auto">

            {/* Colonne Principale (Lecteur + Infos) */}
            <div className="flex-grow lg:w-2/3"> {/* Prend plus de place */}
                {/* Lecteur Vidéo */}
                <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-4 shadow-lg">
                {mainVideoData.cloudinaryPublicId ? (
                        <CldVideoPlayer
                            id={`player-${mainVideoData.id}`}
                            width="1920" // Largeur logique pour 16:9
                            height="1080"
                            src={mainVideoData.cloudinaryPublicId}
                           
                            autoplay={false} // ou true si vous voulez
                            controls={true}
                            muted={false}
                            className="w-full h-full" // Pour remplir le conteneur aspect-ratio
                            colors={{
                                accent: '#EA3324', // Exemple de couleur YouTube
                                base: '#282828',
                                text: '#FFFFFF'
                             }}
                             logo={false} // Masquer le logo Cloudinary si souhaité
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                            {dictionary.videoCard?.loading || "Chargement du lecteur..."}
                        </div>
                    )}
                </div>

                {/* Titre et Informations sous la vidéo */}
                <div className="mb-4">
                    <h1 className="text-xl md:text-2xl font-bold mb-2">
                        {mainVideoData.title || dictionary.videoCard?.untitled || "Vidéo sans titre"}
                    </h1>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-muted-foreground">
                        {/* Infos utilisateur et date */}
                        <div className="flex items-center gap-3 mb-2 sm:mb-0">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={mainVideoData.user?.image ?? undefined} alt={mainVideoData.user?.name ?? 'Avatar'} />
                                <AvatarFallback>
                                    {mainVideoData.user?.name?.substring(0, 1).toUpperCase() || '?'}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">{mainVideoData.user?.name || dictionary.videoCard?.unknownUser || "Utilisateur inconnu"}</p>
                                {/* Ajouter le nombre d'abonnés si disponible */}
                            </div>
                        </div>
                        {/* Date et vues */}
                        <div className="flex items-center space-x-2">
                             {/* Afficher les vues si disponibles */}
                             {typeof mainVideoData.views === 'number' && (
                                 <span>{mainVideoData.views} {dictionary.videoCard?.views || "vues"}</span>
                             )}
                             {typeof mainVideoData.views === 'number' && <span>•</span>}
                            <span>{timeAgo}</span>
                         </div>
                    </div>
                    {/* Actions (Like, Dislike, Share, Download - à implémenter) */}
                    {/* <div className="mt-4 flex gap-2"> ... boutons ... </div> */}
                </div>

                {/* Description (si vous en avez une) */}
                {/* <div className="bg-muted p-3 rounded-lg text-sm"> ... description ... </div> */}

                 {/* Section Commentaires (à implémenter plus tard) */}
                 {/* <div className="mt-6"> ... commentaires ... </div> */}

            </div>

            {/* Colonne Latérale (Suggestions) */}
            {/* `lg:w-1/3` pour la largeur, `lg:max-w-sm` pour limiter la largeur max */}
            <aside className="flex-shrink-0 lg:w-1/3 lg:max-w-sm space-y-4">
                <h2 className="text-lg font-semibold mb-3">{dictionary.watchpage?.suggestions || "Suggestions"}</h2>
                {suggestedVideos.length > 0 ? (
                    suggestedVideos.map((video) => (
                        // Utiliser une version peut-être légèrement modifiée de la carte si besoin
                        // Ici, on réutilise la même, mais on pourrait créer une `SuggestedVideoCard`
                        <VideoThumbnailCard
                            key={video.id}
                            video={video}
                            lang={lang}
                            dictionary={dictionary} // Passer le dictionnaire chargé
                        />
                    ))
                ) : (
                    <p className="text-muted-foreground text-sm">{dictionary.watchpage?.no_suggestions || "Aucune suggestion pour le moment."}</p>
                )}
            </aside>
        </div>
    );
}