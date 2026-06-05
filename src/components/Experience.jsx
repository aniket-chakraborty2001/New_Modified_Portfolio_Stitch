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
      "Built an in house project to mark employee attendance using face detection, face embedding models",
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
      "Got to know HRCT chest reports and present my findings in seminar"
    ],
    stack: ["Python", "Research", "EDA", "Numpy", "Scipy", "Pandas", "Reports"],
  },
  {
    role: "Home Tutoring",
    company: "Self Employed",
    period: "2019 - Present",
    location: "Remote",
    summary:
      "Provided Mathematics and Science tutoring to groups of students from Classes 7–10. Developed lesson plans, explained complex concepts, and supported students in achieving their academic goals.",
    highlights: [
      "Covering basic to advanced concepts with hands on experience",
      "Integrated python programming for visualizing some mathematical plots",
      "Helped to clear IMO exams for different students",
      "Successfully trained 6+ students from basic level to advanced reasoning level"
    ],
    stack: ["PyTorch", "Mathematics", "IMO", "Basic to Advance"],
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function ExperienceImage({ experience, index }) {
  const label = `Experience 0${index + 1}`;

  if (!experience.image) {
    return (
      <div className="relative flex h-full min-h-32 items-center justify-center overflow-hidden rounded-lg border border-[#20b2aa]/45 bg-[#bff3ef]/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,178,170,0.18),transparent_52%)]" />
        <HiOutlineBriefcase className="relative h-12 w-12 text-[#0ea5e9]/80 sm:h-16 sm:w-16" />
        <span className="absolute bottom-3 left-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">
          {label}
        </span>
      </div>
    );
  }

  const image = (
    <div className="relative flex h-full min-h-32 items-center justify-center overflow-hidden rounded-lg border border-[#20b2aa]/45 bg-[#bff3ef]/95">
      <Image
        src={experience.image}
        alt={`${experience.company} experience visual`}
        fill
        sizes="(min-width: 1024px) 12rem, 34vw"
        className={`grayscale transition duration-500 group-hover:grayscale-0 ${
          experience.imageClassName ?? "object-contain p-6"
        }`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-white/65 via-transparent to-white/20" />
      <span className="absolute bottom-3 left-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">
        {label}
      </span>
      {experience.link && (
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md border border-[#20b2aa]/55 bg-[#bff3ef]/95 text-[#0ea5e9] backdrop-blur-sm transition group-hover:bg-[#0ea5e9] group-hover:text-white">
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

function ExperienceCard({ experience, index, isOpen, canOpen, onOpen, style }) {
  const requestOpen = () => {
    if (canOpen) {
      onOpen();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      requestOpen();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-disabled={!canOpen}
      onClick={requestOpen}
      onKeyDown={handleKeyDown}
      className={`experience-stack-card group absolute left-1/2 top-1/2 isolate grid w-(--experience-card-width) grid-cols-[minmax(8rem,40%)_1fr] gap-4 overflow-hidden rounded-lg border bg-[#bff3ef]/95 p-3 shadow-[0_18px_48px_rgba(32,178,170,0.16)] outline-none backdrop-blur-[2px] transition-[height,transform,opacity,border-color,box-shadow,filter] duration-500 ease-out focus-visible:border-[#20b2aa] focus-visible:shadow-[0_0_0_3px_rgba(32,178,170,0.18)] sm:grid-cols-[12rem_1fr] sm:gap-5 sm:p-5 ${
        canOpen ? "cursor-pointer" : "cursor-default"
      } ${
        isOpen
          ? "h-(--experience-card-open-height) border-[#20b2aa]/80 shadow-[0_26px_90px_rgba(32,178,170,0.24)]"
          : "h-(--experience-card-height) border-[#20b2aa]/55 hover:border-[#20b2aa]/80"
      }`}
      style={style}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg border border-transparent bg-[linear-gradient(145deg,rgba(32,178,170,0.42),transparent_34%,rgba(255,255,255,0.2))] opacity-40 transition-opacity duration-400 [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <ExperienceImage experience={experience} index={index} />

      <div className="flex min-w-0 flex-col pt-4 sm:pt-5">
        <div>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#0ea5e9] sm:text-sm">
            {experience.company}
          </p>
          <h3 className="mt-1 wrap-break-words text-lg font-black leading-tight tracking-normal text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] sm:mt-2 sm:text-[1.65rem]">
            {experience.role}
          </h3>
        </div>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] font-medium text-slate-600 sm:mt-3 sm:text-xs">
          <span className="flex items-center gap-2">
            <HiOutlineCalendar className="h-4 w-4 text-[#0ea5e9]" />
            {experience.period}
          </span>
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker className="h-4 w-4 text-[#0ea5e9]" />
            {experience.location}
          </span>
        </div>

        <p
          className={`mt-3 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6 ${
            isOpen ? "" : "line-clamp-2"
          }`}
        >
          {experience.summary}
        </p>

        <div className="mt-4 grid grid-rows-[1fr] opacity-100">
          <div className="min-h-0 space-y-3 overflow-hidden">
            {experience.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d946ef]" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>
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
      <div className="text-center">
        <h2 className="text-2xl font-black tracking-[0] sm:text-4xl lg:text-5xl">
          <span className="animate-pulse bg-gradient-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
            Experience_History
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          A focused timeline of applied AI research, engineering work, and
          production-oriented experimentation.
        </p>
      </div>

      <div
        ref={stackSectionRef}
        className="relative mx-auto mt-14 h-[300svh] w-full sm:mt-16 lg:mt-20"
        style={{
          "--experience-card-width": "min(58rem, calc(100vw - 2rem))",
          "--experience-card-height": "clamp(25rem, 50svh, 30rem)",
          "--experience-card-open-height": "clamp(35rem, 68svh, 40rem)",
        }}
      >
        <div className="sticky top-36 flex h-[calc(100svh-9rem)] items-center justify-center overflow-visible py-8">
          <div className="relative h-full w-full max-w-5xl">
            {experiences.map((experience, index) => {
              const stackProgress = scrollProgress * experiences.length;
              const revealProgress =
                index === 0 ? 1 : clamp(stackProgress - (index - 1), 0, 1);
              const stackIsComplete = stackProgress >= experiences.length - 1;
              const finalOffset =
                (index - (experiences.length - 1) / 2) * 64;
              const incomingOffset = (1 - revealProgress) * 82;
              const depth = experiences.length - 1 - index;
              const scale = 1 - depth * 0.025;
              const isVisibleCard = revealProgress > 0.02 || index === 0;

              return (
                <ExperienceCard
                  key={`${experience.company}-${experience.role}`}
                  experience={experience}
                  index={index}
                  isOpen={openIndex === index}
                  canOpen={stackIsComplete}
                  onOpen={() =>
                    setOpenIndex((currentIndex) =>
                      currentIndex === index ? null : index,
                    )
                  }
                  style={{
                    zIndex: openIndex === index ? 50 : 10 + index,
                    opacity: isVisibleCard ? 1 : 0,
                    pointerEvents: isVisibleCard ? "auto" : "none",
                    transform: `translate(-50%, -50%) translateY(calc(${finalOffset}px + ${incomingOffset}svh)) scale(${scale})`,
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
