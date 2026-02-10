import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Explore Vigyapun's strategy, creative, and performance marketing services for ambitious brands.",
};

const SERVICES = [
  {
    name: "Brand & campaign strategy",
    description:
      "Positioning, messaging, and go-to-market roadmaps that give every campaign a clear role in your growth.",
    details: ["Audience and insight mapping", "Brand narrative and messaging", "Campaign architecture and channel mix"],
  },
  {
    name: "Creative direction & content",
    description:
      "Concepts, scripts, and assets built to stand out in fast-moving feeds and crowded markets.",
    details: ["Campaign concepts and key visuals", "Social content systems", "Video scripts and storyboards"],
  },
  {
    name: "Performance marketing",
    description:
      "Experimentation across paid and owned channels, tuned to revenue—not vanity metrics.",
    details: ["Funnel design and optimization", "Paid media management", "Cohort and retention analysis"],
  },
  {
    name: "Launch partnerships",
    description:
      "From pre-launch buzz to post-launch momentum, we help you land your next big moment.",
    details: ["Launch strategy and sequencing", "Teaser and reveal campaigns", "Creator and partner collaborations"],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-background">
      <Container>
        <div className="space-y-12 py-16">
          <header className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
              Services
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
              Everything you need to launch, grow, and relaunch your brand.
            </h1>
            <p className="text-base text-neutral-700 sm:text-lg">
              Choose a focused engagement or combine services into a tailored
              retainer. Either way, you get a team that plugs in quickly and
              ships work that looks sharp and performs hard.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.name}
                className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 text-sm shadow-sm"
              >
                <div className="space-y-3">
                  <h2 className="text-base font-semibold text-brand-black">
                    {service.name}
                  </h2>
                  <p className="text-neutral-700">{service.description}</p>
                  <ul className="space-y-1 text-xs text-neutral-700">
                    {service.details.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 inline-block h-1 w-1 rounded-full bg-brand-yellow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-brand-yellow/60 bg-brand-yellow/10 p-6 text-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div className="space-y-2">
              <SectionHeading
                eyebrow="Next step"
                title="Not sure where to start?"
                subtitle="Share where your brand is today and where you want to go. We’ll recommend a path, not a package."
              />
            </div>
            <div className="mt-4 flex shrink-0 sm:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-black px-6 py-2.5 text-sm font-semibold text-brand-cream shadow-sm transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Talk to the team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

