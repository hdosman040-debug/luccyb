import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Lang } from "@/i18n/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lucy-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "am") {
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggle = () => setLang(lang === "en" ? "am" : "en");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  
  // Guard fallback: If the context is missing temporarily during initialization or hot-reloading,
  // return a safe fallback object instead of crashing the page.
  if (!ctx) {
    return {
      lang: "en" as Lang,
      setLang: () => {},
      toggle: () => {},
      t: translations["en"]
    };
  }
  return ctx;
}
