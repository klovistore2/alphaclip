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

  //import { getDictionary } from "@/app/[lang]/dictionaries"
  
  //import { LanguageSwitcher } from "@/components/language-switcher"
  import { ImageThumbnail } from "@/components/image-thumbnail"
  
  // Simulons une fonction qui récupère l'historique des images
  // Plus tard, cela pourrait être remplacé par une requête à la base de données
  async function getImageHistory() {
    // Simulation d'images pour démonstration
    return [
      {
        id: "image-1",
        url: "/placeholder.svg?height=400&width=600&text=Image+1",
        title: "Mountain Landscape",
        date: "2023-04-15",
      },
      {
        id: "image-2",
        url: "/placeholder.svg?height=400&width=600&text=Image+2",
        title: "Abstract Art",
        date: "2023-04-14",
      },
      {
        id: "draft-1",
        url: "/placeholder.svg?height=400&width=600&text=Draft+1",
        title: "City Skyline Draft",
        date: "2023-04-13",
      },
      {
        id: "image-3",
        url: "/placeholder.svg?height=400&width=600&text=Image+3",
        title: "Portrait Study",
        date: "2023-04-12",
      },
      {
        id: "image-4",
        url: "/placeholder.svg?height=400&width=600&text=Image+4",
        title: "Space Scene",
        date: "2023-04-11",
      },
      {
        id: "image-5",
        url: "/placeholder.svg?height=400&width=600&text=Image+5",
        title: "Fantasy Landscape",
        date: "2023-04-10",
      },
    ]
  }
  

export default async function HistoryPage({
        params,
      }: {
        params: Promise<{ lang: 'en' | 'fr' }>
      }) {
        
    const { lang } = await params
        
    //const dict = await getDictionary(lang) // en
    
    const images = await getImageHistory()
  
    return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={`/${lang}/p`}>AI Tools</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${lang}/p/dashboard`}>
                   Playground
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>History</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

        </header>
        <div className="flex flex-1 flex-col p-6">
          <div className="mx-auto w-full max-w-6xl space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">History</h1>
                <p className="text-muted-foreground">Your previously generated images</p>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <ImageThumbnail
                  key={image.id}
                  id={image.id}
                  url={image.url}
                  title={image.title}
                  lang={lang}
                  
                />
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    )
  }
  