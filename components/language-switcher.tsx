"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { locales_, languageNames } from "@/app/[lang]/dictionaries"  

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()

  // Supprimer la langue actuelle du chemin pour obtenir la route
  const pathnameWithoutLang = pathname.replace(`/${currentLang}`, "") || "/"

  // Créer un lien localisé pour chaque langue
  const createLocalizedLink = (locale: string) => `/${locale}${pathnameWithoutLang}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          {languageNames[currentLang as keyof typeof languageNames] || currentLang.toUpperCase()}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales_.map((locale_) => (
          <DropdownMenuItem key={locale_} asChild>
            <Link
              href={createLocalizedLink(locale_)}
              prefetch={false}
              className={locale_ === currentLang ? "font-bold" : ""}
            >
              {languageNames[locale_] || locale_.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
