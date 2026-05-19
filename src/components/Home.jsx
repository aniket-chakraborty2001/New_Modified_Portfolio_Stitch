const neuralLines = [
  "M92 176 C164 114 207 276 282 214 S390 126 462 178",
  "M104 247 C184 218 191 121 292 157 S378 271 474 227",
  "M86 299 C166 257 227 348 303 274 S392 198 486 293",
  "M146 96 C196 175 173 269 246 334 S363 407 410 301",
  "M244 76 C270 167 224 242 292 322 S332 397 374 434",
  "M345 70 C292 152 350 222 302 292 S219 361 162 445",
  "M90 368 C176 333 221 235 308 251 S406 326 489 370",
  "M196 466 C211 356 259 332 249 247 S185 163 194 75",
  "M451 104 C387 164 420 270 344 315 S205 323 120 402",
  "M58 225 C154 236 179 299 264 296 S365 212 514 205",
  "M123 132 C218 185 243 187 302 245 S414 323 465 424",
  "M508 272 C423 248 371 273 318 322 S221 420 112 391",
];

const neuralNodes = [
  [92, 176],
  [146, 96],
  [244, 76],
  [345, 70],
  [462, 178],
  [474, 227],
  [486, 293],
  [410, 301],
  [374, 434],
  [162, 445],
  [120, 402],
  [508, 272],
];

function NeuralArtwork() {
  return (
    <div className="home-artwork relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#071d38] shadow-[0_0_70px_rgba(32,203,220,0.12)_inset] sm:max-w-[22rem] xl:max-w-[25rem]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_22%,rgba(100,255,231,0.16)_48%,transparent_74%)] opacity-0" />
      <div className="home-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#64ffe7]/20 via-[#64ffe7]/5 to-transparent" />
      <div className="home-orbit absolute inset-7 rounded-full border border-cyan-200/10" />
      <div className="home-orbit home-orbit-reverse absolute inset-14 rounded-full border border-[#ff6fd8]/10" />
      <div className="absolute inset-10 rounded-[8px] bg-[radial-gradient(circle_at_center,rgba(22,188,214,0.27),rgba(6,24,45,0.58)_45%,rgba(5,18,37,0.9)_75%)]" />
      <span className="home-satellite absolute left-1/2 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-[#64ffe7] shadow-[0_0_18px_rgba(100,255,231,0.9)]" />
      <span className="home-satellite home-satellite-two absolute bottom-10 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ff6fd8] shadow-[0_0_18px_rgba(255,111,216,0.85)]" />
      <svg
        className="home-network absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] text-cyan-400/55"
        viewBox="0 0 560 560"
        fill="none"
      >
        <defs>
          <filter id="neuralGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="signalGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#64ffe7" />
            <stop offset="52%" stopColor="#16bcd6" />
            <stop offset="100%" stopColor="#ff6fd8" />
          </linearGradient>
        </defs>

        <g className="home-grid-lines" stroke="currentColor" strokeWidth="0.75" opacity="0.3">
          <path d="M56 260 H508" />
          <path d="M284 62 V498" />
          <path d="M111 111 L452 452" />
          <path d="M449 112 L110 449" />
          <path d="M122 191 C239 164 333 171 466 119" />
          <path d="M93 337 C194 322 297 376 472 331" />
        </g>

        <g stroke="url(#signalGradient)" strokeWidth="1.8" filter="url(#neuralGlow)">
          {neuralLines.map((path, index) => (
            <path
              key={path}
              className="home-neural-path"
              d={path}
              pathLength="1"
              style={{ animationDelay: `${index * 0.16}s` }}
            />
          ))}
        </g>

        <g fill="currentColor" filter="url(#neuralGlow)">
          {neuralNodes.map(([x, y], index) => (
            <circle
              key={`${x}-${y}`}
              className="home-neural-node"
              cx={x}
              cy={y}
              r="2.8"
              style={{ animationDelay: `${index * 0.22}s` }}
            />
          ))}
        </g>

        <circle className="home-core-ring" cx="286" cy="281" r="66" stroke="currentColor" strokeWidth="1" opacity="0.48" />
        <circle className="home-core-ring home-core-ring-wide" cx="286" cy="281" r="104" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle className="home-core" cx="286" cy="281" r="7" fill="#64ffe7" filter="url(#neuralGlow)" />
      </svg>
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
          background: #64ffe7;
          box-shadow: 0 0 18px rgba(100,255,231,0.95);
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

        .home-neural-path {
          stroke-dasharray: 0.08 0.92;
          animation: home-path-flow 3.8s ease-in-out infinite alternate;
        }

        .home-neural-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: home-node-pulse 2.8s ease-in-out infinite;
        }

        .home-core-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: home-ring-pulse 3.4s ease-in-out infinite;
        }

        .home-core-ring-wide {
          animation-delay: 1.2s;
        }

        .home-core {
          animation: home-node-pulse 2.1s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .home-highlight {
          background-size: 220% 100%;
          animation: home-shimmer 5s ease-in-out infinite;
        }
      `}</style>
      <h2 className="home-reveal text-center text-2xl font-black uppercase tracking-[0.18em] sm:text-3xl lg:text-4xl">
        <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
          Home
        </span>
      </h2>

      <div className="grid w-full items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="home-reveal text-[clamp(1.85rem,5.2vw,3.55rem)] font-black uppercase leading-[1.04] tracking-[0] text-[#dce7ff] drop-shadow-[0_4px_0_rgba(0,0,0,0.55)] [animation-delay:120ms]">
              Pioneering the next frontier of{" "}
              <span className="home-highlight bg-gradient-to-r from-[#43e3ce] via-[#64ffe7] to-[#ff6fd8] bg-clip-text text-transparent">Intelligent Applications.</span>
            </h1>

            <p className="home-reveal mt-4 text-xs font-medium uppercase tracking-[0.38em] text-[#64ffe7] [animation-delay:220ms] sm:text-sm">
              Developer | Researcher | Engineer
            </p>

            <p className="home-reveal mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300/70 [animation-delay:320ms] sm:text-base sm:leading-7 lg:mx-0">
              Dedicated to developing efficient, scalable, and interpretative
              machine learning, deep learning models that bridge the gap between biological
              intelligence and silicon-based computation.
            </p>

            <a
              href="#about"
              className="home-reveal mt-5 inline-flex h-11 items-center justify-center overflow-hidden bg-[#45dbc4] px-7 text-xs font-medium uppercase tracking-[0.24em] text-[#06172f] transition hover:bg-[#64ffe7] hover:shadow-[0_0_28px_rgba(100,255,231,0.38)] [animation-delay:420ms] sm:h-12 sm:px-8 sm:text-sm"
            >
              Learn More About Me
            </a>
          </div>

          <div className="home-reveal flex justify-center [animation-delay:260ms] lg:justify-end">
            <NeuralArtwork />
          </div>
      </div>
    </section>
  );
}
