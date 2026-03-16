"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/reviews", key: "nav.reviews" },
  { href: "/contact", key: "nav.contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-display text-2xl font-bold tracking-tight text-stone-900 dark:text-white">
              Marina
            </span>
            <span className="text-stone-400 dark:text-stone-500 text-[10px] tracking-[0.25em] uppercase font-medium">
              Barbershop
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 hover:text-stone-900 dark:hover:text-white ${pathname === link.href ? "text-stone-900 dark:text-white" : "text-stone-400 dark:text-stone-500"
                  }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher />
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2"/><path strokeWidth="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>
            <a
              href="tel:+12017363239"
              className="bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 text-xs font-medium px-6 py-2.5 tracking-widest uppercase transition-all duration-200"
            >
              {t("nav.bookNow")}
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2"/><path strokeWidth="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 bg-stone-50/98 dark:bg-stone-950/98 backdrop-blur-md border-t border-stone-200 dark:border-stone-800" : "max-h-0"
          }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navKeys.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 border-b border-stone-100 dark:border-stone-800 transition-colors tracking-wide ${pathname === link.href ? "text-stone-900 dark:text-white" : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <a
            href="tel:+12017363239"
            className="mt-3 bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 font-medium text-center py-3.5 transition-colors tracking-widest uppercase text-xs"
          >
            {t("nav.bookNowCall")}
          </a>
          <div className="mt-3 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
