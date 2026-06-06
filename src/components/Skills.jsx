"use client";

import Image from "next/image";
import { createRef, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "Numpy",        icon: "/icons/numpy.png",       timeline: "3+ Years",   experience: "Advanced"     },
  { name: "Pandas",       icon: "/icons/pandas.png",      timeline: "3+ Years",   experience: "Advanced"     },
  { name: "Matplotlib",   icon: "/icons/matplotlib.png",  timeline: "3+ Years",   experience: "Advanced"     },
  { name: "Scikit-learn", icon: "/icons/scikitlearn.png", timeline: "3+ Years",   experience: "Advanced"     },
  { name: "Opencv",       icon: "/icons/opencv.png",      timeline: "1.5+ Years", experience: "Advanced"     },
  { name: "Pillow",       icon: "/icons/pillow.png",      timeline: "1+ Years",   experience: "Advanced"     },
  { name: "Tensorflow",   icon: "/icons/tensorFlow.png",  timeline: "1.5+ Years", experience: "Advanced"     },
  { name: "Pytorch",      icon: "/icons/pytorch.png",     timeline: "1+ Years",   experience: "Advanced"     },
  { name: "Hugging face", icon: "/icons/hf.png",          timeline: "1+ Years",   experience: "Advanced"     },
  { name: "Langchain",    icon: "/icons/langchain.png",   timeline: "1+ Years",   experience: "Intermediate" },
];

/**
 * Each card starts at a unique scattered offset (position + rotation + scale)
 * and animates into its grid slot as the scroll progresses.
 * Offsets are tuned so cards feel "thrown" from different directions.
 */
const SCATTER_OFFSETS = [
  { x: -420, y: -180, rotation: -32, scale: 0.52 },
  { x:  220, y: -260, rotation:  24, scale: 0.48 },
  { x: -300, y:  110, rotation: -20, scale: 0.58 },
  { x:  360, y: -100, rotation:  34, scale: 0.50 },
  { x: -180, y:  240, rotation: -14, scale: 0.56 },
  { x:  300, y:  200, rotation:  22, scale: 0.48 },
  { x: -460, y:   30, rotation: -38, scale: 0.46 },
  { x:  420, y:   70, rotation:  28, scale: 0.52 },
  { x:  -70, y: -300, rotation:  -9, scale: 0.60 },
  { x:  130, y:  280, rotation:  16, scale: 0.54 },
];

// easeInOutQuad in JS (mirrors GSAP power2.inOut)
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ─── Single card ──────────────────────────────────────────────────────────────
function SkillCard({ skill, cardRef }) {
  const glareRef = useRef(null);

  useEffect(() => {
    const card  = cardRef.current;
    const glare = glareRef.current;
    if (!card || !glare) return;

    const onMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      gsap.to(card, {
        rotateY: x * 18, rotateX: -y * 18, duration: 0.2,
        ease: "power2.out", transformPerspective: 650,
      });
      gsap.set(glare, {
        background: `radial-gradient(circle at ${e.clientX - left}px ${e.clientY - top}px, rgba(32,178,170,0.24) 0%, transparent 60%)`,
        opacity: 1,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0, rotateX: 0, duration: 0.65,
        ease: "elastic.out(1, 0.55)", transformPerspective: 650,
      });
      gsap.to(glare, { opacity: 0, duration: 0.3 });
    };

    card.addEventListener("mousemove",  onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove",  onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [cardRef]);

  return (
    <div
      ref={cardRef}
      style={{ transformStyle: "preserve-3d", willChange: "transform, opacity" }}
      className="group relative flex h-46 flex-col overflow-hidden rounded-xl border border-[#20b2aa]/55 bg-[#20b2aa]/18 p-4 shadow-[0_18px_44px_rgba(32,178,170,0.16)] backdrop-blur-[2px] transition-[border-color] duration-300 hover:border-[#20b2aa]/80"
    >
      {/* spotlight glare */}
      <span ref={glareRef} className="pointer-events-none absolute inset-0 rounded-xl opacity-0" />

      {/* accent bar */}
      <span className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-[#0ea5e9] via-[#14b8a6] to-[#d946ef] transition-transform duration-360ms ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      {/* icon */}
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[#20b2aa]/12 ring-1 ring-[#20b2aa]/45">
        <Image src={skill.icon} alt={`${skill.name} icon`} fill sizes="2.5rem" className="object-contain p-1.5" />
      </div>

      {/* timeline */}
      <span className="absolute right-3.5 top-3.5 text-[10px] font-black uppercase tracking-[0.13em] text-[#0ea5e9]">
        {skill.timeline}
      </span>

      {/* name */}
      <h3 className="mt-auto text-[0.95rem] font-black leading-tight tracking-tight text-[#172033]">
        {skill.name}
      </h3>

      {/* level */}
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {skill.experience}
      </p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  const sectionRef  = useRef(null);
  const stickyRef   = useRef(null);
  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useMemo(() => SKILLS.map(() => createRef()), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.map((r) => r.current).filter(Boolean);

      // 1. Set every card to its scattered starting state
      cards.forEach((card, i) => {
        const o = SCATTER_OFFSETS[i];
        gsap.set(card, { x: o.x, y: o.y, rotation: o.rotation, scale: o.scale, opacity: 0 });
      });

      // 2. Heading + subtitle entrance
      gsap.fromTo(
        [headingRef.current, subtitleRef.current],
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      // 3. Master scroll-scrub — cards fly into their grid slots
      //    Each card has a staggered window within the overall scrub.
      const STAGGER_SHARE = 0.08; // fraction of total progress per card offset
      const CARD_WINDOW   = 0.32; // fraction of total progress each card's tween spans

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start:   "top top",
        end:     "bottom bottom",
        scrub:   1.2,
        onUpdate(self) {
          const p = self.progress; // 0 → 1

          cards.forEach((card, i) => {
            const start = i * STAGGER_SHARE;
            const end   = start + CARD_WINDOW;
            const raw   = Math.max(0, Math.min(1, (p - start) / (end - start)));
            const ease  = easeInOut(raw);
            const o     = SCATTER_OFFSETS[i];

            gsap.set(card, {
              x:        o.x        * (1 - ease),
              y:        o.y        * (1 - ease),
              rotation: o.rotation * (1 - ease),
              scale:    o.scale    + (1 - o.scale) * ease,
              opacity:  ease,
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [cardRefs]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 mx-auto w-full max-w-368 scroll-mt-20"
      style={{ height: "300vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-12"
      >
        {/* decorative rings */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-176 w-176 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/16 animate-[spin_32s_linear_infinite]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/13 animate-[spin_42s_linear_infinite_reverse]" />

        {/* heading */}
        <h2
          ref={headingRef}
          className="mb-3 text-center text-3xl font-black uppercase tracking-normal opacity-0 sm:text-4xl lg:text-5xl"
        >
          <span className="animate-pulse bg-linear-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        <p
          ref={subtitleRef}
          className="mx-auto mb-12 mt-4 max-w-3xl text-center text-sm font-semibold leading-6 text-slate-700 opacity-0 sm:text-base"
        >
          A quantitative breakdown of my technical capabilities, engineering
          proficiency, and the stack I leverage to solve complex problems in AI.
        </p>

        {/* card grid — 5 columns × 2 rows */}
        <div className="grid w-full max-w-215 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2">
          {SKILLS.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              cardRef={cardRefs[i]}
            />
          ))}
        </div>

        {/* counter */}
        <div className="mt-6 flex items-center gap-4">
          <span className="h-px w-16 bg-sky-300/45" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            {SKILLS.length} skills
          </p>
          <span className="h-px w-16 bg-sky-300/45" />
        </div>

        {/* scroll nudge — fades out once scrolled */}
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 animate-bounce">
          scroll to reveal
        </p>
      </div>
    </section>
  );
}
