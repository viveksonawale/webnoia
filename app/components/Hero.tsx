"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { HERO_COPY } from "../data/mockData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ArrowFillButton from "@/components/ui/arrow-fill-button";
import ButtonWithIcon from "@/components/ui/button-with-icon";

export interface HeroProps {
  readonly className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animation refs
  const containerRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Orbs: scale in from slightly smaller
      tl.fromTo(
        orbsRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.6 },
        0
      );

      // Trust badge: fade + slide up
      tl.fromTo(
        trustRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.1
      );

      // Headline children: stagger each span
      tl.fromTo(
        headlineRef.current?.children ?? [],
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        0.1
      );

      // Subheadline
      tl.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.5
      );

      // CTA buttons: stagger
      tl.fromTo(
        ctaRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        0.8
      );
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <section
      ref={containerRef}
      id="home"
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden px-0 sm:px-2 md:px-4 pt-28 md:pt-36 pb-0 text-center ${className}`}
    >
      {/* ==========================================================
          BACKGROUND: CUSTOM TOP ANIMATION
      ========================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-brand-white [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]"
      >
        {/* Animated glowing orbs at the top */}
        <div ref={orbsRef} style={{ opacity: 0 }}>
          <div className="absolute -top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-purple-300/40 blur-[120px] animate-orb-wide-1 mix-blend-multiply" />
          <div className="absolute -top-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-sky-300/40 blur-[140px] animate-orb-wide-2 mix-blend-multiply" />
          <div className="absolute top-[0%] left-[30%] h-[550px] w-[550px] rounded-full bg-emerald-300/40 blur-[130px] animate-orb-wide-3 mix-blend-multiply" />
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto h-full w-full max-w-4xl px-4 text-center">
        {/* Review Section / Trust Signal */}
        <div ref={trustRef} style={{ opacity: 0 }} className="mb-8 flex flex-wrap items-center justify-center gap-3">
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
        <h1
          ref={headlineRef}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-ink-primary sm:text-5xl md:mb-6 md:text-6xl font-display"
        >
          <span style={{ display: "inline", opacity: 0 }}>{HERO_COPY.headline[0]}{" "}</span>
          <span style={{ opacity: 0 }} className="font-serif font-normal italic text-brand-jade">
            {HERO_COPY.headline[1]}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          style={{ opacity: 0 }}
          className="mx-auto mb-10 max-w-2xl px-2 text-sm leading-relaxed text-ink-secondary md:mb-14 md:text-xl font-sans"
        >
          {HERO_COPY.subheadline}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mx-auto mb-8 md:mb-12 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row md:gap-4">
          {/* Primary CTA */}
          <ArrowFillButton
            href={HERO_COPY.primaryCta.href}
            btnText={HERO_COPY.primaryCta.label}
            style={{ opacity: 0 }}
            bgColor="#145C52"
            textColor="#ffffff"
            fillBgColor="#ffffff"
            fillTextColor="#145C52"
            hoverFillBgColor="#ffffff"
            hoverFillTextColor="#145C52"
            className="shadow-[0_4px_20px_0_rgba(20,92,82,0.25)] hover:shadow-[0_8px_24px_rgba(20,92,82,0.30)] !font-sans !h-auto !py-3.5 md:!py-4 sm:!w-auto !rounded-full text-sm md:text-base"
            leftIcon={
              <Image
                src="/logos/googlemeet.webp"
                alt="Google Meet"
                width={20}
                height={20}
                className="relative z-10 h-5 w-5 shrink-0 object-contain"
              />
            }
          />

          <ButtonWithIcon
            onClick={(e) => { e.preventDefault(); handleScroll(HERO_COPY.secondaryCta.href); }}
            text={HERO_COPY.secondaryCta.label}
            style={{ opacity: 0 }}
            variant="outline"
            className="bg-brand-white/80 text-ink-primary hover:bg-brand-white hover:text-ink-primary border-brand-border/60 hover:border-brand-jade/40 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-8px_rgba(20,92,82,0.15)] backdrop-blur-md font-sans text-sm md:text-base sm:w-auto"
            iconBgColor="#145C52"
            iconTextColor="#ffffff"
          />
        </div>
      </div>

    </section>
  );
}