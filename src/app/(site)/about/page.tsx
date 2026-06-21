import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 md:grid-cols-5 md:py-32 lg:px-16">
          {/* Decorative character — large, behind */}
          <div className="hidden select-none md:col-span-2 md:block">
            <div className="sticky top-32">
              <span className="block font-heading text-[14rem] leading-none text-accent/15">
                念
              </span>
            </div>
          </div>

          {/* Hero text */}
          <div className="self-center md:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              About
            </span>
            <h1 className="mt-4 font-heading text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The Art of
              <br />
              <span className="italic">Slow Living</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal sm:text-lg">
              I believe calligraphy is more than an art form — it is a practice
              of presence. Every brushstroke is a conversation between breath
              and ink, a quiet rebellion against the rush of modern life.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-warm-gray">
              Based between Hong Kong and New York, I work with collectors,
              brands, and organisations who seek meaning beyond the visual —
          who want their spaces to carry intention.
            </p>
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────── */}
      <section className="bg-stone">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
              My Practice
            </span>
            <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
              Philosophy
            </h2>
          </div>

          <div className="grid gap-12 sm:gap-16 lg:grid-cols-3">
            {/* 1 */}
            <div className="group text-center">
              <span className="block font-heading text-7xl leading-none text-accent/25 transition-all group-hover:text-accent/40">
                氣
              </span>
              <h3 className="mt-6 font-heading text-xl font-medium text-ink">
                The Breath of Ink
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                In Chinese calligraphy, the brush does not move — the qi moves
                through it. Every stroke begins with a breath, and each
                composition is the visible trace of an inner rhythm. I practice
                this attentiveness long before the brush touches paper.
              </p>
            </div>

            {/* 2 */}
            <div className="group text-center">
              <span className="block font-heading text-7xl leading-none text-accent/25 transition-all group-hover:text-accent/40">
                靜
              </span>
              <h3 className="mt-6 font-heading text-xl font-medium text-ink">
                Stillness in Motion
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                The most powerful strokes are not the fastest — they are the
                ones painted with complete stillness at the centre of the hand.
                My work seeks to capture this paradox: motion that emerges from
                rest, energy that arises from silence.
              </p>
            </div>

            {/* 3 */}
            <div className="group text-center">
              <span className="block font-heading text-7xl leading-none text-accent/25 transition-all group-hover:text-accent/40">
                心
              </span>
              <h3 className="mt-6 font-heading text-xl font-medium text-ink">
                Heart on Paper
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                Technique fades when the heart speaks. The highest aim of
                calligraphy is not beautiful writing — it is sincere expression.
                Each commission is an exchange of intention, and every finished
                piece carries something of the person who inspired it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Artist Bio ──────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Image placeholder */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone md:order-2">
              <div className="flex h-full w-full items-center justify-center">
                <span className="select-none font-heading text-8xl leading-none text-accent/20">
                  我
                </span>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:order-1">
              <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
                The Artist
              </span>
              <h2 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
                Transforming tradition
                <br />
                <span className="italic">for contemporary spaces</span>
              </h2>

              <div className="mt-8 space-y-4 text-sm leading-relaxed text-charcoal">
                <p>
                  My journey with the brush began as a child in Hong Kong, where
                  I studied under a master calligrapher who taught me that ink
                  is alive — it responds to the mood of the hand, the humidity
                  of the air, the quality of silence in the room.
                </p>
                <p>
                  For over a decade, I have been bridging that intimate practice
                  with the language of modern design. My work lives in private
                  collections, hotel lobbies, corporate headquarters, and quiet
                  homes — each piece a reminder that beauty need not shout.
                </p>
                <p>
                  I work from a small studio overlooking the harbour, where I
                  grind my own ink and prepare each sheet of rice paper by hand.
                  Every commission begins with a conversation — about space,
                  about intent, about what you want to feel when you walk into
                  the room.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className={BTN_PRIMARY}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper";
