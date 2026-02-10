export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-brand-black">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-700 max-w-xl">
          {subtitle}
        </p>
      )}
      <span className="mt-2 inline-block h-0.5 w-10 rounded-full bg-brand-yellow-dark" />
    </div>
  );
}
