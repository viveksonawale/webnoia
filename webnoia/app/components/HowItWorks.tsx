"use client";

import { HOW_IT_WORKS } from "../data/mockData";

export interface HowItWorksProps {
  readonly className?: string;
}

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  return (
    <section
      className={`relative w-full py-16 md:py-24 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Full Component Dotted Background Canvas */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-60 pointer-events-none"
        style={{ backgroundSize: '16px 16px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-jade" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight mb-3">
            Great design, <span className="font-serif italic font-medium">done simply.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            No agency fluff or black-box processes. Just a straightforward path to getting your site built right.
          </p>
        </div>

        {/* Compact Cards Grid matching Scroll Stack Badge Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="
    group 
    flex 
    flex-col 
    justify-start 
    rounded-2xl 
    border 
    border-brand-border 
    bg-white/90 
    p-6 
    backdrop-blur-md 
    transition-all 
    duration-300 
    hover:border-brand-jade/50 
    hover:shadow-xl
  "
            >
              {/* Number always locked to the top-left */}
              <div className="mb-6 flex items-start justify-start">
                <span className="select-none text-3xl font-bold tracking-tighter text-brand-jade leading-none">
                  {step.step}
                </span>
              </div>

              {/* Title Block with fixed minimum height so description always starts at the exact same vertical point */}
              <h3 className="mb-2.5 text-base font-bold text-brand-dark min-h-[3rem] transition-colors duration-300 group-hover:text-brand-jade">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}