import { Quote } from "lucide-react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-cream pb-24 md:pb-32">
      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10 lg:gap-20">
        {/* the philosophy, treated as the pull quote it deserves to be */}
        <Reveal className="self-start md:sticky md:top-28">
          <div className="card overflow-hidden p-8 md:p-9">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-sheen-ink opacity-70" />
            <Quote
              size={30}
              strokeWidth={1.25}
              className="mb-5 text-gold-500/50"
              aria-hidden="true"
            />
            <p className="font-display text-[1.4rem] italic leading-snug text-navy-900 md:text-[1.6rem]">
              {profile.philosophy}
            </p>
            <p className="mt-6 flex items-center gap-3 text-xs uppercase tracking-eyebrow text-gold-700">
              <span className="h-px w-6 bg-gold-600/50" aria-hidden="true" />
              {profile.shortName} Nath Pahari
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="An entrepreneur who builds"
            accent="careers, not just companies"
          />

          <Reveal delay={140} className="mt-8 max-w-prose">
            <p className="text-pretty text-[1.0625rem] leading-[1.85] text-navy-900/75">
              {profile.about}
            </p>
          </Reveal>

          <Reveal
            delay={220}
            className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-navy-900/10 pt-8"
          >
            {[
              { k: "Based in", v: "Pokhara, Nepal" },
              { k: "Works across", v: "Education · Tech · Hospitality" },
              { k: "Also known as", v: profile.alias },
            ].map((item) => (
              <div key={item.k}>
                <p className="text-[11px] uppercase tracking-eyebrow text-gold-700">
                  {item.k}
                </p>
                <p className="mt-1.5 text-navy-900/80">{item.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
