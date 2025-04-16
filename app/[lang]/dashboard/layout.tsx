//app/[lang]/dashboard/layout.tsx
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Localy, getDictionary } from '../dictionaries'; 

//export default function Layout({ children }: { children: React.ReactNode }) {



  export default async function Layout({
    children,
    params,
  }: {
    children: React.ReactNode
    params: { lang: Localy }
  }) {
    const lang = params.lang;
    // Appelle la fonction pour obtenir directement les données traduites
    const translatedData = await getDictionary(lang);
  
  
  return (
    <SidebarProvider>
      <AppSidebar data={translatedData} lang={lang} />
      <main className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </SidebarProvider>
  )
}