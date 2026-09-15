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
    <section className="w-full pt-4 md:pt-6 pb-12 md:pb-16 flex justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative mx-auto w-full max-w-[1440px] h-[520px] sm:h-[600px] md:h-[680px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Background Layer: Silk Canvas */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#2ec2af"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Foreground Layer: Marquee Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center gap-6 md:gap-8 overflow-hidden py-6">

          {/* Top Row: Scrolling Right */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="flex w-max animate-marquee-right gap-4 md:gap-6 px-4"
          >
            {[...topRowImages, ...topRowImages].map((src, index) => (
              <div
                key={`top-${index}`}
                className="w-[260px] h-[170px] sm:w-[320px] sm:h-[210px] md:w-[380px] md:h-[250px] rounded-xl overflow-hidden shadow-xl border border-white/20 flex-shrink-0 relative bg-neutral-900/40"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 380px"
                />
              </div>
            ))}
          </motion.div>

          {/* Bottom Row: Scrolling Left */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex w-max animate-marquee-left gap-4 md:gap-6 px-4"
          >
            {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[260px] h-[170px] sm:w-[320px] sm:h-[210px] md:w-[380px] md:h-[250px] rounded-xl overflow-hidden shadow-xl border border-white/20 flex-shrink-0 relative bg-neutral-900/40"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 380px"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}