// app/[lang]/dashboard/videogenerate/image2video/[image]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image"
import { FilmIcon, Loader2, ImagePlus } from "lucide-react"
import { useParams, useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

import { generateImageToVideoAction } from '@/lib/actions/klingAction';

// Type local pour les données de l'image source
interface FetchedImageData {
    id: string;
    title: string | null;
    imageUrl: string | null;
}

export default function Image2VideoPage() {
    const router = useRouter();
    const routeParams = useParams<{ lang: string; image: string }>();
    const lang = routeParams.lang;
    const imageId = routeParams.image;

    // --- États du Composant ---
    const [sourceImage, setSourceImage] = useState<FetchedImageData | null>(null);
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [loadingError, setLoadingError] = useState<string | null>(null);
    const [isSelectingSource, setIsSelectingSource] = useState(false);

    // --- États pour les paramètres de génération ---
    const [prompt, setPrompt] = useState<string>("");
    const [promptOptimizer, setPromptOptimizer] = useState<boolean>(true);
    const [fps, setFps] = useState<number>(24);
    const [videoLength, setVideoLength] = useState<number>(4);

    // --- États pour la génération ---
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [generationError, setGenerationError] = useState<string | null>(null);
    const [generatedVideoId, setGeneratedVideoId] = useState<string | null>(null);
    const [generationSuccess, setGenerationSuccess] = useState<boolean>(false);
    const [generationMessage, setGenerationMessage] = useState<string | null>(null);

    // --- Fetch des données de l'image source via l'API Route ---
    useEffect(() => {
        // Si l'ID est "0", on passe en mode sélection
        if (imageId === "0") {
            console.log("Image ID is 0, entering selection mode.");
            setIsSelectingSource(true);
            setSourceImage(null);
            setIsLoadingImage(false);
            setLoadingError(null);
            return;
        }

        // Sinon, charger l'image via l'API
        setIsSelectingSource(false);
        setIsLoadingImage(true);
        setLoadingError(null);
        setSourceImage(null);

        async function fetchImageData() {
            console.log("Fetching image data for ID:", imageId);
            try {
                const response = await fetch(`/api/images/${imageId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Image non trouvée ou accès refusé.");
                    } else {
                        throw new Error(`Erreur API: ${response.statusText}`);
                    }
                }

                const data: FetchedImageData = await response.json();

                if (!data.imageUrl) {
                    throw new Error("L'URL de l'image est manquante.");
                }

                setSourceImage(data);
                
                // Pré-remplir le prompt avec le titre de l'image si disponible
                if (data.title) {
                    setPrompt(data.title);
                }

            } catch (error) {
                console.error("Failed to fetch image data:", error);
                setLoadingError(error instanceof Error ? error.message : "Impossible de charger l'image.");
            } finally {
                setIsLoadingImage(false);
            }
        }

        fetchImageData();
    }, [imageId]);

    // --- Fonction pour naviguer vers la galerie ---
    const navigateToGallery = () => {
        console.log("Navigating to gallery for image selection...");
        router.push(`/${lang}/dashboard/gallery/image`);
    };

    // --- Fonction pour lancer la génération de vidéo ---
    const handleGenerateVideo = async () => {
        // 1. Vérification des prérequis
        if (!sourceImage || !sourceImage.imageUrl || !prompt || isGenerating) {
            if (!sourceImage || !sourceImage.imageUrl) {
                setGenerationError("Veuillez d'abord sélectionner une image source.");
            } else if (!prompt) {
                setGenerationError("Veuillez entrer une description pour la vidéo.");
            }
            
            if (!sourceImage || !sourceImage.imageUrl || !prompt) return;
            if (isGenerating) return; // Anti double-clic
        }

        // 2. Initialiser l'état de génération
        setIsGenerating(true);
        setGenerationError(null);
        setGenerationSuccess(false);
        setGenerationMessage(null);
        setGeneratedVideoId(null);

        console.log("Starting video generation with parameters:", {
            sourceImageId: sourceImage.id,
            promptLength: prompt.length,
            promptOptimizer,
            fps,
            videoLength
        });

        // 3. Appeler l'action serveur
        try {
            const result = await generateImageToVideoAction({
                sourceImageId: sourceImage.id,
                sourceImageUrl: sourceImage.imageUrl,
                prompt: prompt,
                prompt_optimizer: promptOptimizer,
                fps: fps,
                video_length: videoLength
            });

            console.log("Video generation result:", result);

            // 4. Traiter le résultat
            if (result.success) {
                setGenerationSuccess(true);
                setGenerationMessage(result.message || "La génération de vidéo a été lancée avec succès. Le traitement peut prendre plusieurs minutes.");
                
                if (result.generatedVideoId) {
                    setGeneratedVideoId(result.generatedVideoId);
                }
            } else {
                throw new Error(result.error || "La génération de vidéo a échoué.");
            }

        } catch (error) {
            console.error("Video generation failed:", error);
            setGenerationError(error instanceof Error ? error.message : "Échec de la génération de vidéo.");
            setGenerationSuccess(false);
        } finally {
            setIsGenerating(false);
        }
    };

    // --- Fonction pour voir la vidéo générée ---
    const viewGeneratedVideo = () => {
        if (generatedVideoId) {
            router.push(`/${lang}/dashboard/gallery/videos?video=${generatedVideoId}`);
        }
    };

    // --- Affichage conditionnel pendant le chargement initial ---
    if (isLoadingImage && imageId !== "0") {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /> Chargement de l image...</div>;
    }
    
    if (loadingError && !isSelectingSource) {
        return <div className="container py-10 text-destructive">{loadingError}</div>;
    }

    // Utiliser un titre par défaut ou celui de l'image chargée
    const displayTitle = sourceImage?.title || "Nouvelle Vidéo";

    return (
        <>
            <div className="md:hidden">
                <p className="text-center p-6">L interface complète est disponible sur desktop</p>
            </div>
            <div className="hidden h-full flex-col md:flex">
                {/* Header */}
                <div className="container flex items-center justify-between md:h-16">
                    <h2 className="text-lg font-semibold flex items-center">
                        <FilmIcon className="mr-2 h-5 w-5" />
                        Génération Vidéo - {displayTitle}
                    </h2>
                </div>
                <Separator />

                {/* Contenu Principal */}
                <div className="container h-full py-6">
                    <div className="flex flex-col space-y-6">
                        {/* Section Contrôles Haut */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Carte Image Source */}
                            <Card className="col-span-1">
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-medium">Image Source</h3>
                                    <div className="aspect-video bg-muted rounded-md overflow-hidden relative border flex items-center justify-center">
                                        {isSelectingSource ? (
                                            <Button variant="outline" onClick={navigateToGallery}>
                                                <ImagePlus className="mr-2 h-4 w-4" />
                                                Sélectionner une Image
                                            </Button>
                                        ) : sourceImage?.imageUrl ? (
                                            <Image 
                                                src={sourceImage.imageUrl} 
                                                alt={displayTitle} 
                                                fill 
                                                style={{ objectFit: 'contain' }} 
                                                priority 
                                                sizes="(max-width: 1024px) 100vw, 33vw" 
                                            />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4">Aucune image sélectionnée</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Carte Prompt & Génération */}
                            <Card className="col-span-1 lg:col-span-2">
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="prompt-input">Description de la vidéo</Label>
                                        <Textarea 
                                            id="prompt-input" 
                                            value={prompt} 
                                            onChange={(e) => setPrompt(e.target.value)} 
                                            disabled={isGenerating || isSelectingSource}
                                            placeholder="Décrivez la vidéo que vous souhaitez générer..." 
                                            className="min-h-[80px]"
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="video-length">Durée de la vidéo (s)</Label>
                                                <span className="text-sm text-muted-foreground">{videoLength}s</span>
                                            </div>
                                            <Slider 
                                                id="video-length"
                                                min={2} 
                                                max={8} 
                                                step={1} 
                                                value={[videoLength]} 
                                                onValueChange={(vals) => setVideoLength(vals[0])}
                                                disabled={isGenerating}
                                            />
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="fps">Images par seconde (FPS)</Label>
                                                <span className="text-sm text-muted-foreground">{fps} FPS</span>
                                            </div>
                                            <Slider 
                                                id="fps"
                                                min={12} 
                                                max={30} 
                                                step={6} 
                                                value={[fps]} 
                                                onValueChange={(vals) => setFps(vals[0])}
                                                disabled={isGenerating}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <Switch 
                                            id="optimizer" 
                                            checked={promptOptimizer} 
                                            onCheckedChange={setPromptOptimizer}
                                            disabled={isGenerating}
                                        />
                                        <Label htmlFor="optimizer">Optimiseur de prompt (recommandé)</Label>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <div className="text-sm text-muted-foreground">
                                            La génération peut prendre plusieurs minutes.
                                        </div>
                                        <Button 
                                            type="button" 
                                            onClick={handleGenerateVideo} 
                                            disabled={isGenerating || !prompt || !sourceImage}
                                            size="lg"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                                                    Génération en cours...
                                                </>
                                            ) : "Générer la Vidéo"}
                                        </Button>
                                    </div>
                                    
                                    {generationError && (
                                        <p className="text-destructive text-sm">{generationError}</p>
                                    )}
                                    
                                    {generationSuccess && generationMessage && (
                                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md border border-green-200 dark:border-green-800">
                                            <p className="text-green-800 dark:text-green-300 text-sm">{generationMessage}</p>
                                            {generatedVideoId && (
                                                <Button 
                                                    variant="outline" 
                                                    size="sm" 
                                                    className="mt-2"
                                                    onClick={viewGeneratedVideo}
                                                >
                                                    Voir dans la galerie
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Section Prévisualisation */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-medium mb-4">Comment ça fonctionne</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <ImagePlus className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">1. Sélectionnez une image</h4>
                                        <p className="text-sm text-muted-foreground">Choisissez une image générée depuis votre galerie comme point de départ.</p>
                                    </div>
                                    
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <FilmIcon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">2. Décrivez votre vidéo</h4>
                                        <p className="text-sm text-muted-foreground">Utilisez un prompt descriptif pour guider la génération de la vidéo.</p>
                                    </div>
                                    
                                    <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                                        <div className="bg-primary/10 p-3 rounded-full mb-3">
                                            <Loader2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-medium mb-2">3. Patientez quelques minutes</h4>
                                        <p className="text-sm text-muted-foreground">La génération est lancée en arrière-plan et peut prendre 3-5 minutes. Vous recevrez une notification.</p>
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