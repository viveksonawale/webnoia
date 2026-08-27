"use client";

import Image from "next/image";
import { TESTIMONIALS } from "../data/mockData";

export interface TestimonialsProps {
  readonly className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  // Taking only the first 2 real client testimonials
  const featuredTestimonials = TESTIMONIALS.slice(0, 2);

  return (
    <section 
      id="testimonial" 
      className={`relative w-full py-14 md:py-20 bg-gray-200/50 border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Background Radial Canvas */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-50 pointer-events-none" 
        style={{ backgroundSize: '20px 20px' }} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-jade opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-jade" />
            </span>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Client Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Don&apos;t just take <span className="font-serif italic font-medium">our word for it.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mx-auto">
            Real feedback from founders and businesses we&apos;ve collaborated with.
          </p>
        </div>

        {/* 2-Column Premium Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-3xl
                border
                border-brand-border
                bg-white/90
                p-8
                md:p-10
                backdrop-blur-md
                shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-brand-jade/40
                hover:shadow-[0_20px_40px_-15px_rgba(20,92,82,0.12)]
              "
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 bg-gradient-to-br from-brand-jade/10 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top Bar: Stars + Live Badge */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                {/* 5-Star Rating SVG */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current drop-shadow-xs"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Status Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jade-whisper border border-brand-border/60 text-[10px] font-semibold tracking-wider uppercase text-brand-jade">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-jade" />
                  Verified Client
                </span>
              </div>

              {/* Quote Body */}
              <div className="relative z-10 mb-8 grow">
                <p className="text-brand-dark leading-relaxed font-normal text-base md:text-lg">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-brand-border/50">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={52}
                    height={52}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-white shadow-xs group-hover:border-brand-jade/30 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div>
                  <h3 className="text-brand-dark font-bold text-sm tracking-tight group-hover:text-brand-jade transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}