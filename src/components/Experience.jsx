import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

const experiences = [
  {
    role: "AI Researcher",
    company: "Webbies",
    period: "2025 April - Present",
    location: "Kolkata, West Bengal",
    image: "/experience/Webbies_logo.png",
    imageClassName: "object-contain p-8",
    link: "https://webbies.co/",
    summary:
      "Developing applied AI systems that automate document intelligence, model orchestration, and production research workflows.",
    highlights: [
      "Built OCR and LLM powered bank statement analysis pipelines.",
      "Designed GenAI workflows for categorization, extraction, and reporting.",
      "Collaborated on scalable ML prototypes from research to deployment.",
    ],
    stack: ["Python", "LLM", "OCR", "FastAPI", "Docker"],
  },
  {
    role: "Research Intern",
    company: "IPCR Kolkata",
    period: "2024",
    location: "Kolkata, West Bengal",
    image: "/experience/Ipcr_logo.png",
    imageClassName: "object-contain p-4 scale-110",
    link: "https://www.pulmocareindia.org/",
    summary:
      "Worked on research-oriented data analysis, collaborative experimentation, and practical machine learning implementation.",
    highlights: [
      "Prepared datasets for experimental and analytical workflows.",
      "Implemented Python scripts for research automation.",
      "Documented insights, methods, and reproducible experiment outputs.",
    ],
    stack: ["Python", "Research", "EDA", "ML", "Reports"],
  },
  {
    role: "Independent AI Builder",
    company: "Personal Research Lab",
    period: "2023 - Present",
    location: "Remote",
    summary:
      "Building portfolio-grade AI applications across computer vision, NLP, document processing, and retrieval systems.",
    highlights: [
      "Created end-to-end ML and deep learning proof-of-concepts.",
      "Integrated vector search, model APIs, and interactive dashboards.",
      "Explored deployment workflows for reliable AI applications.",
    ],
    stack: ["PyTorch", "OpenCV", "Langchain", "SQL", "Next.js"],
  },
];

function ExperienceImage({ experience, index }) {
  if (!experience.image) {
    return (
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#07131e] sm:h-64">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,255,231,0.18),transparent_52%)]" />
        <HiOutlineBriefcase className="relative h-20 w-20 text-[#64ffe7]/80" />
        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#64ffe7]">
          <HiOutlineBriefcase className="h-5 w-5" />
          Experience 0{index + 1}
        </div>
      </div>
    );
  }

  const image = (
    <div className="relative h-56 overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#07131e] sm:h-64">
      <Image
        src={experience.image}
        alt={`${experience.company} experience visual`}
        fill
        sizes="(min-width: 1024px) 28rem, 100vw"
        className={`grayscale transition duration-500 group-hover:grayscale-0 ${
          experience.imageClassName ?? "object-contain p-8"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/75 via-transparent to-[#06172f]/20" />
      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#64ffe7]">
        <HiOutlineBriefcase className="h-5 w-5" />
        Experience 0{index + 1}
      </div>
      {experience.link && (
        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-cyan-300/45 bg-[#06172f]/85 text-[#64ffe7] backdrop-blur-sm transition group-hover:bg-[#64ffe7] group-hover:text-[#06172f]">
          <FiExternalLink className="h-5 w-5" />
        </div>
      )}
    </div>
  );

  if (!experience.link) {
    return image;
  }

  return (
    <a
      href={experience.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${experience.company} website`}
      className="block"
    >
      {image}
    </a>
  );
}

function ExperienceCard({ experience, index }) {
  return (
    <article className="group flex h-full flex-col rounded-[8px] border border-cyan-300/15 bg-[#0d213f]/90 p-6 shadow-[0_0_0_rgba(100,255,231,0)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/45 hover:shadow-[0_22px_55px_rgba(100,255,231,0.18)]">
      <ExperienceImage experience={experience} index={index} />

      <div className="mt-7 flex flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#64ffe7]">
              {experience.company}
            </p>
            <h3 className="mt-4 break-words text-3xl font-black leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)] sm:text-4xl">
              {experience.role}
            </h3>
          </div>

        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-300/75">
          <span className="flex items-center gap-2">
            <HiOutlineCalendar className="h-5 w-5 text-[#64ffe7]" />
            {experience.period}
          </span>
          <span className="flex items-center gap-2">
            <HiOutlineLocationMarker className="h-5 w-5 text-[#64ffe7]" />
            {experience.location}
          </span>
        </div>

        <p className="mt-7 text-base leading-7 text-slate-200/85 sm:text-lg">
          {experience.summary}
        </p>

        <div className="mt-7 space-y-4">
          {experience.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-100/90 sm:text-base">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#64ffe7]" />
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.stack.map((item) => (
            <span
              key={item}
              className="rounded-[3px] border border-cyan-300/15 bg-[#071d38] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#64ffe7]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-24 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-[0] sm:text-5xl lg:text-6xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Experience_History
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300/70 sm:text-xl">
          A focused timeline of applied AI research, engineering work, and
          production-oriented experimentation.
        </p>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <div key={`${experience.company}-${experience.role}`} className="h-full">
            <ExperienceCard experience={experience} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
