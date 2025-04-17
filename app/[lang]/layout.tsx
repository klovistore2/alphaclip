import { ThemeProvider } from "@/components/theme-provider"

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }]
  }
   
export default async function LangLayout({
    children,
    params,
  }: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: 'en' | 'fr' }>
  }>) {
    // Set html lang attribute in the root layout instead
    const lang = (await params).lang;
    
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full" lang={lang}>
          {children}
        </div>
      </ThemeProvider>
    )
 }