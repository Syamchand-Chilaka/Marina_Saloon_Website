"use client";
import ServiceCard from "@/components/ServiceCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      category: t("svc.cat.haircuts"),
      icon: "✂️",
      services: [
        { name: t("svc.classicHaircut"), price: "$25", description: t("svc.classicHaircut.desc") },
        { name: t("svc.fade"), price: "$30", description: t("svc.fade.desc"), popular: true },
        { name: t("svc.scissorCut"), price: "$30", description: t("svc.scissorCut.desc") },
        { name: t("svc.buzzCut"), price: "$20", description: t("svc.buzzCut.desc") },
        { name: t("svc.kidsCut"), price: "$20", description: t("svc.kidsCut.desc") },
        { name: t("svc.seniorCut"), price: "$20", description: t("svc.seniorCut.desc") },
      ],
    },
    {
      category: t("svc.cat.beardServices"),
      icon: "🪒",
      services: [
        { name: t("svc.beardTrim"), price: "$15", description: t("svc.beardTrim.desc") },
        { name: t("svc.beardShapeup"), price: "$20", description: t("svc.beardShapeup.desc"), popular: true },
        { name: t("svc.hotTowelShave"), price: "$35", description: t("svc.hotTowelShave.desc"), popular: true },
        { name: t("svc.neckShave"), price: "$10", description: t("svc.neckShave.desc") },
      ],
    },
    {
      category: t("svc.cat.comboPackages"),
      icon: "⭐",
      services: [
        { name: t("svc.cutBeardCombo"), price: "$40", description: t("svc.cutBeardCombo.desc"), popular: true },
        { name: t("svc.cutShaveCombo"), price: "$55", description: t("svc.cutShaveCombo.desc") },
        { name: t("svc.fullServicePackage"), price: "$65", description: t("svc.fullServicePackage.desc") },
      ],
    },
    {
      category: t("svc.cat.extrasAddons"),
      icon: "✨",
      services: [
        { name: t("svc.edgeupLineup"), price: "$10", description: t("svc.edgeupLineup.desc") },
        { name: t("svc.hairDesign"), price: "$15+", description: t("svc.hairDesign.desc") },
        { name: t("svc.eyebrowTrim"), price: "$5", description: t("svc.eyebrowTrim.desc") },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">Marina Barbershop</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4">
            {t("services.title")}
          </h1>
          <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mb-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {serviceCategories.map((cat) => (
          <div key={cat.icon} className="mb-14 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900 dark:text-white tracking-tight">
                {cat.category}
              </h2>
              <div className="flex-1 h-px bg-stone-200 dark:bg-stone-700 ml-2 rtl:ml-0 rtl:mr-2" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.services.map((service) => (
                <ServiceCard key={service.name} {...service} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-stone-900 dark:bg-stone-800 p-8 text-center mt-8">
          <h3 className="font-display text-2xl font-bold text-white mb-3">{t("services.readyForCut")}</h3>
          <p className="text-stone-400 mb-6">{t("services.walkInAnytime")}</p>
          <a
            href="tel:+12017363239"
            className="inline-block bg-white hover:bg-stone-100 text-stone-900 font-medium px-8 py-3 transition-all duration-200 tracking-widest uppercase text-xs"
          >
            {t("home.callNumber")}
          </a>
        </div>
      </div>
    </div>
  );
}
