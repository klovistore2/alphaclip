import { ThemeProvider } from "@/components/theme-provider"

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }]
  }
   
export default async function RootLayout({
    children,
    params,
  }: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: 'en' | 'fr' }>
  }>) {
    return (
      <html lang={(await params).lang}>
        <body>
        <ThemeProvider
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
                  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        {children}
      </div>
          
          </ThemeProvider></body>
      </html>
    )
 }