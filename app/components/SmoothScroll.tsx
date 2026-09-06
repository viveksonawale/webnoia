"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion — disable smooth scroll for motion-sensitive users
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: reduceMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !reduceMotion,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP's ticker — single RAF loop instead of two independent ones.
    // This prevents ScrollTrigger from reading scroll position before Lenis has applied
    // its smooth offset, which causes jitter and incorrect trigger start/end positions.
    const gsapTickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerFn);
    gsap.ticker.lagSmoothing(0); // prevents GSAP from skipping frames after tab switch

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTickerFn);
    };
  }, []);

  return <>{children}</>;
}
