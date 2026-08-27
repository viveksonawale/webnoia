"use client";

export interface ContactCTAProps {
  readonly className?: string;
}

export default function ContactCTA({ className = "" }: ContactCTAProps) {
  return (
    <section
      id="contact"
      className={`w-full py-20 md:py-32 bg-brand-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Card */}
        <div
          className="relative overflow-hidden rounded-3xl min-h-[680px] flex flex-col md:flex-row"
          style={{
            background:
              "linear-gradient(135deg, #145C52 0%, #1B7568 40%, #0D4039 100%)",
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]"
            style={{ background: "#46e7a1" }}
          />

          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 lg:p-14 md:w-[45%]">
            {/* Logo */}
            <div className="mb-8">
              <span className="text-xl font-bold tracking-tight text-white">
                Web<span className="text-jade-light">noia</span>
              </span>
            </div>

            {/* Headline */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-5">
                We make your vision{" "}
                <span className="font-serif italic font-medium">
                  come alive.
                </span>
              </h2>
              <p className="text-white/60 text-base mb-8 max-w-sm">
                Book a quick call to see how Webnoia works.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
                >
                  See Pricing
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919975558544"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* X */}
              <a
                href="https://x.com/webnoia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/webnoia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Cal.com embed */}
          <div className="relative z-10 flex-1 p-4 md:p-6 flex items-stretch">
            <div className="w-full rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <iframe
                src="https://cal.com/vivek-sonawale-pz4xth?embed=true&theme=light&hideEventTypeDetails=true&layout=month_view"
                style={{ width: "100%", height: "100%", minHeight: "640px", border: "none" }}
                title="Book a discovery call with Webnoia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}