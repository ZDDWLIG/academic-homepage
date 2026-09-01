import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { publications } from "@/data/publications";

const sorted = [...publications].sort((a, b) => b.year - a.year);

function PubLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {label}
      <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

export default function Publications() {
  return (
    <section id="publications" className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Publications
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-11">
          {sorted.map((pub, i) => (
            <li key={`${pub.title}-${i}`}>
              <Reveal delay={Math.min(i * 0.04, 0.12)}>
                <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
                  <span className="font-mono text-sm text-ink-muted">
                    {pub.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium leading-snug text-ink">
                      {pub.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-secondary">
                      {pub.authors}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-muted">{pub.venue}</p>
                    {(pub.paperUrl || pub.codeUrl) && (
                      <div className="mt-3 flex gap-5">
                        {pub.paperUrl && (
                          <PubLink href={pub.paperUrl} label="Paper" />
                        )}
                        {pub.codeUrl && (
                          <PubLink href={pub.codeUrl} label="Code" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
