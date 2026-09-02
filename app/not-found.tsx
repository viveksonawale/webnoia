import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export const metadata = {
  title: "404 - Page Not Found | Webnoia",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-light bg-dots relative overflow-hidden">
      {/* Decorative ambient background blur blobs */}
      <div className="hero-background absolute inset-0 pointer-events-none opacity-40 z-0" aria-hidden="true" />

      {/* Main 404 Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative px-6 py-24 md:py-32 text-center z-10">
        {/* Giant 404 Watermark text behind content */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <span className="text-[32vw] md:text-[24vw] font-black text-brand-jade/[0.05] leading-none tracking-tighter">
            404
          </span>
        </div>

        {/* Foreground Content Card */}
        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
          {/* Webnoia Logo in circular design */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-brand-jade/20 p-1.5 bg-white shadow-md flex items-center justify-center mb-6 overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-brand-jade">
              <Image
                src="/logos/webnoia.svg"
                alt="Webnoia Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight mb-4 font-serif">
            Page not found.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed font-sans">
            This page does not exist, please head back home and try again.
          </p>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-jade hover:bg-brand-jade-hover text-white text-sm md:text-base font-semibold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <span>Back to homepage</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      {/* <Footer className="relative z-10" /> */}
    </div>
  );
}
