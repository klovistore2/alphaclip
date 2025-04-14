// app/[lang]/dashboard/image2image/scribble/[image]/page.tsx
import { Metadata } from "next"
import Image from "next/image"
//import { Download, RotateCcw, Upload, MoveHorizontal, PencilLine } from "lucide-react" // Ajout PencilLine pour cohérence
import { PencilLine } from "lucide-react" // Ajout PencilLine pour cohérence
import { notFound } from 'next/navigation'; // Pour la page 404

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
//import { Slider } from "@/components/ui/slider"
//import { Label } from "@/components/ui/label"

// Conserver les imports même s'ils ne sont pas utilisés immédiatement
// import { ModelSelector } from "../components/model-selector"
// import { PresetActions } from "../components/preset-actions"
// import { PresetSelector } from "../components/preset-selector"
// import { PresetShare } from "../components/preset-share"
// import { models, types } from "../data/models" // Assurez-vous que ces chemins sont corrects
// import { presets } from "../data/presets" // Assurez-vous que ces chemins sont corrects

// Import pour la langue (Localy) et dictionnaire (commenté pour l'instant)
//import { getDictionary, Localy } from "@/app/[lang]/dictionaries"
import { Localy } from "@/app/[lang]/dictionaries"
// Importer Prisma, Auth et le type Drawing
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth"; // Assurez-vous que ce chemin est correct
import type { Drawing } from "@prisma/client";

// Métadonnées (peuvent être dynamiques si besoin)
export const metadata: Metadata = {
  title: "Scribble Playground",
  description: "AI Image Generation from Scribble/Drawing",
}


// --- Signature de fonction qui correspond à l'erreur de build ---
export default async function ScribblePlaygroundPage({
  params: paramsPromise // Renommer pour éviter conflit de nom avant await
}: {
  // Typer la prop comme une Promesse contenant l'objet params
  params: Promise<{
      lang: Localy;
      image: string; // ID du dessin
  }>
}) {
  // --- Résoudre la promesse params ---
  const params = await paramsPromise;
  const { lang, image: drawingId } = params; // Déstructurer l'objet résolu
  // ------------------------------------

  console.log("Language:", lang); // Log pour vérifier
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
      // Gérer l'utilisateur non connecté (ex: redirection ou message)
      // Pour l'instant, on pourrait afficher un message simple ou rediriger
       return (
          <div className="container py-10">
            <p>Veuillez vous connecter pour utiliser cette fonctionnalité.</p>
            {/* Ajouter un bouton de connexion si nécessaire */}
          </div>
       );
  }

  // --- Récupérer le dessin spécifique ---
  let drawing: Drawing | null = null;
  try {
      drawing = await prisma.drawing.findUnique({
          where: {
              id: drawingId,
              userId: userId, // Sécurité: ne charge que les dessins de l'utilisateur
          },
      });
  } catch (error) {
      console.error("Error fetching drawing:", error);
      // On pourrait afficher une page d'erreur ici
  }

  // Si dessin non trouvé ou n'appartient pas à l'utilisateur
  if (!drawing) {
      notFound(); // Affiche la page 404 par défaut de Next.js
  }

  // Si pas d'URL d'aperçu (même si peu probable après sauvegarde)
  if (!drawing.previewUrl) {
      return (
          <div className="container py-10">
             <p>Erreur : L aperçu pour ce dessin est manquant.</p>
          </div>
       );
  }

  // Titre par défaut si le titre du dessin est null
  const displayTitle = drawing.title || "Dessin sans titre";

  return (
    <>
      <div className="md:hidden">
        <p className="p-4 text-center">Veuillez utiliser un écran plus large.</p>
      </div>
      <div className="hidden h-full flex-col md:flex">
        {/* Header */}
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          {/* Titre mis à jour */}
          <h2 className="text-lg font-semibold flex items-center">
            <PencilLine className="mr-2 h-5 w-5" /> {/* Icône ajoutée */}
            Scribble Playground - {displayTitle}
          </h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            {/* Conserver les presets si utiles pour ce playground */}
            {/* <PresetSelector presets={presets} />
            <div className="hidden space-x-2 md:flex"> <PresetShare /> </div>
            <PresetActions /> */}
          </div>
        </div>
        <Separator />

        {/* Contenu Principal */}
        <div className="container h-full py-6">
          <div className="flex flex-col space-y-6">
            {/* Section Contrôles Haut */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Carte Image Source (Mise à jour) */}
              <Card className="col-span-1">
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">Dessin Source</h3>
                  <div className="aspect-video bg-muted rounded-md overflow-hidden relative border">
                       <Image
                          src={drawing.previewUrl} // URL du dessin chargé
                          alt={displayTitle}
                          fill // Utilise fill pour remplir le conteneur
                          style={{ objectFit: 'contain' }} // Assure que l'image est visible
                          priority // Important pour LCP si cette image est grande et visible tôt
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Aide le navigateur à charger la bonne taille
                      />
                  </div>
                  {/* Pas besoin du bouton Upload ici */}
                </CardContent>
              </Card>

              {/* Carte Prompt (Inchangée pour l'instant) */}
              <Card className="col-span-1 lg:col-span-2">
                <CardContent className="p-4 space-y-4">
                  <h3 className="text-lg font-medium">Prompt de Transformation</h3>
                  <Textarea
                      id="prompt-input"
                      placeholder="Décrivez l'image finale souhaitée (ex: 'Un chat photoréaliste assis sur un canapé')..."
                      className="min-h-[100px]"
                  />
                  <div className="flex justify-end">
                      <Button type="button" className="w-full sm:w-auto"> {/* type="button" si pas dans un <form> */}
                          Générer l Image
                      </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section Paramètres (Conserver les sliders si pertinents pour Scribble/ControlNet) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> ... </div> */}


            {/* Section Comparaison Image (Mise à jour Image Source) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Rappel Image Source */}
              <div className="flex flex-col space-y-4">
                 <h3 className="text-lg font-medium">Dessin Source</h3>
                 <Card className="border rounded-lg overflow-hidden aspect-square">
                    <CardContent className="p-0 w-full h-full relative">
                        <Image
                            src={drawing.previewUrl}
                            alt={displayTitle}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </CardContent>
                </Card>
              </div>

              {/* Image Résultat (Placeholder) */}
              <div className="flex flex-col space-y-4">
                {/* ... (Contenu placeholder inchangé pour l'instant) ... */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Image Générée</h3>
                  {/* ... boutons Download/Regenerate ... */}
                </div>
                <Card className="border border-dashed flex items-center justify-center rounded-lg overflow-hidden aspect-square">
                  <CardContent className="p-0 w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                       <p className="text-sm text-muted-foreground">L image générée apparaîtra ici.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* ... Autres sections (Comparaison, Paramètres) ... */}

          </div>
        </div>
      </div>
    </>
  )
}