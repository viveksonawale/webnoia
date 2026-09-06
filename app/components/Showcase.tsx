"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy-load Silk (Three.js/R3F) — keeps ~500 KB gz out of the initial bundle
// ssr:false prevents server-side rendering of a WebGL canvas
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

// Split images into two halves for the two rows
const topRowImages = images.slice(0, 5);
const bottomRowImages = images.slice(4, 9);

export default function Showcase() {
  return (
    <section className="w-full pt-4 md:pt-6 pb-16 flex justify-center items-center overflow-hidden">
      <div
        className="relative mx-auto w-full max-w-[1440px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        style={{ height: "800px" }}
      >
        {/* Background Layer: Silk Component — lazy-loaded, ssr:false */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#10B981"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Foreground Layer: Masonry Marquee Grid */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center gap-6 md:gap-[72px] overflow-hidden md:pb-12">
          
          {/* Top Row: Scrolling Right — all eager: CSS transform animation bypasses lazy-load IntersectionObserver */}
          <div className="flex w-max animate-marquee-right gap-6 px-4">
            {[...topRowImages, ...topRowImages].map((src, index) => (
              <div
                key={`top-${index}`}
                className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-xl overflow-hidden shadow-lg border border-white/20 flex-shrink-0 relative"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row: Scrolling Left — all eager: CSS transform animation bypasses lazy-load IntersectionObserver */}
          <div className="flex w-max animate-marquee-left gap-6 px-4">
            {[...bottomRowImages, ...bottomRowImages].map((src, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] rounded-xl overflow-hidden shadow-lg border border-white/20 flex-shrink-0 relative"
              >
                <Image
                  src={src}
                  alt={`Showcase preview ${index + 1}`}
                  fill
                  loading="eager"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
