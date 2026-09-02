import type { ComponentType } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  FileText,
  GraduationCap,
  Mail,
} from "lucide-react";
import GithubIcon from "./GithubIcon";
import { profile } from "@/data/profile";
import { BASE_PATH } from "@/lib/site";

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
  external: boolean;
}

const links: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: "ORCID", href: profile.orcid, icon: BadgeCheck, external: true },
  { label: "Google Scholar", href: profile.googleScholar ?? "", icon: GraduationCap, external: true },
  { label: "CV", href: profile.cv ? `${BASE_PATH}${profile.cv}` : "", icon: FileText, external: false },
].filter((link) => link.href.length > 0);

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2.5 ${className}`}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink"
          >
            <Icon
              className="h-[15px] w-[15px] text-ink-muted transition-colors group-hover:text-accent"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>{label}</span>
            {external && (
              <ArrowUpRight
                className="h-3 w-3 text-ink-muted transition-colors group-hover:text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
