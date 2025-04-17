// app/[lang]/dashboard/improvevideo/extendvideo/[video]/page.tsx

import { notFound } from 'next/navigation';
import { getDictionary, Localy } from '@/app/[lang]/dictionaries';
import { prisma } from '@/lib/prisma';
import { AssetStatus } from '@prisma/client';
import { auth } from '@/lib/auth';

// Client components
import ExtendVideoClient from './extend-video-client';

export const dynamic = 'force-dynamic';

async function getSourceVideo(videoId: string) {
  try {
    const session = await auth();
    if (!session?.user?.id) return null;

    // Find the video (doesn't have to belong to the current user)
    const video = await prisma.generatedVideo.findUnique({
      where: {
        id: videoId,
        status: AssetStatus.COMPLETED, // Ensure it's a completed video
      }
    });

    return video;
  } catch (error) {
    console.error("Error fetching source video:", error);
    return null;
  }
}

export default async function ExtendVideoPage({ params }: {
  params: Promise<{ lang: Localy; video: string }>
}) {
  const { lang, video: videoId } = await params;
  const dict = await getDictionary(lang);
  
  const sourceVideo = await getSourceVideo(videoId);
  
  // If video doesn't exist or is not in COMPLETED status, return 404
  if (!sourceVideo) {
    notFound();
  }
  
  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-4">{dict.extend_video.title}</h1>
      <p className="text-gray-500 mb-8">{dict.extend_video.description}</p>
      
      <ExtendVideoClient 
        sourceVideo={sourceVideo} 
        dict={dict.extend_video}
      />
    </div>
  );
}