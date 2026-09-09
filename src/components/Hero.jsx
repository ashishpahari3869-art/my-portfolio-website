import { useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { profile, testimonials } from "../data/content";
import Stars from "./Stars";

// Concentric-ring monogram — the hero's mark before a photo exists, and
// the fallback if public/portrait.jpg is missing or fails to load.
function Monogram() {
  return (
    <div className="relative h-72 w-72 animate-float md:h-[22rem] md:w-[22rem]">
      <div
        className="absolute inset-0 rounded-full opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.55) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 animate-spinSlow rounded-full border border-dashed border-gold-500/35" />
      <div className="absolute inset-[7%] rounded-full border border-gold-500/25" />
      <div className="absolute inset-[15%] rounded-full border border-gold-400/15 bg-white/[0.03] shadow-inset backdrop-blur-[1px]" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="foil font-display text-[5.5rem] leading-none md:text-[7rem]">
          SP
        </span>
      </div>
      <div className="absolute inset-0 rounded-full border-t-2 border-gold-300/60 [mask-image:linear-gradient(to_bottom,black,transparent_45%)]" />
    </div>
  );
}

// Matted portrait frame: a gold hairline offset behind the photo, a warm
// glow behind that, and a scrim at the foot so a dark studio background
// melts into the navy panel instead of ending on a hard edge.
function Portrait({ src, onFail }) {
  return (
    <div className="relative w-64 sm:w-72 md:w-[20rem]">
      <div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,162,75,0.42) 0%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-4 -top-4 bottom-8 left-8 rounded-[2rem] border border-gold-500/30"
        aria-hidden="true"
      />
      <figure className="relative overflow-hidden rounded-[2rem] border border-gold-500/40 bg-navy-850 shadow-lift">
        <img
          src={src}
          alt={`${profile.name}, ${profile.titles[0]}`}
          onError={onFail}
          className="aspect-[3/4] w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-sheen opacity-60"
          aria-hidden="true"
        />
      </figure>
    </div>
  );
}

export default function Hero() {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const showPortrait = Boolean(profile.portrait) && !portraitFailed;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-depth pb-28 pt-32 text-cream md:pb-40 md:pt-44"
    >
      {/* layered ground: ledger grid, paper grain, two gold light sources */}
      <div className="pointer-events-none absolute inset-0 bg-hairline opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute -top-48 right-[-12%] h-[42rem] w-[42rem] rounded-full opacity-[0.22] blur-3xl"
        style={{
          background: "radial-gradient(circle, #C9A24B 0%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-64 left-[-14%] h-[36rem] w-[36rem] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background: "radial-gradient(circle, #2B4E77 0%, transparent 70%)",
        }}
      />
      {/* fade into the band below so the seam never reads as a hard edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />

      <div className="relative mx-auto grid max-w-content items-center gap-16 px-6 md:grid-cols-[1.12fr_0.88fr] md:px-10">
        <div>
          <p className="eyebrow animate-fadeUp text-gold-400">
            <MapPin size={13} strokeWidth={2} aria-hidden="true" />
            {profile.location}
          </p>

          <h1
            className="mt-7 animate-fadeUp font-display text-[3.25rem] font-medium leading-[0.98] tracking-[-0.02em] sm:text-6xl lg:text-[4.75rem]"
            style={{ animationDelay: "80ms" }}
          >
            Som Nath
            <br />
            <span className="foil">Pahari</span>
          </h1>

          <p
            className="mt-4 animate-fadeUp font-display text-2xl italic text-gold-300/85"
            style={{ animationDelay: "160ms" }}
          >
            “{profile.alias}”
          </p>

          <ul
            className="mt-8 flex animate-fadeUp flex-wrap gap-2"
            style={{ animationDelay: "240ms" }}
          >
            {profile.titles.map((t) => (
              <li
                key={t}
                className="pill border-cream/15 bg-white/[0.04] text-cream/80"
              >
                {t}
              </li>
            ))}
          </ul>

          <p
            className="mt-8 max-w-md animate-fadeUp text-pretty text-lg leading-relaxed text-cream/65"
            style={{ animationDelay: "320ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex animate-fadeUp flex-wrap gap-3.5"
            style={{ animationDelay: "400ms" }}
          >
            <a href="#connect" className="btn-gold">
              Start a conversation
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href="#roles" className="btn-ghost-dark">
              See what Som leads
            </a>
          </div>

          {/* social proof, pulled straight from the reviews further down */}
          <a
            href="#testimonials"
            className="group mt-10 inline-flex animate-fadeUp items-center gap-3.5 rounded-full border border-cream/10 bg-white/[0.03] py-2 pl-2 pr-5 transition duration-300 ease-editorial hover:border-gold-500/40 hover:bg-white/[0.06]"
            style={{ animationDelay: "480ms" }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/15 text-gold-300">
              <Sparkles size={15} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="flex items-center gap-2.5">
              <Stars rating={5} size={13} className="text-cream" />
              <span className="text-sm text-cream/70">
                {testimonials.length} student reviews
              </span>
            </span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="text-cream/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
            />
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          {showPortrait ? (
            <Portrait
              src={profile.portrait}
              onFail={() => setPortraitFailed(true)}
            />
          ) : (
            <Monogram />
          )}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="relative mx-auto mt-16 hidden w-fit animate-nudge text-cream/45 transition-colors hover:text-gold-400 md:block"
      >
        <ArrowDown size={20} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </section>
  );
}
