const workbenchMetrics = [
  { label: "GenAI", value: "LLM Ops", color: "from-[#0ea5e9] to-[#14b8a6]" },
  { label: "Vision", value: "CV Models", color: "from-[#d946ef] to-[#fb7185]" },
  { label: "Research", value: "ML Systems", color: "from-[#f59e0b] to-[#0ea5e9]" },
];

const pipelineSteps = [
  "Research",
  "Model",
  "API",
  "Product",
];

const techChips = [
  "PyTorch",
  "OpenCV",
  "FastAPI",
  "RAG",
  "ViT",
  "Gemini",
];

function WorkbenchPanel() {
  return (
    <div className="home-artwork relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-[8px] border border-sky-200/80 bg-white/82 shadow-[0_28px_90px_rgba(14,165,233,0.16),0_0_70px_rgba(217,70,239,0.08)_inset] backdrop-blur sm:max-w-[22rem] xl:max-w-[25rem]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_22%,rgba(14,165,233,0.18)_48%,transparent_74%)] opacity-0" />
      <div className="home-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0ea5e9]/22 via-[#d946ef]/8 to-transparent" />
      <div className="home-orbit absolute inset-7 rounded-full border border-sky-300/25" />
      <div className="home-orbit home-orbit-reverse absolute inset-14 rounded-full border border-[#d946ef]/20" />
      <div className="absolute inset-10 rounded-[8px] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.24),rgba(236,253,245,0.72)_45%,rgba(255,255,255,0.94)_75%)]" />
      <span className="home-satellite absolute left-1/2 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0ea5e9] shadow-[0_0_18px_rgba(14,165,233,0.75)]" />
      <span className="home-satellite home-satellite-two absolute bottom-10 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ff6fd8] shadow-[0_0_18px_rgba(255,111,216,0.85)]" />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#0ea5e9] sm:text-[0.64rem]">
              AI Workbench
            </p>
            <h3 className="mt-1 text-lg font-black uppercase leading-none tracking-[0] text-[#172033] sm:text-2xl">
              Build Console
            </h3>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-sky-200 bg-white/80 px-2.5 py-1">
            <span className="h-2 w-2 rounded-full bg-[#14b8a6] shadow-[0_0_12px_rgba(20,184,166,0.6)]" />
            <span className="text-[0.56rem] font-black uppercase tracking-[0.16em] text-slate-600">
              Live
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {workbenchMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="home-workbench-card rounded-[8px] border border-sky-200/80 bg-white/86 p-2 shadow-[0_12px_28px_rgba(14,165,233,0.1)]"
              style={{ animationDelay: `${index * 160}ms` }}
            >
              <span className={`mb-2 block h-1.5 rounded-full bg-gradient-to-r ${metric.color}`} />
              <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-1 text-[0.68rem] font-black leading-tight text-[#172033] sm:text-xs">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[8px] border border-sky-200/80 bg-white/88 p-3 shadow-[0_12px_34px_rgba(217,70,239,0.08)]">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-slate-500">
              Pipeline
            </p>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#d946ef]">
              94% Ready
            </p>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="relative">
                <div
                  className="home-pipeline-step flex h-12 items-center justify-center rounded-[6px] border border-sky-100 bg-gradient-to-br from-white to-sky-50 text-center text-[0.52rem] font-black uppercase leading-3 tracking-[0.1em] text-slate-700"
                  style={{ animationDelay: `${index * 220}ms` }}
                >
                  {step}
                </div>
                {index < pipelineSteps.length - 1 && (
                  <span className="absolute left-[calc(100%-0.125rem)] top-1/2 z-10 h-px w-2 -translate-y-1/2 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef]" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-sky-100">
            <span className="home-progress block h-full w-[94%] rounded-full bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#d946ef]" />
          </div>
        </div>

        <div className="mt-4 grid flex-1 grid-cols-[1fr_0.8fr] gap-3">
          <div className="rounded-[8px] border border-sky-200/80 bg-[#172033] p-3 text-white shadow-[0_16px_34px_rgba(23,32,51,0.16)]">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#fb7185]" />
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
              <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
            </div>
            <div className="space-y-2 text-[0.56rem] font-semibold leading-none tracking-[0.08em] sm:text-[0.64rem]">
              <p><span className="text-[#38bdf8]">model</span>.load(&quot;vision_vit&quot;)</p>
              <p><span className="text-[#f0abfc]">rag</span>.retrieve(context)</p>
              <p><span className="text-[#5eead4]">api</span>.deploy(&quot;/infer&quot;)</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 rounded-[8px] border border-sky-200/80 bg-white/88 p-3">
            <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-slate-500">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techChips.map((chip, index) => (
                <span
                  key={chip}
                  className="home-tech-chip rounded-full bg-gradient-to-r from-sky-50 to-fuchsia-50 px-2 py-1 text-[0.52rem] font-black uppercase tracking-[0.1em] text-[#0ea5e9] ring-1 ring-sky-200/80"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[92rem] scroll-mt-20 flex-col justify-center gap-5 px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <style>{`
        @keyframes home-rise {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes home-art-float {
          0%, 100% {
            transform: translateY(0) rotateX(0deg) rotateY(0deg);
          }
          50% {
            transform: translateY(-10px) rotateX(2deg) rotateY(-3deg);
          }
        }

        @keyframes home-path-flow {
          0% {
            stroke-dasharray: 0.08 0.92;
            stroke-dashoffset: 1;
            opacity: 0.24;
          }
          45% {
            opacity: 0.95;
          }
          100% {
            stroke-dasharray: 0.36 0.64;
            stroke-dashoffset: 0;
            opacity: 0.42;
          }
        }

        @keyframes home-node-pulse {
          0%, 100% {
            opacity: 0.38;
            transform: scale(0.88);
          }
          50% {
            opacity: 1;
            transform: scale(1.6);
          }
        }

        @keyframes home-ring-pulse {
          0%, 100% {
            transform: scale(0.94);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.54;
          }
        }

        @keyframes home-scan {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          18%, 62% {
            opacity: 1;
          }
          100% {
            transform: translateY(520%);
            opacity: 0;
          }
        }

        @keyframes home-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes home-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .home-reveal {
          animation: home-rise 720ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .home-artwork {
          animation: home-art-float 8s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .home-scan {
          animation: home-scan 4.8s ease-in-out infinite;
        }

        .home-orbit {
          animation: home-orbit 22s linear infinite;
        }

        .home-orbit::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -3px;
          height: 6px;
          width: 6px;
          border-radius: 9999px;
          background: #0ea5e9;
          box-shadow: 0 0 18px rgba(14,165,233,0.78);
          transform: translateX(-50%);
        }

        .home-orbit-reverse {
          animation-duration: 16s;
          animation-direction: reverse;
        }

        .home-satellite {
          transform-origin: 0 8.7rem;
          animation: home-orbit 12s linear infinite;
        }

        .home-satellite-two {
          transform-origin: 0 -7.6rem;
          animation: home-orbit 15s linear infinite reverse;
        }

        .home-highlight {
          background-size: 220% 100%;
          animation: home-shimmer 5s ease-in-out infinite;
        }

        .home-workbench-card,
        .home-pipeline-step,
        .home-tech-chip {
          animation: home-rise 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .home-progress {
          transform-origin: left;
          animation: home-progress-fill 2.8s ease-in-out infinite alternate;
        }

        @keyframes home-progress-fill {
          0% {
            transform: scaleX(0.72);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
      <h2 className="home-reveal text-center text-2xl font-black uppercase tracking-[0.18em] sm:text-3xl lg:text-4xl">
        <span className="animate-pulse bg-gradient-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
          Home
        </span>
      </h2>

      <div className="grid w-full items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="home-reveal text-[clamp(1.85rem,5.2vw,3.55rem)] font-black uppercase leading-[1.04] tracking-[0] text-[#172033] drop-shadow-[0_4px_0_rgba(14,165,233,0.13)] [animation-delay:120ms]">
              Pioneering the next frontier of{" "}
              <span className="home-highlight bg-gradient-to-r from-[#14b8a6] via-[#0ea5e9] to-[#d946ef] bg-clip-text text-transparent">Intelligent Applications.</span>
            </h1>

            <p className="home-reveal mt-4 text-xs font-medium uppercase tracking-[0.38em] text-[#0ea5e9] [animation-delay:220ms] sm:text-sm">
              Developer | Researcher | Engineer
            </p>

            <p className="home-reveal mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-700 [animation-delay:320ms] sm:text-base sm:leading-7 lg:mx-0">
              Dedicated to developing efficient, scalable, and interpretative
              machine learning, deep learning models that bridge the gap between biological
              intelligence and silicon-based computation.
            </p>

            <a
              href="#about"
              className="home-reveal mt-5 inline-flex h-11 items-center justify-center overflow-hidden bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#d946ef] px-7 text-xs font-medium uppercase tracking-[0.24em] text-white shadow-[0_16px_34px_rgba(14,165,233,0.24)] transition hover:shadow-[0_18px_42px_rgba(217,70,239,0.26)] [animation-delay:420ms] sm:h-12 sm:px-8 sm:text-sm"
            >
              Learn More About Me
            </a>
          </div>

          <div className="home-reveal flex justify-center [animation-delay:260ms] lg:justify-end">
            <WorkbenchPanel />
          </div>
      </div>
    </section>
  );
}
