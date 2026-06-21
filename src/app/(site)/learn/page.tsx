/* ── Curated video lessons ─────────────────────────────────── */
const VIDEOS: { id: string; title: string; description: string }[] = [
  {
    id: "Vw2L6UdAXBs",
    title: "Introduction to the Art Form",
    description:
      "This video explores how calligraphy has historically been the ultimate art form of the educated elite, reflecting a person's inner character and discipline.",
  },
  {
    id: "YSgoKEy-3QQ",
    title: "The Practical Fundamentals",
    description:
      "A beginner-friendly breakdown showing you how to correctly grip the brush and manage your physical posture to let ink flow naturally.",
  },
  {
    id: "E9LEcjOgnaM",
    title: "Intermediate Stroke Techniques",
    description:
      "Moving beyond basic lines into character composition, spacing, and understanding balance on rice paper.",
  },
  {
    id: "MEN0CzGv5-Y",
    title: "Mastering the Fluidity",
    description:
      "Observing the continuous, unbroken rhythm and speed variations used by masters to give life to characters.",
  },
];

export default function LearnPage() {
  return (
    <>
      {/* ── Page header ────────────────────────────────── */}
      <section className="border-b border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            Learn
          </span>
          <h1 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-light text-ink sm:text-4xl lg:text-5xl">
            The Way of the Brush:
            <br />
            <span className="italic">Learning Chinese Calligraphy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal sm:text-base">
            Calligraphy is meditation in motion. Each brushstroke asks you to
            slow down, to breathe, to arrive fully where you are. These lessons
            invite you into that practice — no prior experience needed.
          </p>
        </div>
      </section>

      {/* ── Video grid ──────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-6 pb-28 sm:px-10 lg:px-16">
          <div className="grid gap-12 md:gap-16">
            {VIDEOS.map((video, i) => (
              <article key={video.id}>
                {/* Responsive video embed */}
                <div className="relative aspect-video w-full overflow-hidden bg-stone">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>

                {/* Title & description */}
                <div className="mt-6 text-center md:mt-8">
                  <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
                    Lesson {i + 1}
                  </span>
                  <h2 className="mt-2 font-heading text-xl font-medium text-ink">
                    {video.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
