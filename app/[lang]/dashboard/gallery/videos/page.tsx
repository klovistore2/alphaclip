// app/[lang]/dashboard/gallery/videos/page.tsx
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { VideoCard } from "@/components/video-card";
import { Terminal } from "lucide-react";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Localy, getDictionary } from "@/app/[lang]/dictionaries";

export default async function GalleryVideoPage({
  params,
}: {
  params: Promise<{ lang: Localy }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  // 1. Récupérer la session utilisateur côté serveur
  const session = await auth();
  
  // 2. Vérifier si l'utilisateur est connecté
  if (!session?.user?.id) {
    // Rediriger vers la page de connexion si non connecté
    redirect(`/api/auth/signin?callbackUrl=/${lang}/dashboard/gallery/videos`);
  }

  // 3. Récupérer les vidéos de l'utilisateur depuis la base de données (qu'elles soient publiques ou non)
  const userVideos = await prisma.generatedVideo.findMany({
    where: {
      userId: session.user.id,
      isDeleted: false,
      status: 'COMPLETED',
      cloudinaryPublicId: {
        not: null
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      cloudinaryPublicId: true,
      title: true,
      prompt: true,
      videoUrl: true,
      public: true,
      sound: true, // Ajout du champ son
    }
  });

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
                <BreadcrumbLink href={`/${lang}/dashboard/gallery/image`}>{dict.gallery.title}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{dict.sidebar.gallery_video}</BreadcrumbPage>
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
            <h1 className="text-3xl font-bold tracking-tight">{dict.sidebar.gallery_video}</h1>
            <p className="text-muted-foreground">{dict.gallery.subtitle}</p>
          </div>

          {/* Contenu des vidéos */}
          {userVideos.length === 0 ? (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>
                {dict.gallery.no_generated_images}
              </AlertTitle>
              <AlertDescription>
                {lang === 'fr' 
                  ? 'Vous n\'avez pas encore généré de vidéos, ou elles sont encore en cours de traitement.'
                  : 'You haven\'t generated any videos yet, or they are still being processed.'}
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userVideos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  dictionary={dict} 
                  lang={lang}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </SidebarInset>
  );
}