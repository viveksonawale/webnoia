import Link from "next/link";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-brand-light flex items-start md:items-center justify-center p-3 md:p-8">
      
      {/* Main Card */}
      <div className="w-full max-w-6xl bg-brand-jade rounded-[28px] md:rounded-[40px] shadow-[0_32px_64px_rgba(20,92,82,0.15)] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Panel (Green) */}
        <div className="w-full md:w-5/12 p-7 md:p-16 flex flex-col justify-between text-brand-white relative">
          {/* Subtle Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-white/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80 mb-8 md:mb-16">
              <span className="text-xl md:text-2xl font-bold tracking-tight">Webnoia</span>
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6">
              We make your <br />
              <span className="font-serif italic font-normal text-brand-white/90">vision come alive.</span>
            </h1>
            <p className="text-sm md:text-lg text-brand-white/80 max-w-sm mb-6 md:mb-12">
              Book a quick call to see how Webnoia works. We&apos;ll discuss your goals and see if we&apos;re a good fit.
            </p>

            {/* What to Expect */}
            <div className="space-y-3">
              {[
                { icon: "📅", text: "Pick a date & time that works for you" },
                { icon: "🎯", text: "30-min focused strategy session" },
                { icon: "🚀", text: "Walk away with a clear action plan" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base md:text-lg">{item.icon}</span>
                  <span className="text-brand-white/80 text-xs md:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 md:mt-auto pt-6 md:pt-12">
            {/* Founder info - text only, no pfp */}
            <div className="bg-brand-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 border border-brand-white/20">
              <h3 className="text-base md:text-lg font-bold text-brand-white">Vivek Sonawale</h3>
              <p className="text-brand-white/70 text-sm font-medium">Founder, Webnoia</p>
            </div>
            
            {/* Back to Home Link */}
            <Link href="/" className="inline-flex items-center gap-2 text-brand-white/70 hover:text-brand-white transition-colors mt-5 md:mt-8 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right Panel (White - Cal.com Embed) */}
        <div className="w-full md:w-7/12 bg-white rounded-t-[28px] md:rounded-t-none md:rounded-l-[40px] relative overflow-hidden">
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.02)] rounded-l-[40px] pointer-events-none hidden md:block" />
          
          {/*
            The Cal.com embed handles date selection first, then time slots.
            layout=month ensures date is picked before times appear.
            hideEventTypeDetails hides the Google avatar/profile at top of embed.
          */}
          <iframe
            src="https://cal.com/vivek-sonawale-pz4xth/30min?embed=true&ui.hideEventTypeDetails=true&theme=light&layout=month"
            className="w-full border-none"
            style={{ minHeight: "620px", height: "100%" }}
            title="Schedule a 1:1 meeting with Vivek Sonawale"
          />
        </div>

      </div>
    </div>
  );
}
