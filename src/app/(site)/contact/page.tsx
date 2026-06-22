"use client";

import { type FormEvent, useState } from "react";
import { Mail } from "lucide-react";

const INQUIRY_TYPES = ["Custom Commission", "Workshop", "Corporate", "General"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to a form backend or email service
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page header ────────────────────────────────── */}
      <section className="border-b border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            Get in Touch
          </span>
          <h1 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
            Let&rsquo;s Create Together
          </h1>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 sm:px-10 md:grid-cols-2 lg:px-16 lg:py-28">
          {/* ── Left: Inquiries ──────────────────────────── */}
          <div>
            <h2 className="font-heading text-2xl font-light text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal">
              I&rsquo;d love to hear about it. Whether you&rsquo;re looking
              for a bespoke artwork, a corporate collaboration, or a workshop
              experience, let&rsquo;s start a conversation.
            </p>

            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Original Custom Artwork",
                  desc: "A one-of-a-kind brush painting created for your space. Share your vision, and I will bring it to life on handmade rice paper.",
                },
                {
                  title: "Corporate Branding",
                  desc: "Logos, large-scale installations, branded gifts, and visual identity work that carries the weight of tradition into the modern boardroom.",
                },
                {
                  title: "Workshops",
                  desc: "Private or group sessions — in-person or remote — designed to cultivate focus, creativity, and presence through the practice of calligraphy.",
                },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h3 className="font-heading text-base font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-border-light pt-8">
              <Mail size={16} className="shrink-0 text-warm-gray" />
              <a
                href="mailto:ink.moment2026@gmail.com"
                className="text-sm text-charcoal underline underline-offset-2 transition-colors hover:text-ink"
              >
                ink.moment2026@gmail.com
              </a>
            </div>
          </div>

          {/* ── Right: Form ──────────────────────────────── */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <p className="font-heading text-xl text-ink">
                    Thank you.
                  </p>
                  <p className="mt-2 text-sm text-warm-gray">
                    Your message has been received. I&rsquo;ll be in touch
                    within 2&ndash;3 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-xs uppercase tracking-widest text-warm-gray"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      className="mt-2 w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-xs uppercase tracking-widest text-warm-gray"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      className="mt-2 w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-warm-gray"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiry-type"
                    className="block text-xs uppercase tracking-widest text-warm-gray"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    required
                    defaultValue=""
                    className="mt-2 w-full border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors focus:border-ink"
                  >
                    <option value="" disabled>
                      Select one&hellip;
                    </option>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-warm-gray"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-sm text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-10 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
