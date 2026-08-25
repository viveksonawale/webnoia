"use client";

import Image from "next/image";
import { SERVICES } from "../data/mockData";

export interface ServicesProps {
  readonly className?: string;
}

export default function Services({ className = "" }: ServicesProps) {
  return (
    <section id="services" className={`w-full py-20 md:py-32 bg-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Everything you need.
            <br />
            <span className="font-serif italic font-medium">Nothing you don't.</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-8 md:space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-brand-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-center p-2"
            >
              {/* Image Section */}
              <div className="w-full md:w-[45%] h-64 md:h-full min-h-[300px] relative rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-[55%] p-8 md:p-12">
                <h3 className="text-3xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
                    >
                      <div className="w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center text-white text-[10px] font-bold">
                        ✓
                      </div>
                      <span className="text-sm font-medium text-brand-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
