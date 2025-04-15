"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MoreHorizontal, Maximize, Download, Play, Video } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import Image from "next/image"

interface VideoThumbnailProps {
  id: string
  videoUrl: string
  title: string | null
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  createdAt: string
  lang: string
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

// Récupérer une image pour les vignettes de vidéo (utilisation du premier frame)
const getVideoPoster = (videoUrl: string) => {
  // Pour Cloudinary, on peut ajouter des transformations pour obtenir un poster
  try {
    const urlParts = videoUrl.split('/upload/');
    if (urlParts.length === 2) {
      return `${urlParts[0]}/upload/so_0/${urlParts[1].replace(/\.[^/.]+$/, '.jpg')}`;
    }
    return videoUrl;
  } catch (err) {
    console.error('Erreur lors de la génération du poster:', err);
    return videoUrl;
  }
};

export function VideoThumbnail({ id, videoUrl, title, status, createdAt, lang }: VideoThumbnailProps) {
  const router = useRouter()
  const [showFullVideo, setShowFullVideo] = useState(false)

  // Navigation vers les différentes fonctionnalités
  const openVideoDetail = () => {
    router.push(`/${lang}/dashboard/gallery/videos/${id}`)
  }

  const openInVideo2Video = () => {
    router.push(`/${lang}/dashboard/videogenerate/video2video/${id}`)
  }

  const openInVideo2Audio = () => {
    router.push(`/${lang}/dashboard/audiogenerate/video2audio/${id}`)
  }

  const downloadVideo = () => {
    if (status !== 'COMPLETED') return;
    
    const link = document.createElement("a")
    link.href = videoUrl
    const downloadTitle = title || `video-${id}`
    link.download = `${downloadTitle.toLowerCase().replace(/\s+/g, "-")}.mp4`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date)
  }

  // Utiliser un titre par défaut si null pour l'affichage
  const displayTitle = title || "Vidéo sans titre"

  // Affichage conditionnel selon le statut
  const statusDisplay = {
    COMPLETED: { text: "Terminé", variant: "default" as const },
    PROCESSING: { text: "En cours", variant: "secondary" as const },
    PENDING: { text: "En attente", variant: "outline" as const },
    FAILED: { text: "Échec", variant: "destructive" as const }
  }

  return (
    <>
      <Card className="overflow-hidden group relative">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            {status === 'COMPLETED' ? (
              <Image
                src={getVideoPoster(videoUrl)}
                alt={displayTitle}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg?text=Video'; }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <Video className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            
            <Badge 
              className="absolute top-2 right-2"
              variant={statusDisplay[status].variant}
            >
              {statusDisplay[status].text}
            </Badge>
            
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {status === 'COMPLETED' && (
                    <>
                      <DropdownMenuItem onClick={() => setShowFullVideo(true)}>
                        <Maximize className="mr-2 h-4 w-4" />
                        <span>Voir la vidéo</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={openVideoDetail}>
                        <Play className="mr-2 h-4 w-4" />
                        <span>Voir les détails</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={openInVideo2Video}>
                    <Video className="mr-2 h-4 w-4" />
                    <span>Ouvrir dans Video2Video</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={openInVideo2Audio}>
                    <Video className="mr-2 h-4 w-4" />
                    <span>Générer de l audio</span>
                  </DropdownMenuItem>
                  {status === 'COMPLETED' && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={downloadVideo}>
                        <Download className="mr-2 h-4 w-4" />
                        <span>Télécharger</span>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {status === 'COMPLETED' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={() => setShowFullVideo(true)}
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
        <div className="p-3 border-t">
          <h3 className="font-medium truncate text-sm">{displayTitle}</h3>
          <p className="text-xs text-muted-foreground mt-1">{formatDate(createdAt)}</p>
        </div>
      </Card>

      {/* Modal pour afficher la vidéo en grand */}
      <Dialog open={showFullVideo} onOpenChange={setShowFullVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{displayTitle}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 aspect-video bg-black overflow-hidden rounded">
            <CldVideoPlayer
              width="100%"
              height="100%"
              src={getCloudinaryId(videoUrl)}
              colors={{
                accent: '#0099ff',
                base: '#333333',
                text: '#ffffff'
              }}
              autoPlay
              controls
            />
          </div>
          <div className="flex flex-wrap justify-end items-center gap-2 mt-4 pt-4 border-t">
            <Button variant="outline" size="sm" onClick={openInVideo2Video}>
              <Video className="mr-2 h-4 w-4" />
              Ouvrir dans Video2Video
            </Button>
            <Button variant="outline" size="sm" onClick={openInVideo2Audio}>
              <Video className="mr-2 h-4 w-4" />
              Générer de l audio
            </Button>
            <Button variant="outline" size="sm" onClick={downloadVideo}>
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}