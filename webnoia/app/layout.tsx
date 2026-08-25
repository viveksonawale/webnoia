import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webnoia — Premium Web Services for Scaling Brands",
  description:
    "Webnoia is a modern web services studio helping SaaS founders and businesses build, test, and maintain high-quality websites using AI-powered development with human-directed precision.",
  keywords: [
    "web design",
    "web development",
    "SaaS website",
    "UI/UX design",
    "website maintenance",
    "website testing",
  ],
  openGraph: {
    title: "Webnoia — Premium Web Services for Scaling Brands",
    description:
      "AI-accelerated web design & development that keeps your brand at the premium end of the market.",
    url: "https://webnoia.com",
    siteName: "Webnoia",
    type: "website",
  },
};

import SmoothScroll from "./components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans text-brand-dark antialiased bg-dots min-h-screen flex flex-col relative overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
