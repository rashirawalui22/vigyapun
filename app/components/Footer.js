import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-black/5 bg-brand-cream">
      <Container>
        <footer className="flex flex-col gap-4 py-8 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow-dark">
              Vigyapun Limitless
            </p>
            <p className="mt-1 max-w-md text-sm">
              A modern marketing studio helping ambitious brands turn attention
              into long-term growth.
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 text-xs text-neutral-600 md:items-end">
            <p>© {year} Vigyapun. All rights reserved.</p>
            <p>
              Built with Next.js & Tailwind CSS for performance and accessibility.
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
}

