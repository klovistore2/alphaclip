import { getDictionary, Localy } from './dictionaries'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Localy }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 bg-background border-b relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/android-chrome-192x192.png')] bg-repeat-space opacity-20"></div>
        </div>
        <div className="container flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <Image
              src="/android-chrome-192x192.png"
              alt={dict.metadata.title}
              width={40}
              height={40}
              className="animate-float"
            />
            <h1 className="text-3xl font-bold text-primary">{dict.metadata.title}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} />
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
                  {dict.home?.heroTitle}
                </h2>
                <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-lg">
                  {dict.home?.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-white text-indigo-700 hover:bg-gray-100">
                    <Link href={`/${lang}/dashboard/create/canva`}>{dict.home?.createNowText}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <Link href={`/${lang}/dashboard`}>{dict.home?.exploreGalleryText}</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-64 w-64 md:h-96 md:w-96">
                  <Image
                    src="/android-chrome-512x512.png"
                    alt={dict.metadata.title}
                    fill
                    className="object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 md:px-6 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">{dict.home?.featuresTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dict.home?.featuresItems.map((feature, index) => (
                <div key={index} className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition border">
                  <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 px-4 md:px-6 bg-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">{dict.home?.whyUsTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {dict.home?.whyUsText}
            </p>
            
            <div className="flex justify-center">
              <div className="bg-muted py-3 px-6 rounded-full flex flex-wrap items-center justify-center gap-2 text-foreground font-medium">
                <span>{dict.home?.flowSteps.drawing}</span>
                <span className="text-primary">→</span>
                <span>{dict.home?.flowSteps.image}</span>
                <span className="text-primary">→</span>
                <span>{dict.home?.flowSteps.video}</span>
                <span className="text-primary">→</span>
                <span>{dict.home?.flowSteps.sound}</span>
                <span className="text-primary">→</span>
                <span className="text-primary font-bold">{dict.home?.flowSteps.viral}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">{dict.home?.ctaTitle}</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {dict.home?.ctaText}
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link href={`/${lang}/dashboard/create/canva`}>{dict.home?.createNowText}</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}