"use client";

import Image from "next/image";
import Link from "next/link";
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
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center md:pt-30 md:pb-20 pb-16 ${className}`}
    >
      {/* Background Radial Glow using Brand Colors */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[300px] md:w-[500px] h-[200px] md:h-[300px] bg-jade-mid/10 blur-[120px] pointer-events-none rounded-full"
      />
      
      {/* =========================================================
          LIVE JADE BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main ambient jade glow */}
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-brand-jade/[0.08]
            blur-[110px]
            animate-hero-glow
          "
        />

        {/* Secondary atmospheric glow */}
        <div
          className="
            absolute
            left-[8%]
            top-[28%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-brand-jade/[0.055]
            blur-[100px]
            animate-drift-left
          "
        />

        <div
          className="
            absolute
            bottom-[5%]
            right-[5%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-brand-jade/[0.06]
            blur-[110px]
            animate-drift-right
          "
        />

        {/* =====================================================
            FLOWING JADE CONTOUR LINES
        ====================================================== */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.28]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Jade gradient */}
            <linearGradient
              id="jadeWave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#145C52" stopOpacity="0" />
              <stop offset="18%" stopColor="#145C52" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#145C52" stopOpacity="0.9" />
              <stop offset="82%" stopColor="#145C52" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#145C52" stopOpacity="0" />
            </linearGradient>

            {/* Slight softness */}
            <filter id="softJadeBlur">
              <feGaussianBlur stdDeviation="0.7" />
            </filter>
          </defs>

          {/* =================================================
              TOP CONTOUR FIELD
          ================================================== */}
          <g
            fill="none"
            stroke="url(#jadeWave)"
            strokeWidth="1.1"
            filter="url(#softJadeBlur)"
            className="animate-wave"
          >
            <path d="M-120 220 C160 125 320 305 570 210 S950 120 1200 210 S1510 295 1600 190" />
            <path d="M-120 232 C160 137 320 317 570 222 S950 132 1200 222 S1510 307 1600 202" />
            <path d="M-120 244 C160 149 320 329 570 234 S950 144 1200 234 S1510 319 1600 214" />
            <path d="M-120 256 C160 161 320 341 570 246 S950 156 1200 246 S1510 331 1600 226" />
            <path d="M-120 268 C160 173 320 353 570 258 S950 168 1200 258 S1510 343 1600 238" />
            <path d="M-120 280 C160 185 320 365 570 270 S950 180 1200 270 S1510 355 1600 250" />
            <path d="M-120 292 C160 197 320 377 570 282 S950 192 1200 282 S1510 367 1600 262" />
          </g>

          {/* =================================================
              RIGHT SIDE FLOW
          ================================================== */}
          <g
            fill="none"
            stroke="#145C52"
            strokeWidth="1.05"
            opacity="0.48"
            className="animate-wave-reverse"
          >
            <path d="M820 390 C1030 315 1150 500 1330 410 S1510 350 1630 440" />
            <path d="M820 402 C1030 327 1150 512 1330 422 S1510 362 1630 452" />
            <path d="M820 414 C1030 339 1150 524 1330 434 S1510 374 1630 464" />
            <path d="M820 426 C1030 351 1150 536 1330 446 S1510 386 1630 476" />
            <path d="M820 438 C1030 363 1150 548 1330 458 S1510 398 1630 488" />
            <path d="M820 450 C1030 375 1150 560 1330 470 S1510 410 1630 500" />
          </g>

          {/* =================================================
              BOTTOM CONTOUR FIELD
          ================================================== */}
          <g
            fill="none"
            stroke="url(#jadeWave)"
            strokeWidth="1.1"
            opacity="0.55"
            className="animate-wave-slow"
          >
            <path d="M-220 690 C70 595 245 795 485 685 S785 595 1010 700" />
            <path d="M-220 702 C70 607 245 807 485 697 S785 607 1010 712" />
            <path d="M-220 714 C70 619 245 819 485 709 S785 619 1010 724" />
            <path d="M-220 726 C70 631 245 831 485 721 S785 631 1010 736" />
            <path d="M-220 738 C70 643 245 843 485 733 S785 643 1010 748" />
            <path d="M-220 750 C70 655 245 855 485 745 S785 655 1010 760" />
          </g>

          {/* =================================================
              SUBTLE FLOATING JADE POINTS
          ================================================== */}
          <g fill="#145C52">
            <circle cx="180" cy="180" r="2" opacity="0.25" />
            <circle cx="1260" cy="210" r="2" opacity="0.3" />
            <circle cx="1080" cy="620" r="1.8" opacity="0.25" />
            <circle cx="320" cy="650" r="1.5" opacity="0.25" />
            <circle cx="1370" cy="560" r="1.5" opacity="0.3" />
            <circle cx="90" cy="420" r="1.5" opacity="0.2" />
          </g>
        </svg>

        {/* Soft edge haze */}
        <div
          className="
            absolute
            -left-[180px]
            top-[32%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-brand-jade/[0.045]
            blur-[90px]
            animate-drift-left
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[12%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-brand-jade/[0.05]
            blur-[100px]
            animate-drift-right
          "
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
    </section>
  );
}