import { createContext } from "react"

import { en } from "./locales/en"
import { th } from "./locales/th"
import type {
  I18nContextValue,
  Locale,
  TranslationKey,
  TranslationParams,
} from "./types"

export const LANG_STORAGE_KEY = "lang"

export const dictionaries = { th, en } as const

export const getInitialLocale = (): Locale =>
  localStorage.getItem(LANG_STORAGE_KEY)?.toLowerCase() === "en" ? "en" : "th"

const resolveKey = (
  obj: Record<string, unknown>,
  key: string,
): string | undefined => {
  let current: unknown = obj
  for (const part of key.split(".")) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return undefined
    }
    current = (current as Record<string, unknown>)[part]
  }
  return typeof current === "string" ? current : undefined
}

export const translate = (
  locale: Locale,
  key: TranslationKey,
  params?: TranslationParams,
): string => {
  const template =
    resolveKey(dictionaries[locale], key) ??
    resolveKey(dictionaries.en, key) ??
    key

  if (!params) {
    return template
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_, name: string) =>
    name in params ? String(params[name]) : `{{${name}}}`,
  )
}

export const I18nContext = createContext<I18nContextValue | null>(null)
