import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const profileImages = [
  { src: "/myself.jpeg", alt: "Aniket Chakraborty portrait", className: "about-float-one" },
  { src: "/myself.jpeg", alt: "Aniket Chakraborty profile visual 2", className: "about-float-two" },
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
    <aside className="about-card about-reveal flex items-center justify-center border border-[#20b2aa]/55 bg-[#20b2aa]/18 px-5 py-5 backdrop-blur-[2px] sm:px-7 lg:px-7 lg:py-6">
      <div className="relative mx-auto h-112 w-full max-w-[24rem] overflow-hidden">
        <div className="absolute inset-10 rounded-full bg-[#0ea5e9]/14 blur-3xl" />
        <div className="about-orbit absolute inset-8 rounded-full border border-sky-300/25" />
        <div className="about-orbit about-orbit-reverse absolute inset-16 rounded-full border border-[#d946ef]/22" />

        <div className="relative z-10 grid h-full grid-cols-2 gap-x-5">
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
                    className={`aspect-square w-full overflow-hidden rounded-lg border-2 border-[#20b2aa]/70 bg-[#20b2aa]/12 p-1.5 shadow-[0_16px_34px_rgba(32,178,170,0.16),0_0_22px_rgba(14,165,233,0.12)] ${image.className}`}
                  >
                    <div className="relative h-full overflow-hidden rounded-md bg-[#bff3ef]/80">
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
    <section className="about-card about-reveal border border-[#20b2aa]/55 bg-[#20b2aa]/18 px-6 py-6 backdrop-blur-[2px] [animation-delay:120ms] sm:px-8 lg:px-8 lg:py-7">
      <div className="about-reveal flex items-center gap-3 [animation-delay:200ms]">
        <span className="h-px w-10 bg-[#0ea5e9]" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0ea5e9]">
          Executive Summary
        </p>
      </div>

      <h2 className="about-reveal mt-4 max-w-5xl text-2xl font-black leading-[1.12] tracking-normal text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] [animation-delay:280ms] sm:text-3xl xl:text-[2.25rem]">
        Pushing the boundaries of Manual Human work to Intelligent solutions
      </h2>

      <p className="about-reveal mt-4 max-w-5xl text-sm leading-6 text-slate-700 [animation-delay:360ms] sm:text-base sm:leading-7">
        As a AI Researcher at Webbies, I specialize in developing
        novel AI ML based architectures and optimizing large-scale generative
        AI models. My work bridges the gap between theoretical deep learning and
        practical, high-performance implementations that redefine human-computer
        interaction.
      </p>

      <div className="about-reveal mt-5 flex flex-wrap items-center justify-between gap-4 border-y border-[#20b2aa]/45 py-4 [animation-delay:420ms]">
        <div>
          <h1 className="text-2xl font-black leading-none tracking-normal text-[#172033] drop-shadow-[0_4px_0_rgba(14,165,233,0.12)] sm:text-3xl">
            Aniket Chakraborty
          </h1>
          <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-[#d946ef] sm:text-sm">
            AI Researcher
          </p>
        </div>

        <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
          {profileDetails.map(({ icon: Icon, text }, index) => (
            <div
              key={text}
              className="about-reveal flex items-center gap-3"
              style={{ animationDelay: `${500 + index * 80}ms` }}
            >
              <Icon className="h-5 w-5 shrink-0 text-[#0ea5e9]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <div className="about-reveal [animation-delay:440ms]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Core Area
          </h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-800 sm:text-base">
            Gen AI, Transformers, Diffusers, NLP, Machine Learning, Deep Learning, ViTs, Computer Vision
          </p>
        </div>

        <div className="about-reveal [animation-delay:520ms]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Technical Stack
          </h3>
          <div className="mt-2 flex flex-wrap gap-3">
            {["PyTorch", "TensorFlow", "CUDA", "OpenCV", "PILLOW", "Transformers"].map((skill, index) => (
              <span
                key={skill}
                className="about-skill bg-[#20b2aa]/10 px-3 py-1.5 text-xs font-medium text-[#0ea5e9] ring-1 ring-[#20b2aa]/45"
                style={{ animationDelay: `${620 + index * 80}ms` }}
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
      className="relative z-10 mx-auto flex min-h-svh w-full max-w-368 scroll-mt-20 flex-col justify-center gap-5 px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <style>{`
        @keyframes about-rise {
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

        @keyframes about-float-one {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(3px, -5px, 0); }
        }

        @keyframes about-float-two {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-3px, 5px, 0); }
        }

        @keyframes about-float-three {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(3px, 5px, 0); }
        }

        @keyframes about-float-four {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-3px, -5px, 0); }
        }

        @keyframes about-orbit {
          to { transform: rotate(360deg); }
        }

        @keyframes about-skill-pop {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .about-reveal {
          animation: about-rise 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .about-card {
          position: relative;
          overflow: hidden;
          box-shadow: 0 18px 60px rgba(32,178,170,0.16);
        }

        .about-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(120deg, transparent 18%, rgba(32,178,170,0.16) 46%, transparent 72%);
          transform: translateX(-100%);
          animation: about-panel-sheen 6s ease-in-out infinite;
        }

        @keyframes about-panel-sheen {
          0%, 55% { transform: translateX(-100%); opacity: 0; }
          70% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .about-orbit {
          animation: about-orbit 18s linear infinite;
        }

        .about-orbit::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -3px;
          height: 6px;
          width: 6px;
          border-radius: 9999px;
          background: #0ea5e9;
          box-shadow: 0 0 18px rgba(14,165,233,0.7);
          transform: translateX(-50%);
        }

        .about-orbit-reverse {
          animation-duration: 13s;
          animation-direction: reverse;
        }

        .about-float-one {
          animation: about-float-one 7.5s ease-in-out infinite;
        }

        .about-float-two {
          animation: about-float-two 8.2s ease-in-out infinite;
        }

        .about-float-three {
          animation: about-float-three 7.8s ease-in-out infinite;
        }

        .about-float-four {
          animation: about-float-four 8.8s ease-in-out infinite;
        }

        .about-skill {
          animation: about-skill-pop 520ms cubic-bezier(0.22, 1, 0.36, 1) both;
          transition: transform 220ms ease, box-shadow 220ms ease, background-color 220ms ease;
        }

        .about-skill:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 26px rgba(32,178,170,0.18);
          background-color: rgba(32,178,170,0.18);
        }
      `}</style>
      <h2 className="about-reveal text-center text-2xl font-black uppercase tracking-[0.18em] sm:text-3xl lg:text-4xl">
        <span className="animate-pulse bg-linear-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      <div className="grid w-full items-stretch gap-5 lg:grid-cols-[0.86fr_2.14fr]">
        <ProfileCard />
        <SummaryPanel />
      </div>
    </section>
  );
}
