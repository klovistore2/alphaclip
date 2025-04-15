// app/[lang]/dashboard/gallery/image/page.tsx
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Separator } from "@/components/ui/separator"
  import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
  import { ImageThumbnail } from "@/components/image-thumbnailGenerated"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { prisma } from "@/lib/prisma";
  import { auth } from "@/lib/auth";
  // Importer les deux types
  import type { Drawing, GeneratedImage } from "@prisma/client";
  
  type Language = 'en' | 'fr';
  
  // --- Fonction pour récupérer les dessins ---
  async function getUserDrawings(userId: string): Promise<Drawing[]> {
    if (!userId) return [];
    try {
        const drawings = await prisma.drawing.findMany({
            where: { userId: userId, isDeleted: false },
            orderBy: { createdAt: 'desc' },
        });
        return drawings;
    } catch (error) {
        console.error("Failed to fetch user drawings:", error);
        return [];
    }
  }
  
  // --- Fonction pour récupérer les images générées ---
  async function getUserGeneratedImages(userId: string): Promise<GeneratedImage[]> {
      if (!userId) return [];
      try {
          const generatedImages = await prisma.generatedImage.findMany({
              where: { userId: userId, isDeleted: false },
              orderBy: { createdAt: 'desc' },
              // --- Correction : Clause SELECT supprimée ---
              // select: { ... } // Supprimé pour retourner l'objet complet
          });
          return generatedImages; // Retourne maintenant des objets GeneratedImage complets
      } catch (error) {
          console.error("Failed to fetch user generated images:", error);
          return [];
      }
  }
 
export default async function GalleryPage({ // Renommé de HistoryPage à GalleryPage pour plus de clarté

    params,
    
    }: {
    
    params: Promise<{ lang: Language }>
    
    }) {
    
    
    
    const { lang } = await params;
  
      const session = await auth();
      const userId = session?.user?.id;
  
      // --- Correction : Récupérer les deux types de données et les assigner ---
      let drawings: Drawing[] = [];
      let generatedImages: GeneratedImage[] = []; // Déclarer la variable ici
  
      if (userId) {
          // Utiliser Promise.all pour les requêtes parallèles
          try {
              [drawings, generatedImages] = await Promise.all([
                  getUserDrawings(userId),
                  getUserGeneratedImages(userId)
              ]);
          } catch (error) {
              console.error("Error fetching gallery data:", error);
              // Gérer l'erreur de fetch global si nécessaire
          }
      } else {
          console.warn("User not logged in, cannot fetch data.");
      }
      // ---------------------------------------------------------------------
  
      return (
        <SidebarInset>
            {/* Header */}
            <header className="flex h-16 shrink-0 items-center justify-between">
                 <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block"> <BreadcrumbLink href={`/${lang}/dashboard`}>Dashboard</BreadcrumbLink> </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem> <BreadcrumbPage>Galerie</BreadcrumbPage> </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
  
            {/* Contenu Principal */}
            <div className="flex flex-1 flex-col p-6">
                <div className="mx-auto w-full max-w-6xl space-y-6">
                    {/* Titre */}
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Galerie</h1>
                        <p className="text-muted-foreground">Vos créations et images générées.</p>
                    </div>
  
                    {/* Accordéon principal */}
                    {/* 'defaultValue' peut être un tableau si type="multiple" */}
                    <Accordion type="multiple" defaultValue={['item-drawings', 'item-generated-images']} className="w-full space-y-4">
  
                        {/* --- Section Dessins --- */}
                        <AccordionItem value="item-drawings">
                            <AccordionTrigger className="text-xl font-semibold border rounded-md px-4 hover:bg-muted/50 data-[state=open]:bg-muted/50">
                                Mes Dessins ({drawings.length})
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                                {drawings.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {drawings.map((drawing) => ( /* ... mapping des dessins ... */
                                            drawing.previewUrl ? (
                                                <ImageThumbnail key={drawing.id} id={drawing.id} url={drawing.previewUrl} title={drawing.title} lang={lang} />
                                            ) : (
                                                <div key={drawing.id} className="aspect-video bg-muted ..."> Preview indisponible ... </div>
                                            )
                                        ))}
                                    </div>
                                ) : (

                                    // Message si aucun dessin n'est trouvé
                                    
                                    <p className="text-muted-foreground pt-4">
                                    
                                    {userId ? "Vous n'avez pas encore de dessins enregistrés." : "Connectez-vous pour voir vos dessins."}
                                    
                                    </p>
                                    
                                    )}
                            </AccordionContent>
                        </AccordionItem>
  
                        {/* --- Section Images Générées --- */}
                        <AccordionItem value="item-generated-images">
                             {/* Utilisation de la variable 'generatedImages' maintenant déclarée */}
                             <AccordionTrigger className="text-xl font-semibold border rounded-md px-4 hover:bg-muted/50 data-[state=open]:bg-muted/50">
                                Mes Images Générées ({generatedImages.length})
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                                {generatedImages.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {generatedImages.map((image) => ( /* ... mapping des images générées ... */
                                            image.imageUrl ? (
                                                <ImageThumbnail
                                                    key={image.id}
                                                    id={image.id}
                                                    url={image.imageUrl}
                                                    title={image.prompt ? (image.prompt.length > 50 ? image.prompt.substring(0, 47) + "..." : image.prompt) : (image.modelUsed || "Image générée")}
                                                    lang={lang}
                                                />
                                            ) : (
                                                 <div key={image.id} className="aspect-video bg-muted ..."> Image indisponible </div>
                                            )
                                        ))}
                                    </div>
                                ) : (

                                    // Message si aucun dessin n'est trouvé
                                    
                                    <p className="text-muted-foreground pt-4">
                                    
                                    {userId ? "Vous n'avez pas encore généré d'images." : "Connectez-vous pour voir vos dessins."}
                                    
                                    </p>
                                    
                                    )}
                            </AccordionContent>
                        </AccordionItem>
  
                    </Accordion>
                </div>
            </div>
        </SidebarInset>
    )
  }