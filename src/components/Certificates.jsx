"use client";

import { useEffect, useState } from "react";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";

const certificates = [
  {
    title: "EPG In DS AI and ML",
    issuer: "IIT Roorkee, Intellipaat, Bangalore",
    date: "Feb 2024 to Present",
    skills: ["Python", "MSSQL", "EDA", "PowerBI", "ML", "DL", "AI"],
    credentialUrl:
      "https://drive.google.com/file/d/1ri3mfJ_4tbVd7r-GE2yOfOks4ot874xy/view?usp=sharing",
  },
  {
    title: "Google Data Analysis",
    issuer: "Coursera, Google",
    date: "May 2023",
    skills: ["Python", "Excel", "SQL"],
    credentialUrl:
      "https://drive.google.com/file/d/1tWV_db3PoNV3PAnE48cl50Xm157s_xRz/view",
  },
  {
    title: "IBM Data Science",
    issuer: "Coursera, IBM",
    date: "November 2023",
    skills: ["Python", "R", "SQL", "EDA", "ML"],
    credentialUrl:
      "https://drive.google.com/file/d/1r1a2AXQk77fgPZkJxx8B-POY2SzbCFqn/view",
  },
  {
    title: "Mathematics for ML",
    issuer: "Coursera, Imperial College of London",
    date: "January 2024",
    skills: ["Python", "Algebra", "Calculus", "PCA"],
    credentialUrl:
      "https://drive.google.com/file/d/1ZBMAWZoriarOppCJvnm1jZKnCDz3C2yT/view",
  },
  {
    title: "Prompt Engineering",
    issuer: "Coursera, Vanderbilt University",
    date: "October 2023",
    skills: ["ChatGPT", "Prompting", "Context"],
    credentialUrl:
      "https://drive.google.com/file/d/17H3T9PLwFdT2ZvejXpsnQBvbE_nUl3Vy/view",
  },
  {
    title: "Internship Certificate",
    issuer: "IPCR Kolkata",
    date: "September 2024",
    skills: ["Python", "Research", "Collaboration"],
    credentialUrl:
      "https://drive.google.com/file/d/1RUdEpdNwzWT-5zPwbsX6A3SXB1kofFgl/view",
  },
];

function CertificateCard({ certificate, state }) {
  const stateClass = {
    active:
      "z-20 -translate-x-1/2 scale-100 opacity-100 blur-0 shadow-[0_0_80px_rgba(100,255,231,0.14)]",
    previous:
      "z-10 -translate-x-[108%] scale-[0.78] opacity-45 blur-[2px] md:-translate-x-[118%]",
    next: "z-10 translate-x-[8%] scale-[0.78] opacity-45 blur-[2px] md:translate-x-[18%]",
    hidden: "pointer-events-none z-0 -translate-x-1/2 scale-75 opacity-0 blur-md",
  }[state];

  return (
    <article
      className={`absolute left-1/2 top-0 flex min-h-[35rem] w-[min(38rem,calc(100vw-2rem))] flex-col rounded-[10px] border border-cyan-300/15 bg-[#0d213f]/95 p-8 transition-all duration-700 sm:p-10 ${stateClass}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[6px] bg-[#133a53] text-[#64ffe7]">
          <TbCertificate className="h-11 w-11" />
        </div>
        <p className="text-right text-sm font-semibold uppercase tracking-[0.28em] text-[#36d3c5]">
          {certificate.date}
        </p>
      </div>

      <div className="mt-10">
        <h3 className="break-words text-3xl font-black leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)] sm:text-4xl">
          {certificate.title}
        </h3>
        <p className="mt-4 break-words text-lg font-semibold tracking-[0.12em] text-[#64ffe7]">
          {certificate.issuer}
        </p>
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        {certificate.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[3px] border border-cyan-300/15 bg-[#071d38] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200/85"
          >
            {skill}
          </span>
        ))}
      </div>

      <a
        href={certificate.credentialUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-auto flex h-16 items-center justify-center gap-3 border border-[#64ffe7] text-base font-medium uppercase tracking-[0.14em] text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f]"
      >
        View Credential
        <FiExternalLink className="h-5 w-5" />
      </a>
    </article>
  );
}

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + certificates.length) % certificates.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % certificates.length);
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(goToNext, 2000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const getCardState = (index) => {
    const previousIndex =
      (activeIndex - 1 + certificates.length) % certificates.length;
    const nextIndex = (activeIndex + 1) % certificates.length;

    if (index === activeIndex) {
      return "active";
    }

    if (index === previousIndex) {
      return "previous";
    }

    if (index === nextIndex) {
      return "next";
    }

    return "hidden";
  };

  return (
    <section
      id="certificates"
      className="relative z-10 mx-auto min-h-[100svh] w-full scroll-mt-20 overflow-hidden px-5 pb-24 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(100,255,231,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(100,255,231,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="text-center">
        <h2 className="text-3xl font-black tracking-[0] sm:text-5xl lg:text-6xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Professional Credentials
          </span>
        </h2>
        <div className="mx-auto mt-8 h-1 w-32 bg-[#64ffe7]/55" />
        <p className="mx-auto mt-8 max-w-4xl text-sm font-semibold uppercase leading-8 tracking-[0.32em] text-slate-300/65 sm:text-base">
          Verified expertise in artificial intelligence and neural architectures
        </p>
      </div>

      <div className="relative mx-auto mt-24 h-[36.5rem] max-w-7xl">
        <div
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              state={getCardState(index)}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous certificate"
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-[10px] border border-cyan-300/45 bg-[#0d213f]/90 text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f] sm:h-20 sm:w-20"
        >
          <FiChevronLeft className="h-9 w-9" />
        </button>

        <button
          type="button"
          aria-label="Next certificate"
          onClick={goToNext}
          className="absolute right-0 top-1/2 z-30 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-[10px] border border-cyan-300/45 bg-[#0d213f]/90 text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f] sm:h-20 sm:w-20"
        >
          <FiChevronRight className="h-9 w-9" />
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.title}
            type="button"
            aria-label={`Show certificate ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-16 bg-[#64ffe7]"
                : "w-10 bg-[#1c6b78]/70 hover:bg-[#64ffe7]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
