import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            About
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
          <Reveal className="space-y-5">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-ink-secondary sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                Research Interests
              </h3>
              <ul className="mt-5 space-y-2.5">
                {profile.researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-[15px] text-ink"
                  >
                    <span
                      className="h-px w-3 shrink-0 bg-ink-muted"
                      aria-hidden="true"
                    />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
