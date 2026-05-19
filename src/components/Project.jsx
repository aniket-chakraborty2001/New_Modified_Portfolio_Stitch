import Image from "next/image";

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

function ProjectCard({ project, index }) {
  return (
    <article
      className="project-card group relative isolate overflow-hidden rounded-[3px] border border-cyan-300/15 bg-[#0d213f] shadow-[0_0_0_rgba(100,255,231,0)] transition duration-500 ease-out hover:-translate-y-3 hover:border-cyan-300/55 hover:shadow-[0_28px_70px_rgba(100,255,231,0.24)]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(100,255,231,0.16),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(255,111,216,0.12),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="project-card-sheen pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 border-l border-t border-[#64ffe7]/0 transition duration-500 group-hover:border-[#64ffe7]/80" />
      <span className="pointer-events-none absolute bottom-4 right-4 z-20 h-8 w-8 border-b border-r border-[#64ffe7]/0 transition duration-500 group-hover:border-[#64ffe7]/80" />

      <div className="relative h-44 overflow-hidden bg-[#101820]">
        <Image
          src={project.image}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 1280px) 29rem, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06172f]/80 via-[#06172f]/15 to-transparent opacity-80 transition duration-500 group-hover:opacity-55" />
        <div className="project-scan absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#64ffe7]/20 via-[#64ffe7]/5 to-transparent opacity-0 group-hover:opacity-100" />
      </div>
      <div className="relative p-6">
        <h3 className="transition duration-500 text-xl font-black uppercase leading-none tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)] group-hover:text-[#64ffe7]">
          {project.title}
        </h3>
        <p className="mt-5 text-sm leading-6 text-slate-100/90">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-5">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className="project-tag text-xs font-black uppercase tracking-[0.12em] text-[#64ffe7]"
              style={{ transitionDelay: `${tagIndex * 35}ms` }}
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
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-20 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      <style>{`
        @keyframes project-rise {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.96);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes project-sheen {
          0%, 42% {
            transform: translateX(0) skewX(-18deg);
            opacity: 0;
          }
          58% {
            opacity: 1;
          }
          100% {
            transform: translateX(310%) skewX(-18deg);
            opacity: 0;
          }
        }

        @keyframes project-scan {
          0% {
            transform: translateY(-120%);
          }
          100% {
            transform: translateY(330%);
          }
        }

        .project-card {
          animation: project-rise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .project-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(100,255,231,0.5), transparent 28%, transparent 70%, rgba(255,111,216,0.38)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 420ms ease;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card-sheen {
          transform: translateX(0) skewX(-18deg);
        }

        .project-card:hover .project-card-sheen {
          animation: project-sheen 950ms ease-out;
        }

        .project-scan {
          animation: project-scan 2.8s ease-in-out infinite;
        }

        .project-tag {
          display: inline-block;
          transition: transform 260ms ease, color 260ms ease, text-shadow 260ms ease;
        }

        .project-card:hover .project-tag {
          transform: translateY(-3px);
          color: #9ffff0;
          text-shadow: 0 0 14px rgba(100,255,231,0.55);
        }
      `}</style>
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

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
