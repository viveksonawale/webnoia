"use client";

import Link from "next/link";
import { PRICING_PLANS } from "../data/mockData";

export interface PricingProps {
  readonly className?: string;
}

export default function Pricing({ className = "" }: PricingProps) {
  return (
    <section id="pricing" className={`w-full py-14 md:py-20 bg-brand-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-jade opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-jade" />
            </span>
            <span className="text-xs font-bold tracking-widest text-ink-secondary uppercase font-display">
              Pricing
            </span>
          </div>
          <h2 className="ext-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
            Transparent pricing,{" "}
            <span className="font-serif italic font-medium text-brand-jade ">no hidden fees.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`
                  group/card relative overflow-hidden
                  flex flex-col
                  rounded-[20px]
                  p-5 md:p-6
                  min-h-[400px]
                  transition-all duration-300 ease-out
                  ${
                    isGrowth
                      ? `
                        bg-brand-dark text-white
                        shadow-[0_18px_50px_rgba(13,64,57,0.16)]
                        hover:-translate-y-1
                        hover:shadow-[0_24px_60px_rgba(13,64,57,0.22)]
                      `
                      : `
                        bg-brand-white
                        border border-brand-border
                        hover:-translate-y-1
                        hover:bg-jade-whisper/60
                        hover:border-brand-jade/30
                        hover:shadow-[0_18px_45px_rgba(13,64,57,0.08)]
                      `
                  }
                `}
              >
                {/* Pro accent for Growth */}
                {isGrowth && (
                  <>
                    <div className="absolute inset-x-0 top-0 h-px bg-brand-jade" />
                    <div
                      className="
                        pointer-events-none
                        absolute -top-24 -right-24
                        w-64 h-64
                        rounded-full
                        bg-brand-jade/15
                        blur-3xl
                      "
                    />
                  </>
                )}

                {/* Header */}
                <div className="relative flex items-center justify-between">
                  <div>
                    <span
                      className={`
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        transition-colors duration-300
                        ${
                          isGrowth
                            ? "text-brand-light"
                            : "text-gray-400 group-hover/card:text-brand-jade"
                        }
                      `}
                    >
                      {plan.name}
                    </span>
                  </div>

                  {"badge" in plan && plan.badge && (
                    <span
                      className="
                        inline-flex items-center gap-1.5
                        rounded-full
                        bg-brand-jade/10
                        px-2.5 py-1
                        text-[10px]
                        font-semibold
                        text-brand-light
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-jade-mid" />
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="relative mt-8">
                  <div className="flex items-end gap-2">
                    <span
                      className={`
                        text-[34px]
                        md:text-[30px]
                        leading-none
                        font-semibold
                        tracking-[-0.04em]
                        ${
                          isGrowth
                            ? "text-white"
                            : "text-brand-dark"
                        }
                      `}
                    >
                      {plan.priceINR}
                    </span>

                    <span
                      className={`
                        pb-0.5
                        text-xs
                        ${
                          isGrowth
                            ? "text-white/45"
                            : "text-gray-400"
                        }
                      `}
                    >
                      {plan.priceUSD}
                    </span>
                  </div>

                  <div
                    className={`
                      mt-3
                      text-xs
                      font-medium
                      ${
                        isGrowth
                          ? "text-brand-jade"
                          : "text-brand-jade/80"
                      }
                    `}
                  >
                    Estimated {plan.estHours}
                  </div>
                </div>

                {/* Divider */}
                <div className="relative mt-7 mb-6">
                  <div
                    className={`
                      h-px w-full
                      ${
                        isGrowth
                          ? "bg-white/10"
                          : "bg-brand-border"
                      }
                    `}
                  />
                </div>

                {/* Features */}
                <ul className="relative flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`
                        flex items-start gap-3
                        text-sm
                        leading-snug
                        ${
                          isGrowth
                            ? "text-white/75"
                            : "text-brand-dark/80"
                        }
                      `}
                    >
                      <span
                        className={`
                          mt-[2px]
                          flex
                          h-4
                          w-4
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[9px]
                          font-bold
                          ${
                            isGrowth
                              ? "bg-brand-jade text-white"
                              : "bg-brand-soft-jade text-brand-jade"
                          }
                        `}
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/schedule" className="relative mt-8 block">
                  <button
                    className={`
                      group/btn
                      relative
                      isolate
                      overflow-hidden
                      w-full
                      h-11
                      rounded-full
                      flex items-center justify-center gap-2
                      text-sm
                      font-semibold
                      transition-all duration-300
                      ${
                        isGrowth
                          ? "bg-brand-jade text-white"
                          : "border border-brand-jade text-brand-jade group-hover/card:bg-brand-jade group-hover/card:text-white"
                      }
                    `}
                  >
                    {/* Minimal Jade Reveal */}
                    <span
                      className={`
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
                        transition-transform
                        duration-300
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover/btn:scale-[25]
                        ${
                          isGrowth
                            ? "bg-brand-jade-hover"
                            : "bg-brand-jade"
                        }
                      `}
                    />
                    <span className="relative z-10">{plan.cta}</span>

                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      fill="none" 
                      className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    >
                      <path 
                        d="M3 11L11 3M5 3H11V9" 
                        stroke="currentColor" 
                        strokeWidth="1.3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Email CTA */}
        <div
          className="
            group/email
            max-w-5xl mx-auto
            mt-3
            px-5 py-4
            rounded-[18px]
            border border-brand-border
            bg-brand-mist
            hover:bg-jade-whisper/60
            hover:border-brand-jade/30
            transition-all duration-300
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft-jade text-brand-jade text-sm">
              @
            </span>

            <div>
              <p className="text-sm font-semibold text-brand-dark">
                Have something custom in mind?
              </p>

              <p className="text-xs text-gray-500 mt-0.5">
                Tell us what you&apos;re building.
              </p>
            </div>
          </div>

          <a
            href="mailto:hello@webnoia.com"
            className="
              group/btn
              relative
              isolate
              overflow-hidden
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              h-10
              rounded-full
              border border-brand-jade
              text-sm
              font-semibold
              text-brand-jade
              group-hover/email:bg-brand-jade
              group-hover/email:text-white
              transition-colors duration-300
              whitespace-nowrap
            "
          >
            {/* Minimal Jade Reveal */}
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
                bg-brand-jade
                transition-transform
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover/btn:scale-[14]
              "
            />
            <span className="relative z-10">Email us</span>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            >
              <path 
                d="M3 11L11 3M5 3H11V9" 
                stroke="currentColor" 
                strokeWidth="1.3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}