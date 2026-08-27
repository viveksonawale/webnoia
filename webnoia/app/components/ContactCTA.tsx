"use client";

export interface ContactCTAProps {
  readonly className?: string;
}

export default function ContactCTA({ className = "" }: ContactCTAProps) {
  return (
    <section
      id="contact"
      className={`w-full py-12 md:py-20 bg-brand-light flex justify-center items-center px-4 md:px-8 ${className}`}
    >
      {/* Main Card */}
      <div className="w-full max-w-6xl bg-brand-jade rounded-[28px] md:rounded-[40px] shadow-[0_32px_64px_rgba(20,92,82,0.15)] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Panel (Green) */}
        <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-between text-brand-white relative">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-white/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-8 md:mb-16">
              <span className="text-xl md:text-2xl font-bold tracking-tight">Webnoia</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6">
              We make your <br />
              <span className="font-serif italic font-normal text-brand-white/90">vision come alive.</span>
            </h2>
            <p className="text-base text-brand-white/80 max-w-sm mb-8 md:mb-12">
              Book a quick call to see how Webnoia works. We&apos;ll discuss your goals and see if we&apos;re a good fit.
            </p>
          </div>

          {/* Profile Section */}
          <div className="relative z-10 mt-auto">
            <div className="bg-brand-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-brand-white/20">
              <h3 className="text-base md:text-lg font-bold text-brand-white">Vivek Sonawale</h3>
              <p className="text-brand-white/70 text-sm font-medium">Founder, Webnoia</p>
            </div>
          </div>
        </div>

        {/* Right Panel (White - Cal.com Embed) */}
        <div className="w-full md:w-7/12 bg-white rounded-t-[28px] md:rounded-t-none md:rounded-l-[40px] relative overflow-hidden">
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.02)] rounded-l-[40px] pointer-events-none hidden md:block" />
          
          <div className="w-full h-full overflow-hidden">
            <iframe
              src="https://cal.com/vivek-sonawale-pz4xth/30min?embed=true&ui.hideEventTypeDetails=true&theme=light&layout=month"
              className="w-full border-none"
              style={{ minHeight: "600px", height: "100%" }}
              title="Schedule a 1:1 meeting with Vivek Sonawale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
