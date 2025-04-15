// lib/actions/addSoundAction.ts
'use server';

import Replicate from "replicate";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AssetStatus } from "@prisma/client";

// Pas besoin de Cloudinary ici car on ne fait que passer des URLs à Replicate

// Initialiser le client Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Interface pour les paramètres d'entrée
interface AddSoundParams {
    sourceVideoId: string; // ID de la vidéo source dans notre DB
    sourceVideoUrl: string; // URL Cloudinary de la vidéo source
    prompt: string; // Prompt pour générer le son
    seed?: number; // Seed optionnel pour la génération
}

// Interface pour le type de retour (peut être la même que GenerateVideoResult)
interface AddSoundResult {
    success: boolean;
    message?: string;
    error?: string;
    predictionId?: string; // ID de la tâche Replicate
    generatedVideoId?: string; // ID de la *nouvelle* entrée en base de données pour la vidéo avec son
}

export async function addSoundToVideoAction(
    params: AddSoundParams
): Promise<AddSoundResult> {
    console.log("Server Action: addSoundToVideoAction invoked");

    // 1. Authentification
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) {
        console.error("Server Action Error: User not authenticated");
        return { success: false, error: "Utilisateur non authentifié." };
    }
    console.log("Server Action: User authenticated:", userId);

    // 2. Validation des prérequis (Clés API, Webhook Secret, NGROK_URL)
    if (!process.env.REPLICATE_API_TOKEN || !process.env.REPLICATE_WEBHOOK_SECRET || !process.env.NGROK_URL) {
         console.error("Server Action Error: Missing REPLICATE_API_TOKEN, REPLICATE_WEBHOOK_SECRET or NGROK_URL.");
         // En développement, on peut commenter cette vérification si NGROK n'est pas toujours actif
         // mais il faut une URL publique pour que le webhook Replicate fonctionne
         if (process.env.NODE_ENV === 'production') {
             return { success: false, error: "Configuration serveur incomplète." };
         } else {
             console.warn("Server Action Warning: NGROK_URL might be missing or incorrect for webhook delivery.");
             // Assurer une valeur par défaut pour éviter crash, même si le webhook ne marchera pas
             process.env.NGROK_URL = process.env.NGROK_URL || "http://localhost:3000";
         }
    }


    if (!params.sourceVideoUrl || !params.prompt || !params.sourceVideoId) {
        console.error("Server Action Error: Missing required parameters.");
        return { success: false, error: "Paramètres manquants (vidéo source, ID vidéo ou prompt)." };
    }

    try {
        // 3. Vérifier que la vidéo source existe et appartient à l'utilisateur
        const sourceVideo = await prisma.generatedVideo.findUnique({
            where: {
                id: params.sourceVideoId,
                userId: userId,
                status: AssetStatus.COMPLETED, // S'assurer que la vidéo source est prête
            }
        });

        if (!sourceVideo || !sourceVideo.videoUrl) { // Vérifier aussi videoUrl ici
            console.error("Server Action Error: Source video not found, not completed, or doesn't belong to user");
            return { success: false, error: "Vidéo source introuvable, incomplète ou non autorisée." };
        }
        // Utiliser l'URL de la DB qui est celle de Cloudinary
        const actualSourceVideoUrl = sourceVideo.videoUrl;

        // 4. Créer la *nouvelle* entrée pour la vidéo AVEC SON dans la DB (PENDING)
        // On copie certaines infos de la source, mais on marque le nouveau modèle et le lien vers le parent
        const newVideoWithSound = await prisma.generatedVideo.create({
            data: {
                status: AssetStatus.PENDING,
                prompt: params.prompt, // Ce prompt est pour le *son*
                title: sourceVideo.title ? `${sourceVideo.title} (avec son)` : `Vidéo avec son`, // Nouveau titre
                description: sourceVideo.description, // Copier la description ?
                modelUsed: "zsxkib/mmaudio", // Nom du modèle d'ajout de son
                parameters: {
                    sourcePrompt: sourceVideo.prompt, // Garder le prompt original de la vidéo
                    soundPrompt: params.prompt, // Le prompt utilisé pour le son
                    seed: params.seed ?? -1,
                    sourceVideoId: params.sourceVideoId, // Lien vers la vidéo parente
                },
                userId: userId,
                sourceImageId: sourceVideo.sourceImageId, // Garder le lien vers l'image d'origine
                // L'URL de la vidéo sera mise à jour par le webhook
                videoUrl: "",
                cloudinaryPublicId: null, // Sera mis à jour par le webhook
                duration: sourceVideo.duration, // Copier la durée ? (le modèle peut la changer ?)
                public: sourceVideo.public,
            }
        });

        console.log("Server Action: Created new GeneratedVideo entry for sound:", newVideoWithSound.id);

        // 5. Créer l'entrée de log de génération
        const generationLog = await prisma.generationLog.create({
             data: {
                 type: "VIDEO_ADD_SOUND",
                 prompt: params.prompt,
                 modelUsed: "zsxkib/mmaudio",
                 parameters: {
                     seed: params.seed ?? -1,
                     sourceVideoId: params.sourceVideoId,
                 },
                 status: AssetStatus.PENDING,
                 userId: userId,
                 // Associer au nouveau record vidéo créé
                 generatedVideoId: newVideoWithSound.id,
             }
         });

        console.log("Server Action: Created generation log:", generationLog.id);


        // 6. Préparer l'URL du webhook (identique à avant, passe l'userId)
        const webhookUrl = new URL(`${process.env.NGROK_URL}/api/webhooks/replicate`);
        webhookUrl.searchParams.set('secret', process.env.REPLICATE_WEBHOOK_SECRET as string);
        webhookUrl.searchParams.set('userId', userId);
        console.log("Server Action: Webhook URL:", webhookUrl.toString());

        // 7. Préparer l'entrée pour le modèle Replicate 'zsxkib/mmaudio'
        const modelInput = {
            video: actualSourceVideoUrl, // Utiliser l'URL Cloudinary de la vidéo source
            prompt: params.prompt,
            seed: params.seed ?? -1,
        };
        console.log("Server Action: Prepared mmaudio model input:", modelInput);

        // 8. Appeler l'API Replicate
        const prediction = await replicate.predictions.create({
            version: "62871fb59889b2d7c13777f08deb3b36bdff88f7e1d53a50ad7694548a41b484", // <-- Le HASH va dans 'version'
            input: modelInput,
            webhook: webhookUrl.toString(),
            webhook_events_filter: ["completed"]
            // Pas besoin de 'model: "zsxkib/mmaudio"' ici, la version suffit
        });
        console.log("Server Action: Created Replicate prediction:", prediction.id);

        // 9. Mettre à jour la *nouvelle* vidéo et le log avec l'ID de prédiction Replicate et statut PROCESSING
        await prisma.generatedVideo.update({
            where: { id: newVideoWithSound.id },
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
        console.log("Server Action: Updated new video and log with prediction ID");

        // 10. Retourner le résultat
        return {
            success: true,
            message: "Ajout du son à la vidéo lancée. Vous recevrez une notification lorsque ce sera prêt.",
            predictionId: prediction.id,
            generatedVideoId: newVideoWithSound.id // ID de la NOUVELLE entrée vidéo
        };

    } catch (error) {
        console.error("Server Action Error:", error);
        // Si une erreur survient après la création en DB, on pourrait vouloir passer le statut en FAILED
        // mais c'est complexe à gérer proprement ici. Le webhook gérera les échecs de Replicate.
        return {
            success: false,
            error: error instanceof Error ? error.message : "Erreur lors de l'ajout du son."
        };
    }
}