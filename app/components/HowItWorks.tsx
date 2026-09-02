"use client";

import { HOW_IT_WORKS } from "../data/mockData";
import {
  Brain,
  RefreshCcw,
  Rocket,
  ThumbsUpIcon,
} from "lucide-react";

export interface HowItWorksProps {
  readonly className?: string;
}

const STEP_ICONS = [
  Brain, // 01. Listening / Discovery
  ThumbsUpIcon,         // 02. Reviewing / Feedback
  RefreshCcw,         // 03. Looping / Building
  Rocket,             // 04. Launching / Deployment
];

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  return (
    <section 
      id="how-it-works"
      className={`relative w-full py-14 md:py-20 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Micro-Square Grid Pattern Canvas */}
<div 
  className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" 
/>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-15">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-jade opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-jade" />
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              How We Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
            Great design,{" "}
            <span className="font-serif italic font-medium text-brand-jade">done simply.</span>
          </h2>
          <p className="text-ink-secondary text-sm md:text-base max-w-lg mx-auto font-sans">
            No agency fluff or black-box processes. Just a straightforward path from idea to a live site that converts.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {HOW_IT_WORKS.map((step, index) => {
            const IconComponent = STEP_ICONS[index];

            return (
              <div
                key={step.step}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-brand-border
                  bg-white/90
                  p-6
                  backdrop-blur-md
                  shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-brand-jade/50
                  hover:shadow-[0_12px_32px_-8px_rgba(20,92,82,0.15)]
                "
              >
                {/* Top Row: Icon Tag Badge & Watermark Index */}
                <div className="relative mb-5 flex items-start justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-jade bg-jade-whisper border border-brand-border/60 group-hover:border-jade-mid rounded-full px-2.5 py-1 font-display">
                    {IconComponent && (
                      <IconComponent
                        size={14}
                        strokeWidth={2}
                        className="text-brand-jade"
                        aria-hidden="true"
                      />
                    )}
                    Phase {step.step}
                  </span>

                  {/* Watermark Index Number */}
                  <span className="text-4xl font-extrabold tracking-tight text-brand-jade/90 transition-colors duration-300 group-hover:text-jade-mid select-none leading-none font-display">
                    {step.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between grow">
                  <h3 className="text-base md:text-lg font-bold text-ink-primary mb-2.5 leading-snug font-display min-h-[2.75rem] transition-colors duration-300 group-hover:text-brand-jade">
                    {step.title}
                  </h3>
                  <p className="text-ink-secondary text-xs md:text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}