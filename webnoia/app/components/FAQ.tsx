"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../data/mockData";

export interface FAQProps {
  readonly className?: string;
}

export default function FAQ({ className = "" }: FAQProps) {
  const [activeId, setActiveId] = useState<string>(FAQ_ITEMS[0].id);

  const activeFaq = FAQ_ITEMS.find((item) => item.id === activeId) || FAQ_ITEMS[0];

  return (
    <section
      id="faq"
      className={`relative w-full py-14 md:py-20 bg-brand-white border-y border-brand-border/40 overflow-hidden ${className}`}
    >
      {/* Background Radial Pattern */}
      {/* <div
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-40 pointer-events-none"
        style={{ backgroundSize: "20px 20px" }}
      /> */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-15">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-jade" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Support Chat
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Frequently Asked <span className="font-serif italic font-medium">Questions.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            Click a question on the left to inspect our instant answer thread.
          </p>
        </div>

        {/* Chat Bubbles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Question Bubbles Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`
                    group
                    relative
                    w-full
                    p-4
                    md:p-5
                    text-left
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    cursor-pointer
                    flex
                    items-center
                    justify-between
                    gap-3
                    ${
                      isActive
                        ? "bg-brand-jade text-white border-brand-jade shadow-lg shadow-brand-jade/15 -translate-y-0.5"
                        : "bg-white/90 text-brand-dark border-brand-border hover:border-brand-jade/40 hover:bg-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {/* User Avatar Badge */}
                    <div
                      className={`
                        h-7
                        w-7
                        shrink-0
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-xs
                        font-bold
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-jade-whisper text-brand-jade"
                        }
                      `}
                    >
                      Q
                    </div>

                    <span className="text-sm font-semibold leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Indicator Arrow */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`
                      shrink-0
                      transition-transform
                      duration-300
                      ${isActive ? "translate-x-1" : "opacity-40 group-hover:opacity-100"}
                    `}
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

          {/* Active Answer Chat Window */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-border rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/50 backdrop-blur-md relative overflow-hidden">
              
              {/* Chat Thread Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-brand-border/60">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-jade text-white font-bold text-xs">
                    W
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                      Webanoia Support
                    </h3>
                    <p className="text-[11px] text-gray-400">Online • Replies instantly</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-jade-whisper text-[10px] font-semibold tracking-wider uppercase text-brand-jade">
                  Verified Response
                </span>
              </div>

              {/* Chat Thread Messages */}
              <div className="space-y-4">
                
                {/* Selected Question (User Side) */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-brand-jade text-white p-4 rounded-2xl rounded-tr-xs text-xs md:text-sm leading-relaxed shadow-sm">
                    {activeFaq.question}
                  </div>
                </div>

                {/* System Answer (Agency Side) */}
                <div className="flex justify-start gap-3 items-start pt-2">
                  <div className="h-7 w-7 rounded-full bg-jade-whisper border border-brand-border text-brand-jade flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                    W
                  </div>
                  <div className="max-w-[85%] bg-gray-50 border border-brand-border/80 text-brand-dark p-4 md:p-5 rounded-2xl rounded-tl-xs text-xs md:text-sm leading-relaxed">
                    {activeFaq.answer}
                  </div>
                </div>

              </div>

              {/* Chat Footer Accent */}
              <div className="mt-8 pt-4 border-t border-brand-border/40 flex items-center justify-between text-[11px] text-gray-400">
                <span>Have more questions?</span>
                <a
                  href="#contact"
                  className="font-semibold text-brand-jade hover:underline flex items-center gap-1"
                >
                  Book a consultation
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}