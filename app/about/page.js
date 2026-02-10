import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "About the studio",
  description:
    "Learn how Vigyapun blends strategy, storytelling, and experimentation to build unforgettable brands.",
};

export default function AboutPage() {
  return (
    <section className="bg-background">
      <Container>
        <div className="space-y-12 py-16">
          <header className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
              About Vigyapun
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
              A small studio built for big, brave ideas.
            </h1>
            <p className="text-base text-neutral-700 sm:text-lg">
              We&apos;re a creative marketing partner for teams who want to move
              fast without blending in. From early-stage startups to established
              brands, we help you say something worth hearing—and make sure the
              right people hear it.
            </p>
          </header>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="How we work"
                title="Strategy-first, execution-obsessed."
                subtitle="Every brief starts with sharp questions, not shiny tactics. Once we know what matters, we build the right mix of creative and performance to get you there."
              />
              <ul className="space-y-4 text-sm text-neutral-700">
                <li>
                  <span className="font-semibold text-brand-black">
                    Deep discovery:
                  </span>{" "}
                  We align on your audience, positioning, and goals before we
                  touch a single pixel or post.
                </li>
                <li>
                  <span className="font-semibold text-brand-black">
                    Tight collaboration:
                  </span>{" "}
                  You work directly with the people doing the work—no endless
                  handoffs or mystery decks.
                </li>
                <li>
                  <span className="font-semibold text-brand-black">
                    Measurable impact:
                  </span>{" "}
                  We track the metrics that matter to you, from awareness to
                  acquisition and beyond.
                </li>
              </ul>
            </div>

            <div className="space-y-6 rounded-2xl border border-black/5 bg-white p-6 text-sm shadow-sm">
              <h2 className="text-base font-semibold text-brand-black">
                What clients say working with us feels like
              </h2>
              <p className="text-neutral-700">
                Like adding a plugged-in, idea-obsessed marketing team that
                understands both your brand and your business model. We&apos;re
                here to challenge assumptions, champion bold thinking, and make
                sure the work actually ships.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs text-neutral-700">
                <div>
                  <p className="font-semibold text-brand-black">No fluff</p>
                  <p>Clear timelines, honest feedback, and zero jargon.</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-black">Long-term</p>
                  <p>
                    We design systems—not one-off stunts—to keep momentum going.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

