"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";

const PROJECTS = [
  {
    id: "metnoia",
    title: "Metnoia B2B Website",
    year: "2025",
    category: "Websites",
    tags: ["B2B", "Corporate"],
    image: "/website-images/webshowcase-image8.avif",
    link: "https://metnoiaglobal.com",
    fit: "cover",
  },
  {
    id: "sms",
    title: "SMS - Society Management System",
    year: "2025",
    category: "Websites",
    tags: ["SaaS", "Management"],
    image: "/website-images/website-smspng.avif",
    hideIcon: true,
    fit: "cover",
  },
  {
    id: "sms-app",
    title: "SMS - Society Management System",
    year: "2025",
    category: "Apps & More",
    tags: ["App", "Mobile", "SaaS"],
    image: "/app-images/app1.avif",
    hideIcon: true,
    fit: "cover",
  },
];

const TABS = [
  { id: "Websites", label: "Websites", icon: Monitor },
  { id: "Apps & More", label: "Apps & More", icon: Smartphone },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState("Websites");

  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="relative w-full py-16 md:py-24 bg-brand-white border-y border-brand-border/40 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-3xl">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-jade/10 border border-brand-jade/20 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-jade font-display">
              <svg
                className="w-3.5 h-3.5 text-brand-jade"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-primary tracking-tight font-display mb-4">
            Our Work.{" "}
            <span className="font-serif italic font-normal text-brand-jade">
              Your Profits.
            </span>
          </h2>
          <p className="text-sm md:text-base text-ink-secondary leading-relaxed font-sans max-w-full whitespace-nowrap overflow-hidden text-ellipsis px-4">
            Don&apos;t take our word for it, see it for yourself. Here are some of our most impactful projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-brand-jade text-white shadow-[0_8px_20px_rgba(20,92,82,0.25)] border-2 border-brand-jade"
                    : "bg-white text-ink-secondary border-2 border-brand-border hover:border-brand-jade/30 hover:text-ink-primary"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-ink-secondary"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#F7F7F7] rounded-2xl p-2.5 overflow-hidden border border-brand-border/60 transition-all duration-500 hover:shadow-xl hover:border-brand-jade/30 flex flex-col"
              >
                {/* Image Container */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-brand-white block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        project.fit === "contain"
                          ? "object-contain p-3 object-center"
                          : "object-cover object-top"
                      }`}
                    />
                    {!project.hideIcon && (
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="w-14 h-14 bg-brand-jade text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-lg">
                          <ArrowUpRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-brand-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        project.fit === "contain"
                          ? "object-contain p-3 object-center"
                          : "object-cover object-top"
                      }`}
                    />
                    {!project.hideIcon && (
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="w-14 h-14 bg-brand-jade text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-lg">
                          <ArrowUpRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Info Container */}
                <div className="flex items-end justify-between px-2 pb-1 gap-2">
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-ink-primary font-display mb-0.5 whitespace-nowrap truncate">
                      {project.title}
                    </h3>
                    <span className="text-xs md:text-sm text-ink-secondary font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0 items-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-brand-border/40 text-ink-primary text-[11px] font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 py-20 flex justify-center items-center">
              <p className="text-ink-secondary text-lg">No projects available for this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
