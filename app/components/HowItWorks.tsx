"use client";

import { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS } from "../data/mockData";
import { motion } from "framer-motion";

export interface HowItWorksProps {
  readonly className?: string;
}

const DESKTOP_STEPS = [
  { step: "00", isHeader: true, title: "", description: "" },
  ...HOW_IT_WORKS
];

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px", // Trigger strictly in the center
        threshold: 0,
      }
    );

    const stepElements = document.querySelectorAll(".how-it-works-step-desktop");
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className={`relative w-full bg-brand-white border-y border-brand-border/40 py-12 md:py-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        
        {/* =========================================
            MOBILE LAYOUT (Hidden on md and up)
        ========================================= */}
        <div className="md:hidden flex flex-col gap-12">
          {/* Header Section for Mobile */}
          <div className="text-center mb-8">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
                <svg className="w-3.5 h-3.5 text-brand-jade" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
                Process
              </span>
            </div>
            <h2 className="text-4xl font-bold text-ink-primary tracking-tight mb-2 font-display">
              Great design,{" "}
              <br />
              <span className="font-serif italic font-medium text-brand-jade">done simply.</span>
            </h2>
          </div>

          {/* Mobile Steps List */}
          <div className="flex flex-col gap-12">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.6 }}
                 className="flex flex-col gap-4"
              >
                 {/* 01 • ------ */}
                 <div className="flex items-center gap-2 w-full">
                    <span className="text-brand-jade font-bold text-sm tracking-widest font-display">
                      {step.step}
                    </span>
                    <span className="text-brand-jade text-[10px]">
                      ●
                    </span>
                    <div className="h-px bg-brand-border/60 flex-1"></div>
                 </div>

                 <h3 className="text-3xl font-bold text-ink-primary font-display tracking-tight">
                    {step.title}
                 </h3>

                 <p className="text-base text-ink-secondary leading-relaxed font-sans">
                    {step.description}
                 </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Hidden on mobile)
        ========================================= */}
        <div className="hidden md:flex flex-row relative">
          
          {/* LEFT COLUMN: Sticky to the viewport */}
          <div className="w-5/12 sticky top-0 h-screen flex flex-col justify-center py-0 z-10 bg-transparent border-none">
            
            {/* Animated Big Number */}
            <div className="relative h-[240px] overflow-hidden w-full">
               {DESKTOP_STEPS.map((step, index) => (
                 <motion.div
                   key={index}
                   initial={{ y: "100%", opacity: 0 }}
                   animate={{ 
                     y: activeStep === index ? "0%" : activeStep > index ? "-100%" : "100%", 
                     opacity: activeStep === index ? 1 : 0 
                   }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className="absolute inset-0 flex flex-col justify-end"
                 >
                    <span className="text-[220px] font-bold leading-none tracking-tighter text-brand-jade font-display -ml-2">
                       {step.step}
                    </span>
                 </motion.div>
               ))}
            </div>
            
            {/* Decorative Progress Divider */}
            <div className="w-full max-w-xs h-0.5 bg-brand-border/60 relative mt-8 overflow-hidden rounded-full">
               <motion.div 
                 className="absolute left-0 top-0 h-full bg-brand-jade rounded-full"
                 animate={{ width: `${((activeStep + 1) / DESKTOP_STEPS.length) * 100}%` }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
               />
            </div>

          </div>

          {/* RIGHT COLUMN: Scrolling Content */}
          <div className="w-7/12 relative pb-[10vh]">
             {DESKTOP_STEPS.map((step, index) => (
               <div 
                 key={index} 
                 data-index={index}
                 className="how-it-works-step-desktop min-h-screen flex flex-col justify-center py-0 pl-16"
               >
                 <motion.div
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false, amount: 0.3 }}
                   transition={{ duration: 0.7, ease: "easeOut" }}
                   className="max-w-xl"
                 >
                    {step.isHeader ? (
                      <>
                        <div className="mb-6 flex justify-start">
                          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-sm font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
                            <svg className="w-3.5 h-3.5 text-brand-jade" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                            </svg>
                            Process
                          </span>
                        </div>

                        <h2 className="text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
                          Great design,{" "}
                          <br />
                          <span className="font-serif italic font-medium text-brand-jade">done simply.</span>
                        </h2>
                        <p className="text-ink-secondary text-lg max-w-sm font-sans">
                          No agency fluff or black-box processes. Just a straightforward path from idea to a live site that converts.
                        </p>
                      </>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-xs font-bold uppercase tracking-widest text-brand-jade mb-6 font-display">
                          Phase {step.step}
                        </span>
                        
                        <h3 className="text-5xl font-bold text-ink-primary mb-6 leading-[1.15] font-display tracking-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-xl text-ink-secondary leading-relaxed font-sans">
                          {step.description}
                        </p>
                      </>
                    )}
                 </motion.div>
               </div>
             ))}
          </div>

        </div>

      </div>
    </section>
  );
}