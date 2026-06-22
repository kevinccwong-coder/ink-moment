import Image from "next/image";
import Link from "next/link";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Finding Stillness in the Ink ─────────────── */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:gap-16 md:py-32 lg:px-16">
          {/* Left: Profile image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone md:order-1">
            <Image
              src="/images/wo_small.png"
              alt="Cat Wong — Chinese calligraphy artist"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Bio */}
          <div className="self-center md:order-2">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Cat Wong
            </span>
            <h1 className="mt-4 font-heading text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Finding Stillness
              <br />
              <span className="italic">in the Ink</span>
            </h1>

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal sm:text-base">
              <p>
                My artistic journey began in 2015 when I first picked up a brush
                to paint traditional Buddhist art. The profound sense of peace
                found in every single deliberate stroke was a revelation; it
                allowed me to truly feel the cleansing and transformative power
                of traditional Chinese culture. This spark set me on a lifelong
                path of exploring heritage arts.
              </p>
              <p>
                In 2020, I formally stepped into the infinite world of Chinese
                calligraphy. I found myself completely captivated by the
                distinct souls of ancient scripts&mdash;from the structured
                discipline of Seal and Clerical scripts, to the elegant poise of
                Regular and Running scripts, all the way to the unbridled
                freedom of Wild Cursive.
              </p>
              <p>
                Yet, I believe calligraphy should not just look backward.
                Rather than merely copying masters of the past, my passion lies
                in exploring the creative space where the rustic, ancient
                groundedness of Clerical script meets the fluid energy of
                Cursive script&mdash;reinterpreting traditional lines to express
                a modern state of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mindfulness Practice ────────────────────────────── */}
      <section className="bg-stone">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Philosophy
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Modern Calligraphy as a
              <br />
              <span className="italic">Mindfulness Practice</span>
            </h2>

            <div className="mt-10 space-y-5 text-sm leading-relaxed text-charcoal sm:text-base">
              <p>
                In our fast-paced modern world, the brush has become my anchor.
                To me, contemporary Chinese calligraphy is a living meditation.
                It requires immense presence, where every dot and line becomes a
                conversation between breath and ink.
              </p>
              <p>
                By blending ancient brushwork with modern design aesthetics, my
                creations are designed to serve as visual sanctuaries&mdash;bringing
                a sense of intentional calm, clarity, and mindfulness into
                contemporary living and working spaces.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/contact" className={BTN_PRIMARY}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deepening the Roots ─────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              Education
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Deepening the Roots
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
              To truly innovate, one must deeply understand the foundations. My
              commitment to preserving and understanding our cultural roots
              shapes both my art and my academic pursuits.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-2xl border border-border-light bg-paper p-8 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <span className="font-heading text-5xl leading-none text-accent/25">
                山
              </span>
              <h3 className="mt-6 font-heading text-lg font-medium text-ink">
                Shaping the Landscape
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                I am currently pursuing a Diploma in Landscape Art at HKU SPACE,
                exploring how the spirit of traditional mountains and rivers can
                inform the rhythm of my inkwork.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-warm-gray">
                HKU SPACE &mdash; Present
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-border-light bg-paper p-8 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <span className="font-heading text-5xl leading-none text-accent/25">
                寺
              </span>
              <h3 className="mt-6 font-heading text-lg font-medium text-ink">
                Protecting Heritage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                To better understand the context of our traditions, I am also
                studying for a Diploma in Temple Management at MUHK, dedicating
                myself to the protection and preservation of our cultural
                heritage and customs.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-warm-gray">
                MUHK &mdash; Present
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm italic leading-relaxed text-warm-gray">
              Every piece I create is an invitation to slow down, breathe, and
              find your own moment of stillness within the rhythm of the brush.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
