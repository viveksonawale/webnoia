"use client";

import { HERO_COPY } from "../data/mockData";

export interface HeroProps {
  readonly className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className={`relative text-center px-4 max-w-5xl mx-auto pt-48 md:pt-52 pb-20 md:pb-32 ${className}`}
    >
      {/* Background Radial Glow using Brand Colors */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[300px] bg-jade-mid/10 blur-[120px] pointer-events-none rounded-full"
      />

      {/* Trust Signal / Avatar cluster */}
      {/* {HERO_COPY.trustSignal && (
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="flex -space-x-2">
            {HERO_COPY.trustSignal.avatars?.map((src: string, i: number) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`Client ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-brand-white object-cover shadow-sm"
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center text-brand-jade text-sm tracking-wide">
              ★★★★★
              <span className="bg-brand-dark text-brand-light text-xs ml-2 px-1.5 py-0.5 rounded-md font-bold">
                {HERO_COPY.trustSignal.rating}
              </span>
            </div>
            <span className="text-xs font-medium text-ink-secondary">
              {HERO_COPY.trustSignal.count} {HERO_COPY.trustSignal.label}
            </span>
          </div>
        </div>
      )}

      {/* Eyebrow Pill }
      {HERO_COPY.eyebrow && (
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-jade-light border border-brand-border">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-jade animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-brand-jade uppercase font-display">
            {HERO_COPY.eyebrow}
          </span>
        </div>
      )} */}

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink-primary leading-tight mb-6 font-display">
        {HERO_COPY.headline[0]}
        <br />
        <span className="font-serif italic font-normal text-brand-jade">
          {HERO_COPY.headline[1]}
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-ink-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
        {HERO_COPY.subheadline}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => handleScroll(HERO_COPY.primaryCta.href)}
          className="bg-brand-jade hover:bg-brand-jade-hover text-brand-white px-8 py-4 rounded-xl font-semibold shadow-[0_4px_20px_0_rgba(20,92,82,0.25)] hover:shadow-[0_6px_24px_rgba(20,92,82,0.35)] transition-all duration-200 active:scale-[0.98] w-full sm:w-auto cursor-pointer"
        >
          {HERO_COPY.primaryCta.label}
        </button>
        <button
          onClick={() => handleScroll(HERO_COPY.secondaryCta.href)}
          className="border border-brand-border bg-brand-white text-ink-primary px-8 py-4 rounded-xl font-medium hover:border-brand-jade hover:text-brand-jade transition-all duration-200 w-full sm:w-auto hover:bg-jade-whisper cursor-pointer"
        >
          {HERO_COPY.secondaryCta.label}
        </button>
      </div>
    </section>
  );
}