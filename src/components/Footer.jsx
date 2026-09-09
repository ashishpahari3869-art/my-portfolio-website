import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-navy-950 py-12">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 md:px-10">
        <div className="flex items-center gap-4 text-cream/60">
          <span className="h-px w-10 bg-gold-500/40" aria-hidden="true" />
          <span className="font-display text-sm tracking-wide text-gold-400/80">
            SNP
          </span>
          <span className="h-px w-10 bg-gold-500/40" aria-hidden="true" />
        </div>

        <p className="max-w-md text-center text-sm leading-relaxed text-cream/45">
          {profile.tagline}
        </p>

        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-cream/[0.07] pt-8 text-xs text-cream/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-gold-400"
          >
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
