import type { Metadata } from "next";
import SchedulePageClient from "./SchedulePageClient";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule a free 1-on-1 strategy call with the Webnoia team. Discuss your vision, audit your current website, and map out a tailored execution plan.",
  alternates: {
    canonical: "https://webnoia.com/schedule",
  },
  openGraph: {
    title: "Book a Strategy Call | Webnoia",
    description:
      "Schedule a free 1-on-1 strategy call with the Webnoia team. Discuss your vision, audit your current website, and map out a tailored execution plan.",
    url: "https://webnoia.com/schedule",
  },
};

export default function SchedulePage() {
  return <SchedulePageClient />;
}