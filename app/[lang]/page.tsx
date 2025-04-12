import { getDictionary } from './dictionaries'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/language-switcher'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  
  const { lang } = await params
  
  const dict = await getDictionary(lang) // en

  return (
    <div>
      <h1>{dict.products.cart}</h1>
      <Link href="/dashboard"><p>{dict.products.text}</p></Link>
              <LanguageSwitcher currentLang={lang}/>
    </div>
  )
           // Add to Cart
} 