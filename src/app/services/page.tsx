import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Marina Barbershop Jersey City",
  description: "Explore Marina Barbershop's full menu of services including haircuts, fades, beard trims, and hot towel shaves. Affordable prices in Jersey City, NJ.",
};

const serviceCategories = [
  {
    category: "Haircuts",
    icon: "✂️",
    services: [
      { name: "Classic Haircut", price: "$25", description: "A timeless cut shaped to your style and face structure." },
      { name: "Fade", price: "$30", description: "Precision fade — high, mid, or low. Clean lines guaranteed.", popular: true },
      { name: "Scissor Cut", price: "$30", description: "Detailed scissor work for textured, natural styles." },
      { name: "Buzz Cut", price: "$20", description: "Simple, clean all-over buzz — quick and sharp." },
      { name: "Kids Cut", price: "$20", description: "Patient, friendly cuts for kids 12 and under." },
      { name: "Senior Cut", price: "$20", description: "Relaxed, comfortable cuts for seniors." },
    ],
  },
  {
    category: "Beard Services",
    icon: "🪒",
    services: [
      { name: "Beard Trim", price: "$15", description: "Shaping and trimming to clean up your beard." },
      { name: "Beard Shape-up", price: "$20", description: "Define your lines with a clean, sharp edge-up.", popular: true },
      { name: "Hot Towel Shave", price: "$35", description: "Classic straight-razor shave with warm towel prep. A luxury experience.", popular: true },
      { name: "Neck Shave", price: "$10", description: "Quick clean-up of the neckline." },
    ],
  },
  {
    category: "Combo Packages",
    icon: "⭐",
    services: [
      { name: "Cut + Beard Combo", price: "$40", description: "Full haircut and beard trim in one visit. Best value.", popular: true },
      { name: "Cut + Shave Combo", price: "$55", description: "Haircut paired with a full hot towel straight-razor shave." },
      { name: "Full Service Package", price: "$65", description: "Everything included — cut, beard shape-up, hot towel, and neck shave." },
    ],
  },
  {
    category: "Extras & Add-ons",
    icon: "✨",
    services: [
      { name: "Edge-up / Line-up", price: "$10", description: "Crisp edge-up of the hairline, sideburns, and neck." },
      { name: "Hair Design", price: "$15+", description: "Custom designs and patterns cut into your style." },
      { name: "Eyebrow Trim", price: "$5", description: "Clean up and shape your eyebrows." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Marina Barbershop</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Services & Pricing
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Premium barbershop services at honest prices. Walk-ins welcome — no appointment needed.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {serviceCategories.map((cat) => (
          <div key={cat.category} className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                {cat.category}
              </h2>
              <div className="flex-1 h-px bg-zinc-800 ml-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-zinc-900 border border-amber-400/20 rounded-2xl p-8 text-center mt-8">
          <h3 className="text-2xl font-black text-white mb-3 uppercase">Ready for Your Cut?</h3>
          <p className="text-zinc-400 mb-6">Walk in anytime or give us a call to check wait times.</p>
          <a
            href="tel:+12017363239"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black px-8 py-3 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/20 tracking-wide uppercase text-sm"
          >
            Call (201) 736-3239
          </a>
        </div>
      </div>
    </div>
  );
}
