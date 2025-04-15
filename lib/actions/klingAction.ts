// lib/actions/klingAction.ts
'use server';

import Replicate from "replicate";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from 'cloudinary';
import { AssetStatus } from "@prisma/client";

// Configuration Cloudinary
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialiser le client Replicate avec la clé API depuis les variables d'env
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Type pour l'identifiant du modèle Replicate
//type ReplicateModelId = `${string}/${string}` | `${string}/${string}:${string}`;

// Interface pour définir les paramètres d'entrée de notre action de génération de vidéo
interface GenerateVideoParams {
    sourceImageId: string; // ID de l'image source
    sourceImageUrl: string; // URL de l'image source
    prompt: string; // Description pour la vidéo
    // Paramètres optionnels pour le modèle
    prompt_optimizer?: boolean;
    num_frames?: number;
    fps?: number;
    video_length?: number;
}

// Interface pour le type de retour de notre action
interface GenerateVideoResult {
    success: boolean;
    message?: string;
    error?: string;
    predictionId?: string; // ID de la tâche Replicate (pour suivi)
    generatedVideoId?: string; // ID de l'entrée en base de données
}

export async function generateImageToVideoAction(
    params: GenerateVideoParams
): Promise<GenerateVideoResult> {
    console.log("Server Action: generateImageToVideoAction invoked");

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

    if (!process.env.REPLICATE_WEBHOOK_SECRET) {
        console.error("Server Action Error: REPLICATE_WEBHOOK_SECRET not set.");
        return { success: false, error: "Configuration serveur incomplète (webhook secret manquant)." };
    }

    // En développement, on peut utiliser une URL fictive si NGROK_URL n'est pas définie
    if (!process.env.NGROK_URL) {
        console.warn("Server Action Warning: NGROK_URL not set, using localhost for development");
        process.env.NGROK_URL = "http://localhost:3000"; // Ceci ne fonctionnera pas avec Replicate en production !
    }

    if (!params.sourceImageUrl || !params.prompt || !params.sourceImageId) {
        console.error("Server Action Error: Missing required parameters.");
        return { success: false, error: "Paramètres manquants (image source, ID d'image ou prompt)." };
    }

    try {
        // 3. Vérifier que l'image source existe et appartient à l'utilisateur
        const sourceImage = await prisma.generatedImage.findUnique({
            where: {
                id: params.sourceImageId,
                userId: userId
            }
        });

        if (!sourceImage) {
            console.error("Server Action Error: Source image not found or doesn't belong to user");
            return { success: false, error: "Image source introuvable ou non autorisée." };
        }

        // 4. Créer l'entrée pour la vidéo dans la base de données (PENDING)
        const newVideo = await prisma.generatedVideo.create({
            data: {
                status: AssetStatus.PENDING,
                prompt: params.prompt,
                modelUsed: "minimax/video-01", // Nom du modèle
                parameters: {
                    prompt_optimizer: params.prompt_optimizer ?? true,
                    num_frames: params.num_frames,
                    fps: params.fps,
                    video_length: params.video_length,
                    sourceImageUrl: params.sourceImageUrl
                },
                userId: userId,
                sourceImageId: params.sourceImageId,
                videoUrl: "", // Temporaire, sera mis à jour par le webhook
            }
        });

        console.log("Server Action: Created new GeneratedVideo entry:", newVideo.id);

        // 5. Créer l'entrée de log de génération
        const generationLog = await prisma.generationLog.create({
            data: {
                type: "IMAGE_TO_VIDEO",
                prompt: params.prompt,
                modelUsed: "minimax/video-01",
                parameters: {
                    prompt_optimizer: params.prompt_optimizer ?? true,
                    num_frames: params.num_frames,
                    fps: params.fps,
                    video_length: params.video_length
                },
                status: AssetStatus.PENDING,
                userId: userId,
                sourceImageId: params.sourceImageId,
            }
        });

        console.log("Server Action: Created generation log:", generationLog.id);

        // 6. Préparer l'URL du webhook avec le secret
        const webhookUrl = new URL(`${process.env.NGROK_URL}/api/webhooks/replicate`);
        webhookUrl.searchParams.set('secret', process.env.REPLICATE_WEBHOOK_SECRET as string);
        webhookUrl.searchParams.set('userId', userId);

        console.log("Server Action: Webhook URL:", webhookUrl.toString());

        // 7. Préparer l'entrée pour le modèle Replicate
        // Définir toutes les propriétés que nous utilisons
        interface ReplicateModelInput {
            prompt: string;
            first_frame_image: string;
            prompt_optimizer: boolean;
            num_frames?: number;
            fps?: number;
            video_length?: number;
        }
        
        const modelInput: ReplicateModelInput = {
            prompt: params.prompt,
            first_frame_image: params.sourceImageUrl,
            prompt_optimizer: params.prompt_optimizer ?? true,
            // Ajouter conditionnellement les paramètres optionnels
            ...(params.num_frames !== undefined && { num_frames: params.num_frames }),
            ...(params.fps !== undefined && { fps: params.fps }),
            ...(params.video_length !== undefined && { video_length: params.video_length })
        };

        console.log("Server Action: Prepared model input:", modelInput);

        // 8. Appeler l'API Replicate pour créer une prédiction
        const prediction = await replicate.predictions.create({
            model: "minimax/video-01",
            input: modelInput,
            webhook: webhookUrl.toString(),
            webhook_events_filter: ["completed"]
        });

        console.log("Server Action: Created Replicate prediction:", prediction.id);

        // 9. Mettre à jour la vidéo et le log avec l'ID de prédiction Replicate
        await prisma.generatedVideo.update({
            where: { id: newVideo.id },
            data: {
                replicatePredictionId: prediction.id,
                status: AssetStatus.PROCESSING,
            }
        });

        await prisma.generationLog.update({
            where: { id: generationLog.id },
            data: {
                replicatePredictionId: prediction.id,
                status: AssetStatus.PROCESSING,
            }
        });

        console.log("Server Action: Updated video and log with prediction ID");

        // 10. Retourner le résultat
        return {
            success: true,
            message: "Génération de vidéo lancée. Vous recevrez une notification lorsqu'elle sera prête.",
            predictionId: prediction.id,
            generatedVideoId: newVideo.id
        };

    } catch (error) {
        console.error("Server Action Error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Erreur lors de la génération de vidéo."
        };
    }
}