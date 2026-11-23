import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"

import {
  getInitialLocale,
  I18nContext,
  LANG_STORAGE_KEY,
  translate,
} from "./context"
import type { Locale, TranslationKey, TranslationParams } from "./types"

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(LANG_STORAGE_KEY, locale)
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "th" ? "en" : "th"))
  }, [])

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) =>
      translate(locale, key, params),
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, toggleLocale, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
