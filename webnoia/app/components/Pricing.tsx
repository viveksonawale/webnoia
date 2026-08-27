"use client";

import Link from "next/link";
import { PRICING_PLANS } from "../data/mockData";

export interface PricingProps {
  readonly className?: string;
}

export default function Pricing({ className = "" }: PricingProps) {
  return (
    <section id="pricing" className={`w-full py-20 md:py-32 bg-brand-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-jade" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Transparent pricing,{" "}
            <span className="font-serif italic font-medium">no hidden fees.</span>
          </h2>
        </div>

        {/* Minimal Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.highlight;
            
            return (
              <div
                key={plan.id}
                className={`
                  group relative rounded-2xl p-6 flex flex-col gap-5
                  transition-all duration-300
                  hover:-translate-y-1
                  ${isGrowth
                    ? "bg-brand-dark text-white shadow-[0_8px_32px_rgba(20,92,82,0.18)] hover:shadow-[0_0_40px_rgba(20,92,82,0.45)]"
                    : "bg-white border border-brand-border text-brand-dark hover:border-brand-jade/40 hover:shadow-[0_0_32px_rgba(20,92,82,0.18)]"
                  }
                `}
              >
                {/* Jade glow blob for growth */}
                {isGrowth && (
                  <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-jade/25 blur-3xl" />
                )}

                {/* Top row — plan name + badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-widest ${isGrowth ? "text-brand-jade" : "text-gray-400"}`}>
                    {plan.name}
                  </span>
                  {"badge" in plan && plan.badge && (
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold text-brand-jade bg-brand-jade/10 rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-jade animate-pulse" />
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price row — all in one line */}
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className={`text-2xl font-bold tracking-tight ${isGrowth ? "text-white" : "text-brand-dark"}`}>
                    {plan.priceINR}
                  </span>
                  <span className={`text-sm ${isGrowth ? "text-gray-400" : "text-gray-400"}`}>
                    {plan.priceUSD}
                  </span>
                  <span className={`text-xs font-medium ml-auto ${isGrowth ? "text-brand-jade" : "text-brand-jade/80"}`}>
                    Est. {plan.estHours}
                  </span>
                </div>

                {/* Divider */}
                <div className={`h-px ${isGrowth ? "bg-white/10" : "bg-brand-border"}`} />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2.5 text-sm ${isGrowth ? "text-gray-200" : "text-brand-dark"}`}>
                      <div className="w-4 h-4 rounded-md bg-brand-jade text-white flex items-center justify-center text-[9px] shrink-0">
                        ✓
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/schedule" className="w-full mt-auto">
                  <button
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isGrowth
                        ? "text-white bg-brand-jade hover:bg-brand-jade/90"
                        : "text-brand-jade border border-brand-jade hover:bg-brand-jade hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Email CTA */}
        <div className="max-w-4xl mx-auto bg-white border border-brand-border rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <span className="text-lg font-medium text-brand-dark">Prefer to email?</span>
          <a
            href="mailto:hello@webnoia.com"
            className="px-6 py-2.5 rounded-xl text-brand-jade font-medium border border-brand-jade hover:bg-brand-jade/5 transition-colors duration-300 whitespace-nowrap"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
