"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const hours = [
  { day: "Monday", hours: "11:00 AM – 9:00 PM", closed: false },
  { day: "Tuesday", hours: "11:00 AM – 9:00 PM", closed: false },
  { day: "Wednesday", hours: "Closed", closed: true },
  { day: "Thursday", hours: "11:00 AM – 9:00 PM", closed: false },
  { day: "Friday", hours: "11:00 AM – 9:00 PM", closed: false },
  { day: "Saturday", hours: "11:00 AM – 9:00 PM", closed: false },
  { day: "Sunday", hours: "11:00 AM – 3:00 PM", closed: false },
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Questions? Walk-in hours? We&apos;re here to help. Or just stop by — walk-ins always welcome.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-zinc-400">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <p className="text-zinc-500 text-sm mt-4">Or call us directly: <a href="tel:+12017363239" className="text-amber-400 hover:underline">(201) 736-3239</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder="(201) 555-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm font-medium mb-2" htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-zinc-600">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-zinc-900">{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 text-sm font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-400 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us anything — question about services, wait times, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/20 tracking-wide uppercase text-sm"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-5 uppercase tracking-tight">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Address</p>
                    <p className="text-zinc-400 text-sm mt-0.5">865 Bergen Ave #2<br />Jersey City, NJ 07306</p>
                    <a
                      href="https://maps.google.com/?q=865+Bergen+Ave+Jersey+City+NJ+07306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 text-xs hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Phone</p>
                    <a href="tel:+12017363239" className="text-amber-400 text-sm hover:text-amber-300 font-semibold transition-colors">
                      (201) 736-3239
                    </a>
                    <p className="text-zinc-600 text-xs mt-0.5">Tap to call</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 text-xl mt-0.5">💈</span>
                  <div>
                    <p className="text-white font-semibold text-sm">Walk-ins</p>
                    <p className="text-zinc-400 text-sm mt-0.5">Always welcome. No appointment needed.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800">
                <h2 className="text-xl font-black text-white uppercase tracking-tight">Business Hours</h2>
              </div>
              {hours.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-6 py-3 text-sm ${
                    i < hours.length - 1 ? "border-b border-zinc-800/50" : ""
                  }`}
                >
                  <span className="text-zinc-300">{item.day}</span>
                  <span className={`font-semibold ${item.closed ? "text-red-400" : "text-amber-400"}`}>{item.hours}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.234!2d-74.0657!3d40.7317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257e3e11c3b6d%3A0x7b40f6b16a8d0e5a!2s865+Bergen+Ave%2C+Jersey+City%2C+NJ+07306!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marina Barbershop Location"
                className="w-full grayscale opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
