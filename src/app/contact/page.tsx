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
    <div className="min-h-screen bg-stone-50 pt-20">
      {/* Header */}
      <div className="bg-stone-100 border-b border-stone-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-xs font-medium tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-4">
            Contact Us
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
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-white border border-stone-200 p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">Message Received!</h3>
                <p className="text-stone-500">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <p className="text-stone-400 text-sm mt-4">Or call us directly: <a href="tel:+12017363239" className="text-stone-900 hover:underline font-medium">(201) 736-3239</a></p>
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
                  Send Message →
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
