interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
  service?: string;
}

export default function TestimonialCard({ name, rating, review, date, service }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/5">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < rating ? "text-amber-400" : "text-zinc-700"}`}>★</span>
        ))}
      </div>
      <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">&ldquo;{review}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          {service && <p className="text-zinc-500 text-xs mt-0.5">{service}</p>}
        </div>
        {date && <p className="text-zinc-600 text-xs">{date}</p>}
      </div>
    </div>
  );
}
