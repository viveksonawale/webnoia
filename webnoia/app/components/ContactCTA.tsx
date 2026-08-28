"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface SchedulePageProps {
  readonly embedded?: boolean;
}

export default function SchedulePage({ embedded = false }: SchedulePageProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<number>(10);
  const [selectedMinute, setSelectedMinute] = useState<number>(0);
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Calculate 12-hour analog clock angles
  const minuteDegrees = selectedMinute * 6;
  const hourDegrees = (selectedHour % 12) * 30 + selectedMinute * 0.5;

  // Formatted digital time readout
  const formattedTime = `${String(selectedHour).padStart(2, "0")}:${String(
    selectedMinute
  ).padStart(2, "0")} ${period}`;

  return (
    <main
      className={
        embedded
          ? "w-full"
          : "relative min-h-screen w-full bg-brand-light pt-28 pb-7 md:pt-10 md:pb-8 overflow-x-hidden flex flex-col justify-between"
      }
    >
      {/* Conditionally render Navigation Bar and Micro-Dot Canvas when NOT embedded */}
      {!embedded && <Navbar />}
      {/* 
      {!embedded && (
        <div
          className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-40 pointer-events-none"
          style={{ backgroundSize: "20px 20px" }}
        />
      )} */}

      <div
        className={
          embedded
            ? "w-full"
            : "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full grow flex flex-col justify-center"
        }
      >
        {/* Render Title Header only for standalone page mode */}
        {!embedded && (
          <div className="text-center mb-8 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-primary tracking-tight font-display">
              Book your{" "}
              <span className="font-serif italic font-normal text-brand-jade">
                1-on-1 strategy call.
              </span>
            </h1>
          </div>
        )}

        {/* Integrated Card Container */}
        <div className="w-full bg-brand-white border border-brand-border rounded-3xl shadow-[0_20px_50px_rgba(20,92,82,0.06)] overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT SIDE: Brand Context & Value Blueprint */}
          <div className="w-full lg:w-5/12 p-8 md:p-10 lg:p-12 bg-brand-jade text-brand-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-border/40">
            <div>
              {/* Top Header Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logos/webnoia.svg"
                    alt="Webnoia"
                    width={30}
                    height={30}
                    className="h-8 w-8 object-contain rounded-full border-2 border-gray-400"
                  />

                  <span className="text-sm font-bold uppercase tracking-wider text-brand-white font-display">
                    Webnoia
                  </span>
                </div>
                {/* {!embedded && (
                  <Link
                    href="/"
                    className="text-xs font-bold text-brand-white/70 hover:text-brand-white transition-colors font-display"
                  >
                    ← Back to Homepage
                  </Link>
                )} */}
              </div>

              {/* Hero Headline */}
              <h2 className="text-2xl sm:text-3xl font-bold font-display leading-tight mb-4">
                Let&apos;s map out your <br />
                <span className="font-serif italic font-normal text-brand-white/90">
                  next digital leap.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-brand-white/80 leading-relaxed mb-8 font-sans">
                1-on-1 call to understand your goals, define the scope, and plan the path to launch.
              </p>

              {/* MEETING DETAILS BLOCK - Hidden on mobile, flex on desktop */}
              <div className="hidden lg:flex flex-col space-y-4 pt-6 border-t border-brand-white/15">
                {/* Duration Item */}
                <div className="flex items-center gap-3 text-brand-white/90">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand-white/80"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-sm font-semibold font-display">30m</span>
                </div>

                {/* Video Call Location Item */}
                <div className="flex items-center gap-3 text-brand-white/90">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand-white/80"
                  >
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                  <span className="text-sm font-semibold font-display">Cal Video</span>
                </div>

                {/* Timezone Selector Dropdown */}
                <div className="flex items-center gap-3 text-brand-white/90">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-brand-white/80"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <div className="relative flex items-center">
                    <select
                      defaultValue="Asia/Kolkata"
                      className="appearance-none bg-transparent pr-6 text-sm font-semibold font-display text-brand-white focus:outline-none cursor-pointer"
                    >
                      <option value="Asia/Kolkata" className="bg-brand-jade text-brand-white">
                        India Standard Time (GMT+05:30)
                      </option>
                      <option value="America/New_York" className="bg-brand-jade text-brand-white">
                        Eastern Time (GMT-05:00)
                      </option>
                      <option value="Europe/London" className="bg-brand-jade text-brand-white">
                        Greenwich Mean Time (GMT+00:00)
                      </option>
                    </select>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="pointer-events-none absolute right-0 text-brand-white/80"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Badge - Hidden on mobile, block on desktop */}
            <div className="hidden lg:block mt-8 pt-6 border-t border-brand-white/15">
              <div className="bg-brand-white/10 backdrop-blur-md rounded-2xl p-4 border border-brand-white/20 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-white/20 border-2 border-brand-jade flex items-center justify-center overflow-hidden shrink-0">
                  <Image
                    src="/founder.jpeg"
                    alt="VS"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-white font-display">
                    Vivek Sonawale
                  </h3>
                  <p className="text-brand-white/75 text-xs font-medium font-sans">
                    Founder & Principal Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Scheduler Engine */}
          <div className="w-full lg:w-7/12 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-brand-white">
            <div>
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border/60">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-jade font-display">
                    {selectedDate ? "Step 2: Select Time" : "Step 1: Select Date"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary font-display mt-0.5">
                    {selectedDate ? `Aug ${selectedDate}, 2026 @ ${formattedTime}` : "August 2026"}
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-brand-jade bg-jade-whisper flex items-center justify-center relative shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-jade z-20" />
                    <div
                      className="absolute bottom-1/2 left-1/2 w-0.5 h-2.5 bg-brand-dark rounded-full origin-bottom z-10 transition-transform duration-300"
                      style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
                    />
                    <div
                      className="absolute bottom-1/2 left-1/2 w-0.5 h-3.5 bg-brand-jade rounded-full origin-bottom z-10 transition-transform duration-300"
                      style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-brand-jade mt-1 font-display">
                    {selectedDate ? formattedTime : "--:--"}
                  </span>
                </div>
              </div>

              {/* DYNAMIC CALENDAR / TIME SELECTOR */}
              {!selectedDate ? (
                <div className="animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-ink-primary text-xs font-display uppercase tracking-wider">
                      Select Meeting Day
                    </h4>
                    <span className="text-xs text-ink-secondary font-sans">
                      India Standard Time (GMT+05:30)
                    </span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 font-semibold text-ink-secondary font-sans">
                    {days.map((d) => (
                      <div key={d} className="py-1">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isPast = day < 20;

                      return (
                        <button
                          key={day}
                          disabled={isPast}
                          onClick={() => setSelectedDate(day)}
                          className={`
                            h-9 w-9 rounded-xl flex items-center justify-center mx-auto font-medium transition-all duration-200 cursor-pointer
                            ${!isPast
                              ? "hover:bg-jade-whisper text-ink-primary hover:scale-105"
                              : "text-brand-border/80 cursor-not-allowed"
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-jade hover:underline cursor-pointer font-display"
                    >
                      ← Change Date (Aug {selectedDate})
                    </button>

                    <div className="inline-flex p-1 rounded-full bg-jade-whisper border border-brand-border/60">
                      <button
                        type="button"
                        onClick={() => setPeriod("AM")}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${period === "AM"
                          ? "bg-brand-jade text-brand-white shadow-xs"
                          : "text-ink-secondary hover:text-ink-primary"
                          }`}
                      >
                        AM
                      </button>
                      <button
                        type="button"
                        onClick={() => setPeriod("PM")}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${period === "PM"
                          ? "bg-brand-jade text-brand-white shadow-xs"
                          : "text-ink-secondary hover:text-ink-primary"
                          }`}
                      >
                        PM
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-around gap-6 bg-jade-whisper/40 border border-brand-border/60 rounded-3xl p-6">
                    <div className="relative w-36 h-36 rounded-full border-4 border-brand-jade bg-brand-white shadow-md flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-brand-jade z-20 shadow-xs" />
                      <div
                        className="absolute bottom-1/2 left-1/2 w-1.5 h-10 bg-brand-dark rounded-full origin-bottom z-10 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
                      />
                      <div
                        className="absolute bottom-1/2 left-1/2 w-1 h-13 bg-brand-jade rounded-full origin-bottom z-10 transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
                      />
                      <span className="absolute top-2 text-xs font-bold text-ink-primary">12</span>
                      <span className="absolute right-3 text-xs font-bold text-ink-primary">3</span>
                      <span className="absolute bottom-2 text-xs font-bold text-ink-primary">6</span>
                      <span className="absolute left-3 text-xs font-bold text-ink-primary">9</span>
                    </div>

                    <div className="flex flex-col gap-3 w-full sm:w-auto">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-ink-secondary font-display mb-1.5 block">
                          Select Hour ({selectedHour}:00)
                        </span>
                        <div className="grid grid-cols-6 gap-1">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                            <button
                              key={h}
                              type="button"
                              onClick={() => setSelectedHour(h)}
                              className={`h-7 w-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedHour === h
                                ? "bg-brand-dark text-brand-white"
                                : "bg-brand-white border border-brand-border text-ink-primary hover:border-brand-jade"
                                }`}
                            >
                              {h}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase text-ink-secondary font-display mb-1.5 block">
                          Select Minute (:{String(selectedMinute).padStart(2, "0")})
                        </span>
                        <div className="grid grid-cols-4 gap-1.5">
                          {[0, 15, 30, 45].map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => setSelectedMinute(m)}
                              className={`py-1 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedMinute === m
                                ? "bg-brand-jade text-brand-white"
                                : "bg-brand-white border border-brand-border text-ink-primary hover:border-brand-jade"
                                }`}
                            >
                              :{String(m).padStart(2, "0")}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-8 pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                disabled={!selectedDate || isSubmitting || isSuccess}
                onClick={() => {
                  if (!selectedDate || isSubmitting || isSuccess) return;

                  setIsSubmitting(true);

                  // Simulate booking request
                  setTimeout(() => {
                    setIsSubmitting(false);
                    setIsSuccess(true);
                  }, 1800);
                }}
                className={`
      relative
      w-full
      sm:w-auto
      min-w-[240px]
      h-12
      px-8
      rounded-full
      overflow-hidden
      flex
      items-center
      justify-center
      gap-2.5
      font-bold
      text-xs
      font-display
      transition-all
      duration-300
      ${isSuccess
                    ? "bg-brand-jade text-brand-white"
                    : selectedDate
                      ? "bg-brand-jade text-brand-white shadow-md shadow-brand-jade/20 hover:bg-brand-jade-hover hover:-translate-y-0.5 cursor-pointer"
                      : "bg-brand-border/40 text-ink-secondary/50 cursor-not-allowed"
                  }
    `}
              >
                {/* Sending */}
                {isSubmitting && (
                  <>
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full border-2 border-brand-white/30" />

                      <span className="absolute h-4 w-4 rounded-full border-2 border-transparent border-t-brand-white animate-spin" />
                    </span>

                    <span className="animate-pulse">
                      Confirming your call...
                    </span>
                  </>
                )}

                {/* Success */}
                {isSuccess && !isSubmitting && (
                  <>
                    <span
                      className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-brand-white
            text-brand-jade
            animate-[scaleIn_0.35s_ease-out]
          "
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="animate-[fadeIn_0.3s_ease-out]">
                      Call Confirmed
                    </span>
                  </>
                )}

                {/* Default */}
                {!isSubmitting && !isSuccess && (
                  <>
                    <span>
                      {selectedDate
                        ? `Confirm Call · Aug ${selectedDate} at ${formattedTime}`
                        : "Select Date on Calendar to Continue"}
                    </span>

                    {selectedDate && (
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}