"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import en, { type Translations } from "@/translations/en";
import es from "@/translations/es";
import fr from "@/translations/fr";
import la from "@/translations/la";
import el from "@/translations/el";
import arc from "@/translations/arc";

export type Locale = "en" | "es" | "fr" | "la" | "el" | "arc";

const translations: Record<Locale, Translations> = { en, es, fr, la, el, arc };

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  t: es,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
