import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300 dark:text-stone-400 border-t border-transparent dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Marina
              </span>
              <span className="text-stone-500 text-[10px] tracking-[0.25em] uppercase font-medium">
                Barbershop
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Premium barbershop services in Journal Square, Jersey City. Where style meets tradition.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-stone-700 hover:border-stone-400 text-stone-500 hover:text-white flex items-center justify-center text-xs font-medium transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-5 tracking-wide text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services & Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-5 tracking-wide text-sm">Visit Us</h3>
            <div className="space-y-4 text-sm text-stone-400">
              <p className="flex gap-3">
                <span>📍</span>
                <span>865 Bergen Ave #2<br />Jersey City, NJ 07306</span>
              </p>
              <p className="flex gap-3">
                <span>📞</span>
                <a href="tel:+12017363239" className="hover:text-white transition-colors">
                  (201) 736-3239
                </a>
              </p>
              <div className="flex gap-3">
                <span>🕐</span>
                <div>
                  <p>Mon–Tue, Thu–Sat: 11:00 AM – 9:00 PM</p>
                  <p>Sun: 11:00 AM – 3:00 PM</p>
                  <p>Wed: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Marina Barbershop. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            865 Bergen Ave #2, Jersey City, NJ 07306
          </p>
        </div>
      </div>
    </footer>
  );
}
