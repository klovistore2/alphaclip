import { Suspense } from 'react';
import { SidebarInset } from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";
import VideoGallery from './video-gallery';

export default function VideosGalleryPage() {
  return (
    <SidebarInset>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin mr-2" />
          <span>Chargement de la galerie...</span>
        </div>
      }>
        <VideoGallery />
      </Suspense>
    </SidebarInset>
  );
}