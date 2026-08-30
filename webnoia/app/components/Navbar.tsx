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

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setMobileOpen(false);
    setActiveTab("#home");
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }
    e.preventDefault();
    const targetElement = document.getElementById("home");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.history.pushState(null, "", "/");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    setMobileOpen(false);
    setActiveTab(href);

    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = href.startsWith("#") ? "/" + href : href;
      return;
    }

    e.preventDefault();

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
      <div className="relative mx-auto flex w-full max-w-[1500px] items-center justify-between md:justify-center md:gap-3">

        {/* =====================================================
            LOGO
        ===================================================== */}
        <div
          className={`
            pointer-events-auto
            transition-all
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${mounted
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
            }
          `}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="
              group
              flex
              items-center
              outline-none
            "
          >
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white p-[3px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black">
                <img src="/logos/webnoia.svg" alt="Webnoia" className="h-11 w-11 object-contain" />
              </div>
            </div>
          </Link>
        </div>

        {/* =====================================================
            CENTER NAVIGATION
        ===================================================== */}
        <nav
          className={`
            pointer-events-auto
            hidden
            md:block
            transition-all
            duration-800
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${mounted
              ? "opacity-100"
              : "translate-y-[-12px] opacity-0"
            }
          `}
        >
          <div
            className="
              relative
              flex
              h-[52px]
              items-center
              rounded-full
              border
              border-gray-200
              bg-white
              p-1.5
              shadow-sm
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
                        px-6
                        py-3
                        text-[14px]
                        font-medium
                        tracking-[-0.01em]
                        transition-all
                        duration-300
                        ease-out
                        ${isActive
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
                          ${isActive
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
                        ${isActive
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
    md:flex
    items-center
    gap-2
    transition-all
    duration-700
    ease-[cubic-bezier(0.16,1,0.3,1)]
    ${mounted
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
            }
  `}
        >
          <a
            href="/schedule"
            className="
      group
      relative
      isolate
      overflow-hidden
      flex
      items-center
      justify-center
      gap-2.5
      rounded-full
      bg-[#1e4a40]
      h-[52px]
      pl-4
      pr-6
      text-[15px]
      font-medium
      text-white
      shadow-sm
      transition-all
      duration-300
      active:scale-95
    "
          >
            {/* Jade reveal */}
            <span
              className="
      absolute
      left-1/2
      top-1/2
      z-[-1]
      aspect-square
      w-5
      -translate-x-1/2
      -translate-y-1/2
      scale-0
      rounded-full
      bg-brand-jade
      transition-transform
      duration-300
      ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-[14]
    "
            />
            <img
              src="/logos/googlemeet.webp"
              alt="Google Meet"
              className="relative z-10 h-[20px] w-[20px] object-contain"
            />

            <span className="relative z-10">
              Book a Call
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                d="M3 11L11 3M5 3H11V9"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/919975558544"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center outline-none"
          >
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white p-[3px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#25D366]">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
            </div>
          </a>
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
            ${mounted
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
            }
          `}
        >
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="
              flex
              h-[52px]
              w-[52px]
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
                  ${mobileOpen
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
                  ${mobileOpen
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
            ${mobileOpen
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
                      ${isActive
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
              <a
                href="/schedule"
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  w-full
                  rounded-full
                  bg-[#1e4a40]
                  h-[52px]
                  pl-4
                  pr-6
                  text-[15px]
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  active:scale-[0.99]
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                {/* Jade reveal */}
                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-[-1]
                    aspect-square
                    w-5
                    -translate-x-1/2
                    -translate-y-1/2
                    scale-0
                    rounded-full
                    bg-brand-jade
                    transition-transform
                    duration-300
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[25]
                  "
                />
                <img
                  src="/logos/googlemeet.webp"
                  alt="Google Meet"
                  className="relative z-10 h-5 w-5 object-contain"
                />
                <span className="relative z-10">Book a Call</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M3 11L11 3M5 3H11V9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}