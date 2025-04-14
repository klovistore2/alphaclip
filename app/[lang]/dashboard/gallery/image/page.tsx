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
import { ImageThumbnail } from "@/components/image-thumbnail"
// --- Importer les composants Accordion ---
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// --- Importer Prisma et Auth ---
import { prisma } from "@/lib/prisma"; // Vérifiez le chemin
import { auth } from "@/lib/auth";   // Vérifiez le chemin
import type { Drawing } from "@prisma/client"; // Importer le type Drawing si besoin

// Type pour la langue (à ajuster si nécessaire)
type Language = 'en' | 'fr';

// --- Fonction pour récupérer les dessins de l'utilisateur ---
async function getUserDrawings(userId: string): Promise<Drawing[]> {
  if (!userId) {
      return []; // Retourne un tableau vide si pas d'ID utilisateur
  }
  try {
      const drawings = await prisma.drawing.findMany({
          where: {
              userId: userId,
              isDeleted: false, // Optionnel: ne pas afficher les "supprimés"
          },
          orderBy: {
              createdAt: 'desc', // Afficher les plus récents en premier
          },
          // Select seulement les champs nécessaires si besoin d'optimiser
          // select: { id: true, title: true, previewUrl: true, createdAt: true }
      });
      return drawings;
  } catch (error) {
      console.error("Failed to fetch user drawings:", error);
      return []; // Retourne un tableau vide en cas d'erreur
  }
}


export default async function GalleryPage({ // Renommé de HistoryPage à GalleryPage pour plus de clarté
  params,
}: {
  params: Promise<{ lang: Language }>
}) {

  const { lang } = await params;

  // --- Récupérer la session et l'ID utilisateur ---
  const session = await auth();
  const userId = session?.user?.id;

  // --- Récupérer les dessins ---
  let drawings: Drawing[] = [];
  if (userId) {
      drawings = await getUserDrawings(userId);
  } else {
      // Gérer le cas non connecté ? Redirection ? Message ?
      // Pour l'instant, on affiche juste la page vide si pas connecté.
      console.warn("User not logged in, cannot fetch drawings.");
  }

  return (
      <SidebarInset>
          {/* Header (peut être adapté) */}
          <header className="flex h-16 shrink-0 items-center justify-between">
               {/* ... Contenu du header existant ... */}
               <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                      <BreadcrumbList>
                          <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink href={`/${lang}/dashboard`}>Dashboard</BreadcrumbLink> {/* Lien adapté */}
                          </BreadcrumbItem>
                          <BreadcrumbSeparator className="hidden md:block" />
                          <BreadcrumbItem>
                              <BreadcrumbPage>Galerie</BreadcrumbPage> {/* Nom adapté */}
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>
              </div>
          </header>

          {/* Contenu Principal */}
          <div className="flex flex-1 flex-col p-6">
              <div className="mx-auto w-full max-w-6xl space-y-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                          {/* Titre de la page */}
                          <h1 className="text-3xl font-bold tracking-tight">Galerie</h1>
                          <p className="text-muted-foreground">Vos créations et images générées.</p>
                      </div>
                  </div>

                  {/* --- Section Accordéon pour les dessins --- */}
                  <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger className="text-xl font-semibold">
                              Mes Dessins ({drawings.length}) {/* Affiche le nombre de dessins */}
                          </AccordionTrigger>
                          <AccordionContent>
                              {drawings.length > 0 ? (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                                      {drawings.map((drawing) => (
                                          // Vérifie si previewUrl existe avant d'afficher
                                          drawing.previewUrl ? (
                                              <ImageThumbnail
                                                  key={drawing.id}
                                                  id={drawing.id}
                                                  // Utilise previewUrl comme source de l'image
                                                  url={drawing.previewUrl}
                                                  // Utilise le titre du dessin ou un placeholder
                                                  title={drawing.title || "Dessin sans titre"}
                                                  lang={lang}
                                                  // On pourrait ajouter d'autres infos ici plus tard (date, etc.)
                                                  // Ou un lien vers une page de détail/édition
                                              />
                                          ) : (
                                              // Optionnel: Afficher un placeholder si pas de preview
                                              <div key={drawing.id} className="aspect-video bg-muted rounded-md flex items-center justify-center text-sm text-muted-foreground">
                                                 Preview indisponible <br/> ({drawing.title || "Dessin sans titre"})
                                              </div>
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
                      {/* --- Fin Section Accordéon Dessins --- */}


                      {/* --- Vous pourrez ajouter d'autres AccordionItem ici --- */}
                      {/* Exemple:
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Mes Images Générées (IA)</AccordionTrigger>
                          <AccordionContent>
                              Contenu pour les images générées...
                          </AccordionContent>
                      </AccordionItem>
                      */}

                  </Accordion>
              </div>
          </div>
      </SidebarInset>
  )
}