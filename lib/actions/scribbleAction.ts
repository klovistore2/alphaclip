// lib/actions/scribbleAction.ts
'use server';

import Replicate from "replicate";
import { auth } from "@/lib/auth"; // Vérifiez le chemin
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from 'cloudinary';

// Configuration Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    generatedImageId?: string; // ID de l'image générée en base de données
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
        console.log("Server Action: Replicate input:", JSON.stringify(input, null, 2));

        // 4. Appeler l'API Replicate
        // L'erreur TypeScript ne devrait plus apparaître ici car params.modelIdentifier
        // est maintenant de type ReplicateModelId
        const output = await replicate.run(params.modelIdentifier, { input });

        console.log("Server Action: Replicate run finished. Output type:", typeof output);
        console.log("Server Action: Replicate raw output:", output);
        
        if (Array.isArray(output)) {
            console.log("Server Action: Replicate output is array of length:", output.length);
            for (let i = 0; i < output.length; i++) {
                const item = output[i];
                console.log(`Server Action: Output[${i}] type:`, typeof item);
                console.log(`Server Action: Output[${i}] constructor:`, item && item.constructor ? item.constructor.name : "undefined");
                if (item && typeof item === 'object') {
                    console.log(`Server Action: Output[${i}] properties:`, Object.getOwnPropertyNames(item));
                    if ('getReader' in item) {
                        console.log(`Server Action: Output[${i}] is ReadableStream`);
                    }
                }
            }
        }

        // 5. Traiter la sortie du modèle Replicate (des objets d'image)
        if (Array.isArray(output) && output.length > 0) {
            try {
                // Récupérer les URLs des images générées
                console.log("Server Action: Processing Replicate output to extract image URLs");
                
                const imageUrls = await Promise.all(
                    output.map(async (item: unknown, index: number) => {
                        console.log(`Server Action: Processing output[${index}]:`, item);
                        
                        // Si l'item a une méthode url(), l'utiliser
                        if (item && typeof item === 'object' && 'url' in item && typeof (item as Record<string, unknown>).url === 'function') {
                            console.log(`Server Action: Item ${index} has url() function`);
                            try {
                                // Récupérer l'URL via la méthode url() et la convertir en chaîne
                                const urlMethod = (item as { url: () => Promise<unknown> }).url;
                                const url = await urlMethod();
                                console.log(`Server Action: Item ${index} url() returned:`, url);
                                
                                // Convertir en chaîne et retourner
                                return String(url);
                            } catch (urlError) {
                                console.error(`Server Action: Error calling url() on item ${index}:`, urlError);
                                return null;
                            }
                        } 
                        // Si c'est un ReadableStream
                        else if (item && typeof item === 'object' && 'getReader' in item) {
                            console.log(`Server Action: Item ${index} is a ReadableStream`);
                            try {
                                // On va faire simple - on convertit directement en String
                                // car on sait que Replicate retourne des URL
                                return String(item);
                            } catch (streamError) {
                                console.error(`Server Action: Error handling stream ${index}:`, streamError);
                                return null;
                            }
                        }
                        // Si c'est déjà une URL sous forme de chaîne
                        else if (typeof item === 'string' && item.startsWith('http')) {
                            console.log(`Server Action: Item ${index} is already a URL string:`, item);
                            return item;
                        }
                        // Sinon on a une erreur
                        else {
                            console.error(`Server Action: Item ${index} is not in expected format:`, item);
                            console.log(`Server Action: Item ${index} type:`, typeof item);
                            if (item) {
                                if (typeof item === 'object') {
                                    console.log(`Server Action: Item ${index} properties:`, Object.getOwnPropertyNames(item));
                                    console.log(`Server Action: Item ${index} JSON:`, JSON.stringify(item));
                                } else {
                                    console.log(`Server Action: Item ${index} value:`, item);
                                }
                            }
                            return null;
                        }
                    })
                );

                // Filtrer les valeurs null et vérifier qu'on a des URLs
                const validImageUrls = imageUrls.filter(url => url !== null) as string[];
                
                // Loggons toutes les URLs pour comprendre ce que renvoie Replicate
                console.log("Server Action: All valid image URLs from Replicate:");
                validImageUrls.forEach((url, idx) => {
                  console.log(`Image ${idx}: ${url}`);
                });
                
                if (validImageUrls.length > 1) {
                  console.log("Server Action: First image is typically the input, last image is the output");
                  console.log(`Input image: ${validImageUrls[0]}`);
                  console.log(`Output image: ${validImageUrls[validImageUrls.length - 1]}`);
                }
                
                if (validImageUrls.length > 0) {
                    try {
                        // 1. Télécharger l'image sur Cloudinary depuis l'URL Replicate
                        console.log("Server Action: Uploading generated image to Cloudinary...");
                        let cloudinaryUrl;
                        
                        try {
                            // Replicate renvoie plusieurs images - prendre la dernière (image générée)
                            // La première est généralement l'image d'origine, la dernière est le résultat transformé
                            const imageUrl = validImageUrls[validImageUrls.length - 1];
                            console.log("Server Action: Image URL to upload (transformed image):", imageUrl);
                            
                            // Cloudinary nécessite une URL sous forme de chaîne
                            const urlToUpload = String(imageUrl);
                            
                            // Télécharger l'image sur Cloudinary en passant l'URL
                            const cloudinaryResult = await cloudinary.uploader.upload(urlToUpload, {
                                folder: 'generated_images',
                                resource_type: 'image',
                            });
                            
                            cloudinaryUrl = cloudinaryResult.secure_url;
                            console.log("Server Action: Cloudinary upload successful:", cloudinaryUrl);
                        } catch (cloudinaryError) {
                            console.error("Server Action Error: Cloudinary upload failed:", cloudinaryError);
                            // On continue avec l'URL originale de Replicate
                            cloudinaryUrl = validImageUrls[0];
                        }
                        
                        // 2. Enregistrer l'image générée dans la base de données
                        const generatedImage = await prisma.generatedImage.create({
                            data: {
                                imageUrl: cloudinaryUrl, // URL Cloudinary ou URL Replicate si échec
                                prompt: params.prompt,
                                modelUsed: params.modelIdentifier,
                                status: "COMPLETED",
                                parameters: {
                                    // Inclure d'autres paramètres si disponibles
                                    negativePrompt: params.negativePrompt,
                                    numSteps: params.numSteps,
                                    guidanceScale: params.guidanceScale,
                                    originalInputImageUrl: validImageUrls[0], // L'image d'origine (input)
                                    replicateOutputUrl: validImageUrls[validImageUrls.length - 1] // L'image générée par l'IA
                                },
                                // Liens à la source et à l'utilisateur
                                userId: userId,
                                sourceDrawingId: params.drawingId,
                            }
                        });
                        
                        console.log("Server Action: Image generated and saved to database with ID:", generatedImage.id);
                        
                        // Mettre à jour le statut du dessin source si nécessaire
                        await prisma.drawing.update({
                            where: { id: params.drawingId },
                            data: { status: "HAS_IMAGE" }
                        });
                        
                        // Créer un log de génération pour traçabilité
                        await prisma.generationLog.create({
                            data: {
                                type: "DRAWING_TO_IMAGE",
                                prompt: params.prompt,
                                modelUsed: params.modelIdentifier,
                                parameters: {
                                    negativePrompt: params.negativePrompt,
                                    numSteps: params.numSteps,
                                    guidanceScale: params.guidanceScale,
                                    originalInputImageUrl: validImageUrls[0], // L'image d'origine
                                    replicateOutputUrl: validImageUrls[validImageUrls.length - 1], // L'image générée par l'IA
                                    uploadedToCloudinary: !!cloudinaryUrl && cloudinaryUrl !== validImageUrls[0]
                                },
                                status: "COMPLETED",
                                resultUrl: cloudinaryUrl || validImageUrls[validImageUrls.length - 1],
                                userId: userId,
                                sourceDrawingId: params.drawingId,
                                completedAt: new Date()
                            }
                        });
                        
                        // Retourner l'URL Cloudinary si disponible, sinon l'URL Replicate
                        return {
                            success: true,
                            outputUrls: cloudinaryUrl ? [cloudinaryUrl] : validImageUrls,
                            modelUsed: params.modelIdentifier,
                            generatedImageId: generatedImage.id
                        };
                    } catch (dbError) {
                        console.error("Server Action Error: Failed to save generated image to database:", dbError);
                        // On retourne quand même les URLs même si l'enregistrement en base a échoué
                        return {
                            success: true,
                            outputUrls: validImageUrls,
                            modelUsed: params.modelIdentifier,
                            error: "Image générée mais non enregistrée dans la base de données."
                        };
                    }
                } else {
                    throw new Error("Aucune URL d'image valide n'a été produite.");
                }
            } catch (error) {
                console.error("Server Action Error: Failed to process image output:", error);
                throw new Error("Erreur lors du traitement des images générées.");
            }
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