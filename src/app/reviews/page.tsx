import TestimonialCard from "@/components/TestimonialCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Marina Barbershop Jersey City",
  description: "Read what customers are saying about Marina Barbershop in Jersey City, NJ. 5-star reviews for cuts, fades, and beard services.",
};

const allReviews = [
  {
    name: "Carlos M.",
    rating: 5,
    review: "Best barbershop in Jersey City, hands down. The fade is always on point and the atmosphere is chill. Won't go anywhere else.",
    date: "January 2025",
    service: "Fade",
  },
  {
    name: "James T.",
    rating: 5,
    review: "Came in as a walk-in and was taken care of almost immediately. Professional, clean shop, and the barber really listened to what I wanted.",
    date: "December 2024",
    service: "Classic Cut",
  },
  {
    name: "Ricardo P.",
    rating: 5,
    review: "The hot towel shave is an absolute experience. Feels like a luxury treatment but at a real barbershop price. This is my spot now.",
    date: "January 2025",
    service: "Hot Towel Shave",
  },
  {
    name: "Miguel A.",
    rating: 5,
    review: "Brought my son in for his first real haircut and they were incredibly patient and kind. He loved it. We're regulars now.",
    date: "November 2024",
    service: "Kids Cut",
  },
  {
    name: "David R.",
    rating: 5,
    review: "Been going here for 2 years. Consistent quality every single time. The combo deal is a steal — haircut and beard for $40.",
    date: "January 2025",
    service: "Cut + Beard Combo",
  },
  {
    name: "Kevin L.",
    rating: 5,
    review: "Clean shop, friendly staff, and they actually know how to do a proper fade. No fuss, just great work every time I come in.",
    date: "December 2024",
    service: "Fade",
  },
  {
    name: "Anthony S.",
    rating: 5,
    review: "Best haircut I've had in years. The barber was super attentive and gave great advice on styling. The beard shape-up was fire.",
    date: "October 2024",
    service: "Cut + Beard Combo",
  },
  {
    name: "Omar J.",
    rating: 5,
    review: "Always leave feeling fresh. The environment is welcoming and professional. Easy to find in Journal Square area. Highly recommend.",
    date: "December 2024",
    service: "Classic Cut",
  },
  {
    name: "Luis F.",
    rating: 5,
    review: "I'm picky about my fades and Marina's team delivers every time. They pay attention to detail and never rush you out.",
    date: "November 2024",
    service: "Fade",
  },
  {
    name: "Tony W.",
    rating: 5,
    review: "The full service package is worth every penny. Clean cut, hot towel, the works. Walked out looking like a new man.",
    date: "January 2025",
    service: "Full Service Package",
  },
];

export default function ReviewsPage() {
  const averageRating = 5.0;
  const totalReviews = allReviews.length;

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Customer Reviews</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            What People Say
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />

          {/* Rating summary */}
          <div className="inline-flex flex-col items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-2xl px-8 py-6">
            <div className="text-5xl font-black text-amber-400">{averageRating.toFixed(1)}</div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-2xl text-amber-400">★</span>
              ))}
            </div>
            <p className="text-zinc-400 text-sm">Based on {totalReviews}+ reviews</p>
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
        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-2xl text-amber-400">★</span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase">Love Marina Barbershop?</h3>
          <p className="text-zinc-400 mb-6 max-w-md mx-auto">
            Leave us a review on Google and help others discover the best barbershop in Jersey City.
          </p>
          <a
            href="https://www.google.com/maps/place/Marina+Barbershop/@40.7329,-74.0625,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black px-8 py-3 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/20 tracking-wide uppercase text-sm"
          >
            Leave a Google Review →
          </a>
        </div>
      </div>
    </div>
  );
}
