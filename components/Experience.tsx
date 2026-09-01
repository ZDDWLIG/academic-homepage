import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Experience
          </h2>
        </Reveal>

        <div className="mt-6">
          {experience.map((item, i) => (
            <Reveal key={`${item.period}-${item.position}`} delay={i * 0.04}>
              <div
                className={`grid gap-2 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8 ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                <span className="font-mono text-sm text-ink-muted">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-ink">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-[15px] text-ink-secondary">
                    {item.institution}
                    {item.department && (
                      <span className="text-ink-muted"> · {item.department}</span>
                    )}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
