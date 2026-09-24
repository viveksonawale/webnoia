export interface FooterProps {
  readonly className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`w-full bg-[#18181b] text-white overflow-hidden ${className}`}>
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-8 md:pt-12 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Left Column — Logo, Copyright & Contact */}
          <div className="md:col-span-6 flex flex-col gap-6 md:gap-8">
            <div>
              <img
                src="/logos/webnoia-footer-logo.png"
                alt="Webnoia Logo"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-full -ml-3 sm:-ml-4 md:-ml-6 mb-2 object-contain"
              />
              <p className="text-white/40 text-xs sm:text-sm font-sans mb-4">
                © 2025 - Webnoia - Web Design Agency
              </p>
              <a
                href="mailto:webnoiaofficial@gmail.com"
                className="inline-block text-brand-jade hover:text-jade-mid transition-colors text-xl md:text-2xl font-medium mb-1.5 break-all"
              >
                webnoiaofficial@gmail.com
              </a>
              <a
                href="tel:+919975558544"
                className="block text-white/60 hover:text-white transition-colors text-lg md:text-xl font-sans"
              >
                +91 9975558544
              </a>
            </div>


          </div>

          {/* Right Column — Company & Legal Navigation Links Side-by-Side */}
          <div className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-8 md:gap-12 pt-6 sm:pt-0 md:pt-4 border-t sm:border-t-0 border-white/10">

            {/* Company Nav Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-white/40 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 font-display">
                Company
              </p>
              {[
                { label: "Services", href: "#services" },
                { label: "How it Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/70 hover:text-brand-jade transition-colors text-base md:text-lg font-sans"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Legal Nav Links */}
            <div className="flex flex-col gap-3 md:gap-4">
              <p className="text-white/40 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 font-display">
                Legal
              </p>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Refund Policy", href: "/refund-policy" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/70 hover:text-brand-jade transition-colors text-base md:text-lg font-sans"
                >
                  {label}
                </a>
              ))}
            </div>

          </div>

        </div>
      </div>


      {/* Full-Bleed Edge-to-Edge WEBNOIA Watermark Banner */}
      <div className="relative w-full overflow-hidden border-t border-white/[0.05] h-[12vw] sm:h-[13vw] md:h-[14vw] flex justify-center items-start pt-2 md:pt-4 pointer-events-none select-none">
        <h1 className="w-screen text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent uppercase text-center font-display whitespace-nowrap">
          WEBNOIA
        </h1>
      </div>
    </footer>
  );
}