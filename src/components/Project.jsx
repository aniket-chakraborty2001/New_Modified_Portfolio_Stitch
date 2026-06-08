"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { EffectFlip, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    title: "Berger Exterior Home Layering",
    description: "Implemented in Berger My Color Mobile Application to show users how their home will look in different color combinations. Achieved 90%+ accuracy",
    tags: ["Gemini API", "OpenCv", "Pillow", "Fast API"],
    image: "/projects/demo_project.png",
  },
  {
    title: "Berger Site Inspection",
    description: "Implemented in Berger My Color App, used to give an estimate of coloring/repainting any building when four side images are given. Achieved accuracy of 94%.",
    tags: ["Computer Vision", "Meta SAM3", "OpenCv", "Pillow", "Fast API", "PyTorch"],
    image: "/projects/demo_project.png",
  },
  {
    title: "Company Attendance System",
    description: "An inhouse project used in Company website to Mark Attendance of employees using face embedding and detection model. Achieved 95%+ accuracy",
    tags: ["ONNX", "DeepFace", "Buffalo", "Face Embedding", "Face recognition", "Fast API"],
    image: "/projects/demo_project.png",
  },
  {
    title: "Cricket Bio-Analytics System",
    description: "Live Camera captures video of cricket players side profile and this system gives an real time feedback, monitor poses, shot classification and gives feedback",
    tags: ["Computer Vision", "YOLO", "OpenCv", "Mediapipe", "RoboFlow", "Streamlit"],
    image: "/projects/demo_project.png",
  },
  {
    title: "Rehau Edge Band Maching",
    description: "A Google's ViT based Model that takes a user input image, extract features and suggests more edge bands with same texture pattern. Available too test in Rehau One Mobile application.",
    tags: ["Vision Transformers", "OpenCv", "Hugging face", "Pillow", "Fast API"],
    image: "/projects/demo_project.png",
  },
  {
    title: "RAG ChatBot",
    description: "A Retrieval Augmented Generation based Chatbot using opensource data for Hawaiin Wild Fire. Uses Openai API keys to build the RAG",
    tags: ["OpenAI", "RAG", "HuggingFace", "Langchain", "Faiss", "Vector database", "streamlit"],
    image: "/projects/demo_project.png",
  }
];

function ProjectCard({ project }) {
  return (
    <article className="group relative isolate flex h-[24.5rem] w-full flex-col overflow-hidden rounded-[4px] border border-yellow-200 bg-white shadow-[0_22px_56px_rgba(0,0,0,0.22)] transition duration-500 ease-out hover:border-[#facc15] hover:shadow-[0_24px_58px_rgba(250,204,21,0.16)] sm:h-[21.5rem] sm:flex-row">
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(250,204,21,0.12),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(34,197,94,0.1),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 -skew-x-[18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[310%] group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-[4px] border border-white/35 bg-[linear-gradient(135deg,rgba(250,204,21,0.12),transparent_32%,transparent_70%,rgba(34,197,94,0.1))] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 border-l border-t border-[#facc15]/0 transition duration-500 group-hover:border-[#facc15]/80" />
      <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-8 w-8 border-b border-r border-[#facc15]/0 transition duration-500 group-hover:border-[#facc15]/80" />

      {/* Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-white sm:h-full sm:w-[55%]">
        <Image
          src={project.image}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 640px) 55%, 100vw"
          className="object-contain transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/0 to-transparent opacity-45 transition duration-500 group-hover:opacity-10 sm:bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="text-base font-black uppercase leading-tight tracking-[0] text-[#111111] drop-shadow-[0_3px_0_rgba(250,204,21,0.12)] transition duration-500 group-hover:text-[#16a34a] sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            {project.description}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#16a34a] transition duration-300 group-hover:-translate-y-0.5 group-hover:text-[#ca8a04] group-hover:drop-shadow-[0_0_14px_rgba(250,204,21,0.22)] sm:text-[0.68rem]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  const swiperRef = useRef(null);

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)] px-5 pb-20 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      {/* Pagination dot styles — scoped to this section only */}
      <style>{`
        .projects-flip .swiper-pagination {
          position: relative;
          bottom: auto;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .projects-flip .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          opacity: 0.35;
          background: #facc15;
          transition: opacity 0.3s, transform 0.3s, background 0.3s;
          margin: 0 !important;
        }
        .projects-flip .swiper-pagination-bullet:nth-child(1) { background: #facc15; }
        .projects-flip .swiper-pagination-bullet:nth-child(2) { background: #16a34a; }
        .projects-flip .swiper-pagination-bullet:nth-child(3) { background: #facc15; }
        .projects-flip .swiper-pagination-bullet:nth-child(4) { background: #16a34a; }
        .projects-flip .swiper-pagination-bullet:nth-child(5) { background: #facc15; }
        .projects-flip .swiper-pagination-bullet:nth-child(6) { background: #16a34a; }
        .projects-flip .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.4);
        }
      `}</style>

      <div className="text-center">
        <h2 className="text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
          <span className="text-[#facc15]">Engineering Archive</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-semibold leading-6 text-white sm:text-base">
          A curated selection of experiments in Generative Artificial Intelligence, computer
          vision, and autonomous systems development.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-4xl px-10 sm:px-16">
        <Swiper
          effect="flip"
          grabCursor
          pagination={{ clickable: true }}
          modules={[EffectFlip, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="projects-flip w-full overflow-visible"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="flex items-stretch">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous project"
          suppressHydrationWarning
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[6px] border border-yellow-300/70 bg-white text-[#16a34a] shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition hover:bg-[#facc15] hover:text-[#111111] sm:h-12 sm:w-12"
        >
          <FiChevronLeft className="h-7 w-7" />
        </button>

        <button
          type="button"
          aria-label="Next project"
          suppressHydrationWarning
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[6px] border border-yellow-300/70 bg-white text-[#16a34a] shadow-[0_12px_28px_rgba(0,0,0,0.14)] transition hover:bg-[#facc15] hover:text-[#111111] sm:h-12 sm:w-12"
        >
          <FiChevronRight className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}
