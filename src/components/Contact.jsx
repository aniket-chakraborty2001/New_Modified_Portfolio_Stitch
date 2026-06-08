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
    href: "https://www.linkedin.com/in/aniket-chakraborty20022001",
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
      className="group flex min-h-20 items-center justify-between gap-3 border border-yellow-200 bg-white p-3 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition duration-300 hover:border-[#facc15] hover:shadow-[0_18px_44px_rgba(250,204,21,0.14)] sm:p-4"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-yellow-200 bg-white text-[#16a34a] transition duration-300 group-hover:border-[#facc15] group-hover:bg-[#facc15] group-hover:text-[#111111]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
            {link.label}
          </p>
          <p className="mt-1.5 wrap-break-word text-sm font-black text-[#111111] sm:text-base">
            {link.value}
          </p>
        </div>
      </div>
      <FiArrowUpRight className="h-5 w-5 shrink-0 text-[#16a34a] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto min-h-svh w-full max-w-368 scroll-mt-20 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)] px-5 pb-6 pt-20 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-6.5rem)] w-full flex-col justify-center py-8">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-black uppercase tracking-normal sm:text-4xl lg:text-5xl">
            <span className="text-[#facc15]">Contact Node</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-semibold leading-6 text-white sm:text-base">
            Reach out directly for applied AI research, production prototypes,
            computer vision workflows, or technical collaboration.
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden border border-yellow-200 bg-white p-3 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.06)_1px,transparent_1px)] bg-size-[56px_56px]" />

          <div className="relative grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="border border-yellow-200 bg-white p-4 shadow-[0_14px_38px_rgba(0,0,0,0.1)] sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#16a34a]">
                  Collaboration Profile
                </p>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-normal text-[#111111] drop-shadow-[0_3px_0_rgba(250,204,21,0.12)] sm:text-2xl">
                  Build serious AI into useful products.
                </h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-yellow-200 bg-white text-[#16a34a]">
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
                  className="border border-yellow-200 bg-white px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#166534]"
                >
                  {mode}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-yellow-200 pt-4 sm:grid-cols-3">
              {availabilitySignals.map((signal) => (
                <div key={signal.label}>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">
                    {signal.label}
                  </p>
                  <p className="mt-1.5 text-sm font-black text-[#111111]">
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
              <div className="border border-yellow-200 bg-white p-4 shadow-[0_14px_34px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-yellow-200 bg-white text-[#16a34a]">
                    <FiMapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                      Operational Base
                    </p>
                    <p className="mt-1 text-sm font-black text-[#111111]">
                      Kolkata, West Bengal
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-9 items-center justify-center gap-2 border border-[#16a34a] px-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#16a34a] transition hover:bg-[#facc15] hover:text-[#111111]"
                >
                  View Map
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="border border-yellow-200 bg-white p-4 shadow-[0_14px_34px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-yellow-200 bg-white text-[#16a34a]">
                    <HiOutlineClock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
                      Best Window
                    </p>
                    <p className="mt-1 text-sm font-black text-[#111111]">
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
