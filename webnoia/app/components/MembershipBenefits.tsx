"use client";

import { MEMBERSHIP_BENEFITS } from "../data/mockData";

export interface MembershipBenefitsProps {
  readonly className?: string;
}

export default function MembershipBenefits({ className = "" }: MembershipBenefitsProps) {
  return (
    <section className={`w-full py-20 md:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Why Webnoia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Built differently,
            <br />
            <span className="font-serif italic font-medium">on purpose.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We designed Webnoia around the frustrations founders have with traditional agencies.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {MEMBERSHIP_BENEFITS.map((benefit, i) => (
            <div
              key={benefit.title}
              className="bg-white border border-brand-border rounded-2xl p-6 hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-brand-orange font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-bold text-brand-dark mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
