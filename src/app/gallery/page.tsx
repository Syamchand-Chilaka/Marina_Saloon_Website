import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Marina Barbershop Jersey City",
  description: "See our work — fresh fades, classic cuts, beard trims, and more at Marina Barbershop in Jersey City, NJ.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const galleryItems = [
  { id: 1, caption: "Curly Fade", category: "Haircut", src: `${basePath}/images/curly-fade-side.jpg`, width: 243, height: 244 },
  { id: 2, caption: "Curly Fade — Back View", category: "Haircut", src: `${basePath}/images/curly-fade-back.jpg`, width: 243, height: 406 },
  { id: 3, caption: "Kids Cut", category: "Haircut", src: `${basePath}/images/kids-cut-blonde.jpg`, width: 243, height: 244 },
  { id: 4, caption: "Curly Cut", category: "Haircut", src: `${basePath}/images/curly-cut-side.jpg`, width: 243, height: 406 },
  { id: 5, caption: "Beard Trim & Fade", category: "Beard", src: `${basePath}/images/curly-beard-trim.jpg`, width: 243, height: 304 },
  { id: 6, caption: "Kids Haircut", category: "Haircut", src: `${basePath}/images/kids-cut-smile.jpg`, width: 243, height: 244 },
  { id: 7, caption: "Happy Client", category: "Haircut", src: `${basePath}/images/mirror-selfie.jpg`, width: 243, height: 406 },
  { id: 8, caption: "Barber at Work", category: "Shop", src: `${basePath}/images/barber-at-work.jpg`, width: 243, height: 244 },
  { id: 9, caption: "Kids Cut — Design", category: "Haircut", src: `${basePath}/images/kids-cut-peace.jpg`, width: 243, height: 244 },
  { id: 10, caption: "Our Barber", category: "Team", src: `${basePath}/images/barber-client-selfie.jpg`, width: 243, height: 244 },
  { id: 11, caption: "Kids Fade", category: "Haircut", src: `${basePath}/images/kids-cut-flag.jpg`, width: 243, height: 244 },
  { id: 12, caption: "The Owner", category: "Team", src: `${basePath}/images/owner-portrait.jpg`, width: 243, height: 406 },
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
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
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
