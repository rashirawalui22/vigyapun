import Container from "./components/Container";
import SectionHeading from "./components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: "Human-centered marketing for ethical brands",
  description:
    "Vigyapun is a modern marketing agency that helps ethical, human-centered brands grow with strategy, storytelling, and performance.",
};

export default function Home() {
  return (
    <>
      {/* Hero with CTA */}
      <section className="bg-linear-to-b from-brand-cream via-brand-cream to-white">
        <Container>
          <div className="grid gap-10 py-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Human-centered marketing agency
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl md:text-5xl">
                Grow with{" "}
                <span className="underline decoration-brand-yellow decoration-[0.2em] underline-offset-4">
                  empathy, not interruption.
                </span>
              </h1>
              <p className="max-w-xl text-base text-neutral-700 sm:text-lg">
                We partner with ethical, ambitious teams to design campaigns
                that respect people&apos;s attention, build trust, and drive
                results you can stand behind.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-black px-6 py-2.5 text-sm font-semibold text-brand-cream shadow-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-brand-black/15 bg-white/70 px-6 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-yellow/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Explore services
                </Link>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-neutral-700 sm:text-sm md:max-w-md">
                <div>
                  <dt className="font-semibold text-brand-black">
                    50+ campaigns
                  </dt>
                  <dd>across digital, social, and outdoor.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-black">
                    3x average ROI
                  </dt>
                  <dd>for long-term client partnerships.</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4 rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur">
              <SectionHeading
                eyebrow="What matters to us"
                title="Marketing that feels good on both sides."
                subtitle="We design journeys that honor your audience’s time, context, and consent—while still moving the metrics that matter."
              />
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  People-first messaging rooted in real customer insight.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  Brand-safe experimentation across channels and formats.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  Transparent reporting, clear decisions, and zero dark
                  patterns.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Services overview cards */}
      <section className="bg-background">
        <Container>
          <div className="space-y-10 py-16">
            <SectionHeading
              eyebrow="Services"
              title="Strategy, storytelling, and performance under one roof."
              subtitle="Every engagement is tailored, but these pillars shape how we partner with you."
              align="center"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <article className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 text-sm shadow-sm">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold text-brand-black">
                    Strategy & positioning
                  </h2>
                  <p className="text-neutral-700">
                    Clarify your story, understand your audience, and map the
                    growth paths worth investing in.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-yellow-dark">
                  Research · Positioning · Roadmaps
                </p>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 text-sm shadow-sm">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold text-brand-black">
                    Creative & content
                  </h2>
                  <p className="text-neutral-700">
                    Campaigns, social systems, and content libraries that feel
                    consistent, useful, and unmistakably you.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-yellow-dark">
                  Campaigns · Social · Video
                </p>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 text-sm shadow-sm">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold text-brand-black">
                    Performance & optimization
                  </h2>
                  <p className="text-neutral-700">
                    Thoughtful experimentation across paid and owned channels,
                    tuned to revenue—not just clicks.
                  </p>
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-yellow-dark">
                  Funnels · Paid media · Analytics
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission statement section */}
      <section className="bg-linear-to-r from-brand-cream via-white to-brand-cream">
        <Container>
          <div className="py-16">
            <div className="max-w-3xl space-y-4">
              <SectionHeading
                eyebrow="Our mission"
                title="Make thoughtful, ethical marketing the default—not the exception."
                subtitle="We believe the best marketing feels like a helpful conversation, not a pop-up. Our mission is to help values-driven teams show up clearly, consistently, and confidently—without compromising on how they treat people."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-background">
        <Container>
          <div className="space-y-8 py-16">
            <SectionHeading
              eyebrow="Client stories"
              title="Testimonials are on their way."
              subtitle="This space is reserved for the proof: the stories, numbers, and quotes from the brands we&apos;ve partnered with."
              align="center"
            />
            <div className="rounded-2xl border border-dashed border-brand-yellow/60 bg-brand-yellow/5 p-8 text-center text-sm text-neutral-700">
              <p>
                When you&apos;re ready, we can highlight 2–3 client stories here
                with clear outcomes—like uplift in brand searches, pipeline
                generated, or retention improved.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact call-to-action */}
      <section className="bg-linear-to-r from-brand-black via-black to-brand-black text-brand-cream">
        <Container>
          <div className="flex flex-col items-start gap-6 py-14 text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                Contact
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to explore what we could build together?
              </h2>
              <p className="max-w-xl text-sm text-brand-cream/80 sm:text-base">
                Share a little about your team, timeline, and goals. We&apos;ll
                respond with a short point-of-view and suggested next steps.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-2.5 text-sm font-semibold text-brand-black shadow-sm transition-colors hover:bg-brand-yellow-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
              >
                Open contact form
              </Link>
              <a
                href="mailto:hello@vigyapunlimitless.com"
                className="inline-flex items-center justify-center rounded-full border border-brand-cream/40 bg-transparent px-6 py-2.5 text-sm font-semibold text-brand-cream transition-colors hover:bg-brand-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
              >
                Email us directly
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
