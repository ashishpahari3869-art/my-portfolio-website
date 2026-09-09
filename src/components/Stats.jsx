import { stats } from "../data/content";
import Reveal from "./Reveal";

// Floats over the seam between the hero and About, so the transition
// out of the dark panel lands on something rather than empty space.
export default function Stats() {
  return (
    <section className="relative z-10 bg-cream pb-20 md:pb-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="-mt-16 overflow-hidden rounded-2xl border border-gold-500/20 bg-navy-900 shadow-lift md:-mt-24">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-sheen opacity-60" />

            <dl className="relative grid grid-cols-2 divide-cream/10 sm:divide-x lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-8 md:px-8 md:py-10 ${
                    i < 2 ? "border-b border-cream/10 lg:border-b-0" : ""
                  } ${i % 2 === 1 ? "border-l border-cream/10 sm:border-l-0" : ""}`}
                >
                  <dd className="font-display text-4xl leading-none text-gold-300 md:text-5xl">
                    {s.value}
                  </dd>
                  <dt className="mt-3 text-sm font-medium text-cream">
                    {s.label}
                  </dt>
                  <p className="mt-1 text-xs leading-relaxed text-cream/45">
                    {s.detail}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
