"use client";

import Image from "next/image";
import { TESTIMONIALS } from "../data/mockData";

export interface TestimonialsProps {
  readonly className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  return (
    <section id="testimonial" className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Don't just take <span className="font-serif italic font-medium">our word for it.</span>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-brand-border rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-8">
                <div className="flex text-brand-orange text-lg mb-4">★★★★★</div>
                <p className="text-brand-dark leading-relaxed font-medium">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="text-brand-dark font-bold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
