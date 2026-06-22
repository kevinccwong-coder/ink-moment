import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/ui/NewsletterForm";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";

const BTN_OUTLINE =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:px-10 md:min-h-[calc(100dvh-4rem)] md:grid-cols-2 lg:px-16">
        {/* ── Left: Text ──────────────────────────────── */}
        <div className="flex flex-col justify-center py-20 md:py-0 md:pr-12">
          <span className="mb-4 text-xs uppercase tracking-[0.2em] text-warm-gray">
            Chinese Calligraphy
          </span>

          <h1 className="font-heading text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Finding stillness,
            <br />
            <span className="italic">one brushstroke</span>
            <br />
            at a time.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal sm:text-lg">
            I am a calligrapher devoted to the art of slow living. Through the
            disciplined beauty of brush and ink, I create works that invite
            you to pause, breathe, and reconnect with what matters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/about" className={BTN_PRIMARY}>
              More About Me
            </Link>
          </div>
        </div>

        {/* ── Right: Calligraphy artwork ──────────────── */}
        <div className="relative mt-12 min-h-[85vh] w-full md:mt-0 md:min-h-[calc(100dvh-4rem)] md:aspect-auto">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 md:-right-20 md:-top-20 md:h-80 md:w-80" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/8 md:-bottom-16 md:-left-16 md:h-64 md:w-64" />

          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <div className="relative h-[92%] w-full">
              <Image
                src="/images/Calligraphy_001.png"
                alt="Chinese calligraphy artwork"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured banner ────────────────────────────── */}
      <section className="border-t border-border-light bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-14 text-center sm:flex-row sm:justify-center sm:gap-10 sm:px-10 lg:px-16">
          {[
            ["Original Artworks", "Unique brush paintings on rice paper"],
            ["Custom Commissions", "Personalized pieces for your space"],
            ["Workshops & Events", "Mindfulness through calligraphy"],
          ].map(([title, desc]) => (
            <div key={title} className="flex-1">
              <h3 className="font-heading text-base font-medium text-ink">
                {title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-warm-gray">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="bg-stone">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              What I Offer
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Services
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Original Custom Artwork",
                char: "藝",
                desc: "A bespoke brush painting created exclusively for you. Commission a piece that reflects your story, values, or a cherished memory — rendered in ink on handmade rice paper.",
                href: "/services#custom",
              },
              {
                title: "Corporate Work",
                char: "和",
                desc: "Elevate your brand with the elegance of calligraphy. Logos, branding elements, large-scale installations, and branded gifts that carry the weight of tradition into the modern boardroom.",
                href: "/services#corporate",
              },
              {
                title: "Workshops",
                char: "學",
                desc: "Immerse yourself or your team in the meditative practice of brush and ink. Private and group sessions designed to cultivate focus, creativity, and presence through calligraphy.",
                href: "/services#workshops",
              },
            ].map(({ title, char, desc, href }) => (
              <div
                key={title}
                className="group flex flex-col bg-paper transition-all hover:-translate-y-0.5"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-stone">
                  <span className="select-none font-heading text-7xl leading-none text-accent/25 transition-all group-hover:text-accent/40">
                    {char}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-8 pb-10 pt-8">
                  <h3 className="font-heading text-xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal">
                    {desc}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent transition-colors hover:text-ink"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients Include ────────────────────────────────── */}
      <section className="border-t border-border-light bg-paper overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Trusted By
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Clients Include
            </h2>
          </div>

          {/* Desktop grid */}
          <div className="hidden items-center justify-center gap-12 md:flex md:flex-wrap">
            {[
              "Louis Vuitton",
              "Dior",
              "Bottega Veneta",
              "Four Seasons",
              "Citibank",
              "Diptyque",
              "Giorgio Armani",
            ].map((brand) => (
              <div
                key={brand}
                className="font-heading text-sm uppercase tracking-[0.25em] text-warm-gray transition-colors hover:text-ink"
              >
                {brand}
              </div>
            ))}
          </div>

          {/* Mobile marquee */}
          <div className="relative md:hidden">
            <div className="flex animate-marquee gap-10 whitespace-nowrap">
              {[
                "Louis Vuitton",
                "Dior",
                "Bottega Veneta",
                "Four Seasons",
                "Citibank",
                "Diptyque",
                "Giorgio Armani",
                "Louis Vuitton",
                "Dior",
                "Bottega Veneta",
                "Four Seasons",
                "Citibank",
                "Diptyque",
                "Giorgio Armani",
              ].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="font-heading text-sm uppercase tracking-[0.25em] text-warm-gray"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Kind Words
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Testimonials
            </h2>
          </div>

          <div className="space-y-16">
            {[
              {
                quote:
                  "The custom piece now hangs in our living room and has become the anchor of the entire space. Every guest stops to admire it. The way the brush dances across the paper is something photographs simply cannot capture.",
                author: "Sarah L.",
                role: "Private Collector, New York",
              },
              {
                quote:
                  "We commissioned a large-scale calligraphy installation for our headquarters lobby. The process was deeply collaborative, and the result — a six-character blessing spanning nearly three metres — has become part of our company's identity.",
                author: "James T.",
                role: "Chief Brand Officer, Lumina Corp",
              },
              {
                quote:
                  "The workshop brought our team a kind of quiet focus I have never seen in a corporate setting. People were unexpectedly moved. Several colleagues have since taken up brush practice on their own.",
                author: "Maya R.",
                role: "Creative Director, Studio Haze",
              },
            ].map(({ quote, author, role }, i) => (
              <div key={i}>
                <blockquote className="text-center">
                  <p className="font-heading text-xl font-light italic leading-relaxed text-ink sm:text-2xl">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <cite className="text-sm not-italic text-charcoal">
                      {author}
                    </cite>
                    <span className="mx-2 text-xs text-warm-gray">&mdash;</span>
                    <span className="text-xs text-warm-gray">{role}</span>
                  </footer>
                </blockquote>

                {i < 2 && (
                  <hr className="mx-auto mt-16 w-12 border-t border-border-light" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Journey Gallery ──────────────────────── */}
      <section className="border-t border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Behind the Brush
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Instagram Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {[
              { char: "靜", label: "Stillness in motion" },
              { char: "氣", label: "The breath of ink" },
              { char: "心", label: "Heart on paper" },
              { char: "道", label: "The way of the brush" },
              { char: "美", label: "Finding beauty" },
              { char: "空", label: "Empty & full" },
              { char: "流", label: "Going with the flow" },
              { char: "光", label: "Chasing light" },
            ].map(({ char, label }) => (
              <div
                key={char}
                className="group relative aspect-square overflow-hidden bg-stone"
              >
                <div className="flex h-full w-full items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <span className="select-none font-heading text-5xl leading-none text-accent/25 transition-all duration-500 group-hover:text-accent/45 sm:text-6xl">
                    {char}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-ink sm:text-xs">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/lampou_cat?igsh=bHM2enNiNnc3cW5u"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_PRIMARY}
            >
              Follow &commat;lampou_cat
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className="border-t border-border-light bg-paper">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            Stay Connected
          </span>
          <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
            Join My Inner Circle
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-charcoal">
            Be the first to receive new artwork releases, studio updates, and
            invitations to exclusive events — straight to your inbox.
          </p>

          <NewsletterForm />

          <p className="mt-6 text-xs leading-relaxed text-warm-gray">
            No spam, ever. Unsubscribe anytime. Your email stays with me alone.
          </p>
        </div>
      </section>
    </>
  );
}
