"use client";

import { useState } from "react";
import Image from "next/image";

export interface ProjectCard {
  id: number;
  title: string;
  category: string;
  src: string;
}

const PROJECTS: ProjectCard[] = [
  {
    id: 1,
    title: "Integrated Building Solutions",
    category: "Corporate Website",
    src: "/website-images/web-meta.webp",
  },
  {
    id: 2,
    title: "AI Resume Builder",
    category: "AI SaaS",
    src: "/website-images/website-image2.webp",
  },
  {
    id: 3,
    title: "Task Management",
    category: "Productivity",
    src: "/website-images/Web-tasksflow-sqaure.webp",
  },
  {
    id: 4,
    title: "Workspace Collaboration",
    category: "SaaS Platform",
    src: "/website-images/web-worknest-sqaure.webp",
  },
  {
    id: 5,
    title: "Kokan Meva — E-Commerce Experience",
    category: "Digital Commerce",
    src: "/website-images/website-image5.webp",
  },
];

export default function PhotoGridShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative w-full bg-brand-white border-y border-brand-border/40 overflow-hidden py-12 md:py-16">
      
      {/* Background Micro Dot Canvas */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] opacity-40 pointer-events-none" 
        style={{ backgroundSize: "20px 20px" }} 
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-jade animate-pulse" />
            <div className="text-xs font-bold tracking-widest text-ink-secondary uppercase font-display">
              Our Work Showcase
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-3 font-display">
            Selected Deployments{" "}
            <span className="font-serif italic font-medium text-brand-jade">
              In Focus.
            </span>
          </h2>

          <p className="text-ink-secondary text-sm md:text-base max-w-lg mx-auto font-sans">
            Click any project to inspect high-resolution details in full view.
          </p>
        </div>

        {/* 
          RESPONSIVE SHOWCASE CONTAINER
          Mobile (< md): Normal vertical stack with standard gap
          Desktop (>= md): Full-width 1-row horizontal layout
        */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full gap-5 md:gap-4 lg:gap-5">
            {PROJECTS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedProject(item)}
                className="
                  group
                  relative
                  w-full
                  md:w-1/5
                  md:flex-1
                  h-[220px]
                  sm:h-[260px]
                  md:h-[250px]
                  lg:h-[280px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-brand-border
                  bg-white
                  text-left
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-brand-jade/60
                  hover:shadow-[0_20px_40px_-15px_rgba(20,92,82,0.18)]
                  shrink-0
                "
              >
                {/* Image Container */}
                <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    quality={95}
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    sizes="(max-width: 767px) 100vw, 20vw"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Index Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-jade bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-brand-border/60 font-display shadow-xs">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Bottom Title Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col justify-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-jade font-display mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-brand-white font-display leading-snug truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================
          HIGH-RES CENTERED LIGHTBOX MODAL
          ========================================================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} preview`}
          onClick={closeProject}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-brand-dark/85
            backdrop-blur-md
            p-4
            md:p-8
            animate-in
            fade-in
            duration-200
            cursor-pointer
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-4xl
              lg:max-w-5xl
              bg-white
              rounded-3xl
              border
              border-brand-border
              shadow-2xl
              overflow-hidden
              flex
              flex-col
              max-h-[90vh]
              cursor-default
              animate-in
              zoom-in-95
              duration-300
            "
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-brand-border">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-jade bg-jade-whisper border border-brand-border px-3 py-1 rounded-full font-display">
                  {selectedProject.category}
                </span>
                <h3 className="text-sm md:text-base font-bold text-ink-primary font-display truncate max-w-xs md:max-w-md">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeProject}
                className="
                  px-3.5
                  py-1.5
                  rounded-xl
                  bg-gray-200
                  hover:bg-gray-300
                  text-ink-primary
                  text-xs
                  font-bold
                  transition-all
                  cursor-pointer
                  font-display
                "
              >
                ✕ Close
              </button>
            </div>

            {/* High-Resolution Viewport Canvas */}
            <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-100 overflow-y-auto">
              <Image
                src={selectedProject.src}
                alt={selectedProject.title}
                fill
                quality={100}
                className="object-contain object-top p-4"
                sizes="(max-width: 1440px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}