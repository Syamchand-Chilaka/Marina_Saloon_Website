import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={`${basePath}/images/barber-at-work.jpg`}
          alt="Marina Barbershop interior"
          fill
          priority
          className="object-cover scale-110 blur-[2px]"
          sizes="100vw"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-stone-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20 pb-24">
        <div className="animate-hero-fade-in max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-300/80 mb-4 sm:mb-6">
            Journal Square · Jersey City
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-6 sm:mb-8">
            The Art of
            <br />
            <span className="italic text-stone-300">Precision</span>
            <br />
            Grooming
          </h1>

          <p className="text-stone-300 text-base sm:text-lg md:text-xl max-w-md leading-relaxed mb-8 sm:mb-10 animate-hero-fade-in-delay">
            Premium cuts, expert fades, and classic shaves — crafted with care in the heart of Jersey City.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-hero-fade-in-delay-2">
            <a
              href="tel:+12017363239"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-900 text-sm font-medium px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 tracking-widest uppercase"
            >
              Book Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:text-white text-sm font-medium px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 tracking-widest uppercase"
            >
              Our Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 sm:mt-16 flex gap-8 sm:gap-12">
            {[
              { value: "10+", label: "Years" },
              { value: "500+", label: "Clients" },
              { value: "5.0", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-stone-400 text-[10px] sm:text-xs mt-1 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating walk-in card — desktop only */}
        <div className="hidden lg:block absolute right-8 xl:right-16 bottom-32 bg-white/10 backdrop-blur-md border border-white/20 p-5 max-w-[200px] animate-hero-slide-right">
          <p className="text-xs tracking-widest uppercase text-stone-300 mb-1">Walk-ins</p>
          <p className="font-display text-lg font-semibold text-white">Always Welcome</p>
          <div className="w-8 h-px bg-white/30 mt-3" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
