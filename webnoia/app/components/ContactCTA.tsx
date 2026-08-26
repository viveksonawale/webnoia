"use client";

import { useState } from "react";

export interface ContactCTAProps {
  readonly className?: string;
}

export default function ContactCTA({
  className = "",
}: ContactCTAProps) {
  const [activeTab, setActiveTab] =
    useState<"calendar" | "form">("calendar");

  const [selectedDate, setSelectedDate] =
    useState<number | null>(26);

  const [selectedTime, setSelectedTime] =
    useState<string | null>("14:30");

  const [timezone, setTimezone] =
    useState<string>("IST (GMT+5:30)");

  const [services, setServices] =
    useState<string[]>(["Web Design"]);

  const [budget, setBudget] =
    useState<string>("$2k - $5k");

  const serviceOptions = [
    "Web Design",
    "Web Development",
    "UI/UX Audit",
    "Maintenance",
  ];

  const times = [
    "09:00",
    "11:00",
    "14:30",
    "16:00",
    "18:00",
  ];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const budgets = [
    "<$2k",
    "$2k - $5k",
    "$5k - $10k",
    "$10k+",
  ];

  const toggleService = (item: string) => {
    setServices((prev) =>
      prev.includes(item)
        ? prev.filter((s) => s !== item)
        : [...prev, item]
    );
  };

  return (
    <section
      id="contact"
      className={`
        relative
        w-full
        overflow-hidden
        border-t
        border-brand-border/50
        bg-brand-white
        py-20
        md:py-28
        ${className}
      `}
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.35]
          [background-image:radial-gradient(#145c52_0.7px,transparent_0.7px)]
          [background-size:24px_24px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-jade/[0.06]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">

        {/* ───────────────── HEADER ───────────────── */}

        <div className="mb-9 text-center md:mb-11">

          {/* Availability pill */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-brand-jade/15
              bg-jade-whisper
              px-3.5
              py-1.5
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-brand-jade
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-brand-jade
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-brand-jade
              "
            >
              2 consultation slots remaining
            </span>
          </div>

          <h2
            className="
              mb-3
              text-4xl
              font-bold
              tracking-tight
              text-brand-dark
              md:text-5xl
            "
          >
            Let's build something{" "}
            <span
              className="
                font-serif
                font-medium
                italic
                text-brand-jade
              "
            >
              extraordinary.
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-500
              md:text-base
            "
          >
            Choose how you'd like to start your project.
          </p>

          {/* ─────────────── SEGMENTED CONTROL ─────────────── */}

          <div
            className="
              mt-6
              inline-flex
              rounded-full
              border
              border-brand-border
              bg-brand-white
              p-1
              shadow-[0_4px_20px_rgba(13,64,57,0.05)]
            "
          >
            <button
              onClick={() => setActiveTab("calendar")}
              className={`
                cursor-pointer
                rounded-full
                px-5
                py-2.5
                text-[11px]
                font-semibold
                transition-all
                duration-200
                md:px-6
                ${
                  activeTab === "calendar"
                    ? "bg-brand-jade text-brand-white shadow-sm"
                    : "text-gray-500 hover:text-brand-dark"
                }
              `}
            >
              Book Strategy Call
            </button>

            <button
              onClick={() => setActiveTab("form")}
              className={`
                cursor-pointer
                rounded-full
                px-5
                py-2.5
                text-[11px]
                font-semibold
                transition-all
                duration-200
                md:px-6
                ${
                  activeTab === "form"
                    ? "bg-brand-jade text-brand-white shadow-sm"
                    : "text-gray-500 hover:text-brand-dark"
                }
              `}
            >
              Instant Project Brief
            </button>
          </div>
        </div>

        {/* ───────────────── MAIN CONTAINER ───────────────── */}

        <div
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-brand-border
            bg-brand-white
            shadow-[0_16px_50px_rgba(13,64,57,0.07)]
          "
        >
          {activeTab === "calendar" ? (

            /* ═════════════════ CALENDAR ═════════════════ */

            <div className="flex flex-col lg:flex-row">

              {/* ───────── HOST PANEL ───────── */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  justify-between
                  border-b
                  border-brand-border
                  bg-jade-mist
                  p-7
                  lg:w-[40%]
                  lg:border-b-0
                  lg:border-r
                  lg:p-8
                "
              >
                <div>

                  {/* Brand */}
                  <div className="mb-7 flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-jade
                        text-sm
                        font-bold
                        text-brand-white
                        shadow-[0_6px_18px_rgba(20,92,82,0.18)]
                      "
                    >
                      W
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">
                        Webnoia
                      </h4>

                      <p className="text-[10px] text-gray-400">
                        Design & Engineering Studio
                      </p>
                    </div>
                  </div>

                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-brand-jade
                    "
                  >
                    Discovery
                  </p>

                  <h3
                    className="
                      mb-3
                      text-2xl
                      font-bold
                      tracking-tight
                      text-brand-dark
                    "
                  >
                    30-Min Technical Discovery
                  </h3>

                  <p
                    className="
                      max-w-sm
                      text-xs
                      leading-relaxed
                      text-gray-500
                    "
                  >
                    A focused session to map your technical
                    requirements, design language, and launch
                    timeline.
                  </p>
                </div>

                {/* Details */}
                <div className="mt-8 space-y-2.5 border-t border-brand-border pt-5">

                  <div className="flex items-center gap-2.5">
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-white
                        text-[10px]
                        text-brand-jade
                      "
                    >
                      30
                    </span>

                    <span className="text-[11px] font-medium text-gray-600">
                      Minutes · 1-on-1
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-white
                        text-[10px]
                        text-brand-jade
                      "
                    >
                      ↗
                    </span>

                    <span className="text-[11px] font-medium text-gray-600">
                      Google Meet
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-white
                        text-[10px]
                        text-brand-jade
                      "
                    >
                      ◎
                    </span>

                    <select
                      value={timezone}
                      onChange={(e) =>
                        setTimezone(e.target.value)
                      }
                      className="
                        cursor-pointer
                        bg-transparent
                        text-[11px]
                        font-medium
                        text-brand-dark
                        outline-none
                      "
                    >
                      <option>
                        IST (GMT+5:30)
                      </option>
                      <option>
                        EST (GMT-5:00)
                      </option>
                      <option>
                        PST (GMT-8:00)
                      </option>
                      <option>
                        GMT (GMT+0:00)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ───────── CALENDAR PANEL ───────── */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  p-7
                  lg:w-[60%]
                  lg:p-8
                "
              >
                <div className="flex-1">

                  {/* Calendar header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark">
                        August 2026
                      </h4>

                      <p className="mt-0.5 text-[10px] text-gray-400">
                        Choose your preferred date
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-brand-jade/15
                        bg-jade-whisper
                        px-3
                        py-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-wider
                        text-brand-jade
                      "
                    >
                      Select date
                    </span>
                  </div>

                  {/* Days */}
                  <div
                    className="
                      mb-2
                      grid
                      grid-cols-7
                      text-center
                    "
                  >
                    {days.map((day) => (
                      <div
                        key={day}
                        className="
                          py-1
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-wider
                          text-gray-400
                        "
                      >
                        {day.slice(0, 1)}
                      </div>
                    ))}
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-7 gap-1.5">
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isSelected =
                        selectedDate === day;
                      const isPast = day < 20;

                      return (
                        <button
                          key={day}
                          disabled={isPast}
                          onClick={() =>
                            setSelectedDate(day)
                          }
                          className={`
                            mx-auto
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-[11px]
                            font-medium
                            transition-all
                            duration-200
                            ${
                              isSelected
                                ? "bg-brand-jade font-bold text-brand-white shadow-[0_5px_14px_rgba(20,92,82,0.22)]"
                                : ""
                            }
                            ${
                              !isSelected &&
                              !isPast
                                ? "text-brand-dark hover:bg-jade-whisper hover:text-brand-jade"
                                : ""
                            }
                            ${
                              isPast
                                ? "cursor-not-allowed text-gray-300"
                                : "cursor-pointer"
                            }
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time */}
                <div
                  className="
                    mt-7
                    border-t
                    border-brand-border
                    pt-5
                  "
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-gray-400
                      "
                    >
                      Available · Aug {selectedDate}
                    </span>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        onClick={() =>
                          setSelectedTime(time)
                        }
                        className={`
                          cursor-pointer
                          rounded-full
                          border
                          px-4
                          py-2
                          text-[10px]
                          font-semibold
                          transition-all
                          duration-200
                          ${
                            selectedTime === time
                              ? "border-brand-dark bg-brand-dark text-brand-white"
                              : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-jade hover:text-brand-jade"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <button
                    className="
                      w-full
                      cursor-pointer
                      rounded-full
                      bg-brand-jade
                      px-6
                      py-3.5
                      text-xs
                      font-bold
                      text-brand-white
                      shadow-[0_8px_22px_rgba(20,92,82,0.18)]
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-brand-jade-hover
                      hover:shadow-[0_12px_28px_rgba(20,92,82,0.24)]
                    "
                  >
                    Confirm Call
                    <span className="mx-1.5 opacity-50">
                      ·
                    </span>
                    Aug {selectedDate}
                    <span className="mx-1.5 opacity-50">
                      ·
                    </span>
                    {selectedTime}
                    <span className="ml-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>

          ) : (

            /* ═════════════════ BRIEF FORM ═════════════════ */

            <form
              onSubmit={(e) =>
                e.preventDefault()
              }
              className="
                space-y-7
                p-7
                md:p-9
              "
            >

              {/* Services */}
              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-brand-dark
                  "
                >
                  01 · What do you need?
                </label>

                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map(
                    (service) => {
                      const isChecked =
                        services.includes(
                          service
                        );

                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() =>
                            toggleService(
                              service
                            )
                          }
                          className={`
                            cursor-pointer
                            rounded-full
                            border
                            px-4
                            py-2
                            text-[10px]
                            font-semibold
                            transition-all
                            duration-200
                            ${
                              isChecked
                                ? "border-brand-jade bg-brand-jade text-brand-white"
                                : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-jade hover:text-brand-jade"
                            }
                          `}
                        >
                          {isChecked
                            ? "✓ "
                            : "+ "}
                          {service}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  className="
                    mb-3
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-brand-dark
                  "
                >
                  02 · Anticipated budget
                </label>

                <div className="flex flex-wrap gap-2">
                  {budgets.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() =>
                        setBudget(item)
                      }
                      className={`
                        cursor-pointer
                        rounded-full
                        border
                        px-4
                        py-2
                        text-[10px]
                        font-semibold
                        transition-all
                        duration-200
                        ${
                          budget === item
                            ? "border-brand-dark bg-brand-dark text-brand-white"
                            : "border-brand-border bg-brand-white text-brand-dark hover:border-brand-jade hover:text-brand-jade"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-brand-dark
                    "
                  >
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="Sarah Connor"
                    className="
                      w-full
                      rounded-full
                      border
                      border-brand-border
                      bg-jade-mist
                      px-5
                      py-3
                      text-xs
                      text-brand-dark
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-brand-jade
                      focus:bg-brand-white
                    "
                  />
                </div>

                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-brand-dark
                    "
                  >
                    Work email
                  </label>

                  <input
                    type="email"
                    placeholder="sarah@company.com"
                    className="
                      w-full
                      rounded-full
                      border
                      border-brand-border
                      bg-jade-mist
                      px-5
                      py-3
                      text-xs
                      text-brand-dark
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-brand-jade
                      focus:bg-brand-white
                    "
                  />
                </div>
              </div>

              {/* Brief */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-brand-dark
                  "
                >
                  03 · Project brief
                </label>

                <textarea
                  rows={3}
                  placeholder="Tell us about your vision, timeline, or reference websites..."
                  className="
                    w-full
                    resize-none
                    rounded-[1.5rem]
                    border
                    border-brand-border
                    bg-jade-mist
                    px-5
                    py-4
                    text-xs
                    leading-relaxed
                    text-brand-dark
                    outline-none
                    transition-colors
                    placeholder:text-gray-400
                    focus:border-brand-jade
                    focus:bg-brand-white
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  cursor-pointer
                  rounded-full
                  bg-brand-jade
                  px-6
                  py-3.5
                  text-xs
                  font-bold
                  text-brand-white
                  shadow-[0_8px_22px_rgba(20,92,82,0.18)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-brand-jade-hover
                  hover:shadow-[0_12px_28px_rgba(20,92,82,0.24)]
                "
              >
                Send Brief & Get Estimate
                <span className="ml-1.5">
                  →
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}