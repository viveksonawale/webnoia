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
    <section id="contact" className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-brand-white overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-8 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-primary tracking-tight font-display mb-4">
            Ready to scale your{" "}
            <span className="font-serif italic font-normal text-brand-jade">
              digital presence?
            </span>
          </h2>
          <p className="text-sm md:text-base text-ink-secondary leading-relaxed font-sans">
            Book a 1-on-1 strategy call with our team. Select a time below to get started immediately.
          </p>
        </div>

        {/* Cal.com Card — exact same card as /schedule route */}
        <div className="w-full h-[650px] md:h-[550px] bg-brand-white rounded-3xl border-2 border-brand-border shadow-[0_20px_50px_rgba(20,92,82,0.04)] overflow-hidden p-2 md:p-4">
          <Cal
            namespace="webnoia-client-meeting-request"
            calLink="vivek-sonawale-pz4xth/webnoia-client-meeting-request"
            style={{ width: "100%", height: "100%", overflow: "scroll", borderRadius: "1.5rem" }}
            config={{ theme: "light", layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>

      </div>
    </section>
  );
}