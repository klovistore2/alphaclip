// app/[lang]/dashboard/improvevideo/addsound/[video]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FilmIcon, Loader2, Music } from "lucide-react";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getDictionary, Localy, TypeDictionary } from '@/app/[lang]/dictionaries';

import { addSoundToVideoAction } from '@/lib/actions/addsoundAction';

// Type pour les données de la vidéo source
interface FetchedVideoData {
    id: string;
    title: string | null;
    videoUrl: string | null;
    cloudinaryPublicId: string | null;
    prompt: string | null;
}

export default function AddSoundPage() {
    const router = useRouter();
    const routeParams = useParams<{ lang: string; video: string }>();
    const lang = routeParams.lang as Localy;
    const videoId = routeParams.video;

    // Dictionnaire
    const [dict, setDict] = useState<TypeDictionary | null>(null);
    
    // --- États du Composant ---
    const [sourceVideo, setSourceVideo] = useState<FetchedVideoData | null>(null);
    const [isLoadingVideo, setIsLoadingVideo] = useState(true);
    const [loadingError, setLoadingError] = useState<string | null>(null);

    // --- États pour les paramètres de génération de son ---
    const [prompt, setPrompt] = useState<string>("");
    const [seed, ] = useState<number>(-1);

    // --- États pour la génération ---
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [generationError, setGenerationError] = useState<string | null>(null);
    const [generatedVideoWithSoundId, setGeneratedVideoWithSoundId] = useState<string | null>(null);
    const [generationSuccess, setGenerationSuccess] = useState<boolean>(false);
    const [generationMessage, setGenerationMessage] = useState<string | null>(null);

    // --- Chargement du dictionnaire ---
    useEffect(() => {
        async function loadDictionary() {
            const dictionary = await getDictionary(lang);
            setDict(dictionary);
        }
        loadDictionary();
    }, [lang]);

    // --- Fetch des données de la vidéo source ---
    useEffect(() => {
        setIsLoadingVideo(true);
        setLoadingError(null);
        setSourceVideo(null);

        async function fetchVideoData() {
            try {
                const response = await fetch(`/api/videos/${videoId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.error || (lang === 'fr' ? "Vidéo non trouvée ou accès refusé." : "Video not found or access denied."));
                    } else if (response.status === 400) {
                        const errorData = await response.json().catch(() => ({}));
                        throw new Error(errorData.error || (lang === 'fr' ? "Erreur de requête vidéo." : "Video request error."));
                    } else {
                        throw new Error(lang === 'fr' ? `Erreur API: ${response.statusText}` : `API Error: ${response.statusText}`);
                    }
                }

                const data: FetchedVideoData = await response.json();

                if (!data.videoUrl || !data.cloudinaryPublicId) {
                    throw new Error(dict?.add_sound?.errors?.invalid_source || 
                        (lang === 'fr' ? "L'URL ou l'ID public Cloudinary de la vidéo est manquante." : 
                        "The video URL or Cloudinary public ID is missing."));
                }

                setSourceVideo(data);
            } catch (error) {
                console.error("Failed to fetch video data:", error);
                setLoadingError(error instanceof Error ? error.message : dict?.add_sound?.errors?.loading_failed || 
                    (lang === 'fr' ? "Impossible de charger la vidéo source." : "Failed to load source video."));
            } finally {
                setIsLoadingVideo(false);
            }
        }

        if (videoId) {
            fetchVideoData();
        }
    }, [videoId, dict, lang]);

    // --- Fonction pour lancer la génération de son ---
    const handleAddSound = async () => {
        if (!sourceVideo || !sourceVideo.videoUrl || !prompt || isGenerating) {
            if (!sourceVideo || !sourceVideo.videoUrl) {
                setGenerationError(dict?.add_sound?.errors?.invalid_source || "Source video is not loaded or is invalid.");
            } else if (!prompt) {
                setGenerationError(dict?.add_sound?.errors?.missing_prompt || "Please enter a description for the sound.");
            }
            if (!sourceVideo || !sourceVideo.videoUrl || !prompt) return;
            if (isGenerating) return;
        }

        setIsGenerating(true);
        setGenerationError(null);
        setGenerationSuccess(false);
        setGenerationMessage(null);
        setGeneratedVideoWithSoundId(null);

        try {
            const result = await addSoundToVideoAction({
                sourceVideoId: sourceVideo.id,
                sourceVideoUrl: sourceVideo.videoUrl,
                prompt: prompt,
                seed: seed
            });

            if (result.success) {
                setGenerationSuccess(true);
                setGenerationMessage(dict?.add_sound?.success || "Sound addition has been started. Processing may take several minutes.");
                if (result.generatedVideoId) {
                    setGeneratedVideoWithSoundId(result.generatedVideoId);
                }
            } else {
                throw new Error(result.error || dict?.add_sound?.errors?.general || "Failed to add sound.");
            }
        } catch (error) {
            console.error("Sound addition failed:", error);
            setGenerationError(error instanceof Error ? error.message : dict?.add_sound?.errors?.general || "Failed to add sound.");
            setGenerationSuccess(false);
        } finally {
            setIsGenerating(false);
        }
    };

    // --- Fonction pour voir la vidéo générée (avec son) ---
    const viewGeneratedVideo = () => {
        if (generatedVideoWithSoundId) {
            router.push(`/${lang}/dashboard/gallery/videos`);
        }
    };

    // Attendons que le dictionnaire soit chargé
    if (!dict) {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }

    // --- Affichage pendant le chargement ---
    if (isLoadingVideo) {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /> {dict.add_sound.loading}</div>;
    }
    if (loadingError) {
        return <div className="container py-10 text-destructive">{loadingError}</div>;
    }
    if (!sourceVideo) {
        return <div className="container py-10 text-muted-foreground">{dict.add_sound.errors.invalid_source}</div>;
    }

    const displayTitle = sourceVideo?.title || dict.add_sound.untitled;

    return (
        <>
            <div className="md:hidden">
                {/* ... Message pour mobile ... */}
            </div>
            <div className="hidden h-full flex-col md:flex">
                {/* Header */}
                <div className="container flex items-center justify-between md:h-16">
                    <h2 className="text-lg font-semibold flex items-center">
                        <Music className="mr-2 h-5 w-5" />
                        {dict.add_sound.title} - {displayTitle}
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
                                <CardContent className="p-2 space-y-2 bg-black rounded-lg border border-gray-800">
                                    <h3 className="text-lg font-medium p-2 text-white">{dict.add_sound.source_video}</h3>
                                    <div className="aspect-video bg-black rounded-md overflow-hidden">
                                        {sourceVideo?.cloudinaryPublicId ? (
                                            <CldVideoPlayer
                                                id={`source-player-${sourceVideo.id}`}
                                                width="1920"
                                                height="1080"
                                                src={sourceVideo.cloudinaryPublicId}
                                                autoplay={false}
                                                controls={true}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                {dict.add_sound.preview_unavailable}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Carte Prompt & Génération Son */}
                            <Card className="col-span-1 lg:col-span-2">
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="prompt-input">{dict.add_sound.prompt_label}</Label>
                                        <Textarea
                                            id="prompt-input"
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            disabled={isGenerating}
                                            placeholder={dict.add_sound.prompt_placeholder}
                                            className="min-h-[80px]"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <div className="text-sm text-muted-foreground">
                                            {dict.add_sound.processing_time}
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={handleAddSound}
                                            disabled={isGenerating || !prompt || !sourceVideo}
                                            size="lg"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    {dict.add_sound.generating}
                                                </>
                                            ) : (
                                                <>
                                                    <Music className="mr-2 h-4 w-4" />
                                                    {dict.add_sound.button}
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
                                            {generatedVideoWithSoundId && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="mt-2"
                                                    onClick={viewGeneratedVideo}
                                                >
                                                    {dict.add_sound.view_video}
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Section "Comment ça fonctionne" */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium mb-4">{dict.add_sound.how_it_works.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <FilmIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">{dict.add_sound.how_it_works.step1_title}</h4>
                                        <p className="text-sm text-muted-foreground">{dict.add_sound.how_it_works.step1_desc}</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <Music className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">{dict.add_sound.how_it_works.step2_title}</h4>
                                        <p className="text-sm text-muted-foreground">{dict.add_sound.how_it_works.step2_desc}</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <Loader2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">{dict.add_sound.how_it_works.step3_title}</h4>
                                        <p className="text-sm text-muted-foreground">{dict.add_sound.how_it_works.step3_desc}</p>
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