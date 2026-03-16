"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function ReviewsPage() {
  const { t } = useLanguage();

  const allReviews = [
    { name: "Carlos M.", rating: 5, review: t("review.1"), date: t("date.january2025"), service: t("svc.fade") },
    { name: "James T.", rating: 5, review: t("review.2"), date: t("date.december2024"), service: t("svc.classicHaircut") },
    { name: "Ricardo P.", rating: 5, review: t("review.3"), date: t("date.january2025"), service: t("svc.hotTowelShave") },
    { name: "Miguel A.", rating: 5, review: t("review.4"), date: t("date.november2024"), service: t("svc.kidsCut") },
    { name: "David R.", rating: 5, review: t("review.5"), date: t("date.january2025"), service: t("svc.cutBeardCombo") },
    { name: "Kevin L.", rating: 5, review: t("review.6"), date: t("date.december2024"), service: t("svc.fade") },
    { name: "Anthony S.", rating: 5, review: t("review.7"), date: t("date.october2024"), service: t("svc.cutBeardCombo") },
    { name: "Omar J.", rating: 5, review: t("review.8"), date: t("date.december2024"), service: t("svc.classicHaircut") },
    { name: "Luis F.", rating: 5, review: t("review.9"), date: t("date.november2024"), service: t("svc.fade") },
    { name: "Tony W.", rating: 5, review: t("review.10"), date: t("date.january2025"), service: t("svc.fullServicePackage") },
  ];

  const averageRating = 5.0;
  const totalReviews = 291;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("reviews.customerReviews")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4">
            {t("reviews.whatPeopleSay")}
          </h1>
          <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mb-8" />

          {/* Rating summary */}
          <div className="inline-flex flex-col items-center gap-3 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-8 py-6">
            <div className="font-display text-5xl font-bold text-stone-900 dark:text-white">{averageRating.toFixed(1)}</div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-xl text-stone-800 dark:text-stone-200">★</span>
              ))}
            </div>
            <p className="text-stone-400 dark:text-stone-500 text-sm">{t("reviews.basedOn")}</p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {allReviews.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 bg-stone-900 dark:bg-stone-800 p-8 md:p-10 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-xl text-white">★</span>
            ))}
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">{t("reviews.loveMarina")}</h3>
          <p className="text-stone-400 mb-6 max-w-md mx-auto">
            {t("reviews.leaveReview")}
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJbTsc4eNXwokRWg6NarH2QHs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-900 font-medium px-8 py-3 transition-all duration-200 tracking-widest uppercase text-xs"
          >
            {t("reviews.leaveGoogleReview")}
          </a>
        </div>
      </div>
    </div>
  );
}
