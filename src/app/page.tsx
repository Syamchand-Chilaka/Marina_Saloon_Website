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

const galleryImages = [
  { id: 1, caption: "Fresh Fade", src: "/gallery/square/fresh-fade.svg" },
  { id: 2, caption: "Classic Cut", src: "/gallery/square/classic-cut.svg" },
  { id: 3, caption: "Beard Trim", src: "/gallery/square/beard-trim.svg" },
  { id: 4, caption: "Scissor Cut", src: "/gallery/square/scissor-cut.svg" },
  { id: 5, caption: "Shape-up", src: "/gallery/square/shape-up.svg" },
  { id: 6, caption: "Hot Towel Shave", src: "/gallery/square/hot-towel-shave.svg" },
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
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-amber-400/50 hover:border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-950 font-bold text-sm px-8 py-3 rounded-full transition-all duration-200 tracking-wide uppercase"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Marina Barbershop */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Why Marina Barbershop
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Rooted in the heart of Journal Square, Marina Barbershop has been a staple for the Jersey City
                community. We&apos;re not a chain — we&apos;re a crew of skilled barbers who take pride in
                every fade, every lineup, and every hot towel shave we deliver.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Whether you&apos;re a regular who&apos;s been coming for years or a first-timer walking in off Bergen Ave,
                you get the same thing: precision work, honest prices, and a shop that feels like home. No
                appointments, no pretense — just great cuts and good conversation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "✂️", title: "Expert Barbers", desc: "Years of experience with every style — classic to modern" },
                { icon: "🚶", title: "Walk-ins Welcome", desc: "No appointments needed, just stop by anytime we're open" },
                { icon: "💈", title: "Premium Products", desc: "Top-shelf grooming products for the best results" },
                { icon: "🤝", title: "Community First", desc: "Proudly serving Journal Square and all of Jersey City" },
              ].map((feature) => (
                <div key={feature.title} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-center hover:border-amber-400/30 transition-colors duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Gallery
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-semibold">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-amber-400/50 hover:border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-950 font-bold text-sm px-8 py-3 rounded-full transition-all duration-200 tracking-wide uppercase"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">We&apos;re Open</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Business Hours
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            {hours.map((item, i) => (
              <div
                key={item.day}
                className={`flex justify-between items-center px-6 py-4 ${
                  i < hours.length - 1 ? "border-b border-zinc-800" : ""
                } ${item.day === "Saturday" || item.day === "Sunday" ? "bg-zinc-800/50" : ""}`}
              >
                <span className="text-white font-medium">{item.day}</span>
                <span className={`font-semibold text-sm ${item.closed ? "text-red-400" : "text-amber-400"}`}>{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-zinc-500 text-sm mt-4">Walk-ins always welcome — no appointment needed.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Happy Clients</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              What People Say
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-amber-400/50 hover:border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-zinc-950 font-bold text-sm px-8 py-3 rounded-full transition-all duration-200 tracking-wide uppercase"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-transparent to-amber-600/10" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Walk-ins <span className="text-amber-400">Always</span> Welcome
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            No appointment needed. Come in, sit down, and let our barbers take care of you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12017363239"
              className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black text-base px-10 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/25 tracking-wide uppercase"
            >
              Call (201) 736-3239
            </a>
            <Link
              href="/contact"
              className="border border-zinc-600 hover:border-amber-400/50 text-white hover:text-amber-400 font-bold text-base px-10 py-4 rounded-full transition-all duration-200 tracking-wide uppercase"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Mini */}
      <section className="py-16 md:py-20 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center text-2xl">📍</div>
              <h3 className="text-white font-bold">Location</h3>
              <p className="text-zinc-400 text-sm">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center text-2xl">📞</div>
              <h3 className="text-white font-bold">Phone</h3>
              <a href="tel:+12017363239" className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors">
                (201) 736-3239
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center text-2xl">🕐</div>
              <h3 className="text-white font-bold">Hours</h3>
              <p className="text-zinc-400 text-sm">Mon–Tue, Thu–Sat: 11AM–9PM<br />Sun: 11AM–3PM · Wed: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
