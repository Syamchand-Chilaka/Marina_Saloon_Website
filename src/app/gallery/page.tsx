import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Marina Barbershop Jersey City",
  description: "See our work — fresh fades, classic cuts, beard trims, and more at Marina Barbershop in Jersey City, NJ.",
};

const galleryItems = [
  { id: 1, caption: "Fresh Fade", category: "Haircut", seed: "fade-cut-1", width: 400, height: 500 },
  { id: 2, caption: "Classic Taper", category: "Haircut", seed: "classic-cut-2", width: 400, height: 400 },
  { id: 3, caption: "Beard Trim & Shape", category: "Beard", seed: "beard-trim-3", width: 400, height: 500 },
  { id: 4, caption: "High Fade", category: "Haircut", seed: "high-fade-4", width: 400, height: 400 },
  { id: 5, caption: "Scissor Cut", category: "Haircut", seed: "scissor-5", width: 400, height: 500 },
  { id: 6, caption: "Hot Towel Shave", category: "Shave", seed: "shave-6", width: 400, height: 400 },
  { id: 7, caption: "Mid Fade", category: "Haircut", seed: "mid-fade-7", width: 400, height: 500 },
  { id: 8, caption: "Beard Shape-up", category: "Beard", seed: "beard-8", width: 400, height: 400 },
  { id: 9, caption: "Low Taper", category: "Haircut", seed: "taper-9", width: 400, height: 400 },
  { id: 10, caption: "Kids Cut", category: "Haircut", seed: "kids-10", width: 400, height: 500 },
  { id: 11, caption: "Full Beard Groom", category: "Beard", seed: "beard-full-11", width: 400, height: 400 },
  { id: 12, caption: "Design Cut", category: "Haircut", seed: "design-12", width: 400, height: 500 },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Gallery
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every cut tells a story. Browse some of our recent work from Marina Barbershop.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid group relative rounded-xl overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${item.seed}/${item.width}/${item.height}`}
                alt={item.caption}
                width={item.width}
                height={item.height}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-semibold text-sm">{item.caption}</p>
                <p className="text-amber-400 text-xs">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-zinc-400 text-lg mb-6">Like what you see? Come in for your own transformation.</p>
          <a
            href="tel:+12017363239"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black px-10 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/25 tracking-wide uppercase text-sm"
          >
            Book Your Cut — (201) 736-3239
          </a>
        </div>
      </div>
    </div>
  );
}
