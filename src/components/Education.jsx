import { FiExternalLink } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";

const educationItems = [
  {
    institution: "Manipal Academy of Higher Education",
    degree: "M.Sc in Data Science",
    period: "2022 - 2024",
    grade: "CGPA: 9.40/10",
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
    grade: "CGPA: 9.00/10",
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

function EducationCard({ item }) {
  const Icon = item.icon;

  return (
    <article
      className="flex min-h-[18rem] flex-col rounded-[8px] border border-[#20b2aa]/55 bg-[#20b2aa]/18 p-4 shadow-[0_18px_48px_rgba(32,178,170,0.16)] outline-none backdrop-blur-[2px] transition duration-300 hover:-translate-y-1 hover:border-[#20b2aa]/80 hover:shadow-[0_18px_42px_rgba(32,178,170,0.22)] sm:p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#20b2aa]/45 bg-[#20b2aa]/12 text-[#0ea5e9] sm:h-14 sm:w-14">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>

        <div className="text-right">
          <p className="rounded-full border border-[#20b2aa]/45 bg-[#20b2aa]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-[#0ea5e9] sm:text-xs">
            {item.period}
          </p>
          <p className="mt-2 max-w-40 text-[0.7rem] font-black leading-4 text-slate-600 sm:text-xs">
            {item.grade}
          </p>
        </div>
      </div>

      <div className="mt-4 max-w-xl">
        <h3 className="break-words text-xl font-black leading-tight tracking-[0] text-[#0ea5e9] sm:text-2xl">
          {item.institution}
        </h3>
        <p className="mt-2 break-words text-base font-black leading-tight text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] sm:text-lg">
          {item.degree}
        </p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d946ef]">
          Learned Concepts
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs leading-5 text-slate-700 sm:text-sm">
          {item.concepts.map((concept) => (
            <span key={concept}>{concept}</span>
          ))}
        </div>
      </div>

      <a
        href={item.certificateUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex h-10 w-full items-center justify-center gap-2 border border-[#0ea5e9] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white sm:ml-auto sm:w-auto sm:min-w-52 sm:text-xs"
      >
        View Certificate
        <FiExternalLink className="h-4 w-4" />
      </a>
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

      <div className="mx-auto mt-6 grid max-w-6xl gap-5 lg:grid-cols-2">
        {educationItems.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>
    </section>
  );
}
