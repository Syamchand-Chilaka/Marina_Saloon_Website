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
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-4">
            Gallery
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-6" />
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Every cut tells a story. Browse some of our recent work from Marina Barbershop.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid group relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.caption}
                width={item.width}
                height={item.height}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">{item.caption}</p>
                <p className="text-stone-300 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-stone-500 text-lg mb-6">Like what you see? Come in for your own transformation.</p>
          <a
            href="tel:+12017363239"
            className="inline-block bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-10 py-4 transition-all duration-200 tracking-widest uppercase text-xs"
          >
            Book Your Cut — (201) 736-3239
          </a>
        </div>
      </div>
    </div>
  );
}
