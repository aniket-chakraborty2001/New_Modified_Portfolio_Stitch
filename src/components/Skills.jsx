"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
    { name: "Numpy", icon: "/icons/numpy.png", timeline: "3+ Years", experience: "high" },
    { name: "Pandas", icon: "/icons/pandas.png", timeline: "3+ Years", experience: "high" },
    { name: "Matplotlib", icon: "/icons/matplotlib.png", timeline: "3+ Years", experience: "high" },
    { name: "Scikit-learn", icon: "/icons/scikitlearn.png", timeline: "3+ Years", experience: "high" },
    { name: "Opencv", icon: "/icons/opencv.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Pillow", icon: "/icons/pillow.png", timeline: "1+ Years", experience: "high" },
    { name: "Tensorflow", icon: "/icons/tensorFlow.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Pytorch", icon: "/icons/pytorch.png", timeline: "1+ Years", experience: "high" },
    { name: "Hugging face", icon: "/icons/hf.png", timeline: "1+ Years", experience: "high" },
    { name: "Langchain", icon: "/icons/langchain.png", timeline: "1+ Years", experience: "medium" }
  ];

const EXPERIENCE_META = {
  high: {
    label: "Advanced",
  },
  medium: {
    label: "Intermediate",
  },
  basic: {
    label: "Foundational",
  },
};

const CARD_SLOTS = [
  {
    className:
      "left-[2%] top-[60%] z-10 w-[18%] -translate-y-1/2 -rotate-[18deg] scale-[0.82] opacity-55",
  },
  {
    className:
      "left-[20%] top-[46%] z-20 w-[19%] -translate-y-1/2 -rotate-[9deg] scale-90 opacity-80",
  },
  {
    className:
      "left-1/2 top-[38%] z-30 w-[21%] -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 opacity-100",
  },
  {
    className:
      "left-[61%] top-[46%] z-20 w-[19%] -translate-y-1/2 rotate-[9deg] scale-90 opacity-80",
  },
  {
    className:
      "left-[80%] top-[60%] z-10 w-[18%] -translate-y-1/2 rotate-[18deg] scale-[0.82] opacity-55",
  },
];

const CENTER_SLOT_INDEX = Math.floor(CARD_SLOTS.length / 2);
const STEP_COOLDOWN_MS = 520;
const WHEEL_STEP_THRESHOLD = 70;
const TOUCH_STEP_THRESHOLD = 42;

function SkillCard({ skill, className = "", slotIndex = 0 }) {
  const meta = EXPERIENCE_META[skill.experience] ?? EXPERIENCE_META.medium;

  return (
    <article
      className={`skill-scroll-card group flex min-h-52 flex-col rounded-[6px] border border-cyan-300/15 bg-[#0d213f]/95 p-6 shadow-[0_0_0_rgba(100,255,231,0)] transition-[left,top,width,transform,opacity,box-shadow,border-color,filter] duration-700 ease-out hover:border-cyan-300/45 hover:shadow-[0_18px_45px_rgba(100,255,231,0.18)] ${className}`}
      style={{ transitionDelay: `${slotIndex * 45}ms` }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[6px] bg-[radial-gradient(circle_at_25%_0%,rgba(100,255,231,0.18),transparent_36%),radial-gradient(circle_at_85%_18%,rgba(255,111,216,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[6px] bg-[#07131e] ring-1 ring-cyan-300/15">
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            fill
            sizes="3.5rem"
            className="object-contain p-2.5"
          />
        </div>

        <span className="max-w-[6.5rem] break-words text-right text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#64ffe7]">
          {skill.timeline}
        </span>
      </div>

      <h3 className="mt-7 break-words text-xl font-black leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)]">
        {skill.name}
      </h3>

      <div className="mt-auto pt-7">
        <p className="break-words text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-slate-300/70">
          {meta.label}
        </p>
      </div>
    </article>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const deckRef = useRef(null);
  const cardsStageRef = useRef(null);
  const activeIndexRef = useRef(0);
  const lastStepAtRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const touchStartYRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const isDeckInFocus = () => {
      const cardsStage = cardsStageRef.current;
      const certificatesHeader = document.querySelector("#certificates h2");

      if (!cardsStage) {
        return false;
      }

      if (certificatesHeader) {
        const headerRect = certificatesHeader.getBoundingClientRect();
        const isCertificatesHeaderVisible =
          headerRect.top < window.innerHeight && headerRect.bottom > 0;

        if (isCertificatesHeaderVisible) {
          return false;
        }
      }

      const rect = cardsStage.getBoundingClientRect();
      const focusStart = window.innerHeight * 0.28;
      const focusEnd = window.innerHeight * 0.72;
      const hasVisibleCards = rect.top < window.innerHeight && rect.bottom > 0;

      return hasVisibleCards && rect.top < focusEnd && rect.bottom > focusStart;
    };

    const stepSkills = (direction) => {
      const currentIndex = activeIndexRef.current;
      const isMovingForward = direction > 0;
      const isMovingBackward = direction < 0;

      if (
        (isMovingForward && currentIndex >= SKILLS.length - 1) ||
        (isMovingBackward && currentIndex <= 0)
      ) {
        return false;
      }

      const now = window.performance.now();

      if (now - lastStepAtRef.current < STEP_COOLDOWN_MS) {
        return true;
      }

      lastStepAtRef.current = now;
      setActiveIndex((index) => {
        const nextIndex = Math.min(
          Math.max(index + direction, 0),
          SKILLS.length - 1,
        );
        activeIndexRef.current = nextIndex;
        return nextIndex;
      });

      return true;
    };

    const handleWheel = (event) => {
      if (!isDeckInFocus()) {
        wheelDeltaRef.current = 0;
        return;
      }

      const currentIndex = activeIndexRef.current;
      const isAtStart = currentIndex <= 0;
      const isAtEnd = currentIndex >= SKILLS.length - 1;
      const wantsForward = event.deltaY > 0;
      const wantsBackward = event.deltaY < 0;

      if ((wantsForward && isAtEnd) || (wantsBackward && isAtStart)) {
        wheelDeltaRef.current = 0;
        return;
      }

      event.preventDefault();
      wheelDeltaRef.current += event.deltaY;

      if (Math.abs(wheelDeltaRef.current) < WHEEL_STEP_THRESHOLD) {
        return;
      }

      const direction = wheelDeltaRef.current > 0 ? 1 : -1;
      const didHandle = stepSkills(direction);

      if (didHandle) {
        wheelDeltaRef.current = 0;
      }
    };

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event) => {
      if (!isDeckInFocus() || touchStartYRef.current === null) {
        return;
      }

      const currentY = event.touches[0]?.clientY;

      if (typeof currentY !== "number") {
        return;
      }

      const deltaY = touchStartYRef.current - currentY;
      const currentIndex = activeIndexRef.current;
      const isAtStart = currentIndex <= 0;
      const isAtEnd = currentIndex >= SKILLS.length - 1;
      const wantsForward = deltaY > 0;
      const wantsBackward = deltaY < 0;

      if ((wantsForward && isAtEnd) || (wantsBackward && isAtStart)) {
        return;
      }

      event.preventDefault();

      if (Math.abs(deltaY) < TOUCH_STEP_THRESHOLD) {
        return;
      }

      const direction = deltaY > 0 ? 1 : -1;
      const didHandle = stepSkills(direction);

      if (didHandle) {
        touchStartYRef.current = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const visibleSkills = CARD_SLOTS.map((slot, slotIndex) => ({
    ...slot,
    skill:
      SKILLS[
        (activeIndex + slotIndex - CENTER_SLOT_INDEX + SKILLS.length) %
          SKILLS.length
      ],
  }));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-12 pt-20 sm:px-8 md:pt-24 lg:px-12"
    >
      <style>{`
        @keyframes skill-orbit-glow {
          0%, 100% {
            opacity: 0.18;
            transform: rotate(0deg) scale(0.96);
          }
          50% {
            opacity: 0.42;
            transform: rotate(-180deg) scale(1.04);
          }
        }

        @keyframes skill-hint-pulse {
          0%, 100% {
            opacity: 0.55;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(5px);
          }
        }

        .skill-scroll-card {
          position: absolute;
          overflow: hidden;
          filter: saturate(0.86);
        }

        .skill-scroll-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid transparent;
          background: linear-gradient(145deg, rgba(100,255,231,0.55), transparent 35%, rgba(255,111,216,0.28)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.4;
          transition: opacity 400ms ease;
        }

        .skill-scroll-card:hover::before {
          opacity: 1;
        }

        .skill-orbit-glow {
          animation: skill-orbit-glow 14s ease-in-out infinite;
        }

        .skill-scroll-hint {
          animation: skill-hint-pulse 1.6s ease-in-out infinite;
        }
      `}</style>
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-[0] sm:text-5xl lg:text-6xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300/70 sm:text-xl">
          A quantitative breakdown of my technical capabilities, engineering
          proficiency, and the stack I leverage to solve complex
          problems in artificial intelligence.
        </p>
      </div>

      <div
        ref={deckRef}
        className="relative mt-6 flex min-h-[33rem] flex-col justify-center overflow-hidden md:min-h-[35rem]"
      >
        <div ref={cardsStageRef} className="relative h-[28rem]">
          <div className="skill-orbit-glow pointer-events-none absolute left-1/2 top-[41%] h-[21rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15" />
          <div className="pointer-events-none absolute left-1/2 top-[41%] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#64ffe7]/25 to-transparent" />
          {visibleSkills.map(({ skill, className }, slotIndex) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              slotIndex={slotIndex}
              className={className}
            />
          ))}
        </div>

        <div className="mx-auto mt-2 flex max-w-xl items-center gap-4">
          <span className="h-px flex-1 bg-cyan-300/15" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/65">
            {activeIndex + 1} / {SKILLS.length}
          </p>
          <span className="h-px flex-1 bg-cyan-300/15" />
        </div>
      </div>

    </section>
  );
}
