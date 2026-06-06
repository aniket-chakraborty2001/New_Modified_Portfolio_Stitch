"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 18;

export default function MouseTrail() {
  const dotRefs = useRef([]);

  useEffect(() => {
    const dots = dotRefs.current;
    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId = 0;
    let isPointerActive = false;

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      isPointerActive = true;
    };

    const animateTrail = () => {
      positions[0].x += (pointer.x - positions[0].x) * 0.32;
      positions[0].y += (pointer.y - positions[0].y) * 0.32;

      for (let index = 1; index < positions.length; index += 1) {
        positions[index].x += (positions[index - 1].x - positions[index].x) * 0.26;
        positions[index].y += (positions[index - 1].y - positions[index].y) * 0.26;
      }

      dots.forEach((dot, index) => {
        if (!dot) {
          return;
        }

        const scale = 1 - index / TRAIL_LENGTH;
        const opacity = isPointerActive ? Math.max(0.08, scale * 0.52) : 0;

        dot.style.opacity = opacity.toString();
        dot.style.transform = `translate3d(${positions[index].x}px, ${positions[index].y}px, 0) translate(-50%, -50%) scale(${Math.max(0.28, scale)})`;
      });

      animationFrameId = window.requestAnimationFrame(animateTrail);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameId = window.requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-998 hidden sm:block"
    >
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            dotRefs.current[index] = element;
          }}
          className="absolute left-0 top-0 h-4 w-4 rounded-full bg-red-800/70 opacity-0 blur-[1px] will-change-transform"
          style={{
            boxShadow: "0 0 18px rgba(252, 165, 165, 0.38)",
          }}
        />
      ))}
    </div>
  );
}
