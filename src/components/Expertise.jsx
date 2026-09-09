import { GraduationCap, TrendingUp, Briefcase, Presentation, Check } from "lucide-react";
import { expertiseGroups } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Icons follow the order of expertiseGroups in content.js.
const icons = [GraduationCap, TrendingUp, Briefcase, Presentation];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-navy-900 py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-hairline opacity-[0.045]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="Capabilities"
          title="Areas of"
          accent="expertise"
          blurb="Counseling, training and business craft — the work Som is brought in to do."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseGroups.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={g.group} delay={i * 90}>
                <div className="card-dark card-dark-hover h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-display text-lg text-cream">
                    {g.group}
                  </h3>

                  <ul className="mt-5 space-y-3 border-t border-cream/10 pt-5 text-[0.875rem] leading-snug text-cream/65">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check
                          size={14}
                          strokeWidth={2}
                          className="mt-0.5 flex-none text-gold-500/70"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
