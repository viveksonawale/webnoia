"use client";

import Image from "next/image";
import { SERVICES } from "../data/mockData";

export interface ServicesProps {
  readonly className?: string;
}

export default function Services({ className = "" }: ServicesProps) {
  return (
    <section
      id="services"
      className={`relative w-full overflow-visible bg-transparent py-14 md:py-20 ${className}`}
    >
      {/* Jade gradient background panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 -z-10 overflow-hidden"
        style={{
          top: "-16px",
          bottom: "0",
          borderTopLeftRadius: "2.5rem",
          borderTopRightRadius: "2.5rem",
          background:
            "linear-gradient(to bottom, #2c9a6a 0%, #2c9266 22%, #206748 48%, #1a5c3a 75%, #133d2a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-14 text-center md:mb-15">
          <div className="mb-4 flex items-center justify-center gap-2">
           <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-jade" />
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 font-display">
              Services
            </span>
          </div>
           
          </div>

          <h2 className="mb-5 text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Everything you need.
            <br />
            <span className="font-serif font-medium italic text-white/85">
              Nothing you don&apos;t.
            </span>
          </h2>
        </div>

        {/* Scroll Stack Container */}
        <div className="relative flex flex-col gap-6 md:gap-12 pb-24 md:pb-40">
          {SERVICES.map((service, index) => {
            const topOffset = 80 + index * 20;

            return (
              <div
                key={service.id}
                style={{
                  top: `${topOffset}px`,
                  zIndex: index + 1,
                }}
                className="sticky z-10 transition-all duration-300 ease-out"
              >
                <article
                  className="
                    group
                    relative
                    flex
                    min-h-[380px]
                    flex-col
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-brand-border
                    bg-brand-white
                    p-2
                    shadow-[0_12px_40px_rgba(13,64,57,0.08)]
                    transition-shadow
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    md:min-h-[460px]
                    md:flex-row
                    hover:shadow-[0_24px_60px_rgba(13,64,57,0.14)]
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      relative
                      h-52
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[1.25rem]
                      md:h-auto
                      md:w-[44%]
                      md:rounded-[1.5rem]
                    "
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      quality={95}
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.035]
                      "
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 md:left-5 md:top-5 flex items-center gap-2 rounded-full border border-white/20 bg-brand-dark/20 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white font-display">
                        Service
                      </span>
                    </div>

                    <span className="absolute bottom-4 left-4 md:bottom-5 md:left-5 font-sans text-xs font-semibold tracking-[0.18em] text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="
                      relative
                      flex
                      w-full
                      flex-col
                      justify-center
                      overflow-hidden
                      p-6
                      md:w-[56%]
                      md:p-12
                      lg:p-14
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-5
                        -top-10
                        select-none
                        font-serif
                        text-[9rem]
                        md:text-[11rem]
                        font-medium
                        leading-none
                        text-brand-jade/[0.045]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="relative mb-3 md:mb-4 max-w-xl text-2xl font-bold tracking-tight text-brand-dark md:text-4xl font-display">
                      {service.title}
                    </h3>

                    <p className="relative mb-6 md:mb-8 max-w-xl text-sm leading-relaxed text-gray-500 md:text-lg font-sans">
                      {service.description}
                    </p>

                    <div className="relative flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-brand-border
                            bg-jade-whisper
                            px-3
                            py-1.5
                            md:px-3.5
                            md:py-2
                            transition-colors
                            duration-300
                            group-hover:border-brand-jade/20
                          "
                        >
                          <span className="flex h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 items-center justify-center rounded-full bg-brand-jade text-[8px] font-bold text-brand-white">
                            ✓
                          </span>
                          <span className="text-xs font-medium text-brand-dark md:text-sm font-sans">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}