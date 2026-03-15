"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center">
              <span className="text-zinc-950 font-black text-sm">M</span>
            </div>
            <span className="text-amber-400 font-black text-xl tracking-widest uppercase">
              MARINA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-amber-400 ${
                  pathname === link.href ? "text-amber-400" : "text-zinc-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12017363239"
              className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20 tracking-wide"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-2 border-b border-zinc-800 transition-colors ${
                pathname === link.href ? "text-amber-400" : "text-zinc-300 hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12017363239"
            className="mt-2 bg-amber-400 hover:bg-amber-500 text-zinc-950 font-bold text-center py-3 rounded-full transition-colors tracking-wide"
          >
            Book Now — Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
