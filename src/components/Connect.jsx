import { Mail, Phone, MapPin, Globe, MessageCircle, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon, TiktokIcon } from "./BrandIcons";
import { profile, social } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const directLines = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `+977 ${social.whatsappPersonal}`,
    href: `https://wa.me/977${social.whatsappPersonal}`,
    external: true,
  },
  {
    icon: Globe,
    label: "Website",
    value: "learnworldeducation.edu.np",
    href: social.website,
    external: true,
  },
];

const channels = [
  {
    heading: "Personal",
    links: [
      { icon: LinkedinIcon, label: "LinkedIn", href: social.linkedinPersonal },
      { icon: FacebookIcon, label: "Facebook", href: social.facebookPersonal },
      { icon: InstagramIcon, label: "Instagram", href: social.instagramPersonal },
      { icon: TiktokIcon, label: "TikTok", href: social.tiktok },
    ],
  },
  {
    heading: "Professional",
    links: [
      { icon: FacebookIcon, label: "Business page", href: social.facebookPage },
      {
        icon: InstagramIcon,
        label: "Learn World Education",
        href: social.instagramProfessional,
      },
      { icon: LinkedinIcon, label: "LinkedIn (alt)", href: social.linkedinAlt },
      {
        icon: MessageCircle,
        label: `WhatsApp ${social.whatsappProfessional}`,
        href: `https://wa.me/977${social.whatsappProfessional}`,
      },
    ],
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-navy-depth py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-hairline opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-1/4 h-[32rem] w-[32rem] rounded-full opacity-[0.15] blur-3xl"
        style={{
          background: "radial-gradient(circle, #C9A24B 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-content gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Connect"
            title="Let's talk about your"
            accent="next step"
            blurb="For counseling, training, partnerships, or a conversation about your next career move — reach out directly."
          />

          <Reveal delay={140} className="mt-10 space-y-3">
            {directLines.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card-dark card-dark-hover group flex items-center gap-4 p-4"
              >
                <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-300">
                  <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-eyebrow text-cream/40">
                    {label}
                  </span>
                  <span className="block truncate text-[0.9375rem] text-cream/85">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="ml-auto flex-none text-cream/25 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                />
              </a>
            ))}

            <p className="flex items-center gap-3 pt-3 text-sm text-cream/50">
              <MapPin size={15} className="text-gold-400" aria-hidden="true" />
              {profile.location}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 self-start sm:grid-cols-2 lg:pt-24">
          {channels.map((group, gi) => (
            <Reveal key={group.heading} delay={200 + gi * 100} className="card-dark p-7">
              <h3 className="eyebrow text-gold-400">{group.heading}</h3>
              <ul className="mt-6 space-y-1">
                {group.links.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-cream/70 transition duration-300 hover:bg-white/[0.05] hover:text-gold-300"
                    >
                      <Icon size={15} aria-hidden="true" />
                      <span className="truncate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
