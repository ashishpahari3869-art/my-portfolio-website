import Reveal from "./Reveal";

// One heading treatment for every section: eyebrow rule, display title
// with an optional gold-foil accent word, and a short blurb.
// `tone` switches the palette for cream vs. navy panels.
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  blurb,
  tone = "light",
  align = "left",
  className = "",
}) {
  const dark = tone === "dark";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal
          as="p"
          className={`eyebrow ${dark ? "text-gold-400" : "text-gold-600"} ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {eyebrow}
        </Reveal>
      )}

      <Reveal
        as="h2"
        delay={80}
        className={`mt-5 font-display text-[2rem] leading-[1.1] tracking-[-0.01em] sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-cream" : "text-navy-900"
        }`}
      >
        <span className="text-balance">
          {title}
          {accent && (
            <>
              {" "}
              <span className={`${dark ? "foil" : "foil-ink"} italic`}>
                {accent}
              </span>
            </>
          )}
        </span>
      </Reveal>

      {blurb && (
        <Reveal
          as="p"
          delay={160}
          className={`mt-5 text-pretty text-[1.0625rem] leading-relaxed ${
            dark ? "text-cream/60" : "text-navy-900/60"
          }`}
        >
          {blurb}
        </Reveal>
      )}
    </div>
  );
}
