import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const profileImages = [
  { src: "/myself.jpeg", alt: "Aniket Chakraborty portrait", className: "about-float-one" },
  { src: "/myself2.jpg", alt: "Aniket Chakraborty profile visual 2", className: "about-float-two" },
  { src: "/myself.jpeg", alt: "Aniket Chakraborty profile visual 3", className: "about-float-three" },
  { src: "/myself.jpeg", alt: "Aniket Chakraborty profile visual 4", className: "about-float-four" },
];

const profileDetails = [
  { icon: FaBuilding, text: "Webbies" },
  { icon: FaMapMarkerAlt, text: "Kolkata, West Bengal" },
  { icon: MdOutlineWorkHistory, text: "1+ Years Experience" },
];

function ProfileCard() {
  return (
    <aside className="about-card about-reveal flex items-center justify-center border border-yellow-200 bg-white px-5 py-5 sm:px-7 lg:px-7 lg:py-6">
      <div className="relative mx-auto h-112 w-full max-w-[24rem] overflow-hidden">
        <div className="absolute inset-10 rounded-full bg-[#facc15]/14 blur-3xl" />
        <div className="about-orbit absolute inset-8 rounded-full border border-yellow-300/25" />
        <div className="about-orbit about-orbit-reverse absolute inset-16 rounded-full border border-[#22c55e]/22" />

        <div className="relative z-10 grid h-full grid-cols-2 gap-x-5 pt-6">
          {[0, 1].map((columnIndex) => (
            <div
              key={columnIndex}
              className={`grid content-start gap-5 ${
                columnIndex === 1 ? "pt-12" : ""
              }`}
            >
              {profileImages
                .filter((_, index) => index % 2 === columnIndex)
                .map((image, index) => (
                  <div
                    key={image.alt}
                    className={`aspect-square w-full overflow-hidden rounded-lg border-2 border-yellow-300 bg-white p-1.5 shadow-[0_16px_34px_rgba(0,0,0,0.12),0_0_22px_rgba(250,204,21,0.12)] ${image.className}`}
                  >
                    <div className="relative h-full overflow-hidden rounded-md bg-white">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 11rem, 8rem"
                        className="object-cover"
                        priority={columnIndex === 0 && index === 0}
                      />
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SummaryPanel() {
  return (
    <section className="about-card about-reveal border border-yellow-200 bg-white px-6 py-6 [animation-delay:120ms] sm:px-8 lg:px-8 lg:py-7">
      <h2 className="about-reveal mt-4 max-w-5xl text-2xl font-black leading-[1.12] tracking-normal text-[#111111] drop-shadow-[0_3px_0_rgba(250,204,21,0.12)] [animation-delay:280ms] sm:text-3xl xl:text-[2.25rem]">
        Pushing the boundaries of Manual Human work to Intelligent solutions
      </h2>

      <p className="about-reveal mt-4 max-w-5xl text-sm leading-6 text-slate-700 [animation-delay:360ms] sm:text-base sm:leading-7">
        As a AI Researcher at Webbies, I specialize in developing
        novel AI ML based architectures and optimizing large-scale generative
        AI models. My work bridges the gap between theoretical deep learning and
        practical, high-performance implementations that redefine human-computer
        interaction.
      </p>

      <div className="about-reveal mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-yellow-200 py-4 [animation-delay:420ms]">
        <div>
          <h1 className="text-2xl font-black leading-none tracking-normal text-[#111111] drop-shadow-[0_4px_0_rgba(250,204,21,0.12)] sm:text-3xl">
            Aniket Chakraborty
          </h1>
          <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-[#16a34a] sm:text-sm">
            AI Researcher
          </p>
        </div>

        <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
          {profileDetails.map(({ icon: Icon, text }, index) => (
            <div
              key={text}
              className={`about-reveal flex items-center gap-3 ${
                index === 1
                  ? "[animation-delay:580ms]"
                  : index === 2
                    ? "[animation-delay:660ms]"
                    : "[animation-delay:500ms]"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0 text-[#16a34a]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="about-reveal [animation-delay:440ms]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Core Area
          </h3>
          <p className="mt-2 w-full max-w-none text-sm leading-6 text-[#166534] sm:text-base">
            Gen AI, Transformers, Diffusers, NLP, Machine Learning, Deep Learning, ViTs, Computer Vision, FastAPIs,
            OpenAI, Gemini, Claude, HuggingFace, Github
          </p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto flex min-h-svh w-full max-w-368 scroll-mt-20 flex-col justify-center gap-5 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)] px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <h2 className="about-reveal text-center text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
        <span className="text-[#facc15]">About Me</span>
      </h2>

      <div className="grid w-full items-stretch gap-5 lg:grid-cols-[0.86fr_2.14fr]">
        <ProfileCard />
        <SummaryPanel />
      </div>
    </section>
  );
}
