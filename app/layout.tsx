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
    default: "Webnoia - Web Design & Development Agency in Mumbai, Navi Mumbai & Neral",
    template: "%s | Webnoia",
  },
  description:
    "Webnoia is a web design and development agency serving businesses in Mumbai, Navi Mumbai and Neral. We build modern websites, web applications and custom software.",
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
    title: "Webnoia - Web Design & Development Agency in Mumbai, Navi Mumbai & Neral",
    description:
      "Webnoia is a web design and development agency serving businesses in Mumbai, Navi Mumbai and Neral. We build modern websites, web applications and custom software.",
    url: BASE_URL,
    siteName: "Webnoia",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Webnoia — Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webnoia - Web Design & Development Agency in Mumbai, Navi Mumbai & Neral",
    description: "Webnoia is a web design and development agency serving businesses in Mumbai, Navi Mumbai and Neral. We build modern websites, web applications and custom software.",
    images: ["/opengraph-image.png"],
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
import StructuredData from "./components/StructuredData";
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
        <StructuredData />
      </body>
    </html>
  );
}
