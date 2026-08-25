"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "../data/mockData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");
  const [mounted, setMounted] = useState(false);

  // Navbar entrance
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      let currentSection = "#home";

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(
          link.href.replace("#", "")
        );

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentSection = link.href;
        }
      });

      setActiveTab(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();

    setActiveTab(href);
    setMobileOpen(false);

    const targetId = href.startsWith("#") ? href.slice(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-5 sm:px-8 pointer-events-none">
      <div className="relative mx-auto flex w-full max-w-[1500px] items-center justify-between">

        {/* =====================================================
            LOGO
        ===================================================== */}
        <div
          className={`
            pointer-events-auto
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              mounted
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
        >
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="
              group
              flex
              items-center
              gap-2.5
              outline-none
            "
          >
            <span
              className="
                font-display
                text-xl
                font-bold
                tracking-tight
                text-ink-primary
                transition-all
                duration-300
                group-hover:tracking-[-0.02em]
              "
            >
              Webnoia<span className="text-brand-jade">.</span>
            </span>
          </Link>
        </div>

        {/* =====================================================
            CENTER NAVIGATION
        ===================================================== */}
        <nav
          className={`
            pointer-events-auto
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            md:block
            transition-all
            duration-800
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              mounted
                ? "opacity-100"
                : "translate-y-[-12px] opacity-0"
            }
          `}
        >
          <div
            className="
              relative
              rounded-full
              border
              border-brand-border
              bg-brand-white/80
              p-1
              shadow-[0_8px_32px_rgba(17,22,20,0.06)]
              backdrop-blur-xl
            "
          >
            <ul className="relative flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.href;

                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`
                        group
                        relative
                        z-10
                        flex
                        items-center
                        rounded-full
                        px-5
                        py-2.5
                        text-[13px]
                        font-medium
                        tracking-[-0.01em]
                        transition-all
                        duration-300
                        ease-out
                        ${
                          isActive
                            ? "text-brand-jade"
                            : "text-ink-secondary hover:-translate-y-[1px] hover:text-ink-primary"
                        }
                      `}
                    >
                      {link.label}

                      {/* Active indicator */}
                      <span
                        className={`
                          absolute
                          bottom-1.5
                          left-1/2
                          h-[2px]
                          -translate-x-1/2
                          rounded-full
                          bg-brand-jade
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "w-3 opacity-100"
                              : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-40"
                          }
                        `}
                      />
                    </a>

                    {/* Soft active background */}
                    <span
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        bg-jade-light
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0"
                        }
                      `}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}
        <div
          className={`
            hidden
            pointer-events-auto
            md:block
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              mounted
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
        >
          <button
            onClick={(e) => handleNavClick(e, "#contact")}
            className="
              group
              relative
              overflow-hidden
              rounded-full
              bg-brand-jade
              px-6
              py-3
              text-sm
              font-semibold
              text-brand-white
              shadow-[0_8px_24px_rgba(20,92,82,0.20)]
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:bg-brand-jade-hover
              hover:shadow-[0_12px_30px_rgba(20,92,82,0.28)]
              active:translate-y-0
            "
          >
            {/* Subtle hover sweep */}
            <span
              className="
                absolute
                inset-y-0
                -left-1/2
                w-1/3
                rotate-12
                bg-brand-white/10
                transition-all
                duration-700
                group-hover:left-[120%]
              "
            />

            <span className="relative flex items-center gap-2">
              Book a Consultation

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              >
                <path
                  d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* =====================================================
            MOBILE TOGGLE
        ===================================================== */}
        <div
          className={`
            pointer-events-auto
            md:hidden
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              mounted
                ? "translate-y-0 opacity-100"
                : "-translate-y-3 opacity-0"
            }
          `}
        >
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-brand-border
              bg-brand-white/90
              shadow-[0_8px_24px_rgba(17,22,20,0.06)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-jade-light
            "
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`
                  h-[1.5px]
                  w-full
                  rounded-full
                  bg-ink-primary
                  transition-all
                  duration-300
                  ${
                    mobileOpen
                      ? "translate-y-[6.5px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  rounded-full
                  bg-ink-primary
                  transition-all
                  duration-200
                  ${mobileOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  rounded-full
                  bg-ink-primary
                  transition-all
                  duration-300
                  ${
                    mobileOpen
                      ? "-translate-y-[6.5px] -rotate-45"
                      : ""
                  }
                `}
              />
            </span>
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}
        <div
          className={`
            pointer-events-auto
            absolute
            left-0
            right-0
            top-[calc(100%+12px)]
            overflow-hidden
            rounded-2xl
            border
            border-brand-border
            bg-brand-white/95
            shadow-[0_20px_50px_rgba(17,22,20,0.10)]
            backdrop-blur-xl
            transition-all
            duration-300
            ease-out
            md:hidden
            ${
              mobileOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-[0.98] opacity-0"
            }
          `}
        >
          <ul className="p-2.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-jade-light text-brand-jade"
                          : "text-ink-primary hover:bg-jade-whisper hover:text-brand-jade"
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-jade" />
                    )}
                  </a>
                </li>
              );
            })}

            <li className="mt-2 border-t border-brand-border pt-2">
              <button
                onClick={(e) => handleNavClick(e, "#contact")}
                className="
                  w-full
                  rounded-xl
                  bg-brand-jade
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-brand-white
                  shadow-[0_6px_18px_rgba(20,92,82,0.18)]
                  transition-all
                  duration-200
                  hover:bg-brand-jade-hover
                  active:scale-[0.99]
                "
              >
                Book a Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}