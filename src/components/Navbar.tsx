"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-stone-50/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-display text-2xl font-bold tracking-tight text-stone-900">
              Marina
            </span>
            <span className="text-stone-400 text-[10px] tracking-[0.25em] uppercase font-medium">
              Barbershop
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 hover:text-stone-900 ${pathname === link.href ? "text-stone-900" : "text-stone-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <a
              href="tel:+12017363239"
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs font-medium px-6 py-2.5 tracking-widest uppercase transition-all duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
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

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 bg-stone-50/98 backdrop-blur-md border-t border-stone-200" : "max-h-0"
          }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-3 border-b border-stone-100 transition-colors tracking-wide ${pathname === link.href ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12017363239"
            className="mt-3 bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium text-center py-3.5 transition-colors tracking-widest uppercase text-xs"
          >
            Book Now — Call Us
          </a>
          <div className="mt-3 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
