import { ArrowUpRight } from "lucide-react";
import { roles } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Roles() {
  return (
    <section id="roles" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          eyebrow="Ventures"
          title="Where Som leads"
          accent="today"
          blurb="Five ventures across education, technology, and hospitality — each with its own operating rhythm."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {roles.map((r, i) => (
            <Reveal
              key={r.org}
              delay={i * 80}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <article
                className={`card card-hover group h-full overflow-hidden p-7 md:p-8 ${
                  i === 0 ? "md:flex md:items-center md:gap-10" : ""
                }`}
              >
                {/* gold rule that draws itself across the top on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-sheen-ink transition-transform duration-700 ease-editorial group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className={i === 0 ? "md:flex-1" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm text-gold-600/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pill border-gold-500/40 bg-gold-500/[0.07] text-gold-700">
                      {r.title}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 font-display text-navy-900 ${
                      i === 0 ? "text-3xl md:text-[2.125rem]" : "text-2xl"
                    }`}
                  >
                    {r.org}
                  </h3>
                </div>

                <div className={i === 0 ? "md:max-w-sm" : ""}>
                  <ul
                    className={`flex flex-wrap gap-x-2 gap-y-2 text-sm text-navy-900/60 ${
                      i === 0 ? "mt-5 md:mt-0" : "mt-4"
                    }`}
                  >
                    {r.focus.split("·").map((f) => (
                      <li
                        key={f}
                        className="rounded-md bg-navy-900/[0.045] px-2.5 py-1"
                      >
                        {f.trim()}
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="absolute right-6 top-7 text-navy-900/15 transition duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
