import { getDictionary, Localy } from './dictionaries'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/language-switcher'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Localy }>
}) {
  
  const { lang } = await params
  
  const dict = await getDictionary(lang) // en

  return (
    <div>
      <h1>{dict.metadata.title}</h1>
      <Link href="/dashboard"><p>{dict.metadata.title}</p></Link>
     

      <LanguageSwitcher currentLang={lang}/>

       </div>
  )

} 