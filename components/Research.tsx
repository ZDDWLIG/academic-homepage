import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Research() {
  return (
    <section id="research" className="border-t border-hairline">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
            Research
          </h2>
        </Reveal>

        <div className="mt-10 space-y-12">
          {profile.researchDirections.map((direction, i) => (
            <Reveal key={direction.index} delay={i * 0.05}>
              <div className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-accent">
                  {direction.index}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {direction.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
                    {direction.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
