"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/website-images/website-image1.webp",
  "/website-images/website-image2.webp",
  "/website-images/website-image3.webp",
  "/website-images/website-image4.webp",
  "/website-images/website-image5.webp",
];

export default function PlatformPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track scroll progress of the container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale: starts at 0.88, expands to 1.08 (zoom effect), stays at 1.08 in the center, shrinks back to 0.88
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.88, 1.08, 1.08, 0.88]);

  // Border radius: becomes slightly tighter at full scale for a premium feel
  const borderRadius = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ["40px", "32px", "32px", "40px"]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="hidden md:block w-full">
      <div ref={containerRef} className="w-full flex justify-center pt-0 pb-16 -mt-8 md:-mt-12 md:pb-24 overflow-visible relative z-10">
        <motion.section
          style={{ scale, borderRadius }}
          className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1440px] min-h-[500px] md:min-h-[650px] border border-brand-border bg-white shadow-[0_24px_48px_rgba(20,92,82,0.03)] flex items-center justify-center relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_32px_64px_rgba(20,92,82,0.06)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={IMAGES[currentIndex]}
                alt={`Platform Preview ${currentIndex + 1}`}
                fill
                className="object-cover object-top"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}
