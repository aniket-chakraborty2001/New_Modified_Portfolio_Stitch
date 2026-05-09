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
];

export default function Navbar() {
  const activeLockUntilRef = useRef(0);
  const [activeSection, setActiveSection] = useState("home");

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
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-100/10 bg-[#06172f]/90 backdrop-blur-md">
      <nav className="mx-auto flex min-h-20 w-full max-w-[92rem] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="shrink-0 text-xl font-black tracking-[-0.04em] text-[#64ffe7] sm:text-2xl"
        >
          A(I)NIKET
        </a>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(event) => handleNavClick(event, id)}
                className={`text-sm font-medium uppercase tracking-[0.3em] transition hover:text-[#64ffe7] ${
                  isActive
                    ? "border-b-4 border-[#64ffe7] pb-2 text-[#64ffe7]"
                    : "text-slate-300/75"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4 text-slate-300/80 sm:gap-6">
          <a
            href="https://github.com/aniket-chakraborty2001/"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#64ffe7]"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-chakraborty20022001/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#64ffe7]"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            aria-label="Download resume"
            className="transition hover:text-[#64ffe7]"
          >
            <HiOutlineDownload className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
