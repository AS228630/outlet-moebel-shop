"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DICTIONARIES, type Locale, type DictionaryKey } from "@/lib/i18n/dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictionaryKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "om-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "de";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      return stored && DICTIONARIES[stored] ? stored : "de";
    } catch {
      return "de";
    }
  });

  function setLocale(l: Locale) {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }

  function t(key: DictionaryKey): string {
    return DICTIONARIES[locale][key] ?? DICTIONARIES.de[key] ?? key;
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
