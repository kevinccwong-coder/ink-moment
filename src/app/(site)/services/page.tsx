import Link from "next/link";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────── */}
      <section className="border-b border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            Services
          </span>
          <h1 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
            Ink &amp; Moment
            <br />
            <span className="text-warm-gray">墨時</span>
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 lg:px-16">
          <h2 className="font-heading text-2xl font-light text-ink sm:text-3xl">
            Artistry in Motion, Stillness in Ink
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-charcoal sm:text-base">
            Whether you are looking to bring a sense of mindful tranquility into
            your home, elevate a luxury brand event, or experience the meditative
            practice of brushwork firsthand, I offer bespoke Chinese calligraphy
            and art services tailored to your vision.
          </p>
        </div>
      </section>

      {/* ── 1. Personal Commissions ──────────────────────── */}
      <section className="border-t border-border-light bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="flex aspect-[4/3] items-center justify-center bg-stone">
              <span className="select-none font-heading text-8xl leading-none text-accent/25">
                藝
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
                Service 01
              </span>
              <h2 className="mt-3 font-heading text-2xl font-medium text-ink">
                Personal Commissions
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                Custom calligraphy is an intentional addition to a home&mdash;a
                reminder to slow down and breathe. I collaborate closely with
                private collectors and individuals to create custom artwork that
                resonates deeply with their personal journeys.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Custom Script Fusion
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Bespoke artwork featuring my signature blending of rustic,
                    ancient Clerical script with the dynamic, flowing energy of
                    Cursive script.
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Mindful Poetic Blessings
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Hand-brushed selections of Zen poetry, Buddhist philosophy,
                    or meaningful personal phrases designed to inspire daily
                    stillness.
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Tailored Formats
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Available as traditional hanging scrolls, contemporary
                    framed gallery pieces, or minimalist wooden boards designed
                    to complement modern interior aesthetics.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Corporate Partnerships ────────────────────── */}
      <section className="border-t border-border-light bg-stone">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="order-2 md:order-2">
              <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
                Service 02
              </span>
              <h2 className="mt-3 font-heading text-2xl font-medium text-ink">
                Corporate Partnerships &amp; Brand Activations
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                Imbue your brand with craftsmanship, intentionality, and deep
                cultural roots. I work with corporate clients, luxury brands,
                and institutions to provide elegant, live artistic experiences
                and custom designs.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Live Calligraphy Demonstrations
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Captivating on-site live brushwork for gallery openings,
                    product launches, and seasonal celebrations (such as Lunar
                    New Year events).
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    On-Site Guest Personalization
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Live custom gifting where guests receive personalized
                    calligraphy&mdash;such as their names or custom blessings
                    hand-inked on premium Xuan paper, fans, or bespoke
                    stationery.
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Commercial Artwork &amp; Logo Design
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Custom-inked titles, product packaging designs, and logo
                    concepts that require the unmistakable soul and texture of
                    authentic brushstrokes.
                  </p>
                </li>
              </ul>
            </div>
            <div className="order-1 flex aspect-[4/3] items-center justify-center bg-stone md:order-2">
              <span className="select-none font-heading text-8xl leading-none text-accent/25">
                和
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Workshops ───────────────────────────────────── */}
      <section className="border-t border-border-light bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="flex aspect-[4/3] items-center justify-center bg-stone">
              <span className="select-none font-heading text-8xl leading-none text-accent/25">
                學
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
                Service 03
              </span>
              <h2 className="mt-3 font-heading text-2xl font-medium text-ink">
                Workshops &amp; Mindful Ink Experiences
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                Calligraphy is more than an art form; it is a living meditation.
                My workshops are designed not just to teach technique, but to
                provide a modern sanctuary from the busyness of daily life.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Mindfulness &amp; Calligraphy Basics
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Introductory sessions focusing on posture, breath control,
                    and the tactile sensation of ink on paper. Perfect for
                    beginners looking for a creative mental escape.
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Corporate Wellness &amp; Teambuilding
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Tailored, relaxing workshop experiences designed for
                    corporate teams to unwind, destress, and foster focus
                    through collective creative practice.
                  </p>
                </li>
                <li>
                  <h3 className="text-sm font-medium text-ink">
                    Private &amp; Small Group Sessions
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">
                    Focused, intimate mentoring exploring specific ancient
                    scripts or incorporating elements of traditional landscape
                    art placement.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="border-t border-border-light bg-stone">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:px-10 lg:px-16">
          <h2 className="font-heading text-2xl font-light text-ink sm:text-3xl">
            Let&rsquo;s Create Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-charcoal">
            Every stroke tells a story and carries a breath. To discuss a custom
            commission, request a corporate proposal, or book a workshop
            experience, please reach out via the Contact Page.
          </p>
          <div className="mt-8">
            <Link href="/contact" className={BTN_PRIMARY}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
