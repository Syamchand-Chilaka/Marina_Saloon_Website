interface ServiceCardProps {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export default function ServiceCard({ name, price, description, popular }: ServiceCardProps) {
  return (
    <div className={`relative bg-white border p-5 md:p-6 transition-all duration-300 hover:shadow-md group ${popular ? "border-stone-400" : "border-stone-200"
      }`}>
      {popular && (
        <span className="absolute -top-3 left-4 bg-stone-900 text-stone-50 text-[10px] font-semibold px-3 py-1 tracking-[0.2em] uppercase">
          Popular
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-stone-900 font-display font-semibold text-base md:text-lg group-hover:text-stone-600 transition-colors duration-200">
            {name}
          </h3>
          {description && (
            <p className="text-stone-400 text-sm mt-1 leading-relaxed">{description}</p>
          )}
        </div>
        <div className="text-stone-900 font-display font-bold text-xl md:text-2xl whitespace-nowrap">
          {price}
        </div>
      </div>
    </div>
  );
}
