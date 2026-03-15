import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-stone-100 overflow-hidden">
      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
        {/* Left — Copy */}
        <div className="animate-hero-fade-in">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400 mb-6">
            Journal Square · Jersey City
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-stone-900 mb-8">
            The Art of
            <br />
            <span className="italic text-stone-500">Precision</span>
            <br />
            Grooming
          </h1>

          <p className="text-stone-500 text-lg md:text-xl max-w-md leading-relaxed mb-10 animate-hero-fade-in-delay">
            Premium cuts, expert fades, and classic shaves — crafted with care in the heart of Jersey City.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-hero-fade-in-delay-2">
            <a
              href="tel:+12017363239"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-medium px-8 py-4 rounded-none transition-all duration-300 tracking-widest uppercase"
            >
              Book Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 text-sm font-medium px-8 py-4 rounded-none transition-all duration-300 tracking-widest uppercase"
            >
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex gap-12">
            {[
              { value: "10+", label: "Years" },
              { value: "500+", label: "Clients" },
              { value: "5.0", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-stone-400 text-xs mt-1 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="relative animate-hero-slide-right hidden lg:block">
          <div className="relative w-full aspect-[3/4] max-w-lg ml-auto">
            <Image
              src={`${basePath}/gallery/fresh-fade.jpg`}
              alt="Premium barbershop service at Marina Barbershop"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating appointment card */}
            <div className="absolute -left-12 bottom-16 bg-white/90 backdrop-blur-sm p-5 shadow-xl max-w-[200px]">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-1">Walk-ins</p>
              <p className="font-display text-lg font-semibold text-stone-900">Always Welcome</p>
              <div className="w-8 h-px bg-stone-300 mt-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-stone-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent" />
      </div>
    </section>
  );
}
