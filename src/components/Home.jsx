"use client";

import { useState } from "react";

const workbenchMetrics = [
  { label: "GenAI", value: "LLM Ops", color: "from-[#facc15] to-[#16a34a]" },
  { label: "Vision", value: "CV Models", color: "from-[#16a34a] to-[#facc15]" },
  { label: "Research", value: "ML Systems", color: "from-[#facc15] to-[#22c55e]" },
];

const pipelineSteps = ["Research", "Model", "API", "Product"];

const techChips = ["PyTorch", "OpenCV", "FastAPI", "RAG", "ViT", "Gemini"];

const splitMetricTransforms = [
  "-translate-x-4 -translate-y-1 rotate-[-2deg]",
  "translate-y-2 scale-[1.02]",
  "translate-x-4 -translate-y-1 rotate-[2deg]",
];

function WorkbenchPanel() {
  const [isSplit, setIsSplit] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsSplit(true)}
      onMouseLeave={() => setIsSplit(false)}
      onFocus={() => setIsSplit(true)}
      onBlur={() => setIsSplit(false)}
      tabIndex={0}
      className="home-artwork relative mx-auto aspect-[1/1.15] w-full max-w-[18rem] overflow-visible rounded-lg border border-yellow-300/80 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.32),0_0_70px_rgba(250,204,21,0.08)_inset] outline-none focus-visible:border-[#facc15] focus-visible:shadow-[0_0_0_4px_rgba(250,204,21,0.2),0_28px_90px_rgba(0,0,0,0.32)] sm:max-w-88 xl:max-w-100"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_22%,rgba(250,204,21,0.14)_48%,transparent_74%)] opacity-0" />
      <div className="home-scan absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#facc15]/22 via-[#22c55e]/8 to-transparent" />
      <div className="home-orbit absolute inset-7 rounded-full border border-yellow-300/25" />
      <div className="home-orbit home-orbit-reverse absolute inset-14 rounded-full border border-[#22c55e]/20" />
      <div className="absolute inset-10 rounded-lg bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),rgba(240,253,244,0.76)_45%,rgba(255,255,255,0.96)_75%)]" />
      <span className="home-satellite absolute left-1/2 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-[#facc15] shadow-[0_0_18px_rgba(250,204,21,0.75)]" />
      <span className="home-satellite home-satellite-two absolute bottom-10 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.75)]" />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        <div
          className={`flex items-center justify-between transition duration-500 ease-out ${
            isSplit ? "-translate-y-3 scale-[0.98]" : "translate-y-0 scale-100"
          }`}
        >
          <div>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#16a34a] sm:text-[0.64rem]">
              AI Workbench
            </p>
            <h3 className="mt-1 text-lg font-black uppercase leading-none tracking-normal text-[#172033] sm:text-2xl">
              Build Console
            </h3>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-yellow-200 bg-white px-2.5 py-1">
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
              className={`home-workbench-card rounded-lg border border-yellow-200 bg-white p-2 shadow-[0_12px_28px_rgba(0,0,0,0.1)] transition duration-500 ease-out ${
                isSplit ? splitMetricTransforms[index] : "translate-x-0 translate-y-0 rotate-0 scale-100"
              }`}
              style={{ animationDelay: `${index * 160}ms` }}
            >
              <span className={`mb-2 block h-1.5 rounded-full bg-linear-to-r ${metric.color}`} />
              <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-1 text-[0.68rem] font-black leading-tight text-[#172033] sm:text-xs">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-4 rounded-lg border border-yellow-200 bg-white p-3 shadow-[0_12px_34px_rgba(0,0,0,0.1)] transition duration-500 ease-out ${
            isSplit ? "translate-x-4 scale-[0.98]" : "translate-x-0 scale-100"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-slate-500">
              Pipeline
            </p>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#16a34a]">
              94% Ready
            </p>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="relative">
                <div
                  className="home-pipeline-step flex h-12 items-center justify-center rounded-md border border-yellow-100 bg-white text-center text-[0.52rem] font-black uppercase leading-3 tracking-widest text-slate-700"
                  style={{ animationDelay: `${index * 220}ms` }}
                >
                  {step}
                </div>
                {index < pipelineSteps.length - 1 && (
                  <span className="absolute left-[calc(100%-0.125rem)] top-1/2 z-10 h-px w-2 -translate-y-1/2 bg-[#facc15]" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-sky-100">
            <span className="home-progress block h-full w-[94%] rounded-full bg-linear-to-r from-[#facc15] to-[#16a34a]" />
          </div>
        </div>

        <div className="mt-4 grid flex-1 grid-cols-[1fr_0.8fr] gap-3">
          <div
            className={`rounded-lg border border-sky-200/80 bg-[#172033] p-3 text-white shadow-[0_16px_34px_rgba(23,32,51,0.16)] transition duration-500 ease-out ${
              isSplit ? "-translate-x-5 translate-y-3 rotate-[-1deg]" : "translate-x-0 translate-y-0 rotate-0"
            }`}
          >
            <div className="mb-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#fb7185]" />
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
              <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
            </div>
            <div className="space-y-2 text-[0.56rem] font-semibold leading-none tracking-[0.08em] sm:text-[0.64rem]">
              <p><span className="text-[#facc15]">model</span>.load(&quot;vision_vit&quot;)</p>
              <p><span className="text-[#22c55e]">rag</span>.retrieve(context)</p>
              <p><span className="text-[#86efac]">api</span>.deploy(&quot;/infer&quot;)</p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between gap-2 rounded-lg border border-yellow-200 bg-white p-3 transition duration-500 ease-out ${
              isSplit ? "translate-x-5 translate-y-3 rotate-[1deg]" : "translate-x-0 translate-y-0 rotate-0"
            }`}
          >
            <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-slate-500">
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techChips.map((chip, index) => (
                <span
                  key={chip}
                  className="home-tech-chip rounded-full bg-white px-2 py-1 text-[0.52rem] font-black uppercase tracking-widest text-[#16a34a] ring-1 ring-yellow-200"
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
      className="relative z-10 mx-auto flex min-h-svh w-full max-w-368 scroll-mt-20 flex-col justify-center gap-5 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)] px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <h2 className="home-reveal text-center text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
        <span className="text-[#facc15]">Home</span>
      </h2>

      <div className="grid w-full items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl text-center lg:text-left">
          <h1 className="home-reveal text-[clamp(1.85rem,5.2vw,3.55rem)] font-black uppercase leading-[1.04] tracking-normal text-white drop-shadow-[0_4px_0_rgba(250,204,21,0.12)] [animation-delay:120ms]">
            Pioneering the next frontier of{" "}
            <span className="text-[#facc15]">Intelligent Applications.</span>
          </h1>

          <p className="home-reveal mt-4 text-xs font-medium uppercase tracking-[0.38em] text-white [animation-delay:220ms] sm:text-sm">
            Developer | Researcher | Engineer
          </p>

          <p className="home-reveal mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/82 [animation-delay:320ms] sm:text-base sm:leading-7 lg:mx-0">
            Dedicated to developing efficient, scalable, and interpretative
            machine learning, deep learning models that bridge the gap between biological
            intelligence and silicon-based computation.
          </p>

          <a
            href="#about"
            className="home-reveal mt-5 inline-flex h-11 items-center justify-center overflow-hidden bg-[#facc15] px-7 text-xs font-medium uppercase tracking-[0.24em] text-[#111111] shadow-[0_16px_34px_rgba(250,204,21,0.18)] transition hover:bg-[#22c55e] hover:text-white hover:shadow-[0_18px_42px_rgba(34,197,94,0.2)] [animation-delay:420ms] sm:h-12 sm:px-8 sm:text-sm"
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
