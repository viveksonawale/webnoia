import type { Metadata, Viewport } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://webnoia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Webnoia — Premium Web Design & Development for Scaling Brands",
    template: "%s | Webnoia",
  },
  description:
    "Webnoia is a premium web services studio helping SaaS founders and businesses build, test, and maintain high-converting websites using AI-accelerated development with human-directed precision.",
  keywords: [
    "web design",
    "web development",
    "SaaS website",
    "UI/UX design",
    "website maintenance",
    "website testing",
    "AI web development",
    "premium web studio",
    "Next.js agency",
    "startup website",
  ],
  authors: [{ name: "Webnoia", url: BASE_URL }],
  creator: "Webnoia",
  publisher: "Webnoia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Webnoia — Premium Web Design & Development for Scaling Brands",
    description:
      "AI-accelerated web design & development that keeps your brand at the premium end of the market.",
    url: BASE_URL,
    siteName: "Webnoia",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Webnoia — Premium Web Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webnoia — Premium Web Design & Development",
    description: "AI-accelerated web design & development for scaling brands.",
    images: ["/web-app-manifest-512x512.png"],
    site: "@webnoia",
  },
  appleWebApp: {
    title: "Webnoia",
    statusBarStyle: "default",
    capable: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

import SmoothScroll from "./components/SmoothScroll";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable, "font-sans", geist.variable)}>
      <body className="font-sans text-brand-dark antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
