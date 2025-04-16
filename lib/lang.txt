// Liste des langues supportées
export const locales_ = ["en", "fr"] as const
export type Locale_ = (typeof locales_)[number]

// Noms des langues pour l'affichage
export const languageNames: Record<Locale_, string> = {
  en: "English",
  fr: "Français",

}

