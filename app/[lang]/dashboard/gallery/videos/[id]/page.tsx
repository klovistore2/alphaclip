"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { Loader2, ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface GeneratedVideo {
  id: string;
  videoUrl: string;
  prompt: string | null;
  title: string | null;
  createdAt: string;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
}

// Fonction pour extraire l'ID Cloudinary d'une URL
const getCloudinaryId = (url: string) => {
  try {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0]; // Retourne l'ID sans l'extension
  } catch (err) {
    console.error('Erreur lors de l\'extraction de l\'ID Cloudinary:', err);
    return '';
  }
};

export default function VideoDetailPage() {
  const params = useParams();
  const videoId = params.id as string;
  const lang = params.lang as string;
  
  const [video, setVideo] = useState<GeneratedVideo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideo() {
      if (!videoId) {
        setError('ID de vidéo non spécifié');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/videos/${videoId}`);
        
        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }
        
        const data = await response.json();
        setVideo(data);
      } catch (err) {
        console.error('Erreur lors du chargement de la vidéo:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchVideo();
  }, [videoId]);

  // Formatage de la date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <SidebarInset>
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
                <BreadcrumbLink href={`/${lang}/dashboard/gallery/videos`}>Vidéos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Détails</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Contenu Principal */}
      <div className="container mx-auto py-6 px-4">
        <Link href={`/${lang}/dashboard/gallery/videos`} className="inline-block mb-6">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux vidéos
          </Button>
        </Link>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin mr-3" />
            <span className="text-lg">Chargement de la vidéo...</span>
          </div>
        ) : error || !video ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-destructive">Erreur</CardTitle>
              <CardDescription>Impossible de charger cette vidéo</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{error || "Vidéo non trouvée ou inaccessible"}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {video.status === 'COMPLETED' ? (
                  <div className="aspect-video bg-black">
                    <CldVideoPlayer
                      width="100%"
                      height="100%"
                      src={getCloudinaryId(video.videoUrl)}
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
                  <div className="aspect-video bg-muted flex flex-col items-center justify-center p-8">
                    <Loader2 className="h-16 w-16 animate-spin mb-4" />
                    <h3 className="text-xl font-medium mb-2">
                      {video.status === 'PROCESSING' ? 'Vidéo en cours de génération' : 
                       video.status === 'PENDING' ? 'Vidéo en attente de traitement' : 
                       'Erreur lors de la génération de la vidéo'}
                    </h3>
                    <p className="text-center text-muted-foreground max-w-md">
                      {video.status === 'FAILED' ? 
                        "La génération de cette vidéo a échoué. Vous pouvez réessayer avec des paramètres différents." : 
                        "La génération de vidéo peut prendre plusieurs minutes. Revenez vérifier plus tard."}
                    </p>
                  </div>
                )}
              </CardContent>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">
                    {video.title || video.prompt || "Vidéo sans titre"}
                  </h1>
                  <Badge 
                    variant={
                      video.status === 'COMPLETED' ? 'default' :
                      video.status === 'PROCESSING' ? 'secondary' :
                      video.status === 'PENDING' ? 'outline' : 'destructive'
                    }
                  >
                    {video.status === 'COMPLETED' ? 'Terminé' :
                     video.status === 'PROCESSING' ? 'En cours' :
                     video.status === 'PENDING' ? 'En attente' : 'Échec'}
                  </Badge>
                </div>

                {video.prompt && (
                  <div className="mb-4 bg-muted p-4 rounded-md">
                    <h3 className="text-sm font-medium mb-1">Prompt utilisé:</h3>
                    <p className="text-muted-foreground italic">{video.prompt}</p>
                  </div>
                )}

                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  Créée le {formatDate(video.createdAt)}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </SidebarInset>
  );
}