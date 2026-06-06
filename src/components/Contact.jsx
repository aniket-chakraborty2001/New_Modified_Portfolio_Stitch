import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { HiOutlineClock, HiOutlineSparkles } from "react-icons/hi";

const contactLinks = [
  {
    label: "Email",
    value: "Aniket Chakraborty",
    href: "mailto:aniket.chakraborty2001@gmail.com",
    icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "Aniket Chakraborty",
    href: "www.linkedin.com/in/aniket-chakraborty20022001",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "Aniket Chakraborty",
    href: "https://github.com/aniket-chakraborty2001",
    icon: FiGithub,
  },
];

const collaborationModes = [
  "Applied AI prototypes",
  "Computer vision systems",
  "RAG and LLM workflows",
  "Research implementation",
];

const availabilitySignals = [
  { label: "Response Window", value: "24-48 hrs" },
  { label: "Timezone", value: "IST (UTC+5:30)" },
  { label: "Base", value: "Kolkata, India" },
];

function ContactLinkCard({ link }) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex min-h-20 items-center justify-between gap-3 border border-[#20b2aa]/45 bg-white/12 p-3 shadow-[0_14px_34px_rgba(15,118,110,0.1)] backdrop-blur-[2px] transition duration-300 hover:border-[#0ea5e9]/80 hover:bg-white/24 hover:shadow-[0_18px_44px_rgba(14,165,233,0.14)] sm:p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20b2aa]/45 bg-[#bff3ef]/35 text-[#0ea5e9] transition duration-300 group-hover:border-[#0ea5e9]/70 group-hover:bg-[#0ea5e9] group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
            {link.label}
          </p>
          <p className="mt-1.5 wrap-break-word text-sm font-black text-[#172033] sm:text-base">
            {link.value}
          </p>
        </div>
      </div>
      <FiArrowUpRight className="h-5 w-5 shrink-0 text-[#0ea5e9] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto min-h-svh w-full max-w-368 scroll-mt-20 px-5 pb-6 pt-20 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-6.5rem)] w-full flex-col justify-center py-8">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
            <span className="animate-pulse bg-linear-to-r from-[#0ea5e9] via-[#14b8a6] to-[#d946ef] bg-clip-text text-transparent">
              Contact Node
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-6 text-slate-700 sm:text-base">
            Reach out directly for applied AI research, production prototypes,
            computer vision workflows, or technical collaboration.
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden border border-[#20b2aa]/35 bg-[#bff3ef]/72 p-3 shadow-[0_22px_70px_rgba(32,178,170,0.16)] sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(32,178,170,0.14)_1px,transparent_1px)] bg-size-[56px_56px]" />

          <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="border border-[#20b2aa]/45 bg-white/12 p-4 shadow-[0_14px_38px_rgba(15,118,110,0.1)] backdrop-blur-[2px] sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#0ea5e9]">
                  Collaboration Profile
                </p>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-normal text-[#172033] drop-shadow-[0_3px_0_rgba(14,165,233,0.12)] sm:text-2xl">
                  Build serious AI into useful products.
                </h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20b2aa]/45 bg-[#bff3ef]/35 text-[#0ea5e9]">
                <HiOutlineSparkles className="h-5 w-5" />
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              The fastest path is a short brief with the problem, current
              system, data constraints, and expected outcome. No message
              database, no third-party form service, just direct channels.
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {collaborationModes.map((mode) => (
                <div
                  key={mode}
                  className="border border-[#20b2aa]/40 bg-white/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-700 backdrop-blur-[2px]"
                >
                  {mode}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-[#20b2aa]/40 pt-4 sm:grid-cols-3">
              {availabilitySignals.map((signal) => (
                <div key={signal.label}>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">
                    {signal.label}
                  </p>
                  <p className="mt-1.5 text-sm font-black text-[#172033]">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <div className="grid gap-4">
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <ContactLinkCard key={link.label} link={link} />
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-[#20b2aa]/45 bg-white/12 p-4 shadow-[0_14px_34px_rgba(15,118,110,0.1)] backdrop-blur-[2px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#20b2aa]/45 bg-[#bff3ef]/35 text-[#0ea5e9]">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                      Operational Base
                    </p>
                    <p className="mt-1 text-sm font-black text-[#172033]">
                      Kolkata, West Bengal
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-9 items-center justify-center gap-2 border border-[#0ea5e9] px-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#0ea5e9] transition hover:bg-[#0ea5e9] hover:text-white"
                >
                  View Map
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="border border-[#20b2aa]/45 bg-white/12 p-4 shadow-[0_14px_34px_rgba(15,118,110,0.1)] backdrop-blur-[2px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#20b2aa]/45 bg-[#bff3ef]/35 text-[#0ea5e9]">
                    <HiOutlineClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                      Best Window
                    </p>
                    <p className="mt-1 text-sm font-black text-[#172033]">
                      Weekdays, IST hours
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-slate-600">
                  Share a concise problem brief and relevant links for a faster,
                  sharper first reply.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
