"use client";

import Image from "next/image";
import Link from "next/link";
import { HERO_COPY } from "../data/mockData";
import PlatformPreview from "./PlatformPreview";

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
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-0 sm:px-2 md:px-4 pt-24 text-center md:pt-28 md:pb-12 pb-10 ${className}`}
    >
      {/* ==========================================================
          BACKGROUND: DOT GRID + DIAGONAL JADE GRADIENT WASH
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Dot grid base */}
        <div className="absolute inset-0 bg-dots opacity-100" />

        {/* Diagonal jade gradient wash — sweeps from top-right corner */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,92,82,0.13) 0%, rgba(20,92,82,0.07) 25%, rgba(255,255,255,0) 60%)",
          }}
        />

        {/* Soft jade tint in top-right corner for depth */}
        <div
          className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,92,82,0.12) 0%, rgba(20,92,82,0.04) 55%, transparent 75%)",
          }}
        />

        {/* Faint bottom-left echo to balance the composition */}
        <div
          className="absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(20,92,82,0.07) 0%, rgba(20,92,82,0.02) 55%, transparent 75%)",
          }}
        />

        {/* Bottom fade to white so the section transitions cleanly */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto h-full w-full max-w-4xl px-4 text-center">
        {/* Review Section / Trust Signal */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex shrink-0 -space-x-3">
            <Image
              src="/rahul-dey.jpeg"
              alt="Rahul Dey"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full border-2 border-brand-white object-cover shadow-md md:h-12 md:w-12"
            />

            <Image
              src="/divyang-Bhanushali.jpeg"
              alt="Divyang Bhanushali"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full border-2 border-brand-white object-cover shadow-md md:h-12 md:w-12"
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="mb-0.5 flex items-center gap-1.5 leading-none">
              <span className="text-lg font-bold tracking-tight text-amber-400 md:text-2xl">
                ★★★★★
              </span>

              <span className="rounded bg-brand-dark px-1.5 py-1 text-[12px] font-bold text-brand-white md:text-[14px]">
                4.8
              </span>
            </div>

            <span className="text-xs font-semibold tracking-wide text-ink-secondary md:text-sm">
              3+ Scaled Brands
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-ink-primary sm:text-5xl md:mb-6 md:text-6xl font-display">
          {HERO_COPY.headline[0]}{" "}
          <span className="font-serif font-normal italic text-brand-jade">
            {HERO_COPY.headline[1]}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl px-2 text-sm leading-relaxed text-ink-secondary md:mb-10 md:text-xl font-sans">
          {HERO_COPY.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row md:gap-4">
          {/* Primary CTA */}
          <Link
            href={HERO_COPY.primaryCta.href}
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
              py-3.5
              text-sm
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
              md:py-4
              md:text-base
              cursor-pointer
            "
          >
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

            <Image
              src="/logos/googlemeet.webp"
              alt="Google Meet"
              width={20}
              height={20}
              className="relative z-10 h-5 w-5 shrink-0 object-contain"
            />

            <span className="relative z-10">
              {HERO_COPY.primaryCta.label}
            </span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M3 11L11 3M5 3H11V9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Secondary CTA */}
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
              px-6
              py-3
              text-sm
              font-medium
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
              md:py-3.5
              cursor-pointer
            "
          >
            {/* Ambient Jade Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-px
                rounded-full
                bg-gradient-to-r
                from-brand-jade/20
                via-transparent
                to-brand-jade/20
                blur-md
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Light Sweep */}
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

            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-jade">
              {HERO_COPY.secondaryCta.label}
            </span>

            <div className="relative z-10 flex h-4 w-4 items-center justify-center overflow-hidden">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
      </div>

      {/* Work Showcase Images sticking right below buttons spanning full layout width */}
      <PlatformPreview />
    </section>
  );
}