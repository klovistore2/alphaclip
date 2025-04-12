import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-auto">
        {children}
      </main>
    </SidebarProvider>
  )
}