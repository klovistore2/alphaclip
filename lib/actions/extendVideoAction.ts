'use server';

import Replicate from "replicate";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AssetStatus } from "@prisma/client";
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Interface for input parameters
interface ExtendVideoParams {
  sourceVideoId: string; // ID of the source video in our DB
  sourceVideoUrl: string; // Cloudinary URL of the source video
  prompt: string; // Prompt to generate the extension
  seed?: number; // Optional seed for generation
}

// Interface for return type
interface ExtendVideoResult {
  success: boolean;
  message?: string;
  error?: string;
  predictionId?: string; // Replicate task ID
  generatedVideoId?: string; // ID of the new DB entry for the extended video
}

// Extract a frame from a video for use as the starting point for video extension
// Try to get the last frame of the video using Cloudinary's position parameter "p_100"
async function getLastFrame(videoUrl: string): Promise<string> {
  try {
    // Method using Cloudinary's position parameter p_100 to get the last frame (100%)
    // This is more reliable than using so_ (start offset) which requires knowing the duration
    const imageUrl = videoUrl
      .replace('.mp4', '.jpg')
      .replace('/upload/', '/upload/w_1280,c_scale,p_100/');
    
    console.log("Server Action: Created last frame URL using p_100:", imageUrl);
    
    // Upload this as a separate image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(imageUrl, {
      resource_type: 'image' as const,
      folder: 'video_last_frames',
    });
    
    console.log("Server Action: Uploaded last frame as image:", uploadResult.secure_url);
    
    return uploadResult.secure_url;
  } catch (error) {
    console.error("Error extracting frame from video:", error);
    throw error;
  }
}

export async function extendVideoAction(
  params: ExtendVideoParams
): Promise<ExtendVideoResult> {
  console.log("Server Action: extendVideoAction invoked");

  // 1. Authentication
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    console.error("Server Action Error: User not authenticated");
    return { success: false, error: "User not authenticated." };
  }
  console.log("Server Action: User authenticated:", userId);

  // 2. Validate prerequisites (API Keys, Webhook Secret, NGROK_URL for webhook2)
  if (!process.env.REPLICATE_API_TOKEN || !process.env.REPLICATE_WEBHOOK_SECRET || !process.env.NGROK_URL) {
    console.error("Server Action Error: Missing REPLICATE_API_TOKEN, REPLICATE_WEBHOOK_SECRET or NGROK_URL.");
    // In development, we can comment this check if NGROK is not always active
    // but we need a public URL for the Replicate webhook to work
    if (process.env.NODE_ENV === 'production') {
      return { success: false, error: "Incomplete server configuration." };
    } else {
      console.warn("Server Action Warning: NGROK_URL might be missing or incorrect for webhook delivery.");
      // Ensure a default value to avoid crash, even if the webhook won't work
      process.env.NGROK_URL = process.env.NGROK_URL || "http://localhost:3000";
    }
  }

  if (!params.sourceVideoUrl || !params.sourceVideoId) {
    console.error("Server Action Error: Missing required parameters.");
    return { success: false, error: "Missing parameters (source video or video ID)." };
  }

  // The prompt is required
  if (!params.prompt) {
    console.error("Server Action Error: Missing prompt.");
    return { success: false, error: "Please provide a description for the video extension." };
  }

  try {
    // 3. Check if the source video exists (it doesn't have to belong to the user)
    const sourceVideo = await prisma.generatedVideo.findUnique({
      where: {
        id: params.sourceVideoId,
        status: AssetStatus.COMPLETED, // Ensure the source video is ready
      }
    });

    if (!sourceVideo || !sourceVideo.videoUrl) {
      console.error("Server Action Error: Source video not found or not completed");
      return { success: false, error: "Source video not found or incomplete." };
    }
    // Use the DB URL which is from Cloudinary
    const actualSourceVideoUrl = sourceVideo.videoUrl;

    // 4. Get the last frame of the video to use as the starting point for the extension
    const lastFrameUrl = await getLastFrame(actualSourceVideoUrl);
    console.log("Server Action: Got last frame URL:", lastFrameUrl);

    // 5. Create the new entry for the extended video in the DB (PENDING)
    const newExtendedVideo = await prisma.generatedVideo.create({
      data: {
        status: AssetStatus.PENDING,
        prompt: params.prompt,
        title: sourceVideo.title ? `${sourceVideo.title} (extended)` : "Extended video",
        description: sourceVideo.description,
        modelUsed: "minimax/video-01", // Using the same image-to-video model as in klingAction.ts
        parameters: {
          sourcePrompt: sourceVideo.prompt, // Keep the original video prompt
          extensionPrompt: params.prompt, // The prompt used for extension
          seed: params.seed ?? -1,
          sourceVideoId: params.sourceVideoId, // Link to the parent video
          lastFrameUrl: lastFrameUrl, // Store the last frame URL
        },
        userId: userId,
        sourceImageId: null, // No source image for this type
        videoUrl: "",
        cloudinaryPublicId: null, // Will be updated by the webhook
        duration: sourceVideo.duration ? sourceVideo.duration * 2 : null, // Approximate doubled duration
        public: sourceVideo.public,
        parentVideoId: sourceVideo.id, // Set parent video relationship
        sound: sourceVideo.sound, // Inherit sound property from source
      }
    });

    console.log("Server Action: Created new GeneratedVideo entry for extension:", newExtendedVideo.id);

    // 6. Create generation log entry
    const generationLog = await prisma.generationLog.create({
      data: {
        type: "VIDEO_EXTEND",
        prompt: params.prompt,
        modelUsed: "minimax/video-01",
        parameters: {
          seed: params.seed ?? -1,
          sourceVideoId: params.sourceVideoId,
          lastFrameUrl: lastFrameUrl,
        },
        status: AssetStatus.PENDING,
        userId: userId,
        generatedVideoId: newExtendedVideo.id,
        sourceVideoId: sourceVideo.id,
      }
    });

    console.log("Server Action: Created generation log:", generationLog.id);

    // 7. Prepare the webhook URL (with webhook2 path for extension processing)
    const webhookUrl = new URL(`${process.env.NGROK_URL}/api/webhooks/replicate/extend`);
    webhookUrl.searchParams.set('secret', process.env.REPLICATE_WEBHOOK_SECRET as string);
    webhookUrl.searchParams.set('userId', userId);
    webhookUrl.searchParams.set('sourceVideoId', sourceVideo.id); // Pass the source video ID for concatenation
    webhookUrl.searchParams.set('hasSound', sourceVideo.sound ? 'true' : 'false'); // Pass if source has sound
    console.log("Server Action: Webhook URL:", webhookUrl.toString());

    // 8. Prepare input for the Replicate image-to-video model (using minimax/video-01 format)
    const modelInput = {
      prompt: params.prompt,
      first_frame_image: lastFrameUrl, // Use the last frame as the starting point
      prompt_optimizer: true,
      num_frames: 24, // Default or adjust as needed
      fps: 6, // Default or adjust as needed
    };
    console.log("Server Action: Prepared image-to-video model input:", modelInput);

    // 9. Call Replicate API with the image-to-video model
    const prediction = await replicate.predictions.create({
      model: "minimax/video-01", // Use the same model as in klingAction.ts
      input: modelInput,
      webhook: webhookUrl.toString(),
      webhook_events_filter: ["completed"]
    });
    console.log("Server Action: Created Replicate prediction:", prediction.id);

    // 10. Update the new video and log with the Replicate prediction ID and set status to PROCESSING
    await prisma.generatedVideo.update({
      where: { id: newExtendedVideo.id },
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

    // 11. Return the result
    return {
      success: true,
      message: "Video extension started. You will receive a notification when it's ready.",
      predictionId: prediction.id,
      generatedVideoId: newExtendedVideo.id,
    };

  } catch (error) {
    console.error("Server Action Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error extending the video."
    };
  }
}
