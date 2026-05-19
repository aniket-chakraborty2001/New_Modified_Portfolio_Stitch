"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

const experiences = [
  {
    role: "AI Researcher",
    company: "Webbies",
    period: "2025 April - Present",
    location: "Kolkata, West Bengal",
    image: "/experience/Webbies_logo.png",
    imageClassName: "object-contain p-8",
    link: "https://webbies.co/",
    summary:
      "Developing applied AI systems that automate document intelligence, model orchestration, and production research workflows.",
    highlights: [
      "Built ViT powered texture matching system for Rehau Mobile Application",
      "Design GenAI (Gemini) based home exterior layering system for Berger Paints",
      "Built scalable ML, DL and AI pipelines and prototypes from research",
    ],
    stack: ["Python", "LLM", "OCR", "FastAPI", "GenAI", "ViT"],
  },
  {
    role: "Research Intern",
    company: "IPCR Kolkata",
    period: "2024",
    location: "Kolkata, West Bengal",
    image: "/experience/Ipcr_logo.png",
    imageClassName: "object-contain p-4 scale-110",
    link: "https://www.pulmocareindia.org/",
    summary:
      "Worked on research-oriented data analysis, collaborative experimentation, and create the research papaer",
    highlights: [
      "Prepared datasets for experimental and analytical workflows.",
      "Implemented Python scripts for Data Analytics, Statistical Analytics",
      "Documented insights, methods, and reproducible experiment outputs.",
    ],
    stack: ["Python", "Research", "EDA", "Numpy", "Scipy", "Pandas", "Reports"],
  },
  {
    role: "Home Tutoring",
    company: "Self Employed",
    period: "2019 - Present",
    location: "Remote",
    summary:
      "Tutoring Mathematics to students from class 7 to class 10",
    highlights: [
      "Covering basic to advanced concepts with hands on experience",
      "Integrated python programming for visualizing some mathematical plots",
      "Helped to clear IMO exams for different students",
    ],
    stack: ["PyTorch", "Mathematics", "IMO", "Basic to Advance"],
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function ExperienceImage({ experience, index }) {
  if (!experience.image) {
    return (
      <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#07131e] sm:h-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,231,0.18),transparent_52%)]" />
        <HiOutlineBriefcase className="relative h-12 w-12 text-[#64ffe7]/80" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64ffe7]">
          <HiOutlineBriefcase className="h-5 w-5" />
          Experience 0{index + 1}
        </div>
      </div>
    );
  }

  const image = (
    <div className="relative h-28 overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#07131e] sm:h-32">
      <Image
        src={experience.image}
        alt={`${experience.company} experience visual`}
        fill
        sizes="(min-width: 1024px) 28rem, 100vw"
        className={`grayscale transition duration-500 group-hover:grayscale-0 ${
          experience.imageClassName ?? "object-contain p-8"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/75 via-transparent to-[#06172f]/20" />
      <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64ffe7]">
        <HiOutlineBriefcase className="h-5 w-5" />
        Experience 0{index + 1}
      </div>
      {experience.link && (
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-cyan-300/45 bg-[#06172f]/85 text-[#64ffe7] backdrop-blur-sm transition group-hover:bg-[#64ffe7] group-hover:text-[#06172f]">
          <FiExternalLink className="h-5 w-5" />
        </div>
      )}
    </div>
  );

  if (!experience.link) {
    return image;
  }

  return (
    <a
      href={experience.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${experience.company} website`}
      onClick={(event) => event.stopPropagation()}
      className="block"
    >
      {image}
    </a>
  );
}

function ExperienceCard({ experience, index, isOpen, onOpen, style }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className={`experience-stack-card group absolute left-1/2 top-1/2 flex aspect-square w-[var(--experience-card-size)] cursor-pointer flex-col rounded-[8px] border bg-[#0d213f] p-4 outline-none transition-[transform,opacity,border-color,box-shadow,filter] duration-300 ease-out focus-visible:border-[#64ffe7] focus-visible:shadow-[0_0_0_3px_rgba(100,255,231,0.18)] sm:p-5 ${
        isOpen
          ? "scale-100 overflow-hidden border-cyan-300/70 shadow-[0_24px_80px_rgba(100,255,231,0.22)]"
          : "scale-[0.985] overflow-hidden border-cyan-300/15 shadow-[0_18px_48px_rgba(3,22,45,0.45)] hover:scale-100 hover:border-cyan-300/45"
      }`}
      style={style}
    >
      <ExperienceImage experience={experience} index={index} />

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#64ffe7] sm:text-sm">
              {experience.company}
            </p>
            <h3 className="mt-2 break-words text-2xl font-black leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)] sm:text-[1.65rem]">
              {experience.role}
            </h3>
          </div>

        </div>

        <div className="mt-3 flex flex-wrap gap-3 text-[0.7rem] font-medium text-slate-300/75 sm:text-xs">
          <span className="flex items-center gap-2">
            <HiOutlineCalendar className="h-4 w-4 text-[#64ffe7]" />
            {experience.period}
          </span>
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker className="h-4 w-4 text-[#64ffe7]" />
            {experience.location}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-200/85">
          {experience.summary}
        </p>

        <div
          className={`mt-4 grid transition-all duration-500 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden space-y-2">
          {experience.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 text-xs leading-5 text-slate-100/90 sm:text-sm">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#64ffe7]" />
              <p>{highlight}</p>
            </div>
          ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {experience.stack.map((item) => (
            <button
              key={item}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpen();
              }}
              className="rounded-[3px] border border-cyan-300/15 bg-[#071d38] px-2.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#64ffe7]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const stackSectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    let animationFrameId = 0;

    const updateProgress = () => {
      const section = stackSectionRef.current;

      if (!section) {
        animationFrameId = requestAnimationFrame(updateProgress);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(
        section.offsetHeight - window.innerHeight,
        1,
      );
      const cardsAreInViewport =
        rect.top < window.innerHeight * 0.72 &&
        rect.bottom > window.innerHeight * 0.28;

      if (!cardsAreInViewport) {
        animationFrameId = requestAnimationFrame(updateProgress);
        return;
      }

      setScrollProgress(clamp(-rect.top / scrollableDistance, 0, 1));
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <style>{`
        .experience-stack-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid transparent;
          background: linear-gradient(145deg, rgba(100,255,231,0.5), transparent 34%, rgba(255,111,216,0.28)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.38;
          transition: opacity 400ms ease;
        }

        .experience-stack-card:hover::before,
        .experience-stack-card:focus-visible::before {
          opacity: 1;
        }

      `}</style>
      <div className="text-center">
        <h2 className="text-2xl font-black tracking-[0] sm:text-4xl lg:text-5xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Experience_History
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-300/70 sm:text-base">
          A focused timeline of applied AI research, engineering work, and
          production-oriented experimentation.
        </p>
      </div>

      <div
        ref={stackSectionRef}
        className="relative mx-auto mt-8 h-[260svh] w-full"
        style={{
          "--experience-card-size":
            "min(30rem, calc(100vw - 2rem), calc(100svh - 8rem))",
        }}
      >
        <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
          <div className="relative h-full w-full">
            {experiences.map((experience, index) => {
              const stackPosition = scrollProgress * (experiences.length - 1);
              const activeCardIndex = Math.floor(stackPosition);
              const localProgress = stackPosition - activeCardIndex;
              const isStackedCard = index <= activeCardIndex;
              const isIncomingCard = index === activeCardIndex + 1;
              const stackedDepth = Math.max(0, activeCardIndex - index);
              const centerOffset = isIncomingCard
                ? `${(1 - localProgress) * 100}svh`
                : `${-stackedDepth * 22}px`;
              const scale = isStackedCard
                ? Math.max(0.9, 1 - stackedDepth * 0.045)
                : 1;
              const rotate = isStackedCard ? -stackedDepth * 2.5 : 0;
              const isVisibleCard = isStackedCard || isIncomingCard;

              return (
                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                  index={index}
                  isOpen={openIndex === index}
                  onOpen={() => setOpenIndex(index)}
                  style={{
                    zIndex: openIndex === index ? 50 : 10 + index,
                    opacity: isVisibleCard ? 1 : 0,
                    pointerEvents: isVisibleCard ? "auto" : "none",
                    transform: `translate(-50%, -50%) translateY(${centerOffset}) rotate(${rotate}deg) scale(${scale})`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
