// Server Component — no hooks, no browser APIs, no event handlers.
// Renders a static step-cards grid; can be streamed as HTML from the server.
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-15">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
              <svg className="w-3.5 h-3.5 text-brand-jade" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              Process
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