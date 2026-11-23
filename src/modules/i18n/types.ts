import type { en } from "./locales/en"

export type Locale = "th" | "en"

type NestedKeyOf<T> = T extends string
  ? never
  : {
      [K in Extract<keyof T, string>]: T[K] extends string
        ? K
        : `${K}.${NestedKeyOf<T[K]>}`
    }[Extract<keyof T, string>]

export type TranslationKey = NestedKeyOf<typeof en>

export type TranslationParams = Record<string, string | number>

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: TranslationKey, params?: TranslationParams) => string
}
