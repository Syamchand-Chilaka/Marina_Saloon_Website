"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLang(code: Lang) {
    setLang(code);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-white text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 px-2 py-1.5 border border-stone-300 dark:border-stone-700 hover:border-stone-500 dark:hover:border-stone-500"
        aria-label="Select language"
      >
        {lang.toUpperCase()}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 top-full mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden z-50 min-w-[130px]">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => selectLang(l.code)}
              className={`w-full text-left rtl:text-right px-4 py-2.5 text-sm transition-colors duration-150 ${lang === l.code
                  ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-semibold"
                  : "text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-white"
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
