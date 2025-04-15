// app/[lang]/dashboard/image2image/variation/[image]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image"
import { Wand2, Loader2, ImagePlus } from "lucide-react"
import { useParams, useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

import { generateImageVariationAction } from '@/lib/actions/variationActions';

// Type local pour les données de l'image récupérées via l'API
interface FetchedImageData {
    id: string;
    title: string | null;
    imageUrl: string;
    prompt?: string | null;
}

export default function ImageVariationPage() {
    const router = useRouter();
    const routeParams = useParams<{ lang: string; image: string }>();
    const lang = routeParams.lang;
    const imageId = routeParams.image;

    // --- États du Composant ---
    const [sourceImage, setSourceImage] = useState<FetchedImageData | null>(null);
    const [isLoadingImage, setIsLoadingImage] = useState(true);
    const [imageError, setImageError] = useState<string | null>(null);
    const [isSelectingSource, setIsSelectingSource] = useState(false);

    const [prompt, setPrompt] = useState<string>("");
    const [generatedUrls, setGeneratedUrls] = useState<string[] | null>(null);
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [generationError, setGenerationError] = useState<string | null>(null);
    const [generatedImageId, setGeneratedImageId] = useState<string | null>(null);

    // --- Fetch des données de l'image via l'API Route ---
    useEffect(() => {
        // Si l'ID est "0", on passe en mode sélection
        if (imageId === "0") {
            console.log("Image ID is 0, entering selection mode.");
            setIsSelectingSource(true);
            setSourceImage(null);
            setIsLoadingImage(false);
            setImageError(null);
            return;
        }

        // Sinon, tenter de charger l'image via l'API
        setIsSelectingSource(false);
        setIsLoadingImage(true);
        setImageError(null);
        setSourceImage(null);

        async function fetchImageData() {
            console.log("Fetching image data for ID:", imageId);
            try {
                // Utiliser la même API route mais maintenant l'ID est celui d'une GeneratedImage
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
                
                // Initialiser le prompt avec l'ancien prompt s'il existe
                if (data.prompt) {
                    setPrompt(data.prompt);
                }

            } catch (error) {
                console.error("Failed to fetch image data:", error);
                setImageError(error instanceof Error ? error.message : "Impossible de charger l'image.");
            } finally {
                setIsLoadingImage(false);
            }
        }

        fetchImageData();
    }, [imageId]);

    // --- Fonction pour naviguer vers la galerie ---
    const navigateToGallery = () => {
        console.log("Navigating to gallery for selection...");
        router.push(`/${lang}/dashboard/gallery/image`);
    };

    // --- Fonction pour Gérer la Génération ---
    const handleGenerate = async () => {
        // 1. Vérifier les prérequis avant de lancer
        if (!sourceImage || !sourceImage.imageUrl || !prompt || isGenerating) {
            if (!sourceImage || !sourceImage.imageUrl) {
                setGenerationError("Veuillez d'abord sélectionner une image source.");
            } else if (!prompt) {
                setGenerationError("Veuillez entrer un prompt décrivant la modification souhaitée.");
            }
            if (!sourceImage || !sourceImage.imageUrl || !prompt) return;
            if (isGenerating) return; // Sécurité anti double-clic
        }

        // 2. Initialiser l'état de génération
        setIsGenerating(true);
        setGenerationError(null);
        setGeneratedUrls(null);

        console.log("handleGenerate: Starting variation with parameters:", {
            sourceImageId: sourceImage.id,
            promptLength: prompt.length
        });

        // 3. Appeler l'action serveur
        try {
            const result = await generateImageVariationAction({
                sourceImageId: sourceImage.id,
                prompt: prompt
            });

            // 4. Traiter le résultat
            if (result.success && result.outputUrls && result.outputUrls.length > 0) {
                // Succès
                setGeneratedUrls(result.outputUrls);
                
                // Sauvegarder l'ID de l'image générée
                if (result.generatedImageId) {
                    setGeneratedImageId(result.generatedImageId);
                    console.log("Variation successful and saved to database with ID:", result.generatedImageId);
                } else {
                    setGeneratedImageId(null);
                    console.log("Variation successful but not saved to database:", result.outputUrls);
                }
                
                // Gestion des erreurs partielles
                if (result.error) {
                    setGenerationError(result.error);
                } else {
                    setGenerationError(null);
                }
            } else {
                console.error("Generation action returned failure or no URLs:", result);
                throw new Error(result.error || "La génération a échoué ou n'a pas retourné d'image.");
            }
        } catch (error) {
            console.error("Variation generation failed:", error);
            setGenerationError(error instanceof Error ? error.message : "Échec de la génération.");
            setGeneratedUrls(null);
        } finally {
            setIsGenerating(false);
            console.log("handleGenerate: Finished variation attempt.");
        }
    };

    // --- Affichage conditionnel pendant le chargement initial ---
    if (isLoadingImage && imageId !== "0") {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /> Chargement de l image...</div>;
    }
    
    if (imageError && !isSelectingSource) {
        return <div className="container py-10 text-destructive">{imageError}</div>;
    }

    // Utiliser un titre par défaut ou celui de l'image chargée
    const displayTitle = sourceImage?.title || "Nouvelle Variation";

    // --- Rendu JSX ---
    return (
        <>
            <div className="md:hidden">
                {/* Version mobile... */}
            </div>
            <div className="hidden h-full flex-col md:flex">
                {/* Header */}
                <div className="container flex items-center justify-between md:h-16">
                    <h2 className="text-lg font-semibold flex items-center">
                        <Wand2 className="mr-2 h-5 w-5" />
                        Variation d Image - {displayTitle}
                    </h2>
                </div>
                <Separator />

                {/* Contenu Principal */}
                <div className="container h-full py-6">
                    <div className="flex flex-col space-y-6">
                        {/* Section Contrôles Haut */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Carte Image Source (Conditionnelle) */}
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
                                            <Image src={sourceImage.imageUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 1024px) 100vw, 33vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4">Chargement ou erreur...</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Carte Prompt & Génération */}
                            <Card className="col-span-1 lg:col-span-2">
                                <CardContent className="p-4 space-y-4">
                                    <Textarea 
                                        id="prompt-input" 
                                        value={prompt} 
                                        onChange={(e) => setPrompt(e.target.value)} 
                                        disabled={isGenerating || isSelectingSource} 
                                        placeholder="Décrivez la modification que vous souhaitez apporter à l'image (ex: 'Transformez cette image en style cartoon', 'Ajoutez un chat à côté du sujet')" 
                                        className="min-h-[120px]"
                                    />
                                    <div className="flex justify-end">
                                        <Button 
                                            type="button" 
                                            onClick={handleGenerate} 
                                            disabled={isGenerating || !prompt || !sourceImage}
                                        >
                                            {isGenerating ? 
                                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Modification en cours...</> : 
                                                "Modifier l'Image avec Gemini"
                                            }
                                        </Button>
                                    </div>
                                    {generationError && <p className="text-destructive text-sm">{generationError}</p>}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Section Comparaison Image */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Image Source */}
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-lg font-medium">Source</h3>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isSelectingSource ? (
                                            <p className="text-sm text-muted-foreground p-4 text-center">Aucune image sélectionnée</p>
                                        ) : sourceImage?.imageUrl ? (
                                            <Image src={sourceImage.imageUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4 text-center">Chargement...</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Image Résultat */}
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">
                                        Résultat 
                                        {generatedImageId && (
                                            <span className="ml-2 text-sm text-green-600 font-normal">
                                                (Enregistrée)
                                            </span>
                                        )}
                                    </h3>
                                    {isGenerating && (
                                        <div className="flex items-center text-amber-600">
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            <span className="text-sm">Génération en cours...</span>
                                        </div>
                                    )}
                                </div>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isGenerating ? (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                                                <p className="text-sm text-center">Modification en cours...</p>
                                            </div>
                                        ) : generatedUrls && generatedUrls.length > 0 ? (
                                            <>
                                                <Image 
                                                    src={generatedUrls[0]} 
                                                    alt="Image modifiée" 
                                                    fill 
                                                    style={{ objectFit: 'contain' }}
                                                    sizes="(max-width: 768px) 100vw, 50vw" 
                                                />
                                                {generatedImageId && (
                                                    <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs">
                                                        Sauvegardée
                                                    </div>
                                                )}
                                            </>
                                        ) : generationError ? (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                <p className="text-sm text-destructive text-center">{generationError}</p>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                <p className="text-sm text-muted-foreground text-center">
                                                    Complétez le prompt et cliquez sur Modifier l Image pour générer une variation
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                                {/* Boutons d'action pour l'image générée */}
                                {generatedUrls && generatedUrls.length > 0 && (
                                    <div className="flex justify-end gap-2">
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => window.open(generatedUrls[0], '_blank')}
                                        >
                                            Voir en taille réelle
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}