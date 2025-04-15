// app/[lang]/dashboard/image2image/scribble/[image]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image"
import { PencilLine, Loader2, ImagePlus } from "lucide-react" // Ajout ImagePlus
import { useParams, useRouter } from 'next/navigation'; // Importer useRouter

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select} from "@/components/ui/select"

// Retirer l'import du type Drawing ici car on va utiliser un type local pour les données fetchées
// import type { Drawing } from "@prisma/client";
import { generateScribbleImageAction } from '@/lib/actions/scribbleAction'; // Adapter le chemin

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
    const router = useRouter(); // Hook pour la navigation
    const routeParams = useParams<{ lang: string; image: string }>();
    const lang = routeParams.lang;
    const drawingId = routeParams.image; // Peut être "0" ou un ID réel

    // --- États du Composant ---
    const [drawing, setDrawing] = useState<FetchedDrawingData | null>(null);
    const [isLoadingDrawing, setIsLoadingDrawing] = useState(true); // Commence en chargement
    const [drawingError, setDrawingError] = useState<string | null>(null);
    const [isSelectingSource, setIsSelectingSource] = useState(false); // Nouvel état

    const [prompt, setPrompt] = useState<string>("");
    const [selectedModel, setSelectedModel] = useState<ReplicateModelId>(scribbleModels[0]?.id || "");
    const [generatedUrls, setGeneratedUrls] = useState<string[] | null>(null);
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [generationError, setGenerationError] = useState<string | null>(null);
    const [generatedImageId, setGeneratedImageId] = useState<string | null>(null);

    // --- Fetch des données du dessin via l'API Route ---
    useEffect(() => {
        // Si l'ID est "0", on passe en mode sélection
        if (drawingId === "0") {
            console.log("Drawing ID is 0, entering selection mode.");
            setIsSelectingSource(true);
            setDrawing(null); // Pas de dessin chargé
            setIsLoadingDrawing(false); // Terminé le "chargement" initial
            setDrawingError(null);
            return; // Sortir de l'effet
        }

        // Sinon, tenter de charger le dessin via l'API
        setIsSelectingSource(false);
        setIsLoadingDrawing(true);
        setDrawingError(null);
        setDrawing(null); // Reset au cas où on navigue d'un dessin à un autre

        async function fetchDrawingData() {
            console.log("Fetching drawing data for ID:", drawingId);
            try {
                const response = await fetch(`/api/drawings/${drawingId}`); // Appel à notre API route

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Dessin non trouvé ou accès refusé.");
                    } else {
                        throw new Error(`Erreur API: ${response.statusText}`);
                    }
                }

                const data: FetchedDrawingData = await response.json();

                if (!data.previewUrl) {
                    throw new Error("L'aperçu pour ce dessin est manquant.");
                }

                setDrawing(data); // Met à jour l'état avec les données reçues

            } catch (error) {
                console.error("Failed to fetch drawing data:", error);
                setDrawingError(error instanceof Error ? error.message : "Impossible de charger le dessin.");
            } finally {
                setIsLoadingDrawing(false);
            }
        }

        fetchDrawingData();
    }, [drawingId]); // Ré-exécuter si l'ID du dessin change

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
      //    (dessin chargé, prompt non vide, modèle sélectionné, pas déjà en cours de génération)
      if (!drawing || !drawing.previewUrl || !prompt || !selectedModel || isGenerating) {
          if (!drawing || !drawing.previewUrl) {
              setGenerationError("Veuillez d'abord avoir un dessin source valide.");
          } else if (!prompt) {
              setGenerationError("Veuillez entrer un prompt décrivant l'image souhaitée.");
          } else if (!selectedModel) {
              setGenerationError("Veuillez sélectionner un modèle de génération.");
          }
          // Si la seule raison est 'isGenerating', on ne fait rien (évite double clic)
          // Sinon (manque dessin, prompt ou modèle), on arrête ici.
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
          // 5. Gérer les erreurs (échec de l'appel API, erreur dans l'action, etc.)
          console.error("Generation failed:", error);
          setGenerationError(error instanceof Error ? error.message : "Échec de la génération.");
          setGeneratedUrls(null); // S'assurer qu'aucun résultat partiel n'est affiché
      } finally {
          // 6. Terminer l'état de chargement, que ce soit un succès ou un échec
          setIsGenerating(false);
          console.log("handleGenerate: Finished generation attempt.");
      }
  };

    // --- Affichage conditionnel pendant le chargement initial ---
     if (isLoadingDrawing && drawingId !== "0") { // Affiche chargement seulement si on fetch
        return <div className="container py-10 flex justify-center items-center"><Loader2 className="h-8 w-8 animate-spin" /> Chargement du dessin...</div>;
    }
    // Affiche erreur de chargement du dessin (si non en mode sélection)
    if (drawingError && !isSelectingSource) {
        return <div className="container py-10 text-destructive">{drawingError}</div>;
    }

    // Utiliser un titre par défaut ou celui du dessin chargé
    const displayTitle = drawing?.title || "Nouveau Scribble";

    // --- Rendu JSX ---
    return (
        <>
            <div className="md:hidden"> {/* ... */} </div>
            <div className="hidden h-full flex-col md:flex">
                {/* Header */}
                <div className="container flex ... md:h-16">
                    <h2 className="text-lg font-semibold flex items-center">
                        <PencilLine className="mr-2 h-5 w-5" />
                        Scribble Playground - {displayTitle}
                    </h2>
                     {/* ... */}
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
                                    <h3 className="text-lg font-medium">Dessin Source</h3>
                                    <div className="aspect-video bg-muted rounded-md overflow-hidden relative border flex items-center justify-center">
                                        {isSelectingSource ? (
                                            // Afficher le bouton si aucun dessin n'est chargé (ID="0")
                                            <Button variant="outline" onClick={navigateToGallery}>
                                                <ImagePlus className="mr-2 h-4 w-4" />
                                                Sélectionner un Dessin
                                            </Button>
                                        ) : drawing?.previewUrl ? (
                                            // Afficher l'image si elle est chargée
                                            <Image src={drawing.previewUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 1024px) 100vw, 33vw" />
                                        ) : (
                                            // Afficher placeholder si erreur ou état intermédiaire (normalement couvert par les checks plus haut)
                                             <p className="text-sm text-muted-foreground p-4">Chargement ou erreur...</p>
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
                                     <Textarea id="prompt-input" value={prompt} onChange={(e) => setPrompt(e.target.value)} disabled={isGenerating || isSelectingSource} placeholder="..." />
                                     <div className="flex justify-end">
                                         {/* Désactiver si pas d'image source sélectionnée */}
                                         <Button type="button" onClick={handleGenerate} disabled={isGenerating || !prompt || !selectedModel || !drawing}>
                                             {isGenerating ? <><Loader2 /> Génération...</> : "Générer l Image"}
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
                                <h3 className="text-lg font-medium">Source</h3>
                                <Card className="border rounded-lg overflow-hidden aspect-square flex items-center justify-center bg-muted">
                                    <CardContent className="p-0 w-full h-full relative">
                                        {isSelectingSource ? (
                                            <p className="text-sm text-muted-foreground p-4 text-center">Aucun dessin sélectionné</p>
                                        ) : drawing?.previewUrl ? (
                                            <Image src={drawing.previewUrl} alt={displayTitle} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, 50vw" />
                                        ) : (
                                            <p className="text-sm text-muted-foreground p-4 text-center">Chargement...</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Image Résultat (Affichage conditionnel basé sur l'état) */}
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
                                                <p className="text-sm text-center">Génération en cours...</p>
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
                                                    Complétez les informations et cliquez sur Générer l Image
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                                {/* Boutons d'action pour l'image générée (télécharger, etc.) */}
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
                        {/* ... */}
                    </div>
                </div>
            </div>
        </>
    )
}