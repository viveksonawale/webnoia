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
    <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-brand-light overflow-hidden flex flex-col items-center">
      {/* Decorative background dots */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none bg-dots"
        style={{ backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col">
        {/* Wide Horizontal Cal.com Embed */}
        <div className="w-full bg-brand-white rounded-3xl border border-brand-border/60 shadow-[0_20px_50px_rgba(20,92,82,0.06)] overflow-hidden h-[650px] md:h-[550px] p-2 md:p-4">
          <Cal 
            namespace="webnoia-client-meeting-request"
            calLink="vivek-sonawale-pz4xth/webnoia-client-meeting-request"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ theme: "light", layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </div>
    </section>
  );
}