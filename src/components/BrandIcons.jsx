// lucide-react removed brand/logo icons in v1, so these are small
// hand-drawn stand-ins, sized and stroked to match the lucide icons
// used elsewhere (Mail, Phone, MapPin, Globe).

export function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.75h3.9V21H3.5V8.75Zm6.35 0h3.74v1.68h.05c.52-.94 1.8-1.93 3.7-1.93 3.96 0 4.7 2.5 4.7 5.76V21h-3.9v-6.03c0-1.44-.03-3.28-2.05-3.28-2.06 0-2.37 1.55-2.37 3.17V21h-3.87V8.75Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.25-1.46 1.55-1.46h1.66V4.24C16.9 4.15 15.9 4 14.72 4 12.27 4 10.6 5.42 10.6 8.1v2.3H8v3h2.6V21h3.9Z" />
    </svg>
  );
}

export function TiktokIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 2h-3.1v13.2a2.5 2.5 0 1 1-2.5-2.5c.26 0 .5.04.74.11V9.65a5.7 5.7 0 0 0-.74-.05 5.6 5.6 0 1 0 5.6 5.6V8.62a6.3 6.3 0 0 0 3.9 1.32V6.83A3.9 3.9 0 0 1 16.6 2Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
