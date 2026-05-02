"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Certificates",
  "Internship",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills"];

    const updateActiveSection = () => {
      const activationLine = 120;
      const currentSection = sectionIds.reduce((activeId, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return activeId;
        }

        const sectionTop = section.getBoundingClientRect().top;

        return sectionTop <= activationLine ? id : activeId;
      }, "home");

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-100/10 bg-[#06172f]/90 backdrop-blur-md">
      <nav className="mx-auto flex min-h-20 w-full max-w-[92rem] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
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
                onClick={() => setActiveSection(id)}
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
