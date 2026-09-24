"use client";

import Image from "next/image";
import { FOUNDERS } from "../data/mockData";
import { User } from "lucide-react";

export interface AboutUsProps {
  readonly className?: string;
}

export default function AboutUs({ className = "" }: AboutUsProps) {
  return (
    <section
      id="about"
      className={`relative w-full py-14 md:py-20 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Background Radial Pattern Canvas */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-40 pointer-events-none"
        style={{ backgroundSize: "20px 20px" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
              <User className="w-3.5 h-3.5 text-brand-jade" />
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
            Good Ideas Deserve <span className="font-serif italic font-medium text-brand-jade">Great Execution.</span>
          </h2>
          <p className="text-ink-secondary text-sm md:text-base max-w-md mx-auto font-sans">
            Partnering with clients worldwide since 2024
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FOUNDERS.map((founder) => (
            <div 
              key={founder.id}
              className="bg-brand-white border border-brand-border rounded-3xl p-5 md:p-6 shadow-xl shadow-brand-border/30 flex flex-col transition-all duration-300 hover:border-brand-jade/40 hover:shadow-2xl hover:shadow-brand-jade/10"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-brand-jade/5 border border-brand-border/50">
                {/* Fallback pattern while waiting for real images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-jade/20">
                  <User className="w-16 h-16 md:w-20 md:h-20 mb-2" />
                </div>
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  style={{ objectPosition: founder.objectPosition }}
                  onError={(e) => {
                    // Fallback to hide broken image icon
                    e.currentTarget.style.opacity = '0';
                  }}
                />
              </div>

              {/* Info container */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-end mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-ink-primary font-display">{founder.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-jade bg-brand-jade/10 px-3 py-1 rounded-full whitespace-nowrap">{founder.title}</span>
                </div>
                
                <p className="text-sm md:text-base text-ink-secondary leading-relaxed mb-2 flex-grow font-sans">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
