import { getDictionary, Localy } from './dictionaries'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Localy }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const featuresData = [
    { 
      icon: '🎨', 
      title: dict.sidebar.createImage, 
      description: dict.create_image.description 
    },
    { 
      icon: '🔄', 
      title: dict.sidebar.imageToImage, 
      description: dict.sidebar.imageToImage_variation 
    },
    { 
      icon: '🎬', 
      title: dict.sidebar.generateVideo, 
      description: dict.image2video.description 
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-background border-b">
        <div className="container flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">{dict.metadata.title}</h1>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">{dict.metadata.title}</h2>
            <p className="text-xl text-muted-foreground">{dict.metadata.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={`/${lang}/dashboard`}>{dict.sidebar.createImage}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${lang}/dashboard/gallery/image`}>{dict.gallery.title}</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AI {dict.nav.playgroundAI}</span>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuresData.map((feature, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {dict.metadata.title}. {dict.userNav.settings}</p>
          <nav className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {dict.userNav.profile}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {dict.userNav.settings}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}