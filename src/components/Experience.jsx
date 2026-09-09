import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          eyebrow="Track record"
          title="Roles that built the"
          accent="method"
          blurb="Academic operations, marketing and business development — the groundwork behind the counseling."
        />

        <div className="mt-16 space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 90}>
              <article className="card card-hover group grid gap-6 p-7 md:grid-cols-[13rem_1fr] md:gap-10 md:p-9">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gold-sheen-ink transition-transform duration-700 ease-editorial group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[11px] uppercase tracking-eyebrow text-gold-700">
                    {e.period || "Current"}
                  </p>
                  <p className="mt-2 font-display text-xl leading-snug text-navy-900/80">
                    {e.org}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-navy-900">
                    {e.role}
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-2.5 text-navy-900/70 sm:grid-cols-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span
                          className="mt-[0.5rem] h-1.5 w-1.5 flex-none rotate-45 bg-gold-500/70"
                          aria-hidden="true"
                        />
                        <span className="text-[0.9375rem] leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
