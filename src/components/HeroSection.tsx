import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <div className="mb-6 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 text-sm font-medium tracking-wide">Walk-ins Welcome · Journal Square, Jersey City</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
          <span className="text-white">PREMIUM</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            CUTS.
          </span>
          <br />
          <span className="text-white">CLASSIC</span>
          <br />
          <span className="text-zinc-400">STYLE.</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Marina Barbershop brings you precision cuts, expert fades, and classic shaves in the heart of Journal Square. Your look, perfected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+12017363239"
            className="group bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/25 tracking-wide uppercase"
          >
            Book Appointment
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <Link
            href="/services"
            className="border border-zinc-700 hover:border-amber-400/50 text-white hover:text-amber-400 font-bold text-base px-8 py-4 rounded-full transition-all duration-200 tracking-wide uppercase backdrop-blur-sm"
          >
            View Services
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "5★", label: "Rated" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</div>
              <div className="text-zinc-500 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
