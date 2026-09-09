import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#roles", label: "Roles" },
  { href: "#expertise", label: "Expertise" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  // Condensed bar + reading-progress rule.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 12);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is closest to the top of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Don't leave the mobile sheet open behind a scrolled page.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "border-b border-gold-500/20 bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/60 font-display text-[0.7rem] tracking-wide text-gold-400 transition duration-500 ease-editorial group-hover:border-gold-400 group-hover:bg-gold-500/10">
            SNP
          </span>
          <span className="hidden text-sm tracking-wide text-cream/85 sm:block">
            Som Nath Pahari
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-3.5 py-2 text-sm transition duration-300 ${
                active === l.href
                  ? "text-gold-300"
                  : "text-cream/65 hover:text-cream"
              }`}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-gold-400 transition-transform duration-500 ease-editorial ${
                  active === l.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href="#connect"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-gold-500/60 px-4 py-2 text-sm text-gold-300 transition duration-300 ease-editorial hover:bg-gold-500 hover:text-navy-950"
          >
            Work with Som
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="text-cream lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* reading progress */}
      <div
        aria-hidden="true"
        className={`h-px origin-left bg-gold-sheen transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* mobile sheet */}
      <div
        className={`overflow-hidden border-t border-gold-500/15 bg-navy-950/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-editorial lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-cream/[0.07] py-3.5 text-base text-cream/85 last:border-b-0"
            >
              <span className="font-display text-xs text-gold-500/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setOpen(false)}
            className="btn-gold mt-5"
          >
            Work with Som
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
