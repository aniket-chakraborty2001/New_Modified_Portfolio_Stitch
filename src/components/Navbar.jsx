"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Certificates",
  "Experience",
  "Education",
  "Contact",
];

const trackedSectionIds = [
  "home",
  "about",
  "projects",
  "skills",
  "certificates",
  "experience",
  "education",
  "contact",
];

export default function Navbar() {
  const activeLockUntilRef = useRef(0);
  const clickAnimationTimeoutRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState(null);

  useEffect(() => {
    let animationFrameId = 0;

    const getScrollTop = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const getPageIdFromScroll = () => {
      const navbarOffset = 96;
      const activationPoint = getScrollTop() + navbarOffset;

      return (
        [...trackedSectionIds].reverse().find((id) => {
          const section = document.getElementById(id);

          return section && section.offsetTop <= activationPoint;
        }) ?? "home"
      );
    };

    const updateActiveSection = () => {
      if (Date.now() < activeLockUntilRef.current) {
        return;
      }

      setActiveSection(getPageIdFromScroll());
    };

    const requestActiveSectionUpdate = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateActiveSection);
    };

    requestActiveSectionUpdate();

    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    document.addEventListener("scroll", requestActiveSectionUpdate, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", requestActiveSectionUpdate);
    window.addEventListener("hashchange", requestActiveSectionUpdate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      document.removeEventListener("scroll", requestActiveSectionUpdate, {
        capture: true,
      });
      window.removeEventListener("resize", requestActiveSectionUpdate);
      window.removeEventListener("hashchange", requestActiveSectionUpdate);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (clickAnimationTimeoutRef.current) {
        window.clearTimeout(clickAnimationTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (event, id) => {
    if (!trackedSectionIds.includes(id)) {
      return;
    }

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    event.preventDefault();
    activeLockUntilRef.current = Date.now() + 900;
    if (clickAnimationTimeoutRef.current) {
      window.clearTimeout(clickAnimationTimeoutRef.current);
    }
    setClickedSection(id);
    clickAnimationTimeoutRef.current = window.setTimeout(() => {
      setClickedSection(null);
    }, 620);
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-100/10 bg-[#06172f]/90 backdrop-blur-md">
      <style>{`
        @keyframes nav-glass-pop {
          0% {
            opacity: 0.72;
            transform: scale(0.78);
            filter: blur(10px);
          }
          45% {
            opacity: 1;
            transform: scale(1.08);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes nav-glass-shine {
          0% {
            transform: translateX(-140%) skewX(-18deg);
            opacity: 0;
          }
          35% {
            opacity: 0.85;
          }
          100% {
            transform: translateX(145%) skewX(-18deg);
            opacity: 0;
          }
        }
      `}</style>
      <nav className="mx-auto flex min-h-20 w-full max-w-[92rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-8 xl:px-10">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="shrink-0 text-xl font-black tracking-[-0.04em] text-[#64ffe7] sm:text-2xl"
        >
          A(I)NIKET
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-4 2xl:gap-5">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            const isClicked = clickedSection === id;

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                className={`group relative isolate overflow-hidden rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] transition duration-300 hover:text-[#64ffe7] xl:px-3.5 xl:text-sm xl:tracking-[0.24em] ${
                  isActive
                    ? "border border-white/20 bg-white/10 text-[#64ffe7] shadow-[0_8px_30px_rgba(100,255,231,0.14),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl"
                    : "text-slate-300/75 hover:bg-white/[0.055] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:backdrop-blur-md"
                } ${isClicked ? "animate-[nav-glass-pop_620ms_cubic-bezier(0.22,1,0.36,1)]" : ""}`}
              >
                <span
                  className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.34),rgba(255,255,255,0.08)_34%,rgba(100,255,231,0.08)_62%,transparent_76%)] transition duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent ${
                    isClicked ? "animate-[nav-glass-shine_620ms_ease-out]" : "opacity-0"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute inset-x-3 bottom-1 -z-10 h-px bg-[#64ffe7]/70 transition duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />
                <span
                  className={`relative transition duration-300 ${
                    isClicked ? "drop-shadow-[0_0_12px_rgba(100,255,231,0.75)]" : ""
                  }`}
                >
                  {item}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 text-slate-300/80 sm:gap-3">
          <a
            href="https://github.com/aniket-chakraborty2001/"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md transition hover:border-[#64ffe7]/60 hover:bg-[#64ffe7]/15 hover:text-[#64ffe7]"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-chakraborty20022001/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md transition hover:border-[#64ffe7]/60 hover:bg-[#64ffe7]/15 hover:text-[#64ffe7]"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download resume"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md transition hover:border-[#64ffe7]/60 hover:bg-[#64ffe7]/15 hover:text-[#64ffe7]"
          >
            <HiOutlineDownload className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
