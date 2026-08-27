"use client";

import { HOW_IT_WORKS } from "../data/mockData";

export interface HowItWorksProps {
  readonly className?: string;
}

const ICONS = [
  // Ear / Listen
  <svg key="listen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>,
  // Eye / See it
  <svg key="eye" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>,
  // Code / Build
  <svg key="code" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>,
  // Rocket / Launch
  <svg key="rocket" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m3.5 14.5 4 4M16 3s3 0 5.5 2.5C24 8 21.5 20 15 20c-1.73 0-3.4-.77-4.64-2.12L8.5 16.5C7 14.5 7 12 9 11l2-1c1-2 1.5-4.5 3-6.5z"/>
    <circle cx="16" cy="9" r="1" fill="currentColor" stroke="none"/>
  </svg>,
];

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className={`relative w-full py-20 md:py-32 bg-brand-white overflow-hidden ${className}`}
    >
      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#111614 1px, transparent 1px), linear-gradient(to right, #111614 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Jade glow blob top-left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-jade/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-jade" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">How We Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight leading-[1.1]">
              Great design,{" "}
              <span className="font-serif italic font-medium text-brand-jade">done simply.</span>
            </h2>
            <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed md:text-right">
              No agency fluff or black-box processes. Just a clear path from idea to a site that works.
            </p>
          </div>
        </div>

        {/* Steps — horizontal timeline on desktop, stacked on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[34px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-brand-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {HOW_IT_WORKS.map((step, index) => (
              <div key={step.step} className="relative flex flex-col group">
                {/* Step number + icon pill */}
                <div className="relative z-10 mb-6 flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  {/* Icon circle */}
                  <div className="
                    w-[52px] h-[52px] shrink-0
                    rounded-full border border-brand-border bg-white
                    flex items-center justify-center
                    text-brand-jade
                    shadow-sm
                    transition-all duration-300
                    group-hover:border-brand-jade group-hover:bg-brand-jade group-hover:text-white
                    group-hover:shadow-[0_0_20px_rgba(20,92,82,0.35)]
                  ">
                    {ICONS[index]}
                  </div>
                  {/* Step number badge */}
                  <span className="md:hidden text-xs font-bold tracking-widest text-brand-jade uppercase">
                    Step {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-brand-jade/70 uppercase mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-brand-dark mb-3 leading-snug transition-colors duration-300 group-hover:text-brand-jade">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>

                {/* Mobile connector line */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="sm:hidden absolute left-[25px] top-[52px] w-px h-[calc(100%+24px)] bg-brand-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}