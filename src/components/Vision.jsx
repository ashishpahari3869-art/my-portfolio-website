import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-cream py-28 md:py-36">
      {/* oversized quote glyph, sunk into the background as texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 select-none font-display text-[16rem] leading-none text-gold-500/[0.08] md:text-[22rem]"
      >
        “
      </span>

      <div className="relative mx-auto max-w-content px-6 text-center md:px-10">
        <Reveal as="p" className="eyebrow justify-center text-gold-700">
          The vision
        </Reveal>

        <Reveal
          as="p"
          delay={100}
          className="mx-auto mt-8 max-w-3xl text-balance font-display text-[1.75rem] leading-[1.32] tracking-[-0.01em] text-navy-900 sm:text-4xl md:text-[2.75rem]"
        >
          {profile.vision}
        </Reveal>

        <Reveal
          delay={200}
          className="mx-auto mt-10 h-px w-24 bg-gold-sheen-ink opacity-70"
        />
      </div>
    </section>
  );
}
