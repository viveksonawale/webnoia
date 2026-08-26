"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PlatformPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale: starts at 0.88, expands to 1.08 (zoom effect), stays at 1.08 in the center, shrinks back to 0.88
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.88, 1.08, 1.08, 0.88]);
  
  // Opacity: starts at 0.6, becomes fully visible, fades back to 0.6
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1, 1, 0.5]);

  // Border radius: becomes slightly tighter at full scale for a premium feel
  const borderRadius = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ["40px", "32px", "32px", "40px"]);

  return (
    <div ref={containerRef} className="w-full flex justify-center pt-8 pb-24 md:pt-12 md:pb-36 overflow-visible">
      <motion.section
        style={{ scale, opacity, borderRadius }}
        className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1440px] min-h-[500px] md:min-h-[650px] border border-brand-border bg-white shadow-[0_24px_48px_rgba(20,92,82,0.03)] flex items-center justify-center relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_32px_64px_rgba(20,92,82,0.06)]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-light/20 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-brand-jade/80 bg-brand-light px-3 py-1 rounded-full">
            Platform Preview
          </span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-brand-dark">
            Coming soon
          </h2>
        </div>
      </motion.section>
    </div>
  );
}
