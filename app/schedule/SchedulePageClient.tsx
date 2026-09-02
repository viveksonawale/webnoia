"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function SchedulePageClient() {
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
    <main className="relative min-h-screen w-full bg-brand-white pt-24 pb-12 md:pt-32 md:pb-16 overflow-x-hidden flex flex-col items-center">
      <Navbar />

      {/* Decorative dots across the entire page */}
      <div
        className="absolute inset-0 bg-dots opacity-30 pointer-events-none"
        style={{ backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">

        {/* Prominent Back to Home Button (Visible & touch-friendly on both Desktop and Mobile) */}
        <div className="w-full flex justify-start mb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-white border border-brand-border shadow-md hover:shadow-lg text-xs sm:text-sm font-bold text-ink-primary hover:text-brand-jade hover:border-brand-jade/60 transition-all duration-300 active:scale-95 font-display z-30"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight font-display mb-4">
            Book your <span className="font-serif italic font-normal text-brand-jade">strategy call.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
            Select a time below to schedule our 1-on-1 session. We&apos;ll discuss your vision, audit your current setup, and map out a tailored execution plan.
          </p>
        </div>

        {/* Wide Horizontal Calendar Embed Area */}
        <div className="w-full h-[650px] md:h-[550px] bg-brand-white rounded-3xl border-2 border-brand-border shadow-[0_20px_50px_rgba(20,92,82,0.04)] overflow-hidden p-2 md:p-4">
          <Cal
            namespace="webnoia-client-meeting-request"
            calLink="vivek-sonawale-pz4xth/webnoia-client-meeting-request"
            style={{ width: "100%", height: "100%", overflow: "scroll", borderRadius: "1.5rem" }}
            config={{ theme: "light", layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>

      </div>
    </main>
  );
}
