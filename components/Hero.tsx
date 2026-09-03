import Image from "next/image";
import Reveal from "./Reveal";
import SeismicTrace from "./SeismicTrace";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";
import { BASE_PATH } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                <SeismicTrace
                  variant="section"
                  width={34}
                  height={22}
                  traces={5}
                  className="text-accent"
                />
                <span>{profile.title}</span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-secondary sm:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <SocialLinks className="mt-9" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-first lg:order-none lg:justify-self-end">
            <Image
              src={`${BASE_PATH}${profile.avatar}`}
              alt={`Portrait of ${profile.name}`}
              width={240}
              height={240}
              unoptimized
              className="h-auto w-48 rounded-2xl sm:w-56 lg:w-60"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
