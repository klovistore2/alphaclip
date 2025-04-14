// lib/actions/scribbleAction.ts
'use server';

import Replicate from "replicate";
import { auth } from "@/lib/auth"; // Vérifiez le chemin

// Initialiser le client Replicate avec la clé API depuis les variables d'env
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN, // Assurez-vous que REPLICATE_API_TOKEN est dans .env.local
});

// --- TYPE ALIAS POUR L'IDENTIFIANT DE MODÈLE REPLICATE ---
// Définit le format attendu par replicate.run
type ReplicateModelId = `${string}/${string}` | `${string}/${string}:${string}`;
// -------------------------------------------------------

// Interface pour définir les paramètres d'entrée de notre action
interface GenerateImageParams {
    drawingId: string;
    sourceImageUrl: string;
    prompt: string;
    // --- Utilisation du type alias ici ---
    modelIdentifier: ReplicateModelId; // Ex: "jagilley/controlnet-scribble:435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117"
    // ------------------------------------
    negativePrompt?: string;
    numSteps?: number; // Nom utilisé dans notre interface
    guidanceScale?: number; // Nom utilisé dans notre interface
}

// Interface pour le type de retour de notre action
interface GenerateImageResult {
    success: boolean;
    outputUrls?: string[];
    error?: string;
    modelUsed?: string;
}

export async function generateScribbleImageAction(
    params: GenerateImageParams // Utilise l'interface mise à jour
): Promise<GenerateImageResult> {
    console.log("Server Action: generateScribbleImageAction invoked");

    // 1. Authentification
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
        console.error("Server Action Error: User not authenticated");
        return { success: false, error: "Utilisateur non authentifié." };
    }
    console.log("Server Action: User authenticated:", userId);

    // 2. Validation des prérequis et paramètres
    if (!process.env.REPLICATE_API_TOKEN) {
         console.error("Server Action Error: REPLICATE_API_TOKEN not set.");
        return { success: false, error: "Configuration serveur incomplète (clé API manquante)." };
    }
    if (!params.sourceImageUrl || !params.prompt || !params.modelIdentifier) {
        console.error("Server Action Error: Missing required parameters.");
        return { success: false, error: "Paramètres manquants (image source, prompt ou modèle)." };
    }

    try {
        // 3. Préparer l'input pour le modèle Replicate spécifique
        // IMPORTANT: Les noms des champs ici doivent correspondre EXACTEMENT
        // à ce que le modèle Replicate attend (voir la page du modèle sur Replicate).
        const input = {
            image: params.sourceImageUrl, // Nom attendu par controlnet-scribble
            prompt: params.prompt,        // Nom attendu par controlnet-scribble
            // Ajout conditionnel des paramètres optionnels s'ils sont fournis
            ...(params.negativePrompt && { negative_prompt: params.negativePrompt }), // Nom attendu par controlnet-scribble
            ...(params.numSteps && { num_inference_steps: params.numSteps }), // Nom attendu par controlnet-scribble
            ...(params.guidanceScale && { guidance_scale: params.guidanceScale }), // Nom attendu par controlnet-scribble
            // Ajoutez d'autres paramètres spécifiques au modèle si besoin (ex: a_prompt, n_prompt, ddim_steps, scale, seed, eta...)
        };

        console.log(`Server Action: Calling Replicate.run with model: ${params.modelIdentifier}`);

        // 4. Appeler l'API Replicate
        // L'erreur TypeScript ne devrait plus apparaître ici car params.modelIdentifier
        // est maintenant de type ReplicateModelId
        const output = await replicate.run(params.modelIdentifier, { input });

        console.log("Server Action: Replicate run finished. Output:", output);

        // 5. Traiter la sortie (spécifique à controlnet-scribble qui retourne un tableau d'URLs)
        if (Array.isArray(output) && output.length > 0 && typeof output[0] === 'string') {
            return {
                success: true,
                outputUrls: output as string[], // Le résultat est un tableau d'URLs
                modelUsed: params.modelIdentifier
            };
        } else {
            console.error("Server Action Error: Unexpected output format from Replicate:", output);
            throw new Error("Format de sortie inattendu de l'API de génération.");
        }

    } catch (error) {
        console.error("Server Action Error: Replicate API call failed:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Erreur lors de l'appel à l'API Replicate.",
            modelUsed: params.modelIdentifier
        };
    }
}