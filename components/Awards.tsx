import Reveal from "./Reveal";
import { awards } from "@/data/awards";

export default function Awards() {
  return (
    <section id="awards" className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Awards &amp; Honors
          </h2>
        </Reveal>

        <ul className="mt-8">
          {awards.map((award, i) => (
            <li key={`${award.year}-${award.title}`}>
              <Reveal delay={i * 0.03}>
                <div className="grid gap-1.5 border-t border-hairline py-5 sm:grid-cols-[6rem_1fr] sm:gap-8">
                  <span className="font-mono text-sm text-ink-muted">
                    {award.year}
                  </span>
                  <span className="text-[15px] text-ink">
                    {award.title}
                    {award.organization && (
                      <span className="text-ink-muted">
                        {" "}
                        — {award.organization}
                      </span>
                    )}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
