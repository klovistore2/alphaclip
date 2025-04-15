// app/[lang]/dashboard/improvevideo/addsound/[video]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FilmIcon, Loader2, Music } from "lucide-react"; // Remplacer ImagePlus par Music?
import { CldVideoPlayer } from 'next-cloudinary'; // Importer le lecteur vidéo
import 'next-cloudinary/dist/cld-video-player.css';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// Importer Slider si on ajoute le contrôle de seed
// import { Slider } from "@/components/ui/slider"

import { addSoundToVideoAction } from '@/lib/actions/addsoundAction'; // Importer la nouvelle action

// Type pour les données de la vidéo source
interface FetchedVideoData {
    id: string;
    title: string | null;
    videoUrl: string | null; // URL directe pour l'action serveur
    cloudinaryPublicId: string | null; // Public ID pour CldVideoPlayer
    prompt: string | null; // Prompt original de la vidéo
}

export default function AddSoundPage() {
    const router = useRouter();
    const routeParams = useParams<{ lang: string; video: string }>();
    const lang = routeParams.lang;
    const videoId = routeParams.video;

    // --- États du Composant ---
    const [sourceVideo, setSourceVideo] = useState<FetchedVideoData | null>(null);
    const [isLoadingVideo, setIsLoadingVideo] = useState(true);
    const [loadingError, setLoadingError] = useState<string | null>(null);
    // Pas besoin de 'isSelectingSource' ici car l'ID est toujours fourni

    // --- États pour les paramètres de génération de son ---
    const [prompt, setPrompt] = useState<string>(""); // Prompt pour le SON
    const [seed, ] = useState<number>(-1); // Seed (gardé simple ici)

    // --- États pour la génération ---
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [generationError, setGenerationError] = useState<string | null>(null);
    const [generatedVideoWithSoundId, setGeneratedVideoWithSoundId] = useState<string | null>(null); // ID de la *nouvelle* vidéo
    const [generationSuccess, setGenerationSuccess] = useState<boolean>(false);
    const [generationMessage, setGenerationMessage] = useState<string | null>(null);

    // --- Fetch des données de la vidéo source ---
    useEffect(() => {
        setIsLoadingVideo(true);
        setLoadingError(null);
        setSourceVideo(null);

        async function fetchVideoData() {
            console.log("Fetching video data for ID:", videoId);
            try {
                const response = await fetch(`/api/videos/${videoId}`); // Utilise la nouvelle API route

                console.log("Response status:", response.status); // Pour le débogage

                if (!response.ok) {
                     if (response.status === 404) {
                         const errorData = await response.json().catch(() => ({}));
                         throw new Error(errorData.error || "Vidéo non trouvée ou accès refusé.");
                     } else if (response.status === 400) {
                         const errorData = await response.json().catch(() => ({}));
                         throw new Error(errorData.error || "Erreur de requête vidéo.");
                     } else {
                         throw new Error(`Erreur API: ${response.statusText}`);
                     }
                }

                const data: FetchedVideoData = await response.json();

                if (!data.videoUrl || !data.cloudinaryPublicId) {
                    throw new Error("L'URL ou l'ID public Cloudinary de la vidéo est manquante.");
                }

                setSourceVideo(data);
                // Pré-remplir le prompt de son avec le prompt original de la vidéo ? Ou laisser vide ? Laisser vide.
                // setPrompt(data.prompt || "");

            } catch (error) {
                console.error("Failed to fetch video data:", error);
                setLoadingError(error instanceof Error ? error.message : "Impossible de charger la vidéo source.");
            } finally {
                setIsLoadingVideo(false);
            }
        }

        fetchVideoData();
    }, [videoId]);

    // --- Fonction pour lancer la génération de son ---
    const handleAddSound = async () => {
        if (!sourceVideo || !sourceVideo.videoUrl || !prompt || isGenerating) {
            if (!sourceVideo || !sourceVideo.videoUrl) {
                 setGenerationError("La vidéo source n'est pas chargée ou est invalide.");
            } else if (!prompt) {
                 setGenerationError("Veuillez entrer une description pour le son.");
            }
            if (!sourceVideo || !sourceVideo.videoUrl || !prompt) return;
            if (isGenerating) return;
        }

        setIsGenerating(true);
        setGenerationError(null);
        setGenerationSuccess(false);
        setGenerationMessage(null);
        setGeneratedVideoWithSoundId(null);

        console.log("Starting sound addition with parameters:", {
            sourceVideoId: sourceVideo.id,
            promptLength: prompt.length,
            seed: seed
        });

        try {
            const result = await addSoundToVideoAction({ // Appel de la nouvelle action
                sourceVideoId: sourceVideo.id,
                sourceVideoUrl: sourceVideo.videoUrl, // Passer l'URL directe
                prompt: prompt,
                seed: seed
            });

            console.log("Sound addition result:", result);

            if (result.success) {
                setGenerationSuccess(true);
                setGenerationMessage(result.message || "L'ajout de son a été lancé. Le traitement peut prendre plusieurs minutes.");
                if (result.generatedVideoId) { // ID de la nouvelle vidéo avec son
                    setGeneratedVideoWithSoundId(result.generatedVideoId);
                }
            } else {
                throw new Error(result.error || "L'ajout de son a échoué.");
            }

        } catch (error) {
            console.error("Sound addition failed:", error);
            setGenerationError(error instanceof Error ? error.message : "Échec de l'ajout de son.");
            setGenerationSuccess(false);
        } finally {
            setIsGenerating(false);
        }
    };

    // --- Fonction pour voir la vidéo générée (avec son) ---
    const viewGeneratedVideo = () => {
        // On navigue vers la galerie en passant l'ID de la *nouvelle* vidéo
        if (generatedVideoWithSoundId) {
            router.push(`/${lang}/dashboard/gallery/videos`);
        }
    };

    // --- Affichage pendant le chargement ---
    if (isLoadingVideo) {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /> Chargement de la vidéo source...</div>;
    }
    if (loadingError) {
        return <div className="container py-10 text-destructive">{loadingError}</div>;
    }
     if (!sourceVideo) { // Vérification supplémentaire après chargement
         return <div className="container py-10 text-muted-foreground">Impossible d afficher la page sans vidéo source valide.</div>;
     }


    const displayTitle = sourceVideo?.title || "Vidéo sans titre";

    return (
        <>
            <div className="md:hidden">
                {/* ... Message pour mobile ... */}
            </div>
            <div className="hidden h-full flex-col md:flex">
                {/* Header */}
                <div className="container flex items-center justify-between md:h-16">
                     <h2 className="text-lg font-semibold flex items-center">
                         <Music className="mr-2 h-5 w-5" /> {/* Icône Musique */}
                         Ajouter du Son - {displayTitle}
                     </h2>
                 </div>
                <Separator />

                {/* Contenu Principal */}
                <div className="container h-full py-6">
                    <div className="flex flex-col space-y-6">
                        {/* Section Contrôles Haut */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                             {/* Carte Vidéo Source */}
                            <Card className="col-span-1">
                                <CardContent className="p-2 space-y-2 bg-black rounded-lg border border-gray-800"> {/* Style sombre */}
                                    <h3 className="text-lg font-medium p-2 text-white">Vidéo Source</h3>
                                     {/* Utilisation de CldVideoPlayer */}
                                    <div className="aspect-video bg-black rounded-md overflow-hidden">
                                         {sourceVideo?.cloudinaryPublicId ? (
                                             <CldVideoPlayer
                                                 id={`source-player-${sourceVideo.id}`}
                                                 width="1920"
                                                 height="1080"
                                                 src={sourceVideo.cloudinaryPublicId} // Utiliser publicId
                                                 autoplay={false}
                                                 controls={true}
                                                 className="w-full h-full object-cover"
                                             />
                                         ) : (
                                             <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                 Prévisualisation indisponible
                                             </div>
                                         )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Carte Prompt & Génération Son */}
                            <Card className="col-span-1 lg:col-span-2">
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="prompt-input">Description du son</Label>
                                        <Textarea
                                            id="prompt-input"
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            disabled={isGenerating}
                                            placeholder="Décrivez l'ambiance sonore, les bruitages ou la musique souhaitée (ex: 'vent léger et oiseaux qui chantent', 'musique épique et bruits d'explosion', 'galop de cheval sur terre')..."
                                            className="min-h-[80px]"
                                        />
                                    </div>

                                    {/* Supprimer les sliders FPS / Durée / Optimiseur */}
                                    {/* Optionnel : Ajouter un contrôle pour le seed ? */}
                                    {/*
                                    <div className="space-y-2">
                                         <Label htmlFor="seed-input">Seed (optionnel, -1 pour aléatoire)</Label>
                                         <Input type="number" id="seed-input" value={seed} onChange={(e) => setSeed(parseInt(e.target.value, 10) || -1)} />
                                    </div>
                                    */}

                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <div className="text-sm text-muted-foreground">
                                             L ajout de son peut prendre quelques minutes.
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={handleAddSound} // Appeler la bonne fonction
                                            disabled={isGenerating || !prompt || !sourceVideo}
                                            size="lg"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Génération du son...
                                                </>
                                            ) : (
                                                <>
                                                    <Music className="mr-2 h-4 w-4" /> {/* Icône Musique */}
                                                    Ajouter le Son
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {/* Affichage des erreurs/succès */}
                                    {generationError && (
                                        <p className="text-destructive text-sm">{generationError}</p>
                                    )}
                                    {generationSuccess && generationMessage && (
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md border border-green-200 dark:border-green-800">
                                             <p className="text-green-800 dark:text-green-300 text-sm">{generationMessage}</p>
                                             {generatedVideoWithSoundId && ( // Utiliser le bon ID d'état
                                                 <Button
                                                     variant="outline"
                                                     size="sm"
                                                     className="mt-2"
                                                     onClick={viewGeneratedVideo}
                                                 >
                                                     Voir la vidéo avec son
                                                 </Button>
                                             )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                         {/* Section "Comment ça fonctionne" (à adapter) */}
                        <Card>
                             <CardContent className="p-6">
                                 <h3 className="text-lg font-medium mb-4">Comment ça fonctionne</h3>
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                     <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                         <div className="bg-primary/10 p-3 rounded-full mb-3">
                                             <FilmIcon className="h-6 w-6 text-primary" /> {/* Vidéo */}
                                         </div>
                                         <h4 className="font-medium mb-2">1. Vidéo Source</h4>
                                         <p className="text-sm text-muted-foreground">La page charge la vidéo que vous avez sélectionnée.</p>
                                     </div>
                                     <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                          <div className="bg-primary/10 p-3 rounded-full mb-3">
                                              <Music className="h-6 w-6 text-primary" /> {/* Son */}
                                          </div>
                                          <h4 className="font-medium mb-2">2. Décrivez le son</h4>
                                          <p className="text-sm text-muted-foreground">Utilisez un prompt pour décrire l audio à ajouter à la vidéo.</p>
                                     </div>
                                     <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                          <div className="bg-primary/10 p-3 rounded-full mb-3">
                                              <Loader2 className="h-6 w-6 text-primary" /> {/* Attente */}
                                          </div>
                                          <h4 className="font-medium mb-2">3. Patientez</h4>
                                          <p className="text-sm text-muted-foreground">La génération de la nouvelle vidéo avec son est lancée et peut prendre quelques minutes.</p>
                                      </div>
                                 </div>
                             </CardContent>
                         </Card>

                    </div>
                </div>
            </div>
        </>
    );
}