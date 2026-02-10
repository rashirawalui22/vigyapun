import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Share your goals with Vigyapun and we’ll map a bold, clear path forward for your brand.",
};

export default function ContactPage() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-8">
            <header className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
                Contact
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-brand-black sm:text-4xl">
                Tell us where you want your brand to go next.
              </h1>
              <p className="text-base text-neutral-700 sm:text-lg">
                Share a few details about your team, timeline, and the kind of
                work you&apos;re exploring. We&apos;ll respond with a short
                point-of-view and next steps—no pressure, no spam.
              </p>
            </header>

            <div className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 text-sm shadow-sm">
              <SectionHeading
                eyebrow="Project inquiry"
                title="Start the conversation."
                subtitle="A few quick notes help us prep thoughtful ideas before we meet."
              />
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6 rounded-2xl border border-black/5 bg-white p-6 text-sm shadow-sm">
            <SectionHeading
              eyebrow="Prefer email or a call?"
              title="Reach us directly."
              subtitle="If forms aren&apos;t your thing, that&apos;s okay. Use the details below and we&apos;ll take it from there."
            />

            <dl className="space-y-3 text-sm text-neutral-700">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:hello@vigyapunlimitless.com"
                    className="text-brand-black underline decoration-brand-yellow/60 underline-offset-2 hover:decoration-brand-yellow-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    hello@vigyapunlimitless.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
                  Phone / WhatsApp
                </dt>
                <dd>
                  <a
                    href="tel:+917014207724"
                    className="text-brand-black underline decoration-brand-yellow/60 underline-offset-2 hover:decoration-brand-yellow-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    +91 70142 07724
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}

