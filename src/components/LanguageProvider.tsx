"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { t as translate, type Lang } from "@/i18n/translations";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  t: (key) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

const langDirs: Record<Lang, string> = { en: "ltr", es: "ltr", ar: "rtl" };
const validLangs: Lang[] = ["en", "es", "ar"];

function applyLang(code: Lang) {
  document.documentElement.setAttribute("dir", langDirs[code]);
  document.documentElement.setAttribute("lang", code);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("marina-lang") as Lang | null;
    if (saved && validLangs.includes(saved)) {
      setLangState(saved);
      applyLang(saved);
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((code: Lang) => {
    setLangState(code);
    localStorage.setItem("marina-lang", code);
    applyLang(code);
  }, []);

  const t = useCallback((key: string) => translate(lang, key), [lang]);

  if (!mounted) return <>{children}</>;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
