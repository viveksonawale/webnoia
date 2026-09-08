"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function SchedulePageClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [calReady, setCalReady] = useState(false);

  // Lazy-load Cal.com script once the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCalReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!calReady) return;
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
  }, [calReady]);

  return (
    <main className="relative min-h-screen w-full bg-brand-white pt-24 pb-12 md:pt-28 md:pb-16 overflow-x-hidden flex flex-col items-center justify-between">
      <Navbar />

      {/* Decorative background dot pattern */}
      <div
        className="absolute inset-0 bg-dots opacity-40 pointer-events-none"
        style={{ backgroundSize: "24px 24px" }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center flex-grow"
      >
        {/* Prominent Back to Home Button */}
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
        <div className="text-center max-w-3xl mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight font-display mb-3">
            Book your <span className="font-serif italic font-normal text-brand-jade">strategy call.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-ink-secondary font-sans leading-relaxed">
            Select a time below to schedule our 1-on-1 session. We&apos;ll discuss your vision, audit your current setup, and map out a tailored execution plan.
          </p>
        </div>

        {/* Cal.com Embed Container — Responsive Viewport Scaling */}
        <div className="w-full flex-grow min-h-[70vh] lg:min-h-[22vh] h-full overflow-hidden flex justify-center rounded-2xl ">
          {calReady ? (
            <Cal
              namespace="webnoia-client-meeting-request"
              calLink="vivek-sonawale-pz4xth/webnoia-client-meeting-request"
              style={{ width: "100%", height: "100%", minHeight: "100%", overflow: "hidden" }}
              config={{ theme: "light", layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          ) : (
            <div className="w-full h-full min-h-[650px] rounded-2xl bg-jade-whisper/60 border border-brand-border/40 animate-pulse" />
          )}
        </div>

      </div>
    </main>
  );
}