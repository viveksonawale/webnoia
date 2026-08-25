"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../data/mockData";

export interface FAQProps {
  readonly className?: string;
}

export default function FAQ({ className = "" }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={`w-full py-20 md:py-32 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openId === item.id ? "border-brand-orange/30 shadow-sm" : "border-brand-border"
              }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white text-left focus:outline-none focus-visible:bg-gray-50"
              >
                <span className={`font-bold text-lg ${openId === item.id ? "text-brand-orange" : "text-brand-dark"}`}>
                  {item.question}
                </span>
                <span
                  className={`text-2xl font-light transition-transform duration-300 ${
                    openId === item.id ? "rotate-45 text-brand-orange" : "text-gray-400"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === item.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                } grid`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                    {item.answer}
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
