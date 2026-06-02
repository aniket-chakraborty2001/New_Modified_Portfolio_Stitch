// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// const brandLetters = "Anexus".split("");

// const loadingDots = [
//   "bg-[#0ea5e9]",
//   "bg-[#d946ef]",
//   "bg-[#f59e0b]",
//   "bg-[#14b8a6]",
//   "bg-[#2563eb]",
//   "bg-[#fb7185]",
// ];

// export default function Welcome() {
//   const [isVisible, setIsVisible] = useState(true);
//   const overlayRef = useRef(null);
//   const letterRefs = useRef([]);
//   const dotRefs = useRef([]);
//   const lineRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const timeline = gsap.timeline();

//       timeline
//         .fromTo(
//           overlayRef.current,
//           { opacity: 0 },
//           { opacity: 1, duration: 0.28, ease: "power2.out" },
//         )
//         .fromTo(
//           letterRefs.current,
//           {
//             autoAlpha: 0,
//             y: 90,
//             rotateX: -100,
//             rotateZ: -16,
//             scale: 0.55,
//             filter: "blur(18px)",
//           },
//           {
//             autoAlpha: 1,
//             y: 0,
//             rotateX: 0,
//             rotateZ: 0,
//             scale: 1,
//             filter: "blur(0px)",
//             duration: 0.92,
//             ease: "back.out(1.8)",
//             stagger: 0.075,
//           },
//           0.12,
//         )
//         .fromTo(
//           lineRef.current,
//           { autoAlpha: 0, y: 18, filter: "blur(10px)" },
//           {
//             autoAlpha: 1,
//             y: 0,
//             filter: "blur(0px)",
//             duration: 0.62,
//             ease: "power3.out",
//           },
//           0.62,
//         )
//         .to(
//           letterRefs.current,
//           {
//             y: -8,
//             textShadow: "0 0 34px rgba(14,165,233,0.38)",
//             duration: 0.42,
//             ease: "sine.inOut",
//             stagger: {
//               each: 0.045,
//               yoyo: true,
//               repeat: 1,
//             },
//           },
//           1.15,
//         );

//       gsap.to(dotRefs.current, {
//         y: -16,
//         scale: 1.22,
//         duration: 0.42,
//         ease: "sine.inOut",
//         stagger: {
//           each: 0.09,
//           repeat: -1,
//           yoyo: true,
//         },
//       });

//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         scale: 1.03,
//         duration: 0.58,
//         delay: 2.42,
//         ease: "power3.inOut",
//         onComplete: () => setIsVisible(false),
//       });
//     }, overlayRef);

//     return () => ctx.revert();
//   }, []);

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <section
//       ref={overlayRef}
//       aria-label="Welcome to Anexus portfolio"
//       className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-[#172033]"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_24%_74%,rgba(217,70,239,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,249,255,0.92))]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(14,165,233,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/25 shadow-[0_0_90px_rgba(14,165,233,0.14)] sm:h-[38rem] sm:w-[38rem]" />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/20 sm:h-[27rem] sm:w-[27rem]" />

//       <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
//         <p className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.38em] text-[#0ea5e9] sm:text-xs">
//           AI Developer Portfolio
//         </p>

//         <h1 className="flex flex-wrap justify-center text-[clamp(3.4rem,13vw,9.5rem)] font-black uppercase leading-[0.86] tracking-[0] text-[#172033] drop-shadow-[0_8px_0_rgba(14,165,233,0.12)] [perspective:900px]">
//           {brandLetters.map((letter, index) => (
//             <span
//               key={`${letter}-${index}`}
//               ref={(element) => {
//                 letterRefs.current[index] = element;
//               }}
//               className="inline-block bg-gradient-to-br from-[#0f172a] via-[#0ea5e9] to-[#d946ef] bg-clip-text px-0.5 text-transparent will-change-transform"
//             >
//               {letter}
//             </span>
//           ))}
//         </h1>

//         <p
//           ref={lineRef}
//           className="mt-6 max-w-3xl text-sm font-semibold uppercase leading-7 tracking-[0.18em] text-slate-700 sm:text-base sm:leading-8"
//         >
//           Building intelligent applications across generative AI, computer vision,
//           machine learning, and production-ready research systems.
//         </p>

//         <div className="mt-10 flex h-10 items-end justify-center gap-3">
//           {loadingDots.map((dotColor, index) => (
//             <span
//               key={dotColor}
//               ref={(element) => {
//                 dotRefs.current[index] = element;
//               }}
//               className={`h-3.5 w-3.5 rounded-full ${dotColor} shadow-[0_0_18px_rgba(255,255,255,0.5)] sm:h-4 sm:w-4`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const brandLetters = "Anexus".split("");

const loadingDots = [
  "bg-[#0ea5e9]",
  "bg-[#d946ef]",
  "bg-[#f59e0b]",
  "bg-[#14b8a6]",
  "bg-[#2563eb]",
  "bg-[#fb7185]",
];

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(true);
  const overlayRef = useRef(null);
  const letterRefs = useRef([]);
  const dotRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.28, ease: "power2.out" },
        )
        .fromTo(
          letterRefs.current,
          {
            autoAlpha: 0,
            y: 90,
            rotateX: -100,
            rotateZ: -16,
            scale: 0.55,
            filter: "blur(18px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            rotateZ: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.92,
            ease: "back.out(1.8)",
            stagger: 0.075,
          },
          0.12,
        )
        .fromTo(
          lineRef.current,
          { autoAlpha: 0, y: 18, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.62,
            ease: "power3.out",
          },
          0.62,
        )
        .to(
          letterRefs.current,
          {
            y: -8,
            textShadow: "0 0 34px rgba(14,165,233,0.38)",
            duration: 0.42,
            ease: "sine.inOut",
            stagger: {
              each: 0.045,
              yoyo: true,
              repeat: 1,
            },
          },
          1.15,
        );

      gsap.to(dotRefs.current, {
        y: -16,
        scale: 1.22,
        duration: 0.42,
        ease: "sine.inOut",
        stagger: {
          each: 0.09,
          repeat: -1,
          yoyo: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        scale: 1.03,
        duration: 0.58,
        delay: 2.42,
        ease: "power3.inOut",
        onComplete: () => setIsVisible(false),
      });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      ref={overlayRef}
      aria-label="Welcome to Anexus portfolio"
      className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-[#172033]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_24%_74%,rgba(217,70,239,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(240,249,255,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(14,165,233,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/25 shadow-[0_0_90px_rgba(14,165,233,0.14)] sm:h-[38rem] sm:w-[38rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/20 sm:h-[27rem] sm:w-[27rem]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.38em] text-[#0ea5e9] sm:text-xs">
          AI Developer Portfolio
        </p>

        <h1 className="flex flex-wrap justify-center text-[clamp(3.4rem,13vw,9.5rem)] font-black uppercase leading-[0.86] tracking-[0] text-[#172033] drop-shadow-[0_8px_0_rgba(14,165,233,0.12)] [perspective:900px]">
          {brandLetters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(element) => {
                letterRefs.current[index] = element;
              }}
              style={{ visibility: "hidden" }}
              className="inline-block bg-gradient-to-br from-[#0f172a] via-[#0ea5e9] to-[#d946ef] bg-clip-text px-0.5 text-transparent will-change-transform"
            >
              {letter}
            </span>
          ))}
        </h1>

        <p
          ref={lineRef}
          style={{ visibility: "hidden" }}
          className="mt-6 max-w-3xl text-sm font-semibold uppercase leading-7 tracking-[0.18em] text-slate-700 sm:text-base sm:leading-8"
        >
          Building intelligent applications across generative AI, computer vision,
          machine learning, and production-ready research systems.
        </p>

        <div className="mt-10 flex h-10 items-end justify-center gap-3">
          {loadingDots.map((dotColor, index) => (
            <span
              key={dotColor}
              ref={(element) => {
                dotRefs.current[index] = element;
              }}
              className={`h-3.5 w-3.5 rounded-full ${dotColor} shadow-[0_0_18px_rgba(255,255,255,0.5)] sm:h-4 sm:w-4`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
