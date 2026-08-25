"use client";

import Image from "next/image";
import { PORTFOLIO_ITEMS } from "../data/mockData";

export interface PortfolioProps {
  readonly className?: string;
}

export default function PortfolioGrid({ className = "" }: PortfolioProps) {
  return (
    <section className={`w-full py-10 md:py-16 bg-dots ${className}`}>
      {/* Horizontal Carousel */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 md:gap-6 px-4 md:px-8 w-max mx-auto md:mx-0">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 border border-brand-border/50"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-lg">{item.label}</p>
                <p className="text-brand-orange text-sm font-medium">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
