"use client";

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Play, AlertTriangle } from "lucide-react";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

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

export default function VideoGalleryContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const lang = params.lang as Language;
  
  // Récupérer l'ID de la vidéo spécifiée dans l'URL
  const videoIdParam = searchParams.get('video');

  // États
  const [videos, setVideos] = useState<GeneratedVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GeneratedVideo | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

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
        
        // Si un ID de vidéo est spécifié dans l'URL, sélectionner cette vidéo
        if (videoIdParam) {
          const video = data.find((v: GeneratedVideo) => v.id === videoIdParam);
          if (video) {
            setSelectedVideo(video);
            if (video.status === 'COMPLETED' && video.videoUrl) {
              setShowPlayer(true);
            }
          }
        }
      } catch (err) {
        console.error('Erreur lors du chargement des vidéos:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchVideos();
  }, [videoIdParam]);

  // Fonction pour sélectionner une vidéo
  const handleSelectVideo = (video: GeneratedVideo) => {
    setSelectedVideo(video);
    if (video.status === 'COMPLETED' && video.videoUrl) {
      setShowPlayer(true);
    } else {
      setShowPlayer(false);
    }
  };

  // Formatage de la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Fonction pour extraire l'ID Cloudinary d'une URL
  const getCloudinaryId = (url: string) => {
    // Les URL Cloudinary sont de la forme: 
    // https://res.cloudinary.com/cloud_name/video/upload/v1234567890/video_id.mp4
    try {
      const parts = url.split('/');
      const filename = parts[parts.length - 1];
      return filename.split('.')[0]; // Retourne l'ID sans l'extension
    } catch (err) {
      console.error('Erreur lors de l\'extraction de l\'ID Cloudinary:', err);
      return '';
    }
  };

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
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Liste des vidéos */}
              <div className="md:col-span-1 space-y-4">
                <h2 className="text-xl font-semibold">Vidéos ({videos.length})</h2>
                
                {videos.length > 0 ? (
                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                    {videos.map((video) => (
                      <Card 
                        key={video.id} 
                        className={`cursor-pointer hover:bg-accent/50 transition-colors ${selectedVideo?.id === video.id ? 'border-primary bg-accent/50' : ''}`}
                        onClick={() => handleSelectVideo(video)}
                      >
                        <CardContent className="p-3">
                          <div className="flex justify-between items-start gap-2">
                            <div className="flex-1">
                              <h3 className="font-medium line-clamp-1">
                                {video.title || video.prompt || "Vidéo sans titre"}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {formatDate(video.createdAt)}
                              </p>
                            </div>
                            <Badge variant={
                              video.status === 'COMPLETED' ? 'default' :
                              video.status === 'PROCESSING' ? 'secondary' :
                              video.status === 'PENDING' ? 'outline' : 'destructive'
                            }>
                              {video.status === 'COMPLETED' ? 'Terminé' :
                               video.status === 'PROCESSING' ? 'En cours' :
                               video.status === 'PENDING' ? 'En attente' : 'Échec'}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground py-6 text-center border rounded-md">
                    Vous n avez pas encore généré de vidéos.
                  </p>
                )}
              </div>

              {/* Affichage de la vidéo sélectionnée */}
              <div className="md:col-span-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {selectedVideo ? (
                      <div>
                        {/* Lecteur vidéo (quand la vidéo est prête) */}
                        {showPlayer && selectedVideo.videoUrl ? (
                          <div className="aspect-video bg-background">
                            <CldVideoPlayer
                              width="100%"
                              height="100%"
                              src={getCloudinaryId(selectedVideo.videoUrl)}
                              colors={{
                                accent: '#0099ff',
                                base: '#333333',
                                text: '#ffffff'
                              }}
                              autoPlay
                              loop
                              controls
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-muted flex flex-col items-center justify-center p-6">
                            {selectedVideo.status === 'FAILED' ? (
                              <>
                                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                                <h3 className="text-lg font-medium text-destructive">Échec de la génération</h3>
                                <p className="text-center text-muted-foreground mt-2">
                                  La génération de cette vidéo a échoué. Veuillez réessayer.
                                </p>
                              </>
                            ) : (
                              <>
                                <Loader2 className="h-12 w-12 animate-spin mb-4" />
                                <h3 className="text-lg font-medium">Vidéo en cours de génération</h3>
                                <p className="text-center text-muted-foreground mt-2">
                                  La génération peut prendre plusieurs minutes. Vérifiez ultérieurement.
                                </p>
                              </>
                            )}
                          </div>
                        )}

                        {/* Informations sur la vidéo */}
                        <div className="p-4 space-y-2">
                          <h2 className="text-xl font-semibold">
                            {selectedVideo.title || "Vidéo générée"}
                          </h2>
                          {selectedVideo.prompt && (
                            <p className="text-muted-foreground text-sm italic">
                              {selectedVideo.prompt}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline">
                              Créée le {formatDate(selectedVideo.createdAt)}
                            </Badge>
                            <Badge variant={
                              selectedVideo.status === 'COMPLETED' ? 'default' :
                              selectedVideo.status === 'PROCESSING' ? 'secondary' :
                              selectedVideo.status === 'PENDING' ? 'outline' : 'destructive'
                            }>
                              {selectedVideo.status === 'COMPLETED' ? 'Terminé' :
                               selectedVideo.status === 'PROCESSING' ? 'En cours' :
                               selectedVideo.status === 'PENDING' ? 'En attente' : 'Échec'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-muted flex flex-col items-center justify-center p-6">
                        <Play className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">Aucune vidéo sélectionnée</h3>
                        <p className="text-center text-muted-foreground mt-2">
                          Sélectionnez une vidéo dans la liste pour la visualiser.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}