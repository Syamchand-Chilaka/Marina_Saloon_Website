"use client";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function GalleryPage() {
  const { t } = useLanguage();

  const galleryItems = [
    { id: 1, caption: t("gallery.curlyFade"), category: t("gallery.cat.haircut"), src: `${basePath}/images/curly-fade-side.jpg`, width: 243, height: 244 },
    { id: 2, caption: t("gallery.curlyFadeBack"), category: t("gallery.cat.haircut"), src: `${basePath}/images/curly-fade-back.jpg`, width: 243, height: 406 },
    { id: 3, caption: t("gallery.kidsCut"), category: t("gallery.cat.haircut"), src: `${basePath}/images/kids-cut-blonde.jpg`, width: 243, height: 244 },
    { id: 4, caption: t("gallery.curlyCut"), category: t("gallery.cat.haircut"), src: `${basePath}/images/curly-cut-side.jpg`, width: 243, height: 406 },
    { id: 5, caption: t("gallery.beardTrimFade"), category: t("gallery.cat.beard"), src: `${basePath}/images/curly-beard-trim.jpg`, width: 243, height: 304 },
    { id: 6, caption: t("gallery.kidsHaircut"), category: t("gallery.cat.haircut"), src: `${basePath}/images/kids-cut-smile.jpg`, width: 243, height: 244 },
    { id: 7, caption: t("gallery.happyClient"), category: t("gallery.cat.haircut"), src: `${basePath}/images/mirror-selfie.jpg`, width: 243, height: 406 },
    { id: 8, caption: t("gallery.barberAtWork"), category: t("gallery.cat.shop"), src: `${basePath}/images/barber-at-work.jpg`, width: 243, height: 244 },
    { id: 9, caption: t("gallery.kidsCutDesign"), category: t("gallery.cat.haircut"), src: `${basePath}/images/kids-cut-peace.jpg`, width: 243, height: 244 },
    { id: 10, caption: t("gallery.ourBarber"), category: t("gallery.cat.team"), src: `${basePath}/images/barber-client-selfie.jpg`, width: 243, height: 244 },
    { id: 11, caption: t("gallery.kidsFade"), category: t("gallery.cat.haircut"), src: `${basePath}/images/kids-cut-flag.jpg`, width: 243, height: 244 },
    { id: 12, caption: t("gallery.theOwner"), category: t("gallery.cat.team"), src: `${basePath}/images/owner-portrait.jpg`, width: 243, height: 406 },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.ourWork")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4">
            {t("gallery.title")}
          </h1>
          <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mb-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">
            {t("gallery.subtitle")}
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
          <p className="text-stone-500 dark:text-stone-400 text-lg mb-6">{t("gallery.likeWhatYouSee")}</p>
          <a
            href="tel:+12017363239"
            className="inline-block bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 font-medium px-10 py-4 transition-all duration-200 tracking-widest uppercase text-xs"
          >
            {t("gallery.bookYourCut")}
          </a>
        </div>
      </div>
    </div>
  );
}
