// app/[lang]/create-image/canva/page.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { getDictionary, Localy } from "@/app/[lang]/dictionaries"

import { Palette } from "lucide-react"
// --- Importez le nouveau composant ---
import FabricCanvas from './components/FabricCanvas'; // Adaptez le chemin si nécessaire

export default async function Page({
params,
}: {
params: Promise<{ lang: Localy }>
}) {

const { lang } = await params

const dict = await getDictionary(lang)

return (

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  {/* Adaptez le href si nécessaire */}
                  <BreadcrumbLink href="#">
                    {dict.create_image.title} {/* Utilisation du dictionnaire */}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                  <Palette className="mr-2 h-5 w-5 inline" />
                  {dict.canva.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* --- Conteneur Principal --- */}
        {/* Assurez-vous que ce conteneur permet à FabricCanvas de s'étendre */}
        <div className="flex flex-col h-full w-full gap-2 p-4">
              {/* Ajoutez d'autres éléments ici si nécessaire */}
              <div className="flex flex-1 justify-center items-center bg-muted rounded-xl border overflow-hidden">
              <FabricCanvas lang={lang} dictionary={dict} />
           </div>
        </div>

      </SidebarInset>

  )
}