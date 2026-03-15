interface ServiceCardProps {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export default function ServiceCard({ name, price, description, popular }: ServiceCardProps) {
  return (
    <div className={`relative bg-zinc-900 border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/5 group ${
      popular ? "border-amber-400/40" : "border-zinc-800"
    }`}>
      {popular && (
        <span className="absolute -top-3 left-4 bg-amber-400 text-zinc-950 text-xs font-black px-3 py-1 rounded-full tracking-wide uppercase">
          Popular
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-white font-bold text-base md:text-lg group-hover:text-amber-400 transition-colors duration-200">
            {name}
          </h3>
          {description && (
            <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{description}</p>
          )}
        </div>
        <div className="text-amber-400 font-black text-xl md:text-2xl whitespace-nowrap">
          {price}
        </div>
      </div>
    </div>
  );
}
