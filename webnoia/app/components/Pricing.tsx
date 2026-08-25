"use client";

import { useState } from "react";

export interface PricingProps {
  readonly className?: string;
}

export default function Pricing({ className = "" }: PricingProps) {
  const [basicAddon, setBasicAddon] = useState(false);
  const [proAddon, setProAddon] = useState(false);

  return (
    <section id="pricing" className={`w-full py-20 md:py-32 bg-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Transparent pricing, <span className="font-serif italic font-medium">no hidden fees.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto items-stretch justify-center mb-8">
          
          {/* Basic Plan */}
          <div className="flex-1 bg-white border border-brand-border rounded-3xl p-8 md:p-10 shadow-sm flex flex-col">
            <div className="bg-gray-100 text-gray-500 text-sm font-medium px-4 py-1.5 rounded-full self-start mb-6">
              Basic
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tight text-brand-dark">$1,775</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 border-b border-dashed border-gray-200 pb-8">
              {[
                "1 active task at a time",
                "48-hour turn around",
                "Unlimited stock photos",
                "Source files included",
                "Pause or cancel anytime"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="w-5 h-5 rounded-md bg-brand-orange text-white flex items-center justify-center text-xs shrink-0">
                    ✓
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-brand-dark">Additional Active Task</span>
              <button 
                onClick={() => setBasicAddon(!basicAddon)}
                className={`w-12 h-6 rounded-full transition-colors relative ${basicAddon ? 'bg-brand-orange' : 'bg-gray-200'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${basicAddon ? 'translate-x-6.5' : 'translate-x-0.5'}`} />
              </button>
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-brand-orange border border-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
              Start scaling
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-[#151515] text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-white/10 text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full">
                Pro
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                2 Spots Available
              </div>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold tracking-tight text-white">$2,995</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 border-b border-dashed border-white/20 pb-8">
              {[
                "2 active task at a time",
                "24-hour turn around",
                "Unlimited stock photos",
                "Source files included",
                "Pause or cancel anytime"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-200 font-medium">
                  <div className="w-5 h-5 rounded-md bg-brand-orange text-white flex items-center justify-center text-xs shrink-0">
                    ✓
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-medium text-gray-200">No-Code Web development</span>
              <button 
                onClick={() => setProAddon(!proAddon)}
                className={`w-12 h-6 rounded-full transition-colors relative ${proAddon ? 'bg-brand-orange' : 'bg-white/20'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${proAddon ? 'translate-x-6.5' : 'translate-x-0.5'}`} />
              </button>
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-white bg-brand-orange hover:bg-[#c93d00] transition-colors shadow-[0_4px_14px_0_rgba(227,68,0,0.39)]">
              Start scaling
            </button>
          </div>
        </div>

        {/* Email CTA */}
        <div className="max-w-4xl mx-auto bg-white border border-brand-border rounded-2xl p-6 flex items-center justify-between shadow-sm">
          <span className="text-xl font-medium text-brand-dark">Prefer to email?</span>
          <button className="px-6 py-2.5 rounded-xl text-brand-orange font-medium border border-brand-orange hover:bg-brand-orange/5 transition-colors">
            Email Us
          </button>
        </div>

      </div>
    </section>
  );
}
