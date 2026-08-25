"use client";

import { HOW_IT_WORKS } from "../data/mockData";

export interface HowItWorksProps {
  readonly className?: string;
}

export default function HowItWorks({ className = "" }: HowItWorksProps) {
  return (
    <section className={`w-full py-20 md:py-32 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Great design, <span className="font-normal">done simply delivered fast.</span>
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.slice(0, 3).map((step, i) => (
            <div
              key={step.step}
              className="bg-white border border-brand-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative dotted background for the top half */}
              <div 
                className="absolute top-0 left-0 right-0 h-48 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-50" 
                style={{ backgroundSize: '16px 16px' }} 
              />
              
              <div className="relative z-10 flex flex-col h-full pt-40">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
