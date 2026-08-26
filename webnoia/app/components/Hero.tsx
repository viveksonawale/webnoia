"use client";

import Image from "next/image";
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
      className={`relative text-center px-4 max-w-5xl mx-auto pt-48 md:pt-52 pb-12 md:pb-16 ${className}`}
    >
      {/* Background Radial Glow using Brand Colors */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[300px] bg-jade-mid/10 blur-[120px] pointer-events-none rounded-full"
      />

      {/* Review Section / Trust Signal */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <div className="flex -space-x-3">
          <Image
            src="/divyang-Bhanushali.jpeg"
            alt="Divyang Bhanushali"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-brand-white object-cover shadow-md"
          />
          <Image
            src="/rahul-dey.jpeg"
            alt="Rahul Dey"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full border-2 border-brand-white object-cover shadow-md"
          />
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-1.5 leading-none mb-0.5">
            <span className="text-amber-400 text-xl font-bold tracking-tight">★★★★★</span>
            <span className="bg-brand-dark text-brand-white text-[10px] px-1.5 py-0.5 rounded font-bold">
              4.8
            </span>
          </div>
          <span className="text-xs font-semibold tracking-wide text-ink-secondary">
            3+ Scaled Brands
          </span>
        </div>
      </div>

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
          className="
    group
    relative
    isolate
    flex
    w-full
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-full
    border-2
    border-brand-jade
    bg-brand-jade
    pl-5
    pr-8
    py-4
    font-semibold
    text-brand-white
    shadow-[0_4px_20px_0_rgba(20,92,82,0.25)]
    transition-all
    duration-300
    ease-[cubic-bezier(0.22,1,0.36,1)]
    hover:-translate-y-0.5
    hover:border-brand-jade-hover
    hover:bg-brand-jade-hover
    hover:shadow-[0_8px_24px_rgba(20,92,82,0.30)]
    active:translate-y-0
    active:scale-[0.98]
    sm:w-auto
    cursor-pointer
  "
        >
          {/* Jade reveal */}
          <span
            className="
      absolute
      left-1/2
      top-1/2
      z-[-1]
      aspect-square
      w-5
      -translate-x-1/2
      -translate-y-1/2
      scale-0
      rounded-full
      bg-brand-jade-hover
      transition-transform
      duration-300
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-[14]
    "
          />

          {/* Google Meet Logo */}
          <Image
            src="/logos/googlemeet.webp"
            alt="Google Meet"
            width={20}
            height={20}
            className="relative z-10 shrink-0 w-5 h-5 object-contain"
          />

          <span className="relative z-10">
            {HERO_COPY.primaryCta.label}
          </span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            className="
      relative
      z-10
      transition-transform
      duration-300
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:translate-x-1
    "
          >
            <path
              d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => handleScroll(HERO_COPY.secondaryCta.href)}
          className="
    group
    relative
    inline-flex
    w-full
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-full
    border
    border-brand-border/60
    bg-brand-white/80
    px-7
    py-3.5
    font-medium
    text-sm
    tracking-wide
    text-ink-primary
    shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]
    backdrop-blur-md
    transition-all
    duration-500
    ease-out
    hover:-translate-y-0.5
    hover:border-brand-jade/40
    hover:bg-brand-white
    hover:shadow-[0_12px_32px_-8px_rgba(20,92,82,0.15)]
    active:translate-y-0
    active:scale-[0.98]
    sm:w-auto
    cursor-pointer
  "
        >
          {/* Ambient Jade Glow Halo */}
          <div
            className="
      pointer-events-none
      absolute
      -inset-px
      rounded-full
      opacity-0
      bg-gradient-to-r
      from-brand-jade/20
      via-transparent
      to-brand-jade/20
      blur-md
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
          />

          {/* Premium Shimmer/Light Sweep Effect */}
          <div
            className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-brand-white/60
      to-transparent
      transition-transform
      duration-1000
      ease-out
      group-hover:translate-x-full
    "
          />

          {/* Button Text */}
          <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-jade">
            {HERO_COPY.secondaryCta.label}
          </span>

          {/* Sleek Minimal Arrow */}
          <div className="relative z-10 flex h-4 w-4 items-center justify-center overflow-hidden">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="
        transform
        transition-transform
        duration-300
        ease-out
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300 group-hover:stroke-brand-jade"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}