import { FiExternalLink } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";

const educationItems = [
  {
    institution: "Manipal Academy of Higher Education",
    degree: "M.Sc in Data Science",
    period: "2022 - 2024",
    concepts: [
      "Data Analytics",
      "Statistics and Mathematics",
      "Machine Learning",
      "Database (MYSQL)",
      "Computer Vision and MLP",
    ],
    certificateUrl: "https://drive.google.com/file/d/1k2kJrH39G6YmKI3hLZA0YAe9JIpN-VOq/view?usp=sharing",
    icon: HiOutlineAcademicCap,
  },
  {
    institution: "Ramakrishna Mission Vivekananda Centenary College",
    degree: "B.Sc in Mathematics",
    period: "2019-2022",
    concepts: [
      "Python",
      "Calculus",
      "Exploratory Data Analysis",
      "Mathematics",
      "Linear Algebra",
    ],
    certificateUrl: "https://drive.google.com/file/d/1g1Vfuznvs7-Vn1nzY9FG55EEMn2-3lDs/view?usp=sharing",
    icon: HiOutlineBadgeCheck,
  },
];

function EducationCircuitNode({ item, index }) {
  const Icon = item.icon;
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`group relative grid gap-4 lg:grid-cols-[1fr_6rem_1fr] lg:items-center ${
        isReversed ? "lg:[&>div:first-child]:col-start-3" : ""
      }`}
    >
      <div
        className={`relative isolate overflow-hidden border border-[#20b2aa]/55 bg-[#20b2aa]/18 p-4 shadow-[0_18px_48px_rgba(32,178,170,0.16)] backdrop-blur-[2px] transition duration-300 hover:border-[#20b2aa]/80 hover:shadow-[0_20px_54px_rgba(32,178,170,0.22)] sm:p-5 ${
          isReversed ? "lg:text-right" : ""
        }`}
      >
        <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_0%,rgba(14,165,233,0.13),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(217,70,239,0.11),transparent_34%)] opacity-70 transition duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#0ea5e9] via-[#20b2aa] to-[#d946ef]" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#0ea5e9]/0 transition duration-300 group-hover:border-[#0ea5e9]/65" />
        <span className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r border-t border-[#d946ef]/0 transition duration-300 group-hover:border-[#d946ef]/55" />

        <div className={`flex items-start gap-4 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#20b2aa]/45 bg-[#20b2aa]/12 text-[#0ea5e9] sm:h-14 sm:w-14">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>

          <div className="min-w-0 flex-1">
            <div className={`flex flex-wrap items-center gap-2 ${isReversed ? "lg:justify-end" : ""}`}>
              <span className="border border-[#20b2aa]/45 bg-[#20b2aa]/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#0ea5e9] sm:text-xs">
                Node 0{index + 1}
              </span>
              <span className="border border-[#20b2aa]/45 bg-white/45 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.16em] text-[#d946ef] sm:text-xs">
                {item.period}
              </span>
            </div>

            <h3 className="mt-4 break-words text-xl font-black leading-tight tracking-[0] text-[#0ea5e9] sm:text-2xl">
              {item.institution}
            </h3>
            <p className="mt-2 break-words text-base font-black leading-tight text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] sm:text-lg">
              {item.degree}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d946ef]">
            Learned Concepts
          </p>

          <div className={`mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs leading-5 text-slate-700 sm:text-sm ${
            isReversed ? "lg:justify-end" : ""
          }`}>
            {item.concepts.map((concept) => (
              <span key={concept}>{concept}</span>
            ))}
          </div>
        </div>

        <a
          href={item.certificateUrl}
          target="_blank"
          rel="noreferrer"
          className={`mt-5 flex h-10 w-full items-center justify-center gap-2 border border-[#0ea5e9] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white sm:w-auto sm:min-w-52 sm:text-xs ${
            isReversed ? "lg:ml-auto" : ""
          }`}
        >
          View Certificate
          <FiExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div
        aria-hidden="true"
        className="relative hidden h-full min-h-32 items-center justify-center lg:col-start-2 lg:row-start-1 lg:flex"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#0ea5e9]/20 via-[#20b2aa]/80 to-[#d946ef]/20" />
        <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#20b2aa]/80 to-transparent" />
        <span className="relative flex h-16 w-16 items-center justify-center border border-[#20b2aa]/70 bg-white/88 shadow-[0_0_34px_rgba(14,165,233,0.2)]">
          <span className="absolute inset-2 border border-[#d946ef]/30" />
          <span className="h-3 w-3 bg-[#0ea5e9] shadow-[0_0_18px_rgba(14,165,233,0.76)]" />
        </span>
      </div>
    </article>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[92rem] scroll-mt-20 flex-col justify-center px-5 pb-5 pt-20 sm:px-8 md:pt-22 lg:px-12 lg:pb-6 lg:pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(14,165,233,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="text-center">
        <h2 className="text-2xl font-black uppercase tracking-[0] sm:text-4xl lg:text-5xl">
          <span className="animate-pulse bg-gradient-to-r from-[#0ea5e9] via-[#d946ef] to-[#f59e0b] bg-clip-text text-transparent">
            Academic_Trajectory
          </span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-28 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef]" />
        <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-slate-700 sm:text-base">
          A rigorous foundation in computational science and artificial
          intelligence, mapped through institutions of technical excellence.
        </p>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-6xl">
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-[#0ea5e9]/40 via-[#20b2aa]/70 to-[#d946ef]/40 lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#0ea5e9]/25 via-[#20b2aa]/75 to-[#d946ef]/25 lg:block"
        />
        <div className="grid gap-5 lg:gap-8">
          {educationItems.map((item, index) => (
            <EducationCircuitNode
              key={item.institution}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
