"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../data/mockData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full fixed top-6 z-50 px-5 md:px-8 flex justify-between items-center pointer-events-none">
      {/* Logo Container (Left) */}
      <div className="pointer-events-auto">
        <Link href="#home" onClick={() => handleNavClick("#home")} className="block">
          <Image src="/logo.png" alt="Webnoia Logo" width={120} height={40} className="h-8 md:h-10 w-auto" />
        </Link>
      </div>

      {/* Center Floating Pill Nav (Desktop) */}
      <nav className="hidden md:flex pointer-events-auto bg-white/90 backdrop-blur-md rounded-full border border-brand-border px-8 py-3.5 shadow-sm">
        <ul className="flex space-x-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="transition-colors duration-200 hover:text-brand-orange text-brand-dark"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right CTA Container (Desktop) */}
      <div className="hidden md:block pointer-events-auto">
        <button
          onClick={() => handleNavClick("#contact")}
          className="bg-brand-orange text-white px-6 py-3 rounded-xl font-medium shadow-[0_4px_14px_0_rgba(227,68,0,0.39)] hover:shadow-[0_6px_20px_rgba(227,68,0,0.23)] hover:bg-[#c93d00] transition-all duration-200 active:translate-y-[1px]"
        >
          Book a Consultation
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden pointer-events-auto bg-white rounded-lg p-2 shadow-sm border border-brand-border">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-5 h-0.5 bg-brand-dark mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-brand-dark mb-1 transition-all" />
          <span className="block w-5 h-0.5 bg-brand-dark transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white border border-brand-border rounded-xl shadow-lg md:hidden pointer-events-auto overflow-hidden">
          <ul className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left font-medium text-brand-dark hover:text-brand-orange px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-100">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-brand-orange text-white px-5 py-3 rounded-xl font-medium transition-all hover:bg-[#c93d00]"
              >
                Book a Consultation
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
