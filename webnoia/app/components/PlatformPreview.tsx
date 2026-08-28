"use client";

import { useState } from "react";
import Image from "next/image";

export interface ProjectCard {
  id: number;
  title: string;
  category: string;
  src: string;
  gridSpan: string;
}

const PROJECTS: ProjectCard[] = [
  // --- ROW 1 ---
  {
    id: 1,
    title: "Main Dashboard & Platform Overview",
    category: "SaaS Application",
    src: "/website-images/website-image1.webp",
    gridSpan:
      "md:col-span-12 lg:col-span-6 min-h-[280px] md:min-h-[320px] lg:aspect-[16/10]",
  },
  {
    id: 2,
    title: "Mobile App View",
    category: "Mobile UI",
    src: "/website-images/shri-sai.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-3 min-h-[280px] md:min-h-[320px] lg:aspect-[4/5]",
  },
  {
    id: 3,
    title: "Mobile Analytics",
    category: "Mobile UI",
    src: "/website-images/resu-stack-vertical.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-3 min-h-[280px] md:min-h-[320px] lg:aspect-[4/5]",
  },

  // --- ROW 2 ---
  {
    id: 4,
    title: "System Navigation",
    category: "UI Architecture",
    src: "/website-images/worknest-sq.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-4 min-h-[280px] md:min-h-[320px] lg:aspect-[16/10]",
  },
  {
    id: 5,
    title: "Kokan Meva — E-Commerce Experience",
    category: "Digital Commerce",
    src: "/website-images/website-image2.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-8 min-h-[280px] md:min-h-[320px] lg:aspect-[21/9]",
  },

  // --- ROW 3 ---
  {
    id: 6,
    title: "Thermal Industrial B2B Portal",
    category: "Corporate System",
    src: "/website-images/website-image3.webp",
    gridSpan:
      "md:col-span-12 lg:col-span-8 min-h-[280px] md:min-h-[320px] lg:aspect-[21/9]",
  },
  {
    id: 7,
    title: "Mobile Onboarding",
    category: "Mobile Flow",
    src: "/website-images/resu-stack-files.webp",
    gridSpan:
      "md:col-span-12 lg:col-span-4 min-h-[280px] md:min-h-[320px] lg:aspect-[16/10]",
  },

  // --- ROW 4 ---
  {
    id: 8,
    title: "Enterprise Checkout Workflow",
    category: "E-Commerce",
    src: "/website-images/website-image4.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-6 min-h-[280px] md:min-h-[320px] lg:aspect-[16/10]",
  },
  {
    id: 9,
    title: "Infrastructure & Security Hub",
    category: "Cloud Platform",
    src: "/website-images/website-image5.webp",
    gridSpan:
      "md:col-span-6 lg:col-span-6 min-h-[280px] md:min-h-[320px] lg:aspect-[16/10]",
  },
];

export default function PlatformPreview() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCard | null>(null);

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative w-full bg-brand-white border-y border-brand-border/40 overflow-visible py-12 md:py-16 lg:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-jade" />
            <div className="text-xs font-bold tracking-widest text-ink-secondary uppercase font-display">
              Project Showcase
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-primary tracking-tight mb-4 font-display">
            Selected Deployments{" "}
            <span className="font-serif italic font-medium text-brand-jade">
              In Focus.
            </span>
          </h2>

          <p className="text-ink-secondary text-sm md:text-base max-w-md mx-auto font-sans">
            A selection of digital experiences and systems we&apos;ve built.
          </p>
        </div>

        {/* =========================================================
            PROJECT GRID (MOBILE: STACK-SCROLL DECK | DESKTOP: BENTO GRID)
            ========================================================= */}
        <div
          className="
            relative
            flex
            flex-col
            gap-3
            pb-32
            md:grid
            md:grid-cols-12
            md:gap-3
            md:pb-0
            items-stretch
          "
        >
          {PROJECTS.map((item, index) => {
            const mobileTopOffset = 80 + index * 16;

            return (
              <div
                key={item.id}
                style={{
                  top: `${mobileTopOffset}px`,
                  zIndex: index + 1,
                }}
                className={`
                  sticky
                  md:static
                  md:!top-auto
                  md:!z-auto
                  w-full
                  transition-all
                  duration-300
                  ease-out
                  ${item.gridSpan}
                `}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(item)}
                  className="
                    group
                    relative
                    w-full
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-brand-border
                    bg-gray-100
                    text-left
                    cursor-zoom-in
                    shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:border-brand-jade/60
                    hover:shadow-[0_16px_36px_rgba(20,92,82,0.12)]
                    hover:-translate-y-1
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-jade
                  "
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative w-full h-full min-h-[280px] md:min-h-[300px] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      quality={90}
                      className="
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.03]
                      "
                      sizes="
                        (max-width: 767px) 100vw,
                        (max-width: 1024px) 50vw,
                        60vw
                      "
                    />

                    {/* MOBILE TITLE OVERLAY */}
                    <div
                      className="
                        md:hidden
                        absolute
                        inset-x-0
                        bottom-0
                        p-5
                        bg-gradient-to-t
                        from-black/80
                        via-black/40
                        to-transparent
                        flex
                        flex-col
                        justify-end
                        pointer-events-none
                      "
                    >
                      <div className="text-sm font-semibold text-white font-display">
                        {item.title}
                      </div>

                      <div className="text-[10px] font-bold text-brand-jade uppercase tracking-wider mt-1 font-display">
                        {item.category}
                      </div>
                    </div>

                    {/* DESKTOP PERMANENT & HOVER GRADIENT OVERLAY */}
                    <div
                      className="
                        hidden
                        md:block
                        absolute
                        inset-x-0
                        bottom-0
                        h-36
                        bg-gradient-to-t
                        from-black/85
                        via-black/40
                        to-transparent
                        opacity-80
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        pointer-events-none
                      "
                    />

                    {/* DESKTOP TITLE & CATEGORY BAR */}
                    <div
                      className="
                        hidden
                        md:flex
                        flex-col
                        justify-end
                        absolute
                        inset-x-0
                        bottom-0
                        p-6
                        z-10
                        pointer-events-none
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:-translate-y-1
                      "
                    >
                      <div className="text-base font-bold text-white font-display leading-tight drop-shadow-md">
                        {item.title}
                      </div>

                      <div className="mt-1.5 text-[11px] uppercase tracking-widest font-bold text-brand-jade font-display drop-shadow-sm">
                        {item.category}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          CENTERED IMAGE LIGHTBOX
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
            bg-brand-dark/90
            backdrop-blur-md
            p-4
            md:p-8
            animate-in
            fade-in
            duration-200
          "
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              flex
              items-center
              justify-center
              w-full
              max-w-5xl
              max-h-[90vh]
              animate-in
              zoom-in-95
              duration-300
            "
          >
            <Image
              src={selectedProject.src}
              alt={selectedProject.title}
              width={2400}
              height={1600}
              quality={100}
              priority
              className="
                block
                w-auto
                h-auto
                max-w-full
                max-h-[88vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
              sizes="
                (max-width: 768px) 94vw,
                (max-width: 1280px) 90vw,
                1200px
              "
            />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              aria-label="Close image"
              onClick={closeProject}
              className="
                absolute
                -top-3
                -right-3
                md:-top-4
                md:-right-4
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-white
                text-ink-primary
                shadow-xl
                text-sm
                font-bold
                hover:scale-105
                active:scale-95
                transition-transform
                cursor-pointer
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}