// app/[lang]/dashboard/image2image/scribble/[image]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image"
import { PencilLine, Loader2, ImagePlus, MoreVertical, Download, Wand2, Video } from "lucide-react"
import { useParams, useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getDictionary, Localy, TypeDictionary } from '@/app/[lang]/dictionaries';

import { generateScribbleImageAction } from '@/lib/actions/scribbleAction';
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
// Type local pour les données du dessin récupérées via l'API
interface FetchedDrawingData {
    id: string;
    title: string | null;
    previewUrl: string | null;
}

// Type pour les modèles (inchangé)
type ReplicateModelId = `${string}/${string}` | `${string}/${string}:${string}`;
const scribbleModels: { name: string; id: ReplicateModelId }[] = [
    { name: "ControlNet Scribble SD 1.5", id: "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117" },
];

export default function ScribblePlaygroundPage() {
    const router = useRouter();
    const routeParams = useParams<{ lang: string; image: string }>();
    const lang = routeParams.lang as Localy;
    const drawingId = routeParams.image;
    
    // Dictionnaire pour l'internationalisation
    const [dict, setDict] = useState<TypeDictionary | null>(null);

    // --- États du Composant ---
    const [drawing, setDrawing] = useState<FetchedDrawingData | null>(null);
    const [isLoadingDrawing, setIsLoadingDrawing] = useState(true);
    const [drawingError, setDrawingError] = useState<string | null>(null);
    const [isSelectingSource, setIsSelectingSource] = useState(false);

    const [prompt, setPrompt] = useState<string>("");
    const [selectedModel, setSelectedModel] = useState<ReplicateModelId>(scribbleModels[0]?.id || "");
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

    // --- Fetch des données du dessin via l'API Route ---
    useEffect(() => {
        // Si l'ID est "0", on passe en mode sélection
        if (drawingId === "0") {
            console.log("Drawing ID is 0, entering selection mode.");
            setIsSelectingSource(true);
            setDrawing(null);
            setIsLoadingDrawing(false);
            setDrawingError(null);
            return;
        }

        // Sinon, tenter de charger le dessin via l'API
        setIsSelectingSource(false);
        setIsLoadingDrawing(true);
        setDrawingError(null);
        setDrawing(null);

        async function fetchDrawingData() {
            try {
                const response = await fetch(`/api/drawings/${drawingId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(dict?.scribble?.errors?.loading_failed || 
                            (lang === 'fr' ? "Dessin non trouvé ou accès refusé." : "Drawing not found or access denied."));
                    } else {
                        throw new Error(lang === 'fr' ? 
                            `Erreur API: ${response.statusText}` : 
                            `API Error: ${response.statusText}`);
                    }
                }

                const data: FetchedDrawingData = await response.json();

                if (!data.previewUrl) {
                    throw new Error(dict?.scribble?.errors?.invalid_source || 
                        (lang === 'fr' ? "L'aperçu pour ce dessin est manquant." : "The preview for this drawing is missing."));
                }

                setDrawing(data);

            } catch (error) {
                console.error("Failed to fetch drawing data:", error);
                setDrawingError(error instanceof Error ? 
                    error.message : 
                    dict?.scribble?.errors?.loading_failed || 
                    (lang === 'fr' ? "Impossible de charger le dessin." : "Failed to load the drawing."));
            } finally {
                setIsLoadingDrawing(false);
            }
        }

        fetchDrawingData();
    }, [drawingId, dict, lang]);

    // --- Fonction pour naviguer vers la galerie ---
    const navigateToGallery = () => {
        console.log("Navigating to gallery for selection...");
        // Note: Pour une meilleure UX, on pourrait passer l'URL de retour en query param
        // router.push(`/${lang}/dashboard/gallery/image?selectMode=true&redirectTo=...`)
        router.push(`/${lang}/dashboard/gallery/image`); // Navigation simple pour l'instant
    };


    // --- Fonction pour Gérer la Génération ---
    const handleGenerate = async () => {
      // 1. Vérifier les prérequis avant de lancer
      if (!drawing || !drawing.previewUrl || !prompt || !selectedModel || isGenerating) {
          if (!drawing || !drawing.previewUrl) {
              setGenerationError(dict?.scribble?.errors?.invalid_source || 
                  (lang === 'fr' ? "Veuillez d'abord avoir un dessin source valide." : "Please select a valid source drawing first."));
          } else if (!prompt) {
              setGenerationError(dict?.scribble?.errors?.missing_prompt || 
                  (lang === 'fr' ? "Veuillez entrer un prompt décrivant l'image souhaitée." : "Please enter a prompt describing the desired image."));
          } else if (!selectedModel) {
              setGenerationError(dict?.scribble?.errors?.missing_model || 
                  (lang === 'fr' ? "Veuillez sélectionner un modèle de génération." : "Please select a generation model."));
          }
          if (!drawing || !drawing.previewUrl || !prompt || !selectedModel) return;
          if (isGenerating) return; // Sécurité anti double-clic
      }

      // 2. Initialiser l'état de génération
      setIsGenerating(true);
      setGenerationError(null); // Efface les erreurs précédentes
      setGeneratedUrls(null);   // Efface les résultats précédents

      console.log("handleGenerate: Starting generation with parameters:", {
          drawingId: drawing.id,
          sourceImageUrl: 'present', // Ne pas logger l'URL complète systématiquement
          promptLength: prompt.length,
          modelIdentifier: selectedModel,
      });

      // 3. Appeler l'action serveur dans un bloc try...catch...finally
      try {
          // Appel à la Server Action importée
          const result = await generateScribbleImageAction({
              drawingId: drawing.id,
              sourceImageUrl: drawing.previewUrl, // URL du dessin source
              prompt: prompt,                     // Prompt de l'utilisateur
              modelIdentifier: selectedModel,     // Modèle Replicate choisi
              // ---- Ajoutez ici d'autres paramètres si vous gérez les sliders ----
              // exemple:
              // negativePrompt: negPromptState,
              // numSteps: stepsState,
              // guidanceScale: guidanceState,
              // -----------------------------------------------------------------
          });

          // 4. Traiter le résultat de l'action serveur
          if (result.success && result.outputUrls && result.outputUrls.length > 0) {
              // Succès : Mettre à jour l'état avec les URLs des images générées
              setGeneratedUrls(result.outputUrls);
              
              // Sauvegarder l'ID de l'image générée si disponible
              if (result.generatedImageId) {
                  setGeneratedImageId(result.generatedImageId);
                  console.log("Generation successful and saved to database with ID:", result.generatedImageId);
              } else {
                  setGeneratedImageId(null);
                  console.log("Generation successful but not saved to database:", result.outputUrls);
              }
              
              // Si une erreur est présente malgré le succès (ex: sauvegarde BDD échouée)
              if (result.error) {
                  setGenerationError(result.error);
              } else {
                  setGenerationError(null);
              }
          } else {
              // Échec ou résultat inattendu retourné par l'action
              console.error("Generation action returned failure or no URLs:", result);
              // Remonte une erreur qui sera attrapée par le bloc catch
              throw new Error(result.error || "La génération a échoué ou n'a pas retourné d'image.");
          }

      } catch (error) {
          // 5. Gérer les erreurs
          console.error("Generation failed:", error);
          setGenerationError(error instanceof Error ? 
              error.message : 
              dict?.scribble?.errors?.general || 
              (lang === 'fr' ? "Échec de la génération." : "Generation failed."));
          setGeneratedUrls(null);
      } finally {
          // 6. Terminer l'état de chargement
          setIsGenerating(false);
          console.log("handleGenerate: Finished generation attempt.");
      }
  };

    // Attendons que le dictionnaire soit chargé
    if (!dict) {
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
    }
    
    // --- Affichage conditionnel pendant le chargement initial ---
    if (isLoadingDrawing && drawingId !== "0") {
        return <div className="container py-10 flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin" /> {dict.scribble.loading}
        </div>;
    }
    
    // Affiche erreur de chargement du dessin (si non en mode sélection)
    if (drawingError && !isSelectingSource) {
        return <div className="container py-10 text-destructive">{drawingError}</div>;
    }

    // Utiliser un titre par défaut ou celui du dessin chargé
    const displayTitle = drawing?.title || dict.scribble.title;

    // --- Rendu JSX ---
    return (
        <>
            <SidebarInset className="flex h-full flex-col">
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
                                    <PencilLine className="mr-2 h-5 w-5 inline" />
                                    {dict.scribble.title} - {displayTitle}
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
                                    <h3 className="text-lg font-medium">{dict.scribble.source_drawing}</h3>
                                    <div className="aspect-video bg-muted rounded-md overflow-hidden relative border flex items-center justify-center">
                                        {isSelectingSource ? (
                                            <Button variant="outline" onClick={navigateToGallery}>
                                                <ImagePlus className="mr-2 h-4 w-4" />
                                                {dict.scribble.select_drawing}
                                            </Button>
                                        ) : drawing?.previewUrl ? (
                                            <Image src={drawing.previewUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 1024px) 100vw, 33vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4">{dict.scribble.loading_error}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Carte Prompt & Génération */}
                            <Card className="col-span-1 lg:col-span-2">
                                 <CardContent className="p-4 space-y-4">
                                     {/* ... Sélecteur de modèle ... */}
                                     <Select value={selectedModel} onValueChange={(v) => setSelectedModel(v as ReplicateModelId)} disabled={isGenerating || isSelectingSource}> {/* Désactiver si pas d'image source */}
                                         {/* ... Options ... */}
                                     </Select>
                                     <Textarea 
                                        id="prompt-input" 
                                        value={prompt} 
                                        onChange={(e) => setPrompt(e.target.value)} 
                                        disabled={isGenerating || isSelectingSource} 
                                        placeholder={dict.scribble.prompt_placeholder}
                                        className="min-h-[80px]"
                                     />
                                     <div className="flex justify-end">
                                         <Button type="button" onClick={handleGenerate} disabled={isGenerating || !prompt || !selectedModel || !drawing}>
                                             {isGenerating ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                                                    {dict.scribble.generating}
                                                </>
                                             ) : (
                                                <>
                                                    <ImagePlus className="mr-2 h-4 w-4" />
                                                    {dict.scribble.button}
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
                            {/* Image Source (Conditionnel) */}
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-lg font-medium">{dict.scribble.source}</h3>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isSelectingSource ? (
                                            <p className="text-sm text-muted-foreground p-4 text-center">{dict.scribble.no_drawing}</p>
                                        ) : drawing?.previewUrl ? (
                                            <Image src={drawing.previewUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4 text-center">{dict.scribble.loading}</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Image Résultat (Affichage conditionnel basé sur l'état) */}
                             <div className="flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">
                                        {dict.scribble.result}
                                        {generatedImageId && (
                                            <span className="ml-2 text-sm text-green-600 font-normal">
                                                ({dict.scribble.saved})
                                            </span>
                                        )}
                                    </h3>
                                    {isGenerating && (
                                        <div className="flex items-center text-amber-600">
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            <span className="text-sm">{dict.scribble.generation_in_progress}</span>
                                        </div>
                                    )}
                                </div>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isGenerating ? (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                                                <p className="text-sm text-center">{dict.scribble.generation_in_progress}</p>
                                            </div>
                                        ) : generatedUrls && generatedUrls.length > 0 ? (
                                            <>
                                                <Image 
                                                    src={generatedUrls[0]} 
                                                    alt="Image générée" 
                                                    fill 
                                                    style={{ objectFit: 'contain' }}
                                                    sizes="(max-width: 768px) 100vw, 100vw" 
                                                    className="max-h-[600px]"
                                                />
                                                {generatedImageId && (
                                                    <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-xs">
                                                        {dict.scribble.saved}
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
                                                    {dict.scribble.complete_info}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                                {/* Boutons d'action pour l'image générée (télécharger, etc.) */}
                                {generatedUrls && generatedUrls.length > 0 && generatedImageId && (
                                    <div className="flex justify-end gap-2">
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => window.open(generatedUrls[0], '_blank')}
                                        >
                                            {dict.scribble.full_size}
                                        </Button>
                                        
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    <MoreVertical className="h-4 w-4" />
                                                    <span className="sr-only">Options</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => router.push(`/${lang}/dashboard/image2image/variation/${generatedImageId}`)}>
                                                    <Wand2 className="mr-2 h-4 w-4" />
                                                    <span>{dict.gallery?.thumbnail?.open_in_variation || "Open in Variation"}</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => router.push(`/${lang}/dashboard/videogenerate/image2video/${generatedImageId}`)}>
                                                    <Video className="mr-2 h-4 w-4" />
                                                    <span>{dict.gallery?.thumbnail?.open_in_image2video || "Turn into Video"}</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => {
                                                    const link = document.createElement('a');
                                                    link.href = generatedUrls[0];
                                                    link.download = `generated-image-${Date.now()}.png`;
                                                    document.body.appendChild(link);
                                                    link.click();
                                                    document.body.removeChild(link);
                                                }}>
                                                    <Download className="mr-2 h-4 w-4" />
                                                    <span>{dict.gallery?.thumbnail?.download || "Download"}</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* ... */}
                    </div>
                </div>
            </SidebarInset>
        </>
    )
}