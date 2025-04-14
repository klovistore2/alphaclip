"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MoreHorizontal, Maximize, Palette, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageThumbnailProps {
  id: string
  url: string
  title: string
  lang: string
}

export function ImageThumbnail({ id, url, title, lang }: ImageThumbnailProps) {
  const router = useRouter()
  const [showFullImage, setShowFullImage] = useState(false)

  const openInPlayground = () => {
    router.push(`/${lang}/p/playground-ai/${id}`)
  }



  const downloadImage = () => {
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Card className="overflow-hidden group relative">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            <Image src={url || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
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
                    <span className="sr-only">Options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setShowFullImage(true)}>
                    <Maximize className="mr-2 h-4 w-4" />
                    <span>View full size</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={openInPlayground}>
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Open in Playground</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={downloadImage}>
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
        <div className="p-3">
          <h3 className="font-medium truncate">{title}</h3>
        </div>
      </Card>

      <Dialog open={showFullImage} onOpenChange={setShowFullImage}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              <div className="flex justify-between items-center mt-2">
                <Button variant="outline" size="sm" onClick={openInPlayground}>
                  <Palette className="mr-2 h-4 w-4" />
                  Open in Playground
                </Button>
                <Button variant="outline" size="sm" onClick={downloadImage}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Image src={url || "/placeholder.svg"} alt={title} className="max-h-[70vh] object-contain rounded-md" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
