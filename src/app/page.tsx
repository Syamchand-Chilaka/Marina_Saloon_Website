import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import Image from "next/image";

const featuredServices = [
  { name: "Classic Haircut", price: "$25", description: "Timeless cut tailored to your style", popular: false },
  { name: "Fade", price: "$30", description: "Clean, precise fade — high, mid, or low", popular: true },
  { name: "Beard Trim", price: "$15", description: "Shape and define your beard", popular: false },
  { name: "Hot Towel Shave", price: "$35", description: "Traditional straight-razor experience", popular: false },
  { name: "Cut + Beard Combo", price: "$40", description: "Full grooming in one visit", popular: true },
  { name: "Kids Cut", price: "$20", description: "For the little ones (12 & under)", popular: false },
];

const testimonials = [
  {
    name: "Carlos M.",
    rating: 5,
    review: "Best barbershop in Jersey City, hands down. The fade is always on point and the atmosphere is great.",
    date: "Jan 2025",
    service: "Fade",
  },
  {
    name: "James T.",
    rating: 5,
    review: "Came in as a walk-in and was taken care of immediately. Professional, clean, and skilled. Will be back.",
    date: "Dec 2024",
    service: "Classic Cut",
  },
  {
    name: "Ricardo P.",
    rating: 5,
    review: "The hot towel shave is an experience. Feels like a luxury spa but at a fair price. Highly recommend.",
    date: "Jan 2025",
    service: "Hot Towel Shave",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const galleryImages = [
  { id: 1, caption: "Curly Fade", src: `${basePath}/images/curly-fade-side.jpg` },
  { id: 2, caption: "Kids Cut", src: `${basePath}/images/kids-cut-blonde.jpg` },
  { id: 3, caption: "Beard & Fade", src: `${basePath}/images/curly-beard-trim.jpg` },
  { id: 4, caption: "Barber at Work", src: `${basePath}/images/barber-at-work.jpg` },
  { id: 5, caption: "Happy Client", src: `${basePath}/images/kids-cut-smile.jpg` },
  { id: 6, caption: "Fresh Cut", src: `${basePath}/images/mirror-selfie.jpg` },
];

const hours = [
  { day: "Monday", hours: "11:00 AM – 9:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "11:00 AM – 9:00 PM" },
  { day: "Friday", hours: "11:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 3:00 PM" },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Our Services
            </h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Marina Barbershop */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Why Marina Barbershop
            </h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-6">
                Rooted in the heart of Journal Square, Marina Barbershop has been a staple for the Jersey City
                community. We&apos;re not a chain — we&apos;re a crew of skilled barbers who take pride in
                every fade, every lineup, and every hot towel shave we deliver.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-8">
                Whether you&apos;re a regular who&apos;s been coming for years or a first-timer walking in off Bergen Ave,
                you get the same thing: precision work, honest prices, and a shop that feels like home. No
                appointments, no pretense — just great cuts and good conversation.
              </p>
              {/* Owner photo */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={`${basePath}/images/owner-portrait.jpg`}
                    alt="Marina Barbershop owner"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-stone-900 text-sm sm:text-base">Marina Barbershop</p>
                  <p className="text-stone-400 text-xs sm:text-sm">Serving Jersey City since day one</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "✂️", title: "Expert Barbers", desc: "Years of experience with every style — classic to modern" },
                { icon: "🚶", title: "Walk-ins Welcome", desc: "No appointments needed, just stop by anytime we're open" },
                { icon: "💈", title: "Premium Products", desc: "Top-shelf grooming products for the best results" },
                { icon: "🤝", title: "Community First", desc: "Proudly serving Journal Square and all of Jersey City" },
              ].map((feature) => (
                <div key={feature.title} className="bg-white border border-stone-200 p-5 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-stone-900 font-display font-semibold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-stone-400 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">Our Work</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Gallery
            </h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">We&apos;re Open</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Business Hours
            </h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-5" />
          </div>
          <div className="bg-white border border-stone-200 overflow-hidden">
            {hours.map((item, i) => (
              <div
                key={item.day}
                className={`flex justify-between items-center px-6 py-4 ${i < hours.length - 1 ? "border-b border-stone-100" : ""
                  } ${item.day === "Saturday" || item.day === "Sunday" ? "bg-stone-50" : ""}`}
              >
                <span className="text-stone-800 font-medium">{item.day}</span>
                <span className={`font-semibold text-sm ${item.closed ? "text-red-400" : "text-stone-900"}`}>{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-5">Walk-ins always welcome — no appointment needed.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">Happy Clients</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              What People Say
            </h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 bg-stone-900">
        <div className="text-center px-5 max-w-4xl mx-auto">
          <div className="inline-block border border-stone-700 rounded-full px-5 py-1.5 mb-8">
            <span className="text-stone-400 text-xs tracking-[0.3em] uppercase">No Appointment Needed</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Walk-ins <span className="italic font-light text-stone-400">Always</span> Welcome
          </h2>
          <p className="text-stone-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Come in, sit down, and let our barbers take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+12017363239"
              className="bg-white hover:bg-stone-100 text-stone-900 font-medium text-sm px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-200 tracking-widest uppercase"
            >
              Call (201) 736-3239
            </a>
            <Link
              href="/contact"
              className="border border-stone-600 hover:border-white text-stone-300 hover:text-white font-medium text-sm px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-200 tracking-widest uppercase"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Mini */}
      <section className="py-16 md:py-20 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">📍</div>
              <h3 className="text-stone-900 font-display font-semibold">Location</h3>
              <p className="text-stone-500 text-sm">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">📞</div>
              <h3 className="text-stone-900 font-display font-semibold">Phone</h3>
              <a href="tel:+12017363239" className="text-stone-900 hover:text-stone-600 text-sm font-semibold transition-colors">
                (201) 736-3239
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">🕐</div>
              <h3 className="text-stone-900 font-display font-semibold">Hours</h3>
              <p className="text-stone-500 text-sm">Mon–Tue, Thu–Sat: 11AM–9PM<br />Sun: 11AM–3PM · Wed: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
