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
    delayClass: "delay-[0ms]",
    className:
      "left-[-3%] top-[78%] z-0 w-[16%] -translate-y-1/2 -rotate-[34deg] scale-[0.56] opacity-0 blur-[2px]",
  },
  {
    delayClass: "delay-[20ms]",
    className:
      "left-[4%] top-[65%] z-10 w-[17%] -translate-y-1/2 -rotate-[24deg] scale-[0.72] opacity-35 blur-[0.5px]",
  },
  {
    delayClass: "delay-[40ms]",
    className:
      "left-[20%] top-[48%] z-20 w-[19%] -translate-y-1/2 -rotate-[13deg] scale-[0.88] opacity-75",
  },
  {
    delayClass: "delay-[60ms]",
    className:
      "left-1/2 top-[34%] z-40 w-[21%] -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 opacity-100",
  },
  {
    delayClass: "delay-[80ms]",
    className:
      "left-[61%] top-[48%] z-20 w-[19%] -translate-y-1/2 rotate-[13deg] scale-[0.88] opacity-75",
  },
  {
    delayClass: "delay-[100ms]",
    className:
      "left-[79%] top-[65%] z-10 w-[17%] -translate-y-1/2 rotate-[24deg] scale-[0.72] opacity-35 blur-[0.5px]",
  },
  {
    delayClass: "delay-[120ms]",
    className:
      "left-[88%] top-[78%] z-0 w-[16%] -translate-y-1/2 rotate-[34deg] scale-[0.56] opacity-0 blur-[2px]",
  },
];

const CENTER_SLOT_INDEX = Math.floor(CARD_SLOTS.length / 2);
const STEP_COOLDOWN_MS = 190;
const WHEEL_STEP_THRESHOLD = 34;
const TOUCH_STEP_THRESHOLD = 34;
const CARD_TRACK_RADIUS = CENTER_SLOT_INDEX;

function SkillCard({ skill, className = "", delayClass = "" }) {
  const meta = EXPERIENCE_META[skill.experience] ?? EXPERIENCE_META.medium;

  return (
    <article
      className={`group absolute flex min-h-52 flex-col overflow-hidden rounded-[6px] border border-cyan-300/15 bg-[#0d213f]/95 p-6 shadow-[0_0_0_rgba(100,255,231,0)] transition-[left,top,width,transform,opacity,box-shadow,border-color,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-cyan-300/45 hover:shadow-[0_18px_45px_rgba(100,255,231,0.18)] ${delayClass} ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[6px] bg-[radial-gradient(circle_at_25%_0%,rgba(100,255,231,0.18),transparent_36%),radial-gradient(circle_at_85%_18%,rgba(255,111,216,0.12),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-[6px] border border-cyan-200/20 bg-[linear-gradient(145deg,rgba(100,255,231,0.18),transparent_34%,rgba(255,111,216,0.12))] opacity-55 transition-opacity duration-500 group-hover:opacity-100" />
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

  const trackedSkills = SKILLS.map((skill, index) => {
    const distanceFromActive = index - activeIndex;
    const slotIndex = distanceFromActive + CENTER_SLOT_INDEX;
    const isOnTrack = Math.abs(distanceFromActive) <= CARD_TRACK_RADIUS;
    const slot = CARD_SLOTS[slotIndex] ?? CARD_SLOTS[0];

    return {
      skill,
      className: isOnTrack
        ? slot.className
        : distanceFromActive < 0
          ? CARD_SLOTS[0].className
          : CARD_SLOTS[CARD_SLOTS.length - 1].className,
      delayClass: isOnTrack ? slot.delayClass : "delay-[0ms]",
      isOnTrack,
    };
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-12 pt-20 sm:px-8 md:pt-24 lg:px-12"
    >
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
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[24rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 opacity-35 shadow-[0_0_70px_rgba(100,255,231,0.08)] animate-[spin_26s_linear_infinite]" />
          <div className="pointer-events-none absolute left-1/2 top-[46%] h-[18rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/10 opacity-40 animate-[spin_32s_linear_infinite_reverse]" />
          <div className="pointer-events-none absolute left-1/2 top-[41%] h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#64ffe7]/25 to-transparent" />
          {trackedSkills.map(({ skill, className, delayClass, isOnTrack }) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              delayClass={delayClass}
              className={`${className} ${isOnTrack ? "" : "pointer-events-none"}`}
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
