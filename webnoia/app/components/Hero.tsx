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
      className={`text-center px-4 max-w-5xl mx-auto pt-48 md:pt-52 pb-20 md:pb-32 ${className}`}
    >
      {/* Trust Signal / Avatar cluster */}
      <div className="flex items-center justify-center space-x-3 mb-8">
        <div className="flex -space-x-2">
          {HERO_COPY.trustSignal.avatars.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`Client ${i + 1}`}
              className="w-8 h-8 rounded-full border-2 border-brand-light object-cover"
              loading="lazy"
            />
          ))}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center text-brand-orange text-sm">
            ★★★★★
            <span className="bg-brand-dark text-white text-xs ml-2 px-1.5 py-0.5 rounded-md font-bold">
              {HERO_COPY.trustSignal.rating}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600">
            {HERO_COPY.trustSignal.count} {HERO_COPY.trustSignal.label}
          </span>
        </div>
      </div>

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange" />
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          {HERO_COPY.eyebrow}
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-dark leading-tight mb-6">
        {HERO_COPY.headline[0]}
        <br />
        for{" "}
        <span className="font-serif italic font-medium">{HERO_COPY.headline[1]}</span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        {HERO_COPY.subheadline}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => handleScroll(HERO_COPY.primaryCta.href)}
          className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold shadow-[0_4px_14px_0_rgba(227,68,0,0.39)] hover:shadow-[0_6px_20px_rgba(227,68,0,0.23)] hover:bg-[#c93d00] transition-all duration-200 active:translate-y-[1px] w-full sm:w-auto"
        >
          {HERO_COPY.primaryCta.label}
        </button>
        <button
          onClick={() => handleScroll(HERO_COPY.secondaryCta.href)}
          className="border border-brand-border bg-white text-brand-dark px-8 py-4 rounded-xl font-medium hover:border-brand-orange hover:text-brand-orange transition-all duration-200 w-full sm:w-auto"
        >
          {HERO_COPY.secondaryCta.label}
        </button>
      </div>
    </section>
  );
}
