export interface FooterProps {
  readonly className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={`w-full bg-[#18181b] text-white overflow-hidden ${className}`}>
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">

          {/* Combined Brand, Contact, & Nav Grid Container */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-8 md:gap-12">
            
            {/* Left Column — WEBNOIA Headline, Contact & Headquarters */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 md:mb-6 font-display">
                  WEBNOIA
                </h2>
                <a
                  href="mailto:hello@webnoia.com"
                  className="inline-block text-brand-jade hover:text-jade-mid transition-colors text-lg md:text-xl font-medium mb-1.5 break-all"
                >
                  hello@webnoia.com
                </a>
                <a
                  href="tel:+919975558544"
                  className="block text-white/60 hover:text-white transition-colors text-base md:text-lg font-sans"
                >
                  +91 9975558544
                </a>
              </div>

              {/* Address / Headquarters */}
              <div className="pt-2">
                <p className="text-brand-jade/80 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-display">
                  Headquarters
                </p>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
                  Pendse Nagar, Dombivli<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            {/* Right Column — Company & Legal Navigation Links Side-by-Side on Mobile */}
            <div className="md:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-0 border-t sm:border-t-0 border-white/10">
              
              {/* Company Nav Links */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 font-display">
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
                    className="text-white/70 hover:text-brand-jade transition-colors text-sm md:text-base font-sans"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Legal Nav Links */}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-1 md:mb-2 font-display">
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
                    className="text-white/70 hover:text-brand-jade transition-colors text-sm md:text-base font-sans"
                  >
                    {label}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right — Studio Tagline (Desktop Only) */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-start gap-4 text-right">
            <div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                Webnoia 
              </span>
              <p className="text-white/50 text-sm mt-2 max-w-[220px] leading-relaxed font-sans">
                Premium web design &amp; development studio focused on scalable growth.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar — Social Links & Copyright */}
      <div className="border-t border-white/[0.08] bg-black/20">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919975558544"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/60 hover:text-white hover:border-brand-jade/50 hover:bg-brand-jade/10 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://x.com/webnoia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/60 hover:text-white hover:border-brand-jade/50 hover:bg-brand-jade/10 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/webnoia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/60 hover:text-white hover:border-brand-jade/50 hover:bg-brand-jade/10 transition-all duration-300"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          <p className="text-white/40 text-xs md:text-sm text-center sm:text-right font-sans">
            © {year} Webnoia. All rights reserved.
          </p>
        </div>
      </div>

      {/* Full-Bleed Edge-to-Edge WEBNOIA Watermark Banner */}
      <div className="relative w-full overflow-hidden border-t border-white/[0.05] pt-4 pb-2 md:pt-8 md:pb-4 flex justify-center items-center pointer-events-none select-none">
        <h1 className="w-screen text-[18vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent uppercase text-center font-display whitespace-nowrap -mb-2 sm:-mb-4 md:-mb-6">
          WEBNOIA
        </h1>
      </div>
    </footer>
  );
}