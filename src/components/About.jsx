import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

function ProfileCard() {
  const details = [
    { icon: FaBuilding, text: "Webbies" },
    { icon: FaMapMarkerAlt, text: "Kolkata, West Bengal" },
    { icon: MdOutlineWorkHistory, text: "1+ Years Experience" },
  ];

  return (
    <aside className="border border-cyan-300/15 bg-[#0c1d3a]/85 px-8 py-8 sm:px-10 lg:px-10 lg:py-9">
      <div className="mx-auto w-full max-w-[12.5rem] overflow-hidden rounded-[8px] border-2 border-cyan-400/25 bg-[#06172f] p-1.5 shadow-[0_0_28px_rgba(45,232,216,0.12)] xl:max-w-[14rem]">
        <div className="relative aspect-[1.03] overflow-hidden rounded-[6px] bg-[#07131e]">
          <Image
            src="/myself.jpeg"
            alt="Aniket Chakraborty portrait"
            fill
            sizes="(min-width: 1280px) 14rem, 12.5rem"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-7 text-center">
        <h1 className="text-4xl font-black leading-none tracking-[0] text-[#dce7ff] drop-shadow-[0_4px_0_rgba(0,0,0,0.45)] sm:text-3xl">
          Aniket Chakraborty
        </h1>
        <p className="mt-3 text-xs font-semibold tracking-[0.3em] text-[#64ffe7] sm:text-xl">
          AI Researcher
        </p>
      </div>

      <div className="mx-auto mt-7 flex max-w-xs flex-col gap-5 text-slate-200/85">
        {details.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-4 text-base">
            <Icon className="h-5 w-5 shrink-0 text-[#42f2dc]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function SummaryPanel() {
  return (
    <section className="border border-cyan-300/15 bg-[#0c1d3a]/85 px-8 py-8 sm:px-10 lg:px-10 lg:py-9">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#64ffe7]" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#64ffe7]">
          Executive Summary
        </p>
      </div>

      <h2 className="mt-6 max-w-5xl text-3xl font-black leading-[1.16] tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.38)] sm:text-4xl xl:text-[2.7rem]">
        Pushing the boundaries of Manual Human work to Intelligent solutions
      </h2>

      <p className="mt-6 max-w-5xl text-base leading-7 text-slate-200/85 sm:text-lg sm:leading-8">
        As a AI Researcher at Webbies, I specialize in developing
        novel AI ML based architectures and optimizing large-scale generative
        AI models. My work bridges the gap between theoretical deep learning and
        practical, high-performance implementations that redefine human-computer
        interaction.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Core Area
          </h3>
          <p className="mt-3 max-w-lg text-base leading-7 text-slate-100 sm:text-lg">
            Gen AI, Transformers, Diffusers, NLP, Machine Learning, Deep Learning, ViTs, Computer Vision
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Technical Stack
          </h3>
          <div className="mt-3 flex flex-wrap gap-4">
            {["PyTorch", "TensorFlow", "CUDA", "OpenCV", "PILLOW", "Transformers"].map((skill) => (
              <span
                key={skill}
                className="bg-[#132a4d] px-4 py-2 text-sm font-medium text-[#64ffe7]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[92rem] scroll-mt-20 flex-col justify-center gap-8 px-5 pb-10 pt-24 sm:px-8 md:pb-12 md:pt-28 lg:px-12 lg:pb-10 lg:pt-24"
    >
      <h2 className="text-center text-3xl font-black uppercase tracking-[0.18em] sm:text-4xl lg:text-5xl">
        <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <div className="grid w-full items-stretch gap-8 lg:grid-cols-[0.98fr_2.02fr]">
        <ProfileCard />
        <SummaryPanel />
      </div>
    </section>
  );
}
