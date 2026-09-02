"use client";

import { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "../data/mockData";

export interface TestimonialsProps {
  readonly className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  // Select active chat client (defaulting to the first testimonial)
  const [activeId, setActiveId] = useState<string>(TESTIMONIALS[0]?.id ?? "1");

  const activeClient =
    TESTIMONIALS.find((item) => item.id === activeId) || TESTIMONIALS[0];

  return (
    <section
      id="testimonial"
      className={`relative w-full py-14 md:py-20 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Background Radial Pattern Canvas */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-40 pointer-events-none"
        style={{ backgroundSize: "20px 20px" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-10">

          <h2 className="text-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
            Don&apos;t just take{" "}
            <span className="font-serif italic font-medium text-brand-jade">
              our word for it.
            </span>
          </h2>
          <p className="text-ink-secondary text-sm md:text-base max-w-md mx-auto font-sans">
            Real message threads from founders and project leads we&apos;ve collaborated with.
          </p>
        </div>

        {/* Chat Application Container */}
        <div className="bg-brand-white border border-brand-border rounded-3xl shadow-xl shadow-gray-200/50 backdrop-blur-md overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[460px]">

          {/* Left Sidebar: Scrollable Client Chat List */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-brand-border/60 flex flex-col bg-jade-whisper/30">
            {/* Sidebar Header */}
            <div className="p-4 md:p-5 border-b border-brand-border/60 flex items-center justify-between bg-brand-white/80">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-primary font-display">
                Client Messages ({TESTIMONIALS.length})
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-jade-whisper border border-brand-border text-brand-jade font-semibold">
                Direct Feedback
              </span>
            </div>

            {/* Scrollable Conversations List */}
            {/* Scrollable Conversations List */}
            <div className="flex-1 overflow-y-auto max-h-[360px] md:max-h-[440px] p-3 space-y-2.5 custom-scrollbar">
              {TESTIMONIALS.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`
          group
          relative
          w-full
          p-3.5
          rounded-2xl
          flex
          items-center
          gap-3.5
          text-left
          transition-all
          duration-300
          cursor-pointer
          overflow-hidden
          ${isActive
                        ? "bg-brand-jade text-brand-white shadow-md shadow-brand-jade/25 -translate-y-0.5"
                        : "bg-brand-white/70 hover:bg-brand-white hover:shadow-xs border border-brand-border/60 hover:border-brand-jade/30 text-ink-primary"
                      }
        `}
                  >
                    {/* Subtle active glow highlight */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
                    )}

                    {/* Client Avatar with Online Badge */}
                    <div className="relative shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={44}
                        height={44}
                        className={`
              w-11
              h-11
              rounded-full
              object-cover
              border-2
              transition-colors
              duration-300
              ${isActive ? "border-brand-white" : "border-brand-border group-hover:border-brand-jade/50"}
            `}
                      />
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-brand-white bg-emerald-500 shadow-xs" />
                    </div>

                    {/* Chat List Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4
                          className={`text-sm font-bold truncate font-display ${isActive ? "text-brand-white" : "text-ink-primary group-hover:text-brand-jade"
                            }`}
                        >
                          {item.name}
                        </h4>

                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full font-sans font-medium uppercase tracking-wider ${isActive
                            ? "bg-brand-white/20 text-brand-white"
                            : "bg-jade-whisper text-brand-jade border border-brand-border/40"
                            }`}
                        >
                          Verified
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`text-xs truncate font-sans ${isActive ? "text-brand-light/90" : "text-ink-secondary"
                            }`}
                        >
                          {item.quote}
                        </p>

                        {/* Micro chat indicator badge */}
                        <span
                          className={`
                shrink-0
                h-4
                w-4
                rounded-full
                flex
                items-center
                justify-center
                text-[9px]
                font-bold
                ${isActive
                              ? "bg-brand-white text-brand-jade"
                              : "bg-brand-border/40 text-ink-secondary opacity-0 group-hover:opacity-100"
                            }
              `}
                        >
                          1
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Main Panel: Active Client Chat View */}
          <div className="md:col-span-7 flex flex-col justify-between p-5 md:p-5 bg-brand-white relative">

            {/* Active Thread Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-border/60">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={activeClient.avatar}
                    alt={activeClient.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-white shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-primary font-display">
                    {activeClient.name}
                  </h3>
                  <p className="text-xs text-ink-secondary font-sans">
                    {activeClient.title}
                  </p>
                </div>
              </div>

              {/* Star Rating Badge */}
              <div className="flex gap-0.5 text-amber-400 bg-jade-whisper border border-brand-border/60 px-3 py-1.5 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="space-y-4 my-auto py-2">

              {/* Date Stamp Divider */}
              {/* <div className="flex items-center justify-center my-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-ink-secondary bg-jade-whisper border border-brand-border/50 px-3 py-1 rounded-full">
                  Post-Launch Review
                </span>
              </div> */}

              {/* Client Chat Bubble */}
              <div className="flex justify-start gap-3 items-start">
                <Image
                  src={activeClient.avatar}
                  alt={activeClient.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover shrink-0 mt-1"
                />
                <div className="max-w-[88%] bg-jade-whisper border border-brand-border/80 text-ink-primary p-4 md:p-5 rounded-2xl rounded-tl-xs text-sm md:text-base leading-relaxed shadow-xs font-sans">
                  &ldquo;{activeClient.quote}&rdquo;
                </div>
              </div>

              {/* Studio Response Bubble */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-brand-dark text-brand-white p-4 rounded-2xl rounded-tr-xs text-xs md:text-sm leading-relaxed shadow-xs font-sans">
                  Thanks for the feedback, {activeClient.name.split(" ")[0]}! We loved building this project together. 🚀
                </div>
              </div>
            </div>

            {/* Chat Footer Info Strip */}
            {/* <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs text-ink-secondary">
              <span className="flex items-center gap-1.5 font-display">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Verified Project Collaboration
              </span>
              <span className="font-display font-semibold text-brand-jade">
                Webnoia Studio
              </span>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}