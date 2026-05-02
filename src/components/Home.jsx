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

function NeuralArtwork() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[24rem] overflow-hidden rounded-[8px] border border-cyan-300/15 bg-[#071d38] shadow-[0_0_70px_rgba(32,203,220,0.12)_inset] sm:max-w-[28rem] xl:max-w-[31rem]">
      <div className="absolute inset-10 rounded-[8px] bg-[radial-gradient(circle_at_center,rgba(22,188,214,0.23),rgba(6,24,45,0.6)_45%,rgba(5,18,37,0.9)_75%)]" />
      <svg
        className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] text-cyan-400/45"
        viewBox="0 0 560 560"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.8">
          {neuralLines.map((path) => (
            <path key={path} d={path} />
          ))}
        </g>
        <g stroke="currentColor" strokeWidth="0.75" opacity="0.38">
          <path d="M56 260 H508" />
          <path d="M284 62 V498" />
          <path d="M111 111 L452 452" />
          <path d="M449 112 L110 449" />
          <path d="M122 191 C239 164 333 171 466 119" />
          <path d="M93 337 C194 322 297 376 472 331" />
        </g>
        <g fill="currentColor">
          {[92, 176, 146, 96, 244, 76, 345, 70, 462, 178, 474, 227, 486, 293, 410, 301, 374, 434, 162, 445, 120, 402, 508, 272].map(
            (point, index, points) =>
              index % 2 === 0 && (
                <circle
                  key={`${point}-${points[index + 1]}`}
                  cx={point}
                  cy={points[index + 1]}
                  r="2.4"
                />
              ),
          )}
        </g>
        <circle
          cx="286"
          cy="281"
          r="66"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        <circle
          cx="286"
          cy="281"
          r="104"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[92rem] scroll-mt-20 flex-col justify-center gap-8 px-5 pb-10 pt-24 sm:px-8 md:pb-12 md:pt-28 lg:px-12 lg:pb-10 lg:pt-24"
    >
      <h2 className="text-center text-3xl font-black uppercase tracking-[0.18em] sm:text-4xl lg:text-5xl">
        <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
          Home
        </span>
      </h2>

      <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-[clamp(2.25rem,6.3vw,4.25rem)] font-black uppercase leading-[1.08] tracking-[0] text-[#dce7ff] drop-shadow-[0_4px_0_rgba(0,0,0,0.55)]">
              Pioneering the next frontier of{" "}
              <span className="text-[#43e3ce]">Intelligent Applications.</span>
            </h1>

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.38em] text-[#64ffe7] sm:text-sm">
              Developer | Researcher | Engineer
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300/70 sm:text-lg sm:leading-8 lg:mx-0">
              Dedicated to developing efficient, scalable, and interpretative
              machine learning, deep learning models that bridge the gap between biological
              intelligence and silicon-based computation.
            </p>

            <a
              href="#about"
              className="mt-7 inline-flex h-12 items-center justify-center bg-[#45dbc4] px-8 text-xs font-medium uppercase tracking-[0.24em] text-[#06172f] transition hover:bg-[#64ffe7] sm:h-14 sm:px-10 sm:text-sm"
            >
              Learn More About Me
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <NeuralArtwork />
          </div>
      </div>
    </section>
  );
}
