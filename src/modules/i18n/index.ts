import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { en } from "./locales/en"
import { th } from "./locales/th"

export const LANG_STORAGE_KEY = "lang"

export type Locale = "th" | "en"

export const getInitialLocale = (): Locale =>
  localStorage.getItem(LANG_STORAGE_KEY)?.toLowerCase() === "en" ? "en" : "th"

const initialLocale = getInitialLocale()

document.documentElement.lang = initialLocale

void i18n.use(initReactI18next).init({
  resources: {
    th: { translation: th },
    en: { translation: en },
  },
  lng: initialLocale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

i18n.on("languageChanged", (lng) => {
  const nextLocale: Locale = lng === "en" ? "en" : "th"
  document.documentElement.lang = nextLocale
  localStorage.setItem(LANG_STORAGE_KEY, nextLocale)
})

export { i18n }
