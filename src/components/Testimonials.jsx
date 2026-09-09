import { useState } from "react";
import { Quote, LayoutGrid, List } from "lucide-react";
import { testimonials } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Stars from "./Stars";

const average = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

// Group by the controlled `tag` field, so the summary panel shows a
// handful of real service buckets rather than one row per review.
const breakdown = Object.entries(
  testimonials.reduce((acc, t) => {
    acc[t.tag] = (acc[t.tag] || 0) + 1;
    return acc;
  }, {}),
).sort((a, b) => b[1] - a[1]);

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// Shows the reviewer's photo when content.js has one, and falls back to
// an initials monogram when it doesn't — so the cards stay uniform
// whether or not a given review came with a picture.
function Avatar({ name, photo }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        width="44"
        height="44"
        className="h-11 w-11 flex-none rounded-full border border-gold-500/40 object-cover"
      />
    );
  }

  return (
    <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-gold-500/40 bg-gold-500/10 font-display text-sm text-gold-300">
      {initials(name)}
    </span>
  );
}

function Card({ t, clamp = false }) {
  return (
    <figure className="card-dark card-dark-hover flex h-full flex-col p-7">
      <Quote
        size={26}
        strokeWidth={1.25}
        className="mb-4 flex-none text-gold-500/45"
        aria-hidden="true"
      />

      <blockquote
        className={`mb-6 text-[0.9375rem] leading-relaxed text-cream/75 ${
          clamp ? "line-clamp-6" : ""
        }`}
      >
        {t.quote}
      </blockquote>

      {/* mt-auto keeps the footers on one line when quotes differ in length */}
      <figcaption className="mt-auto flex items-center gap-3.5 border-t border-cream/10 pt-5">
        <Avatar name={t.name} photo={t.photo} />
        <div className="min-w-0">
          <p className="truncate text-sm text-cream">{t.name}</p>
          <p className="truncate text-xs text-cream/45">{t.role}</p>
        </div>
        <Stars rating={t.rating} size={12} className="ml-auto flex-none text-cream" />
      </figcaption>
    </figure>
  );
}

// Two marquee rows moving in opposite directions. Each row duplicates
// its own half of the reviews so the -50% loop is seamless.
function MarqueeRow({ items, direction, speed }) {
  const track = [...items, ...items];

  return (
    <div className="marquee">
      <div
        className={`marquee-track marquee-track--${direction}`}
        style={{ "--marquee-speed": speed }}
      >
        {track.map((t, i) => (
          <div key={`${t.name}-${i}`} className="w-[19rem] flex-none sm:w-[21.5rem]">
            <Card t={t} clamp />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const half = Math.ceil(testimonials.length / 2);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-navy-depth py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-hairline opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #C9A24B 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <SectionHeading
            tone="dark"
            eyebrow="Testimonials"
            title="In the words of the students who"
            accent="got there"
            blurb="Every review below was written by someone Som counseled through their study-abroad or visa process — transcribed exactly as they sent it."
          />

          {/* Rating summary — the numbers behind the quotes. */}
          <Reveal
            delay={120}
            className="card-dark rounded-2xl p-7 lg:mb-1"
          >
            <div className="flex items-end gap-4">
              <p className="font-display text-6xl leading-none text-gold-300">
                {average}
              </p>
              <div className="pb-1.5">
                <Stars rating={5} size={16} className="text-cream" />
                <p className="mt-2 text-xs text-cream/50">
                  {testimonials.length} written reviews
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-cream/10 pt-5">
              {breakdown.map(([label, count]) => (
                <li
                  key={label}
                  className="flex items-baseline gap-3 text-[0.8125rem]"
                >
                  <span className="text-cream/55">{label}</span>
                  <span
                    className="h-px flex-1 border-b border-dashed border-cream/15"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-gold-400">{count}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="btn border border-gold-500/50 text-gold-300 hover:-translate-y-0.5 hover:bg-gold-500 hover:text-navy-950"
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                <List size={16} aria-hidden="true" /> Back to the reel
              </>
            ) : (
              <>
                <LayoutGrid size={16} aria-hidden="true" /> Read all{" "}
                {testimonials.length} reviews
              </>
            )}
          </button>
          <p className="text-xs text-cream/40">
            {showAll
              ? "Full text of every review, nothing trimmed."
              : "Hover to pause the reel."}
          </p>
        </Reveal>
      </div>

      <div className="relative mt-12">
        {/* expanded view uses masonry columns, so a short review
            doesn't leave a tall gap under it */}
        {showAll ? (
          <div className="mx-auto max-w-content px-6 md:px-10">
            <div className="columns-1 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
              {testimonials.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={Math.min(i, 8) * 60}
                  className="mb-5 break-inside-avoid"
                >
                  <Card t={t} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <MarqueeRow
              items={testimonials.slice(0, half)}
              direction="left"
              speed="72s"
            />
            <MarqueeRow
              items={testimonials.slice(half)}
              direction="right"
              speed="86s"
            />
          </div>
        )}
      </div>
    </section>
  );
}
