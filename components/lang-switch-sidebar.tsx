// components/language-switcher-icon.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react"; // Importation de l'icône Languages

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Assurez-vous que ces variables sont bien exportées depuis votre fichier dictionaries
// ou définissez-les/importez-les autrement si nécessaire.
import { locales_, languageNames, TypeDictionary } from "@/app/[lang]/dictionaries"; // Supposons l'import de TypeDictionary aussi

interface LanguageSwitcherIconProps {
  currentLang: string;
  dictionary?: TypeDictionary; // Optionnel: pour le texte sr-only traduit
}

export function LanguageSwitcherIcon({ currentLang, dictionary }: LanguageSwitcherIconProps) {
  const pathname = usePathname();

  // Supprimer la langue actuelle du chemin pour obtenir la route de base
  // Gère le cas où le pathname est juste "/" ou "/en"
  let pathnameWithoutLang = "/";
  if (pathname !== `/${currentLang}`) {
      pathnameWithoutLang = pathname.replace(`/${currentLang}`, "") || "/";
  }


  // Créer un lien localisé pour une locale donnée
  const createLocalizedLink = (locale: string) => {
    // Gère le cas où la route de base est juste "/"
    if (pathnameWithoutLang === "/") {
        return `/${locale}`;
    }
    return `/${locale}${pathnameWithoutLang}`;
  }

  const srText = dictionary?.languageSwitcher?.changeLanguage || "Change language"; // Clé à ajouter au dictionnaire

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Utilisation d'un bouton icône */}
        <Button variant="outline" size="icon">{/* ou variant="outline" */}
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{srText}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* Mapping des locales disponibles comme avant */}
        {locales_.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={createLocalizedLink(locale)}
              prefetch={false}
              // Met en évidence la langue actuelle
              className={locale === currentLang ? "font-bold" : ""}
              // Ajout de la locale pour la navigation correcte si nécessaire (normalement géré par le href)
              // locale={locale} <= n'est généralement pas nécessaire avec App Router ici
            >
              {/* Affiche le nom complet de la langue ou le code */}
              {languageNames[locale as keyof typeof languageNames] || locale.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}