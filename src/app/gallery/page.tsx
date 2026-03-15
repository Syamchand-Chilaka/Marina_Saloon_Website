import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Marina Barbershop Jersey City",
  description: "See our work — fresh fades, classic cuts, beard trims, and more at Marina Barbershop in Jersey City, NJ.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const galleryItems = [
  { id: 1, caption: "Fresh Fade", category: "Haircut", src: `${basePath}/gallery/fresh-fade.jpg`, width: 800, height: 1000 },
  { id: 2, caption: "Classic Taper", category: "Haircut", src: `${basePath}/gallery/classic-cut.jpg`, width: 800, height: 800 },
  { id: 3, caption: "Beard Trim & Shape", category: "Beard", src: `${basePath}/gallery/beard-trim.jpg`, width: 800, height: 1000 },
  { id: 4, caption: "High Fade", category: "Haircut", src: `${basePath}/gallery/scissor-cut.jpg`, width: 800, height: 800 },
  { id: 5, caption: "Scissor Cut", category: "Haircut", src: `${basePath}/gallery/shape-up.jpg`, width: 800, height: 1000 },
  { id: 6, caption: "Hot Towel Shave", category: "Shave", src: `${basePath}/gallery/hot-towel-shave.jpg`, width: 800, height: 800 },
  { id: 7, caption: "Mid Fade", category: "Haircut", src: `${basePath}/gallery/mid-fade.jpg`, width: 800, height: 1000 },
  { id: 8, caption: "Beard Shape-up", category: "Beard", src: `${basePath}/gallery/beard-shape.jpg`, width: 800, height: 800 },
  { id: 9, caption: "Low Taper", category: "Haircut", src: `${basePath}/gallery/low-taper.jpg`, width: 800, height: 800 },
  { id: 10, caption: "Kids Cut", category: "Haircut", src: `${basePath}/gallery/kids-cut.jpg`, width: 800, height: 1000 },
  { id: 11, caption: "Full Beard Groom", category: "Beard", src: `${basePath}/gallery/full-beard.jpg`, width: 800, height: 800 },
  { id: 12, caption: "Design Cut", category: "Haircut", src: `${basePath}/gallery/design-cut.jpg`, width: 800, height: 1000 },
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
                src={item.src}
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
