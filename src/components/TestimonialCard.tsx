interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
  service?: string;
}

export default function TestimonialCard({ name, rating, review, date, service }: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-sm ${i < rating ? "text-stone-800 dark:text-stone-200" : "text-stone-200 dark:text-stone-700"}`}>★</span>
        ))}
      </div>
      <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed mb-5 italic">&ldquo;{review}&rdquo;</p>
      <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-stone-800">
        <div>
          <p className="text-stone-900 dark:text-white font-semibold text-sm">{name}</p>
          {service && <p className="text-stone-400 dark:text-stone-500 text-xs mt-0.5">{service}</p>}
        </div>
        {date && <p className="text-stone-300 dark:text-stone-600 text-xs">{date}</p>}
      </div>
    </div>
  );
}
