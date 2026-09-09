import { Award, BadgeCheck } from "lucide-react";
import { leadership, certifications } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-cream-200 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          eyebrow="Recognition"
          title="Led, organized and"
          accent="certified"
          blurb="Positions held, competitions run, and the training kept current."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* leadership & achievements */}
          <Reveal className="card p-7 md:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl text-navy-900">
              <Award size={19} strokeWidth={1.6} className="text-gold-600" aria-hidden="true" />
              Leadership &amp; achievements
            </h3>

            <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {leadership.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[0.9375rem] leading-snug text-navy-900/75"
                >
                  <span
                    className="mt-[0.4375rem] h-1.5 w-1.5 flex-none rotate-45 bg-gold-500/70"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* certifications */}
          <Reveal delay={120} className="card p-7 md:p-9">
            <h3 className="flex items-center gap-3 font-display text-xl text-navy-900">
              <BadgeCheck
                size={19}
                strokeWidth={1.6}
                className="text-gold-600"
                aria-hidden="true"
              />
              Certifications
            </h3>

            <ul className="mt-7 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="group rounded-xl border border-navy-900/[0.07] bg-cream px-4 py-3.5 transition duration-300 ease-editorial hover:border-gold-500/40 hover:bg-gold-100/60"
                >
                  <p className="text-[0.9375rem] leading-snug text-navy-900/85">
                    {c.name}
                  </p>
                  <p className="mt-1.5 text-xs uppercase tracking-eyebrow text-gold-700">
                    {c.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
