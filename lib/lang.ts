// Liste des langues supportées
export const locales_ = ["en", "fr", "es", "de", "ja"] as const
export type Locale_ = (typeof locales_)[number]

// Noms des langues pour l'affichage
export const languageNames: Record<Locale_, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  ja: "日本語",
}

