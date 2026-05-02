import Image from "next/image";

const projects = [
  {
    title: "Berger Exterior Home Layering",
    description: "Implemented in Berger My Color Mobile Application to show users how their home will look in different color combinations. Achieved 90%+ accuracy",
    tags: ["Gemini API", "OpenCv", "Pillow", "Fast API"],
    image: "/Berger_Exterior_Layering.jpg",
  },
  {
    title: "Berger Site Inspection",
    description: "Implemented in Berger My Color App, used to give an estimate of coloring/repainting any building when four side images are given. Achieved accuracy of 94%.",
    tags: ["Computer Vision", "Meta SAM3", "OpenCv", "Pillow", "Fast API", "PyTorch"],
    image: "/berger_site_inspection.jpg",
  },
  {
    title: "Company Attendance System",
    description: "An inhouse project used in Company website to Mark Attendance of employees using face embedding and detection model. Achieved 95%+ accuracy",
    tags: ["ONNX", "DeepFace", "Buffalo", "Face Embedding", "Face recognition", "Fast API"],
    image: "/attendance_system.jpg",
  },
  {
    title: "Cricket Bio-Analytics System",
    description: "Live Camera captures video of cricket players side profile and this system gives an real time feedback, monitor poses, shot classification and gives feedback",
    tags: ["Computer Vision", "YOLO", "OpenCv", "Mediapipe", "RoboFlow", "Streamlit"],
    image: "/cricket_analysis.jpg",
  },
  {
    title: "Instore Analytics",
    description: "A computer vision based system that tracks real time user's count, IN and OUT numbers, gender and age based detection. Finally, gendernand age based analytics",
    tags: ["OpenCv", "YOLO", "Computer Vision", "Line boundary system", "Streamlit", "Face and Gender Detection Model"],
    image: "/instore_analytics.jpg",
  },
  {
    title: "Berger Agentic Voice Agent",
    description: "A self framework and Groq based voice agent that uses Whisper (STT), RAG + LLM and SARVAM TTS service with Berger Internal data. Users asks questions in English, Hindi or Bengali, agent answers back in same language. Not done completely for Bengali.",
    tags: ["Webhook", "VAD", "Groq", "Voice Agent", "RAG", "Whisper STT", "SARVAM TTS", "Fast API"],
    image: "/voice_agent.jpg",
  },
  {
    title: "Rehau Edge Band Maching",
    description: "A Google's ViT based Model that takes a user input image, extract features and suggests more edge bands with same texture pattern. Available too test in Rehau One Mobile application.",
    tags: ["Vision Transformers", "OpenCv", "Hugging face", "Pillow", "Fast API"],
    image: "/edge_band_pattern.jpg",
  },
  {
    title: "Car Inspection Reporting System",
    description: "Computer Vision based system that takes a car 360 degree video, detects different car parts, damages and returns a detailed result in excel format",
    tags: ["YOLO", "OpenCv", "RoboFlow", "Streamlit"],
    image: "/car_inspection_system.jpg",
  },
  {
    title: "PotHole Detection System",
    description: "An AI based computer vision technique that takes car camera feeds of road and detects pothole in real time.",
    tags: ["YOLO", "Computer Vision", "Opencv", "Streamlit"],
    image: "/pothole_detection_system.jpg",
  },
  {
    title: "RAG ChatBot",
    description: "A Retrieval Augmented Generation based Chatbot using opensource data for Hawaiin Wild Fire. Uses Openai API keys to build the RAG",
    tags: ["OpenAI", "RAG", "HuggingFace", "Langchain", "Faiss", "Vector database", "streamlit"],
    image: "/rag_chatbot.jpg",
  },
  {
    title: "OpenClaw Website Agent",
    description: "An OpenClaw based agent that takes an excel file containing some company emails, crawls the website, understand business, pros cons user journey and suggest chnges.",
    tags: ["OpenClaw", "Windows", "Excel", "Agent", "Openai", "Tools"],
    image: "/openclaw_agent.jpg",
  },
  {
    title: "SAM2 Human Tracking",
    description: "Meta SAM2 based human tracking system that detects, tracks, segments humans in a place or store",
    tags: ["Python", "PyTorch", "Meta SAM2", "YOLO", "OpenCv", "Pillow"],
    image: "/opt-signal.jpg",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[3px] border border-cyan-300/15 bg-[#0d213f] shadow-[0_0_0_rgba(100,255,231,0)] transition duration-300 ease-out hover:scale-[1.035] hover:border-cyan-300/45 hover:shadow-[0_22px_55px_rgba(100,255,231,0.24)]">
      <div className="relative h-44 bg-[#101820]">
        <Image
          src={project.image}
          alt={`${project.title} project visual`}
          fill
          sizes="(min-width: 1280px) 29rem, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black uppercase leading-none tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)]">
          {project.title}
        </h3>
        <p className="mt-5 text-sm leading-6 text-slate-100/90">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-black uppercase tracking-[0.12em] text-[#64ffe7]"
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-black uppercase tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)]">
          Current Focus
        </h3>
        <div className="mt-5 h-1 w-28 bg-[#64ffe7]" />

        <article className="mt-12 grid overflow-hidden rounded-[3px] border border-cyan-300/15 bg-[#0d213f] lg:grid-cols-[1fr_1.05fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#64ffe7]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#64ffe7]" />
              Active Development Phrase
            </p>
            <h4 className="mt-7 max-w-lg text-4xl font-black uppercase leading-[1.05] tracking-[0] text-[#dce7ff] drop-shadow-[0_4px_0_rgba(0,0,0,0.48)] sm:text-5xl">
              ITR Calculation: OCR transaction categorization, ITR calculation system 
            </h4>
            <p className="mt-9 max-w-lg text-base leading-7 text-slate-100/90">
              This project develops an autonomous system that takes an
              bank statement pdf from user, reads it using OCR models (MuMarkdown or Chandra OCR),
              categorizes the bank transactions in to different categories using Groq LLM and 
              based on that calculate Income Tax Return on the bank statement
              both in old and new tax regime. 
            </p>
            <p className="mt-8 max-w-lg text-base leading-7 text-slate-100/90">
              The current iteration focus is on reading the bank statement pdf using
              OCR services and using the Groq LLM to categorize the bank transactions
              by observing either the Description, Particulars, Narration or 
              Details columns. 
            </p>
          </div>

          <div className="relative min-h-[22rem] bg-[#101820]">
            <Image
              src="/itr_calculation.jpg"
              alt="PROJECT_SYNERGY focus visual"
              fill
              sizes="(min-width: 1024px) 46rem, 100vw"
              className="object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
