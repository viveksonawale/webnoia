"use client";

import Image from "next/image";
import { SERVICES } from "../data/mockData";

export interface ServicesProps {
  readonly className?: string;
}

export default function Services({
  className = "",
}: ServicesProps) {
  return (
    <section
      id="services"
      className={`relative w-full overflow-visible bg-brand-white py-20 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-jade" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Services
            </span>
          </div>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-brand-dark md:text-5xl">
            Everything you need.
            <br />

            <span className="font-serif font-medium italic">
              Nothing you don't.
            </span>
          </h2>
        </div>

        {/* Book Stack */}
        <div className="relative flex flex-col gap-12 pb-40">
          {SERVICES.map((service, index) => {
            const topOffset = 100 + index * 32;

            return (
              <div
                key={service.id}
                style={{ top: `${topOffset}px` }}
                className="sticky z-10"
              >
                <article
                  className="
                    group
                    relative
                    flex
                    min-h-[440px]
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-brand-border
                    bg-brand-white
                    p-2

                    shadow-[0_18px_50px_rgba(13,64,57,0.07)]

                    transition-shadow
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    md:min-h-[460px]
                    md:flex-row

                    hover:shadow-[0_24px_60px_rgba(13,64,57,0.11)]
                  "
                >
                  {/* --------------------------------
                      Image
                  -------------------------------- */}
                  <div
                    className="
                      relative
                      h-64
                      w-full
                      shrink-0
                      overflow-hidden
                      rounded-[1.5rem]

                      md:h-auto
                      md:w-[44%]
                    "
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
                        object-cover

                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-[1.035]
                      "
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />

                    {/* Image atmosphere */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-brand-dark/25
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Image label */}
                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/20
                        bg-brand-dark/20
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        Service
                      </span>
                    </div>

                    {/* Image index */}
                    <span
                      className="
                        absolute
                        bottom-5
                        left-5
                        font-sans
                        text-xs
                        font-semibold
                        tracking-[0.18em]
                        text-white/80
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* --------------------------------
                      Content
                  -------------------------------- */}
                  <div
                    className="
                      relative
                      flex
                      w-full
                      flex-col
                      justify-center
                      overflow-hidden
                      p-7

                      md:w-[56%]
                      md:p-12
                      lg:p-14
                    "
                  >
                    {/* Giant editorial number */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-5
                        -top-10
                        select-none

                        font-serif
                        text-[11rem]
                        font-medium
                        leading-none

                        text-brand-jade/[0.045]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Eyebrow */}
                    <div className="relative mb-5 flex items-center gap-3">
                      <span className="h-px w-8 bg-brand-jade" />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-brand-jade
                        "
                      >
                        What we do
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        relative
                        mb-4
                        max-w-xl

                        text-3xl
                        font-bold
                        tracking-tight
                        text-brand-dark

                        md:text-4xl
                      "
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        relative
                        mb-8
                        max-w-xl

                        text-base
                        leading-relaxed
                        text-gray-500

                        md:text-lg
                      "
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="relative flex flex-wrap gap-2">
                      {service.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="
                              flex
                              items-center
                              gap-2

                              rounded-full
                              border
                              border-brand-border
                              bg-jade-mist

                              px-3.5
                              py-2

                              transition-colors
                              duration-300

                              group-hover:border-brand-jade/20
                            "
                          >
                            <span
                              className="
                                flex
                                h-4
                                w-4
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-brand-jade

                                text-[8px]
                                font-bold
                                text-brand-white
                              "
                            >
                              ✓
                            </span>

                            <span
                              className="
                                text-xs
                                font-medium
                                text-brand-dark

                                md:text-sm
                              "
                            >
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    {/* Bottom directional detail */}
                    <div
                      className="
                        relative
                        mt-10
                        flex
                        items-center
                        justify-between
                        border-t
                        border-brand-border
                        pt-5
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-gray-400
                        "
                      >
                        Webnoia Studio
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-brand-border

                          text-brand-jade

                          transition-all
                          duration-300
                          ease-[cubic-bezier(0.22,1,0.36,1)]

                          group-hover:border-brand-jade
                          group-hover:bg-brand-jade
                          group-hover:text-brand-white
                        "
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
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