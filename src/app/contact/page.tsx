"use client";

import { useState, type FormEvent } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "6 Firestone Road\nStrathroy, ON N7G 4L9\nCanada",
    href: "https://maps.google.com/?q=6+Firestone+Road+Strathroy+ON+N7G+4L9",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "(519) 555-1234",
    href: "tel:+15195551234",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "info@summitel.ca",
    href: "mailto:info@summitel.ca",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: By Appointment\nSunday: Closed",
  },
];

const inquiryTypes = [
  "Buy Equipment",
  "Sell Equipment",
  "Lease Equipment",
  "General Inquiry",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Contact form submission:", formState);
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Ready to buy, sell, or lease? Have a question about a specific unit?
            Get in touch — we respond fast.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-400 hover:text-accent transition-colors whitespace-pre-line text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 whitespace-pre-line text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 h-48 rounded-lg bg-charcoal-light border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 text-gray-600 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm">Strathroy, Ontario</p>
                  <a
                    href="https://maps.google.com/?q=6+Firestone+Road+Strathroy+ON+N7G+4L9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-charcoal-light border border-white/10 rounded-lg p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      Message Sent
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                      Thanks for reaching out. We&apos;ll get back to you within
                      one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          inquiryType: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-accent/10 text-accent hover:bg-accent hover:text-charcoal font-medium rounded-md transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Fill out the form below and we&apos;ll get back to you
                      promptly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                            placeholder="(519) 555-1234"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-300 mb-2"
                          >
                            Company
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formState.company}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                company: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          value={formState.inquiryType}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              inquiryType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 appearance-none cursor-pointer"
                        >
                          <option value="">Select an option</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 resize-none"
                          placeholder="Tell us about your equipment needs — what you're looking for, what you have to sell, or any questions..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-dark text-charcoal font-bold rounded-md transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
