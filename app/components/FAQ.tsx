"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../data/mockData";

export interface FAQProps {
  readonly className?: string;
}

export default function FAQ({ className = "" }: FAQProps) {
  const [activeId, setActiveId] = useState<string>(FAQ_ITEMS[0]?.id ?? "");

  const toggleItem = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  const activeFaq =
    FAQ_ITEMS.find((item) => item.id === activeId) ?? FAQ_ITEMS[0];

  return (
    <section
      id="faq"
      className={`relative w-full py-14 md:py-20 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-15">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4 font-display">
            Frequently Asked{" "}
            <span className="font-serif italic font-medium text-brand-jade">
              Questions.
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto font-sans">
            Instant answers about our design process, timelines, and deliverables.
          </p>
        </div>

        {/* =========================================================
            MOBILE ACCORDION VIEW (< lg breakpoint)
            ========================================================= */}
        <div className="block lg:hidden space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-brand-jade/50 shadow-md shadow-brand-jade/10"
                    : "bg-white/80 border-brand-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4.5 flex items-center justify-between text-left gap-3 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold font-display transition-colors duration-300 ${
                        isOpen
                          ? "bg-brand-jade text-white"
                          : "bg-jade-whisper text-brand-jade"
                      }`}
                    >
                      Q
                    </div>
                    <span
                      className={`text-sm font-semibold font-display transition-colors duration-300 ${
                        isOpen ? "text-brand-jade" : "text-brand-dark"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Morphing Toggle Indicator: Plus (+) to Close (✕) via 45deg rotation */}
                  <span
                    className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "bg-brand-jade text-white rotate-45 scale-105"
                        : "bg-jade-whisper text-brand-jade rotate-0 scale-100"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Mobile Expandable Smooth Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 border-t border-brand-border/40 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans bg-gray-50/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            DESKTOP SIDE-BY-SIDE CHAT VIEW (>= lg breakpoint)
            ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-start">
          {/* Left: Questions List */}
          <div className="col-span-5 flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`group relative w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? "bg-brand-jade text-white border-brand-jade shadow-lg shadow-brand-jade/15 -translate-y-0.5"
                      : "bg-white/90 text-brand-dark border-brand-border hover:border-brand-jade/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-7 w-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold font-display ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-jade-whisper text-brand-jade"
                      }`}
                    >
                      Q
                    </div>

                    <span className="text-sm font-semibold leading-snug font-display">
                      {item.question}
                    </span>
                  </div>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1"
                        : "opacity-40 group-hover:opacity-100"
                    }`}
                  >
                    <path
                      d="M5 3L9 7L5 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right: Answer Chat Window */}
          <div className="col-span-7">
            <div className="bg-white border border-brand-border rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 backdrop-blur-md relative overflow-hidden">
              {/* Chat Thread Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-brand-border/60">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-jade text-white font-bold text-xs font-display">
                    W
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider font-display">
                      Webnoia Support
                    </h3>
                    <p className="text-[11px] text-gray-400 font-sans">
                      Online • Replies instantly
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-jade-whisper text-[10px] font-semibold tracking-wider uppercase text-brand-jade font-display">
                  Verified Response
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User Side Question */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-brand-jade text-white p-4 rounded-2xl rounded-tr-xs text-xs md:text-sm leading-relaxed shadow-xs font-sans">
                    {activeFaq?.question}
                  </div>
                </div>

                {/* Agency Side Answer */}
                <div className="flex justify-start gap-3 items-start pt-2">
                  <div className="h-7 w-7 rounded-full bg-jade-whisper border border-brand-border text-brand-jade flex items-center justify-center font-bold text-xs shrink-0 mt-1 font-display">
                    W
                  </div>
                  <div className="max-w-[85%] bg-gray-50 border border-brand-border/80 text-brand-dark p-4 md:p-5 rounded-2xl rounded-tl-xs text-xs md:text-sm leading-relaxed font-sans">
                    {activeFaq?.answer}
                  </div>
                </div>
              </div>

              {/* Chat Footer Accent */}
              <div className="mt-8 pt-4 border-t border-brand-border/40 flex items-center justify-between text-[11px] text-gray-400 font-sans">
                <span>Have more questions?</span>
                <a
                  href="#contact"
                  className="font-semibold text-brand-jade hover:underline flex items-center gap-1 font-display"
                >
                  Book a consultation <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}