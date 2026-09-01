import { profile } from "@/data/profile";

const footerLinks = [
  { label: "GitHub", href: profile.github, external: true },
  { label: "Google Scholar", href: profile.googleScholar, external: true },
  { label: "ORCID", href: profile.orcid, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-medium text-ink">
              {profile.name}
            </p>
            <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
              {profile.title}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-xs text-ink-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
