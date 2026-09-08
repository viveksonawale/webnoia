"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy-load Silk (Three.js/R3F) — keeps ~500 KB gz out of the initial bundle
const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

const images = [
  "/website-images/webshowcase-image1.avif",
  "/website-images/webshowcase-image2.avif",
  "/website-images/webshowcase-image3.avif",
  "/website-images/webshowcase-image4.avif",
  "/website-images/webshowcase-image5.avif",
  "/website-images/webshowcase-image6.avif",
  "/website-images/webshowcase-image7.avif",
  "/website-images/webshowcase-image8.avif",
  "/website-images/webshowcase-image9.avif",
];

// Split images into two halves for the marquee rows
const topRowImages = images.slice(0, 5);
const bottomRowImages = images.slice(4, 9);

export default function Showcase() {
  return (
    <section className="w-full pt-2 md:pt-4 pb-8 md:pb-12 flex justify-center items-center overflow-hidden">
      {/* 
        Container Height Reduced: 
        Changed fixed height from 800px to 480px (mobile) / 580px (desktop) 
        to eliminate heavy top/bottom space.
      */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className="relative mx-auto w-full max-w-[1440px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-[480px] sm:h-[540px] md:h-[580px]"
      >
        {/* Background Layer: Silk Component */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#2ec2af"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Foreground Layer: Compact Grid Padding & Row Gaps */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center gap-4 md:gap-6 overflow-hidden py-4">

          {/* Top Row: Scrolling Right */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex w-max animate-marquee-right gap-4 md:gap-6 px-4"
          >
            {[...topRowImages, ...topRowImages].map((src, index) => (
              <div
                key={`top-${index}`}
                className="w-[260px] h-[170px] md:w-[360px] md:h-[230px] rounded-xl overflow-hidden shadow-lg border border-white/20 flex-shrink-0 relative"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 360px"
                />
              </div>
            ))}
          </motion.div>

          {/* Bottom Row: Scrolling Left */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex w-max animate-marquee-left gap-4 md:gap-6 px-4"
          >
            {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[260px] h-[170px] md:w-[360px] md:h-[230px] rounded-xl overflow-hidden shadow-lg border border-white/20 flex-shrink-0 relative"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 360px"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}