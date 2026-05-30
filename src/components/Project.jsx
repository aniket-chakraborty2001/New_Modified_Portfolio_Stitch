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
    <article
      className="group relative isolate flex h-[31rem] w-full flex-col overflow-hidden rounded-[4px] border border-cyan-300/15 bg-[#0d213f] shadow-[0_22px_56px_rgba(3,22,45,0.42)] transition duration-500 ease-out hover:border-cyan-300/55 hover:shadow-[0_24px_58px_rgba(100,255,231,0.2)] sm:h-[25rem]"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(100,255,231,0.16),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(255,111,216,0.12),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 -skew-x-[18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[310%] group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-[4px] border border-cyan-200/20 bg-[linear-gradient(135deg,rgba(100,255,231,0.16),transparent_30%,transparent_70%,rgba(255,111,216,0.12))] opacity-55 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 border-l border-t border-[#64ffe7]/0 transition duration-500 group-hover:border-[#64ffe7]/80" />
      <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-8 w-8 border-b border-r border-[#64ffe7]/0 transition duration-500 group-hover:border-[#64ffe7]/80" />

      <div className="relative h-40 shrink-0 overflow-hidden bg-[#101820] sm:h-44">
        <Image
          src={project.image}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 1024px) 42rem, (min-width: 640px) 70vw, 100vw"
          className="object-contain p-2 grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/45 via-[#06172f]/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-35" />
        <div className="absolute inset-x-0 top-0 h-16 -translate-y-full bg-gradient-to-b from-[#64ffe7]/20 via-[#64ffe7]/5 to-transparent opacity-0 transition duration-700 group-hover:translate-y-[330%] group-hover:opacity-100" />
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black uppercase leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)] transition duration-500 group-hover:text-[#64ffe7] sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-100/90">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#64ffe7] transition duration-300 group-hover:-translate-y-1 group-hover:text-[#9ffff0] group-hover:drop-shadow-[0_0_14px_rgba(100,255,231,0.55)] sm:text-xs"
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
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-20 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase tracking-[0] sm:text-4xl lg:text-5xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Engineering Archive
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300/75">
          A curated selection of experiments in Generative Artificial Intelligence, computer
          vision, and autonomous systems development.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl px-10 sm:px-16">
        <Swiper
          effect="flip"
          grabCursor
          pagination={{ clickable: true }}
          modules={[EffectFlip, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="projects-flip h-[34rem] w-full overflow-visible pb-12 sm:h-[32rem]"
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
          className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[6px] border border-cyan-300/45 bg-[#0d213f]/90 text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f] sm:h-12 sm:w-12"
        >
          <FiChevronLeft className="h-7 w-7" />
        </button>

        <button
          type="button"
          aria-label="Next project"
          suppressHydrationWarning
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[6px] border border-cyan-300/45 bg-[#0d213f]/90 text-[#64ffe7] transition hover:bg-[#64ffe7] hover:text-[#06172f] sm:h-12 sm:w-12"
        >
          <FiChevronRight className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}
