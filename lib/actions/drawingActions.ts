// app/actions/drawingActions.ts
'use server';

import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';
import { prisma } from '@/lib/prisma'; // Assurez-vous que ce chemin est correct
import { auth } from '@/lib/auth'; // Assurez-vous que ce chemin est correct pour votre config NextAuth/Auth.js
import { Prisma } from '@prisma/client'; 
// --- Configuration Cloudinary ---
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // --- Fonctions utilitaires Cloudinary ---
  function bufferToStream(buffer: Buffer) {
    const readable = new Readable();
    readable.push(buffer);
    readable.push(null);
    return readable;
  }
  
  // Correction 2: Utiliser le type UploadApiResponse importé directement
  async function uploadImageToCloudinary(file: File): Promise<UploadApiResponse | undefined> {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
  
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'user_drawings', // Dossier spécifique pour les dessins
          resource_type: 'image',
        },
        (error, result) => {
          if (error) {
              console.error("Cloudinary Upload Error:", error);
              return reject(error);
          }
          resolve(result); // result est de type UploadApiResponse | undefined
        }
      );
      bufferToStream(buffer).pipe(stream);
    });
  }
  // -------------------------------------------------------------
  
  
  // --- Nouvelle Server Action pour Sauvegarder le Dessin ---
  export async function saveDrawingAction(
      imageDataFile: File,
      canvasStateJson?: string // Le JSON de l'état du canevas est optionnel
  ): Promise<{ success: boolean; drawingId?: string; error?: string }> // Type de retour
  {
      console.log("Server Action: saveDrawingAction invoked");
  
      const session = await auth();
      const userId = session?.user?.id;
  
      if (!userId) {
          console.error("Server Action Error: User not authenticated");
          return { success: false, error: "Utilisateur non authentifié." };
      }
       console.log("Server Action: User authenticated:", userId);
  
      try {
          console.log("Server Action: Uploading to Cloudinary...");
          const cloudinaryResult = await uploadImageToCloudinary(imageDataFile);
  
          if (!cloudinaryResult?.secure_url) {
               console.error("Server Action Error: Cloudinary upload failed or missing URL", cloudinaryResult);
               throw new Error("L'upload de l'image vers Cloudinary a échoué.");
          }
           console.log("Server Action: Cloudinary upload successful:", cloudinaryResult.secure_url);
  
          console.log("Server Action: Saving to database...");
          const newDrawing = await prisma.drawing.create({
              data: {
                  userId: userId,
                  title: `Dessin ${new Date().toLocaleTimeString()}`, // Titre par défaut
                  previewUrl: cloudinaryResult.secure_url,
                  // Correction 4: Utiliser Prisma.JsonNull
                  content: canvasStateJson ? JSON.parse(canvasStateJson) : Prisma.JsonNull,
                  status: 'DRAFT',
              }
          });
          console.log("Server Action: Database save successful, Drawing ID:", newDrawing.id);
  
          return { success: true, drawingId: newDrawing.id };
  
      } catch (error) {
          console.error("Server Action Error:", error);
          return { success: false, error: error instanceof Error ? error.message : "Une erreur serveur est survenue." };
      }
  }