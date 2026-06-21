import { Mail, Image, Play } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/inkandmoment", icon: Image },
  { label: "YouTube", href: "https://youtube.com/@inkandmoment", icon: Play },
  { label: "Email", href: "mailto:ink-moment@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between sm:px-10 lg:px-16">
        {/* ── Copyright ────────────────────────────────── */}
        <p className="text-xs text-warm-gray">
          &copy; {new Date().getFullYear()} Ink &amp; Moment墨時. All rights
          reserved.
        </p>

        {/* ── Email ────────────────────────────────────── */}
        <a
          href="mailto:ink-moment@gmail.com"
          className="text-xs text-warm-gray transition-colors hover:text-ink"
        >
          ink-moment@gmail.com
        </a>

        {/* ── Social links ─────────────────────────────── */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-warm-gray transition-colors hover:text-ink"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
