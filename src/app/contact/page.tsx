"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const hours = [
  { day: "Monday", hours: "11:00 AM – 9:00 PM" },
  { day: "Tuesday", hours: "11:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "11:00 AM – 9:00 PM" },
  { day: "Friday", hours: "11:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 3:00 PM" },
];

const services = [
  "Classic Haircut",
  "Fade",
  "Scissor Cut",
  "Kids Cut",
  "Beard Trim",
  "Beard Shape-up",
  "Hot Towel Shave",
  "Cut + Beard Combo",
  "Full Service Package",
  "Other",
];

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
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">Book Online</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-4">
            Contact & Booking
          </h1>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-6" />
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Questions? Walk-in hours? We&apos;re here to help. Or just stop by — walk-ins always welcome.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Book an Appointment</h2>
            {submitted ? (
              <div className="bg-white border border-stone-200 p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">Booking Request Received!</h3>
                <p className="text-stone-500 mb-6">Thanks for reaching out. Add this to your calendar so you don&apos;t forget:</p>

                {/* Calendar buttons */}
                {form.date && form.time ? (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    <a
                      href={buildGoogleCalendarUrl(form)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium text-xs px-6 py-3 tracking-widest uppercase transition-all duration-200"
                    >
                      📅 Add to Google Calendar
                    </a>
                    <button
                      onClick={() => downloadICSFile(form)}
                      className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-900 font-medium text-xs px-6 py-3 tracking-widest uppercase transition-all duration-200"
                    >
                      🍎 Add to Apple Calendar
                    </button>
                  </div>
                ) : null}

                <p className="text-stone-400 text-sm">Or call us directly: <a href="tel:+12017363239" className="text-stone-900 hover:underline font-medium">(201) 736-3239</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 placeholder-stone-300 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 placeholder-stone-300 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="(201) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 placeholder-stone-300 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-stone-300">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      min={minDate}
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="time">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={form.time}
                      min="11:00"
                      max="21:00"
                      onChange={handleChange}
                      className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 text-sm font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white border border-stone-200 focus:border-stone-900 text-stone-800 placeholder-stone-300 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us anything — question about services, wait times, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium py-4 transition-all duration-200 tracking-widest uppercase text-xs"
                >
                  Send Booking Request →
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white border border-stone-200 p-6">
              <h2 className="font-display text-xl font-semibold text-stone-900 mb-5">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-stone-900 font-semibold text-sm">Address</p>
                    <p className="text-stone-500 text-sm mt-0.5">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
                    <a
                      href="https://maps.google.com/?q=865+Bergen+Ave+Jersey+City+NJ+07306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-900 text-xs hover:underline mt-1 inline-block font-medium"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-stone-900 font-semibold text-sm">Phone</p>
                    <a href="tel:+12017363239" className="text-stone-900 text-sm hover:text-stone-600 font-semibold transition-colors">
                      (201) 736-3239
                    </a>
                    <p className="text-stone-400 text-xs mt-0.5">Tap to call</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">💈</span>
                  <div>
                    <p className="text-stone-900 font-semibold text-sm">Walk-ins</p>
                    <p className="text-stone-500 text-sm mt-0.5">Always welcome. No appointment needed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-stone-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100">
                <h2 className="font-display text-xl font-semibold text-stone-900">Business Hours</h2>
              </div>
              {hours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-6 py-3 text-sm ${i < hours.length - 1 ? "border-b border-stone-100" : ""
                    }`}
                >
                  <span className="text-stone-600">{item.day}</span>
                  <span className={`font-semibold ${item.closed ? "text-red-400" : "text-stone-900"}`}>{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden border border-stone-200">
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
