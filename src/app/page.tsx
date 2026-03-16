"use client";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const { t } = useLanguage();

  const featuredServices = [
    { name: t("svc.classicHaircut"), price: "$25", description: t("svc.classicHaircut.homeDesc"), popular: false },
    { name: t("svc.fade"), price: "$30", description: t("svc.fade.homeDesc"), popular: true },
    { name: t("svc.beardTrim"), price: "$15", description: t("svc.beardTrim.homeDesc"), popular: false },
    { name: t("svc.hotTowelShave"), price: "$35", description: t("svc.hotTowelShave.homeDesc"), popular: false },
    { name: t("svc.cutBeardCombo"), price: "$40", description: t("svc.cutBeardCombo.homeDesc"), popular: true },
    { name: t("svc.kidsCut"), price: "$20", description: t("svc.kidsCut.homeDesc"), popular: false },
  ];

  const testimonials = [
    { name: "Carlos M.", rating: 5, review: t("review.home.1"), date: t("date.jan2025"), service: t("svc.fade") },
    { name: "James T.", rating: 5, review: t("review.home.2"), date: t("date.dec2024"), service: t("svc.classicHaircut") },
    { name: "Ricardo P.", rating: 5, review: t("review.home.3"), date: t("date.jan2025"), service: t("svc.hotTowelShave") },
  ];

  const galleryImages = [
    { id: 1, caption: t("gallery.curlyFade"), src: `${basePath}/images/curly-fade-side.jpg` },
    { id: 2, caption: t("gallery.kidsCut"), src: `${basePath}/images/kids-cut-blonde.jpg` },
    { id: 3, caption: t("gallery.beardAndFade"), src: `${basePath}/images/curly-beard-trim.jpg` },
    { id: 4, caption: t("gallery.barberAtWork"), src: `${basePath}/images/barber-at-work.jpg` },
    { id: 5, caption: t("gallery.happyClient"), src: `${basePath}/images/kids-cut-smile.jpg` },
    { id: 6, caption: t("gallery.freshCut"), src: `${basePath}/images/mirror-selfie.jpg` },
  ];

  const hours = [
    { day: t("day.monday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.tuesday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.wednesday"), hours: t("common.closed"), closed: true },
    { day: t("day.thursday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.friday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.saturday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.sunday"), hours: "11:00 AM – 3:00 PM" },
  ];

  return (
    <>
      <HeroSection />

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.whatWeOffer")}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
              {t("home.ourServices")}
            </h2>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-white text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              {t("home.viewAllServices")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Marina Barbershop */}
      <section className="py-20 md:py-28 bg-stone-100 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.aboutUs")}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
              {t("home.whyMarina")}
            </h2>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <div>
              <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed mb-6">
                {t("home.aboutP1")}
              </p>
              <p className="text-stone-500 dark:text-stone-500 text-sm sm:text-base leading-relaxed mb-8">
                {t("home.aboutP2")}
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
                  <p className="font-display font-semibold text-stone-900 dark:text-white text-sm sm:text-base">Marina Barbershop</p>
                  <p className="text-stone-400 dark:text-stone-500 text-xs sm:text-sm">{t("home.servingSince")}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "✂️", title: t("home.expertBarbers"), desc: t("home.expertBarbersDesc") },
                { icon: "🚶", title: t("home.walkinsWelcome"), desc: t("home.walkinsWelcomeDesc") },
                { icon: "💈", title: t("home.premiumProducts"), desc: t("home.premiumProductsDesc") },
                { icon: "🤝", title: t("home.communityFirst"), desc: t("home.communityFirstDesc") },
              ].map((feature) => (
                <div key={feature.icon} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-5 text-center hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-stone-900 dark:text-white font-display font-semibold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-stone-400 dark:text-stone-500 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.ourWork")}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
              {t("home.gallery")}
            </h2>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mt-5" />
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
              className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-white text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              {t("home.viewFullGallery")}
            </Link>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 md:py-28 bg-stone-100 dark:bg-stone-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.wereOpen")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 dark:text-white tracking-tight">
              {t("home.businessHours")}
            </h2>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mt-5" />
          </div>
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 overflow-hidden">
            {hours.map((item, i) => (
              <div
                key={item.day}
                className={`flex justify-between items-center px-6 py-4 ${i < hours.length - 1 ? "border-b border-stone-100 dark:border-stone-800" : ""
                  }`}
              >
                <span className="text-stone-800 dark:text-stone-200 font-medium">{item.day}</span>
                <span className={`font-semibold text-sm ${item.closed ? "text-red-400" : "text-stone-900 dark:text-white"}`}>{item.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 dark:text-stone-500 text-sm mt-5">{t("home.walkInsNote")}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("home.happyClients")}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white tracking-tight">
              {t("home.whatPeopleSay")}
            </h2>
            <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((rev) => (
              <TestimonialCard key={rev.name} {...rev} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-white text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium text-xs px-8 py-3.5 transition-all duration-200 tracking-[0.2em] uppercase"
            >
              {t("home.readAllReviews")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 md:py-32 bg-stone-900 dark:bg-stone-800">
        <div className="text-center px-5 max-w-4xl mx-auto">
          <div className="inline-block border border-stone-700 dark:border-stone-600 rounded-full px-5 py-1.5 mb-8">
            <span className="text-stone-400 text-xs tracking-[0.3em] uppercase">{t("home.noAppointmentNeeded")}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {t("home.walkInsAlways")} <span className="italic font-light text-stone-400">{t("home.always")}</span> {t("home.welcome")}
          </h2>
          <p className="text-stone-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("home.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+12017363239"
              className="bg-white hover:bg-stone-100 text-stone-900 font-medium text-sm px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-200 tracking-widest uppercase"
            >
              {t("home.callNumber")}
            </a>
            <Link
              href="/contact"
              className="border border-stone-600 hover:border-white text-stone-300 hover:text-white font-medium text-sm px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-200 tracking-widest uppercase"
            >
              {t("home.getDirections")}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Mini */}
      <section className="py-16 md:py-20 bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">📍</div>
              <h3 className="text-stone-900 dark:text-white font-display font-semibold">{t("home.location")}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">📞</div>
              <h3 className="text-stone-900 dark:text-white font-display font-semibold">{t("home.phone")}</h3>
              <a href="tel:+12017363239" className="text-stone-900 dark:text-white hover:text-stone-600 dark:hover:text-stone-300 text-sm font-semibold transition-colors">
                (201) 736-3239
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-2xl">🕐</div>
              <h3 className="text-stone-900 dark:text-white font-display font-semibold">{t("home.hours")}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm">{t("home.hoursDetail")}<br />{t("home.hoursDetail2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
