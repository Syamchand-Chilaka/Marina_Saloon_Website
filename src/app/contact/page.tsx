"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

/* ──────────── Calendar helpers ──────────── */

function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function buildGoogleCalendarUrl(form: FormState): string {
  const start = new Date(`${form.date}T${form.time}`);
  const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const details = [
    `Client: ${form.name}`,
    form.phone ? `Phone: ${form.phone}` : "",
    form.email ? `Email: ${form.email}` : "",
    form.service ? `Service: ${form.service}` : "",
    form.message ? `Note: ${form.message}` : "",
  ].filter(Boolean).join("\\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Marina Barbershop — ${form.service || "Appointment"} (${form.name})`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details,
    location: "865 Bergen Ave #2, Jersey City, NJ 07306",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function downloadICSFile(form: FormState): void {
  const start = new Date(`${form.date}T${form.time}`);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  const description = [
    `Client: ${form.name}`,
    form.phone ? `Phone: ${form.phone}` : "",
    form.email ? `Email: ${form.email}` : "",
    form.service ? `Service: ${form.service}` : "",
    form.message ? `Note: ${form.message}` : "",
  ].filter(Boolean).join("\\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Marina Barbershop//Booking//EN",
    "BEGIN:VEVENT",
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:Marina Barbershop — ${form.service || "Appointment"} (${form.name})`,
    `DESCRIPTION:${description}`,
    "LOCATION:865 Bergen Ave #2\\, Jersey City\\, NJ 07306",
    `UID:${Date.now()}@marinabarbershop`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Barbershop appointment in 30 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "marina-barbershop-appointment.ics";
  a.click();
  URL.revokeObjectURL(url);
}

/* ──────────── Component ──────────── */

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const hours = [
    { day: t("day.monday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.tuesday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.wednesday"), hours: t("common.closed"), closed: true },
    { day: t("day.thursday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.friday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.saturday"), hours: "11:00 AM – 9:00 PM" },
    { day: t("day.sunday"), hours: "11:00 AM – 3:00 PM" },
  ];

  const services = [
    t("svc.classicHaircut"),
    t("svc.fade"),
    t("svc.scissorCut"),
    t("svc.kidsCut"),
    t("svc.beardTrim"),
    t("svc.beardShapeup"),
    t("svc.hotTowelShave"),
    t("svc.cutBeardCombo"),
    t("svc.fullServicePackage"),
    t("svc.other"),
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Minimum date = tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-20">
      {/* Header */}
      <div className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 dark:text-stone-500 text-xs font-medium tracking-[0.3em] uppercase mb-3">{t("contact.bookOnline")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4">
            {t("contact.title")}
          </h1>
          <div className="w-12 h-px bg-stone-300 dark:bg-stone-700 mx-auto mb-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white mb-6">{t("contact.bookAnAppointment")}</h2>
            {submitted ? (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-white mb-2">{t("contact.bookingReceived")}</h3>
                <p className="text-stone-500 dark:text-stone-400 mb-6">{t("contact.addToCalendar")}</p>

                {/* Calendar buttons */}
                {form.date && form.time ? (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <a
                      href={buildGoogleCalendarUrl(form)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 font-medium text-xs px-6 py-3 tracking-widest uppercase transition-all duration-200"
                    >
                      📅 {t("contact.addGoogleCalendar")}
                    </a>
                    <button
                      onClick={() => downloadICSFile(form)}
                      className="inline-flex items-center justify-center gap-2 border border-stone-300 dark:border-stone-600 hover:border-stone-900 dark:hover:border-white text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-medium text-xs px-6 py-3 tracking-widest uppercase transition-all duration-200"
                    >
                      🍎 {t("contact.addAppleCalendar")}
                    </button>
                  </div>
                ) : null}

                <p className="text-stone-400 dark:text-stone-500 text-sm">{t("contact.orCallDirectly")} <a href="tel:+12017363239" className="text-stone-900 dark:text-white hover:underline font-medium">(201) 736-3239</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="name">
                      {t("contact.fullName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 placeholder-stone-300 dark:placeholder-stone-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="phone">
                      {t("contact.phoneNumber")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 placeholder-stone-300 dark:placeholder-stone-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="(201) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="email">
                    {t("contact.emailAddress")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 placeholder-stone-300 dark:placeholder-stone-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="service">
                    {t("contact.serviceInterestedIn")}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-stone-300 dark:text-stone-600">{t("contact.selectService")}</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="date">
                      {t("contact.preferredDate")}
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      min={minDate}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="time">
                      {t("contact.preferredTime")}
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={form.time}
                      min="11:00"
                      max="21:00"
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 dark:text-stone-400 text-sm font-medium mb-2" htmlFor="message">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-400 text-stone-800 dark:text-stone-200 placeholder-stone-300 dark:placeholder-stone-600 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-200 text-stone-50 dark:text-stone-900 font-medium py-4 transition-all duration-200 tracking-widest uppercase text-xs"
                >
                  {t("contact.sendBooking")}
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-6">
              <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-white mb-5">{t("contact.visitUs")}</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-stone-900 dark:text-white font-semibold text-sm">{t("contact.address")}</p>
                    <p className="text-stone-500 dark:text-stone-400 text-sm mt-0.5">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
                    <a
                      href="https://maps.google.com/?q=865+Bergen+Ave+Jersey+City+NJ+07306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-900 dark:text-white text-xs hover:underline mt-1 inline-block font-medium"
                    >
                      {t("contact.getDirections")}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-stone-900 dark:text-white font-semibold text-sm">{t("home.phone")}</p>
                    <a href="tel:+12017363239" className="text-stone-900 dark:text-white text-sm hover:text-stone-600 dark:hover:text-stone-300 font-semibold transition-colors">
                      (201) 736-3239
                    </a>
                    <p className="text-stone-400 dark:text-stone-500 text-xs mt-0.5">{t("contact.tapToCall")}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">💈</span>
                  <div>
                    <p className="text-stone-900 dark:text-white font-semibold text-sm">{t("contact.walkIns")}</p>
                    <p className="text-stone-500 dark:text-stone-400 text-sm mt-0.5">{t("contact.alwaysWelcomeNoAppt")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800">
                <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-white">{t("home.businessHours")}</h2>
              </div>
              {hours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-6 py-3 text-sm ${i < hours.length - 1 ? "border-b border-stone-100 dark:border-stone-800" : ""
                    }`}
                >
                  <span className="text-stone-600 dark:text-stone-400">{item.day}</span>
                  <span className={`font-semibold ${item.closed ? "text-red-400" : "text-stone-900 dark:text-white"}`}>{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-stone-200 dark:border-stone-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.234!2d-74.0657!3d40.7317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257e3e11c3b6d%3A0x7b40f6b16a8d0e5a!2s865+Bergen+Ave%2C+Jersey+City%2C+NJ+07306!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marina Barbershop Location"
                className="w-full grayscale opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
