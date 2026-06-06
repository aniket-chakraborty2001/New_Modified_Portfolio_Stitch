"use client";

import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationItems = [
  {
    institution: "Manipal Academy of Higher Education",
    degree: "M.Sc in Data Science",
    period: "2022 - 2024",
    concepts: [
      "Data Analytics",
      "Statistics and Mathematics",
      "Machine Learning",
      "Database (MYSQL)",
      "Computer Vision and MLP",
    ],
    certificateUrl: "https://drive.google.com/file/d/1k2kJrH39G6YmKI3hLZA0YAe9JIpN-VOq/view?usp=sharing",
    icon: HiOutlineAcademicCap,
  },
  {
    institution: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "B.Sc in Mathematics",
    period: "2019-2022",
    concepts: [
      "Python",
      "Calculus",
      "Exploratory Data Analysis",
      "Mathematics",
      "Linear Algebra",
    ],
    certificateUrl: "https://drive.google.com/file/d/1g1Vfuznvs7-Vn1nzY9FG55EEMn2-3lDs/view?usp=sharing",
    icon: HiOutlineBadgeCheck,
  },
];

function EducationTrace({ item, index }) {
  const Icon = item.icon;
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`education-trace-row group relative grid min-h-64 gap-5 border-y border-[#20b2aa]/45 py-5 sm:py-7 lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] lg:items-center lg:gap-8 ${
        isReversed ? "lg:[&_.education-copy]:col-start-3" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="education-row-scan pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-linear-to-r from-[#0ea5e9] via-[#20b2aa] to-[#d946ef]"
      />

      <div
        className={`education-copy relative min-w-0 pl-14 lg:pl-0 ${
          isReversed ? "lg:text-right" : ""
        }`}
      >
        <div
          className={`education-labels flex flex-wrap items-center gap-2 ${
            isReversed ? "lg:justify-end" : ""
          }`}
        >
          <span className="border border-[#20b2aa]/45 bg-[#20b2aa]/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#0ea5e9] sm:text-xs">
            Node 0{index + 1}
          </span>
          <span className="border border-[#20b2aa]/45 bg-white/45 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.16em] text-[#d946ef] sm:text-xs">
            {item.period}
          </span>
        </div>

        <h3 className="education-title mt-4 wrap-break-word text-xl font-black leading-tight tracking-normal text-[#0ea5e9] sm:text-2xl lg:text-3xl">
          {item.institution}
        </h3>
        <p className="education-degree mt-2 wrap-break-word text-base font-black leading-tight text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] sm:text-lg lg:text-xl">
          {item.degree}
        </p>

        <div className="education-concepts mt-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d946ef]">
            Learned Concepts
          </p>

          <div
            className={`mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs leading-5 text-slate-700 sm:text-sm ${
              isReversed ? "lg:justify-end" : ""
            }`}
          >
            {item.concepts.map((concept) => (
              <span key={concept} className="education-concept-item">
                {concept}
              </span>
            ))}
          </div>
        </div>

        <a
          href={item.certificateUrl}
          target="_blank"
          rel="noreferrer"
          className={`education-link mt-5 inline-flex h-10 w-full items-center justify-center gap-2 border border-[#0ea5e9] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white sm:w-auto sm:min-w-52 sm:text-xs ${
            isReversed ? "lg:ml-auto" : ""
          }`}
        >
          View Certificate
          <FiExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div
        aria-hidden="true"
        className="education-marker absolute left-0 top-7 flex h-12 w-12 items-center justify-center border border-[#20b2aa]/70 bg-white/88 text-[#0ea5e9] shadow-[0_0_34px_rgba(14,165,233,0.2)] lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto lg:h-16 lg:w-16"
      >
        <span className="absolute inset-2 border border-[#d946ef]/30" />
        <Icon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </div>

      <div
        aria-hidden="true"
        className={`education-connector hidden h-px bg-linear-to-r from-transparent via-[#20b2aa]/80 to-transparent lg:row-start-1 lg:block ${
          isReversed ? "lg:col-start-1" : "lg:col-start-3"
        }`}
      />
    </article>
  );
}

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".education-trace-row");
      const railFill = sectionRef.current?.querySelector(".education-rail-fill");
      gsap.set(railFill, { scaleY: 0, transformOrigin: "top" });
      gsap.set(".education-row-scan", { scaleX: 0, transformOrigin: "left" });
      gsap.set(".education-copy", {
        autoAlpha: 0,
        clipPath: "inset(0 100% 0 0)",
        x: -34,
      });
      gsap.set(".education-marker", { autoAlpha: 0, scale: 0.45, rotate: -28 });
      gsap.set(".education-connector", { scaleX: 0, transformOrigin: "center" });
      gsap.set(".education-concept-item", { autoAlpha: 0, y: 12 });
      gsap.set(".education-link", { autoAlpha: 0, y: 14 });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });

      timeline.to(railFill, { scaleY: 1, duration: 0.95, ease: "none" }, 0);

      rows.forEach((row, index) => {
        const copy = row.querySelector(".education-copy");
        const marker = row.querySelector(".education-marker");
        const connector = row.querySelector(".education-connector");
        const scan = row.querySelector(".education-row-scan");
        const concepts = row.querySelectorAll(".education-concept-item");
        const link = row.querySelector(".education-link");
        const at = 0.28 + index * 0.34;
        const direction = index % 2 === 1 ? 34 : -34;

        timeline
          .to(marker, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.24 }, at)
          .to(scan, { scaleX: 1, duration: 0.28 }, at + 0.02)
          .to(connector, { scaleX: 1, duration: 0.28 }, at + 0.08)
          .fromTo(
            copy,
            { autoAlpha: 0, clipPath: "inset(0 100% 0 0)", x: direction },
            {
              autoAlpha: 1,
              clipPath: "inset(0 0% 0 0)",
              x: 0,
              duration: 0.34,
            },
            at + 0.14,
          )
          .to(concepts, { autoAlpha: 1, y: 0, duration: 0.18, stagger: 0.025 }, at + 0.34)
          .to(link, { autoAlpha: 1, y: 0, duration: 0.18 }, at + 0.44);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative z-10 mx-auto h-[260svh] w-full max-w-368 scroll-mt-20 px-5 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-20">
        <div className="text-center">
          <h2 className="education-heading text-2xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
            <span className="animate-pulse bg-linear-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
              Academic Trajectory
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 bg-linear-to-r from-[#0ea5e9] to-[#d946ef]" />
          <p className="education-intro mx-auto mt-4 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base">
            A rigorous foundation in computational science and artificial
            intelligence, mapped through institutions of technical excellence.
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-6xl sm:mt-10 lg:mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-6 top-5 w-px overflow-hidden bg-[#20b2aa]/18 lg:left-1/2 lg:-translate-x-1/2"
          >
            <span className="education-rail-fill block h-full w-full bg-linear-to-b from-[#0ea5e9]/45 via-[#20b2aa]/85 to-[#d946ef]/45" />
          </div>

          <div className="grid gap-5 lg:gap-7">
            {educationItems.map((item, index) => (
              <EducationTrace
                key={item.institution}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
