import { journey } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-navy-950 py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute right-[-8%] top-1/4 h-[30rem] w-[30rem] rounded-full opacity-[0.13] blur-3xl"
        style={{
          background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="The path"
          title="From student to"
          accent="entrepreneur"
          blurb="Five stages, one direction — each one built on the last."
        />

        <ol className="relative mt-16">
          {/* rail, dimmed at both ends so it doesn't collide with the cards */}
          <div
            className="absolute bottom-4 left-[1.4375rem] top-4 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent"
            aria-hidden="true"
          />

          {journey.map((step, i) => (
            <Reveal
              as="li"
              key={step.stage}
              delay={i * 90}
              className="relative flex gap-6 pb-6 last:pb-0 md:gap-8"
            >
              <div className="relative z-10 flex-none">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold-500/45 bg-navy-950 font-display text-lg text-gold-300 shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="card-dark card-dark-hover flex-1 p-6 md:p-7">
                <h3 className="font-display text-xl text-cream md:text-[1.375rem]">
                  {step.stage}
                </h3>
                <p className="mt-2.5 max-w-2xl text-pretty leading-relaxed text-cream/60">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
