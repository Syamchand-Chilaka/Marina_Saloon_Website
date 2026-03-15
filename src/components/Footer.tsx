import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-400 rounded flex items-center justify-center">
                <span className="text-zinc-950 font-black text-sm">M</span>
              </div>
              <span className="text-amber-400 font-black text-xl tracking-widest uppercase">
                MARINA
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Premium barbershop services in Journal Square, Jersey City. Where style meets tradition.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-zinc-800 hover:bg-amber-400 text-zinc-300 hover:text-zinc-950 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h3>
            <ul className="space-y-2">
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
                    className="text-zinc-400 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Visit Us</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <p className="flex gap-2">
                <span className="text-amber-400">📍</span>
                <span>865 Bergen Ave #2<br />Jersey City, NJ 07306</span>
              </p>
              <p className="flex gap-2">
                <span className="text-amber-400">📞</span>
                <a href="tel:+12017363239" className="hover:text-amber-400 transition-colors">
                  (201) 736-3239
                </a>
              </p>
              <div className="flex gap-2">
                <span className="text-amber-400">🕐</span>
                <div>
                  <p>Mon–Tue, Thu–Sat: 11:00 AM – 9:00 PM</p>
                  <p>Sun: 11:00 AM – 3:00 PM</p>
                  <p>Wed: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Marina Barbershop. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs">
            865 Bergen Ave #2, Jersey City, NJ 07306
          </p>
        </div>
      </div>
    </footer>
  );
}
