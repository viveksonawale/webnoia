"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function ContactCTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "webnoia-client-meeting-request" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#145C52" },
          dark: { "cal-brand": "#145C52" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="contact" className="relative w-full pt-14 md:pt-20 pb-4 md:pb-8 px-4 sm:px-6 md:px-8 bg-brand-white overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center max-w-3xl mb-8">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
              <svg className="w-3.5 h-3.5 text-brand-jade" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Schedule
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight font-display mb-4">
            Book your <span className="font-serif italic font-normal text-brand-jade">strategy call.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
            Select a time below to schedule our 1-on-1 session. We&apos;ll discuss your vision, audit your current setup, and map out a tailored execution plan.
          </p>
        </div>

        {/* Cal.com Embed — exact height allocated to fit all timeslots without iframe scrollbars */}
        <div className="w-full h-[760px] sm:h-[700px] md:h-[660px] overflow-hidden flex justify-center">
          <Cal
            namespace="webnoia-client-meeting-request"
            calLink="vivek-sonawale-pz4xth/webnoia-client-meeting-request"
            style={{ width: "100%", height: "100%", overflow: "hidden", scrollbarWidth: "none" }}
            config={{ theme: "light", layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>

      </div>
    </section>
  );
}