import { useState } from "react";
import { ImageOff } from "lucide-react";
import { gallery } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// One tile. If its file isn't in public/gallery/ yet, the tile shows a
// captioned placeholder frame instead of a broken-image icon, so the
// section still reads as designed while photos are being added.
function Tile({ item, delay }) {
  const [failed, setFailed] = useState(false);

  return (
    <Reveal
      as="figure"
      delay={delay}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-cream/10"
    >
      {failed ? (
        <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-white/[0.03] px-6 text-center">
          <ImageOff
            size={22}
            strokeWidth={1.4}
            className="text-gold-500/50"
            aria-hidden="true"
          />
          <p className="text-sm leading-snug text-cream/55">{item.caption}</p>
          <p className="text-[11px] uppercase tracking-eyebrow text-cream/25">
            Photo coming
          </p>
        </div>
      ) : (
        <>
          <img
            src={item.image}
            alt={item.caption}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full scale-[1.01] contrast-[1.05] grayscale-[45%] transition-all duration-700 ease-editorial group-hover:scale-[1.05] group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold-500/0 transition duration-500 group-hover:ring-gold-500/40" />
          <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-sm text-cream/90 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <span
              className="mb-2 block h-px w-8 bg-gold-400"
              aria-hidden="true"
            />
            {item.caption}
          </figcaption>
        </>
      )}
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-navy-950 py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          tone="dark"
          eyebrow="In the field"
          title="Moments &"
          accent="ventures"
          blurb="Agent partnerships, counseling rooms and workshop floors — a look at the work in progress."
        />

        {/* Two columns, not three: the visa-handover collage needs the
            width for its panels to stay readable, and a mixed set of
            portrait/landscape shots balances better across two. */}
        <div className="mt-16 columns-1 gap-5 [column-fill:_balance] sm:columns-2">
          {gallery.map((g, i) => (
            <Tile key={g.image} item={g} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
