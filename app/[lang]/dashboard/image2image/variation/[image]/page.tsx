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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getDictionary, Localy, TypeDictionary } from '@/app/[lang]/dictionaries';

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
    const lang = routeParams.lang as Localy;
    const imageId = routeParams.image;
    
    // Dictionnaire pour l'internationalisation
    const [dict, setDict] = useState<TypeDictionary | null>(null);

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
    
    // --- Chargement du dictionnaire ---
    useEffect(() => {
        async function loadDictionary() {
            const dictionary = await getDictionary(lang);
            setDict(dictionary);
        }
        loadDictionary();
    }, [lang]);

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
                        throw new Error(dict?.variation?.errors?.loading_failed || 
                            (lang === 'fr' ? "Image non trouvée ou accès refusé." : "Image not found or access denied."));
                    } else {
                        throw new Error(lang === 'fr' ? 
                            `Erreur API: ${response.statusText}` : 
                            `API Error: ${response.statusText}`);
                    }
                }

                const data: FetchedImageData = await response.json();

                if (!data.imageUrl) {
                    throw new Error(dict?.variation?.errors?.invalid_source || 
                        (lang === 'fr' ? "L'URL de l'image est manquante." : "The image URL is missing."));
                }

                setSourceImage(data);
                
                // Initialiser le prompt avec l'ancien prompt s'il existe
                if (data.prompt) {
                    setPrompt(data.prompt);
                }

            } catch (error) {
                console.error("Failed to fetch image data:", error);
                setImageError(error instanceof Error ? 
                    error.message : 
                    dict?.variation?.errors?.loading_failed || 
                    (lang === 'fr' ? "Impossible de charger l'image." : "Failed to load the image."));
            } finally {
                setIsLoadingImage(false);
            }
        }

        fetchImageData();
    }, [imageId, dict?.variation?.errors?.loading_failed, dict?.variation?.errors?.invalid_source, lang]);

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
                setGenerationError(dict?.variation?.errors?.invalid_source || 
                    (lang === 'fr' ? "Veuillez d'abord sélectionner une image source." : "Please select a source image first."));
            } else if (!prompt) {
                setGenerationError(dict?.variation?.errors?.missing_prompt || 
                    (lang === 'fr' ? "Veuillez entrer un prompt décrivant la modification souhaitée." : "Please enter a prompt describing the desired modification."));
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
                throw new Error(result.error || dict?.variation?.errors?.general || 
                    (lang === 'fr' ? "La génération a échoué ou n'a pas retourné d'image." : "The generation failed or did not return an image."));
            }
        } catch (error) {
            console.error("Variation generation failed:", error);
            setGenerationError(error instanceof Error ? 
                error.message : 
                dict?.variation?.errors?.general || 
                (lang === 'fr' ? "Échec de la génération." : "Generation failed."));
            setGeneratedUrls(null);
        } finally {
            setIsGenerating(false);
            console.log("handleGenerate: Finished variation attempt.");
        }
    };

    // Attendons que le dictionnaire soit chargé
    if (!dict) {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }
    
    // --- Affichage conditionnel pendant le chargement initial ---
    if (isLoadingImage && imageId !== "0") {
        return <div className="container py-10 flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin" /> {dict.variation.loading}
        </div>;
    }
    
    if (imageError && !isSelectingSource) {
        return <div className="container py-10 text-destructive">{imageError}</div>;
    }

    // Utiliser un titre par défaut ou celui de l'image chargée
    const displayTitle = sourceImage?.title || dict.variation.title;

    // --- Rendu JSX ---
    return (
        <>
            <div className="md:hidden">
                {/* Version mobile... */}
            </div>
            <SidebarInset className="flex h-full flex-col">
                {/* Header */}
                <div className="flex h-16 shrink-0 items-center px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/${lang}/dashboard`}>Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <Wand2 className="mr-2 h-5 w-5 inline" />
                                    {dict.variation.title} - {displayTitle}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
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
                                    <h3 className="text-lg font-medium">{dict.variation.source_image}</h3>
                                    <div className="aspect-video bg-muted rounded-md overflow-hidden relative border flex items-center justify-center">
                                        {isSelectingSource ? (
                                            <Button variant="outline" onClick={navigateToGallery}>
                                                <ImagePlus className="mr-2 h-4 w-4" />
                                                {dict.variation.select_image}
                                            </Button>
                                        ) : sourceImage?.imageUrl ? (
                                            <Image src={sourceImage.imageUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 1024px) 100vw, 33vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4">{dict.variation.loading_error}</p>
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
                                        placeholder={dict.variation.prompt_placeholder}
                                        className="min-h-[120px]"
                                    />
                                    <div className="flex justify-end">
                                        <Button 
                                            type="button" 
                                            onClick={handleGenerate} 
                                            disabled={isGenerating || !prompt || !sourceImage}
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                                                    {dict.variation.generating}
                                                </>
                                            ) : (
                                                <>
                                                    <Wand2 className="mr-2 h-4 w-4" />
                                                    {dict.variation.button}
                                                </>
                                            )}
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
                                <h3 className="text-lg font-medium">{dict.variation.source}</h3>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isSelectingSource ? (
                                            <p className="text-sm text-muted-foreground p-4 text-center">{dict.variation.no_image}</p>
                                        ) : sourceImage?.imageUrl ? (
                                            <Image src={sourceImage.imageUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4 text-center">{dict.variation.loading}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Image Résultat */}
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">
                                        {dict.variation.result}
                                        {generatedImageId && (
                                            <span className="ml-2 text-sm text-green-600 font-normal">
                                                ({dict.variation.saved})
                                            </span>
                                        )}
                                    </h3>
                                    {isGenerating && (
                                        <div className="flex items-center text-amber-600">
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            <span className="text-sm">{dict.variation.generation_in_progress}</span>
                                        </div>
                                    )}
                                </div>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isGenerating ? (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                                                <p className="text-sm text-center">{dict.variation.generating}</p>
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
                                                        {dict.variation.saved}
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
                                                    {dict.variation.complete_info}
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
                                            {dict.variation.full_size}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </>
    );
}