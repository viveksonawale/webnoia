// Server Component — purely static markup, no hooks or browser APIs.
export default function Recognition() {
  return (
    <section className="relative w-full py-16 md:py-24 text-center">
      <div className="relative z-10 mx-auto max-w-4xl px-4 flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl md:text-5xl font-display">
          Design Excellence,{" "}
          <span className="font-serif font-normal italic text-brand-jade">
            Officially Recognized.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-xl text-sm md:text-lg text-ink-secondary font-sans">
          Get Your Website Built by Official Framer Experts.
        </p>

        {/* Official Framer Expert Badge */}
        <div className="mt-8 md:mt-10 inline-flex items-center">
          <a
            href="https://www.framer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 rounded-full border border-black/10 bg-[#111614] px-7 py-3.5 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:bg-black hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 cursor-pointer"
          >
            {/* Framer Geometric Logo */}
            <svg
              className="h-6 w-6 md:h-7 md:w-7 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
            <span className="text-base md:text-lg font-semibold tracking-tight text-white">
              Official Framer Expert
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
