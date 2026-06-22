import Link from "next/link";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";

const SERVICES = [
  {
    title: "Original Custom Artwork",
    char: "藝",
    desc: "A bespoke brush painting created exclusively for you. Commission a piece that reflects your story, values, or a cherished memory — rendered in ink on handmade rice paper.",
  },
  {
    title: "Corporate Work",
    char: "和",
    desc: "Elevate your brand with the elegance of calligraphy. Logos, branding elements, large-scale installations, and branded gifts that carry the weight of tradition into the modern boardroom.",
  },
  {
    title: "Workshops",
    char: "學",
    desc: "Immerse yourself or your team in the meditative practice of brush and ink. Private and group sessions designed to cultivate focus, creativity, and presence through calligraphy.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            What I Offer
          </span>
          <h1 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
            Services
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal">
            From one-of-a-kind commissions to immersive workshop experiences —
            every collaboration begins with a conversation.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, char, desc }) => (
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
                  <h2 className="font-heading text-xl font-medium text-ink">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal">
                    {desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent transition-colors hover:text-ink"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
