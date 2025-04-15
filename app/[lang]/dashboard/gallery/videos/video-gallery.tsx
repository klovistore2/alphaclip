"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Loader2, AlertTriangle } from "lucide-react";
import { VideoThumbnail } from "@/components/video-thumbnail";

type Language = 'en' | 'fr';

// Type pour les vidéos générées
interface GeneratedVideo {
  id: string;
  videoUrl: string;
  prompt: string | null;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
  title: string | null;
}

export default function VideoGallery() {
  const params = useParams();
  const lang = params.lang as Language;
  
  // États
  const [videos, setVideos] = useState<GeneratedVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les vidéos
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/videos');
        
        if (!response.ok) {
          throw new Error(`Erreur de chargement: ${response.statusText}`);
        }
        
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error('Erreur lors du chargement des vidéos:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchVideos();
  }, []);

  // Formatage de la date
  //const formatDate = (dateString: string) => {
  //  const date = new Date(dateString);
  //  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
  //    day: '2-digit',
  //    month: 'short',
  //    year: 'numeric',
  //  }).format(date);
  //};

  // Récupérer une image pour les vignettes de vidéo (utilisation du premier frame)
  //const getVideoPoster = (videoUrl: string) => {
  //  if (!videoUrl) return '';
    
    // Pour Cloudinary, on peut ajouter des transformations pour obtenir un poster
    // https://res.cloudinary.com/cloud_name/video/upload/v1234567890/video_id.mp4
    // devient
    // https://res.cloudinary.com/cloud_name/video/upload/so_0/v1234567890/video_id.jpg
  //  try {
  //    const urlParts = videoUrl.split('/upload/');
  //    if (urlParts.length === 2) {
  //      return `${urlParts[0]}/upload/so_0/${urlParts[1].replace(/\.[^/.]+$/, '.jpg')}`;
  //    }
  //    return videoUrl;
  //  } catch (err) {
  //    console.error('Erreur lors de la génération du poster:', err);
  //    return videoUrl;
  //  }
  //};

  return (
    <>
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href={`/${lang}/dashboard`}>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${lang}/dashboard/gallery/image`}>Galerie</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Vidéos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Contenu Principal */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          {/* Titre */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Mes Vidéos</h1>
            <p className="text-muted-foreground">Vidéos générées à partir de vos images.</p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="h-8 w-8 animate-spin mr-2" />
              <span>Chargement des vidéos...</span>
            </div>
          ) : error ? (
            <div className="bg-destructive/10 p-4 rounded-md flex items-center text-destructive">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoThumbnail
                  key={video.id}
                  id={video.id}
                  videoUrl={video.videoUrl}
                  title={video.title || video.prompt}
                  status={video.status}
                  createdAt={video.createdAt}
                  lang={lang}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Aucune vidéo trouvée</h3>
              <p className="text-center text-muted-foreground">
                Vous n avez pas encore généré de vidéos. Utilisez la section Image vers Vidéo pour créer vos premières vidéos.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}