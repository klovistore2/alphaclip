// components/image-thumbnail.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// Importer la nouvelle icône
import { MoreHorizontal, Maximize, PencilLine, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { TypeDictionary, Localy } from "@/app/[lang]/dictionaries"

interface ImageThumbnailProps {
  id: string
  url: string
  // Modifier title pour accepter null, comme dans notre page galerie
  title: string | null;
  lang: Localy;
  dictionary?: TypeDictionary;
}

export function ImageThumbnail({ id, url, title, lang, dictionary }: ImageThumbnailProps) {
  const router = useRouter()
  const [showFullImage, setShowFullImage] = useState(false)
  
  // Utiliser directement le dictionnaire passé en prop
  const dict = dictionary

  // Renommer la fonction pour plus de clarté et Mettre à jour le chemin
  const openInVariationPlayground = () => {
    // Navigue vers la page Scribble en passant l'ID du dessin
    router.push(`/${lang}/dashboard/image2image/variation/${id}`)
  }

  const openInVideoPlayground = () => {
    // Navigue vers la page Scribble en passant l'ID du dessin
    router.push(`/${lang}/dashboard/videogenerate/image2video/${id}`)
  }

  const downloadImage = () => {
    const link = document.createElement("a")
    link.href = url
    // Utiliser un nom de fichier par défaut si title est null
    const downloadTitle = title || `image-${id}`;
    link.download = `${downloadTitle.toLowerCase().replace(/\s+/g, "-")}.png` // Ou autre extension si connue
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Utiliser un titre par défaut si null pour l'affichage
  const displayTitle = title || (dict?.gallery?.thumbnail?.untitled || "Sans titre");
  
  // Valeurs par défaut si dict n'est pas fourni
  const texts = {
    view_full: dict?.gallery?.thumbnail?.view_full || "Voir en grand",
    open_in_variation: dict?.gallery?.thumbnail?.open_in_variation || "Ouvrir dans Variation",
    open_in_image2video: dict?.gallery?.thumbnail?.open_in_image2video || "Ouvrir dans Image2Video",
    download: dict?.gallery?.thumbnail?.download || "Télécharger",
    options: dict?.gallery?.thumbnail?.options || "Options"
  };

  return (
    <>
      <Card className="overflow-hidden group relative">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            {/* Utilise displayTitle pour l'attribut alt */}
            <Image
                src={url || "/placeholder.svg"}
                alt={displayTitle}
                // Remplacer layout="fill" par width/height si les dimensions sont connues ou souhaitées
                // Ou garder fill mais s'assurer que le parent a une taille définie
                width={400}
                height={225} // exemple pour un ratio 16:9
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg?text=Error'; }}
             />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">{texts.options}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setShowFullImage(true)}>
                    <Maximize className="mr-2 h-4 w-4" />
                    <span>{texts.view_full}</span>
                  </DropdownMenuItem>
                  {/* --- Modification ici --- */}
                  <DropdownMenuItem onClick={openInVariationPlayground}>
                    <PencilLine className="mr-2 h-4 w-4" />
                    <span>{texts.open_in_variation}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={openInVideoPlayground}>
                    <PencilLine className="mr-2 h-4 w-4" />
                    <span>{texts.open_in_image2video}</span>
                  </DropdownMenuItem>
                  {/* --- Fin Modification --- */}
                  <DropdownMenuItem onClick={downloadImage}>
                    <Download className="mr-2 h-4 w-4" />
                    <span>{texts.download}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                   {/* Ajoutez d'autres options si nécessaire */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
        <div className="p-3 border-t"> {/* Ajout de border-t pour séparer */}
           {/* Utilise displayTitle */}
          <h3 className="font-medium truncate text-sm">{displayTitle}</h3>
        </div>
      </Card>

      {/* Boîte de Dialogue (Dialog) */}
      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
             {/* Utilise displayTitle */}
            <DialogTitle>{displayTitle}</DialogTitle>
             {/* Description peut être retirée ou adaptée */}
            {/* <DialogDescription> ... </DialogDescription> */}
          </DialogHeader>
          <div className="mt-4 flex justify-center max-h-[75vh] overflow-auto"> {/* Ajout de max-h et overflow */}
             {/* Utilise displayTitle */}
            <Image
                src={url || "/placeholder.svg"}
                alt={displayTitle}
                width={1200} // Augmenter la taille pour le dialog
                height={800}
                className="object-contain rounded-md" // garder contain
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg?text=Error'; }}
            />
          </div>
          {/* Déplacer les boutons dans DialogFooter pour une meilleure structure */}
           <div className="flex justify-end items-center gap-2 mt-4 pt-4 border-t">
                {/* --- Modification ici --- */}
                <Button variant="outline" size="sm" onClick={openInVariationPlayground}>
                    <PencilLine className="mr-2 h-4 w-4" />
                    {texts.open_in_variation}
                </Button>

                <Button variant="outline" size="sm" onClick={openInVideoPlayground}>
                    <PencilLine className="mr-2 h-4 w-4" />
                    {texts.open_in_image2video}
                </Button>

                 {/* --- Fin Modification --- */}
                <Button variant="outline" size="sm" onClick={downloadImage}>
                  <Download className="mr-2 h-4 w-4" />
                  {texts.download}
                </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}