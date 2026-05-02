import Image from "next/image";

const SKILLS = [
    { name: "Python", icon: "/icons/python.png", timeline: "5+ Years", experience: "high" },
    { name: "Numpy", icon: "/icons/numpy.png", timeline: "3+ Years", experience: "high" },
    { name: "Pandas", icon: "/icons/pandas.png", timeline: "3+ Years", experience: "high" },
    { name: "Matplotlib", icon: "/icons/matplotlib.png", timeline: "3+ Years", experience: "high" },
    { name: "Seaborn", icon: "/icons/seaborn.png", timeline: "3+ Years", experience: "high" },
    { name: "Statsmodel", icon: "/icons/statsmodel.png", timeline: "1+ Years", experience: "medium" },
    { name: "Scipy", icon: "/icons/scipy.png", timeline: "1+ Years", experience: "medium" },
    { name: "Scikit-learn", icon: "/icons/scikitlearn.png", timeline: "3+ Years", experience: "high" },
    { name: "Opencv", icon: "/icons/opencv.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Pillow", icon: "/icons/pillow.png", timeline: "1+ Years", experience: "high" },
    { name: "Tensorflow", icon: "/icons/tensorFlow.png", timeline: "1.5+ Years", experience: "high" },
    { name: "Streamlit", icon: "/icons/streamlit.png", timeline: "1+ Years", experience: "medium" },
    { name: "Pytorch", icon: "/icons/pytorch.png", timeline: "1+ Years", experience: "high" },
    { name: "Mssql", icon: "/icons/mssql.png", timeline: "2+ Years", experience: "medium" },
    { name: "Mysql", icon: "/icons/mysql.png", timeline: "2+ Years", experience: "medium" },
    { name: "Dash", icon: "/icons/plotly.png", timeline: "1+ Years", experience: "basic" },
    { name: "Hugging face", icon: "/icons/hf.png", timeline: "1+ Years", experience: "high" },
    { name: "Github", icon: "/icons/git.png", timeline: "2+ Years", experience: "high" },
    { name: "Flask server", icon: "/icons/flask.png", timeline: "1+ Years", experience: "medium" },
    { name: "Docker", icon: "/icons/docker.png", timeline: "3 Months", experience: "basic" },
    { name: "Redis", icon: "/icons/redis.png", timeline: "3 Months", experience: "basic" },
    { name: "Cassandra", icon: "/icons/cassandra.png", timeline: "3 Months", experience: "basic" },
    { name: "Prometheus", icon: "/icons/prometheus.png", timeline: "3 Months", experience: "basic" },
    { name: "Kafka", icon: "/icons/kafka.png", timeline: "3 Months", experience: "basic" },
    { name: "Langchain", icon: "/icons/langchain.png", timeline: "1+ Years", experience: "medium" },
    { name: 'Ultralytics', icon: "/icons/ultralytics.png", timeline: "1+ Years", experience: "high" },
    { name: 'Llama', icon: "/icons/llama.png", timeline: "1+ Years", experience: "high" },
    { name: 'Openai', icon: "/icons/openai.png", timeline: "1+ Years", experience: "high" },
    { name: 'Gemini', icon: "/icons/gemini.png", timeline: "1+ Years", experience: "high" },
    { name: 'Vs code', icon: "/icons/vscode.png", timeline: "5+ Years", experience: "high" }
  ];

const EXPERIENCE_META = {
  high: {
    label: "Advanced",
  },
  medium: {
    label: "Intermediate",
  },
  basic: {
    label: "Foundational",
  },
};

function SkillCard({ skill }) {
  const meta = EXPERIENCE_META[skill.experience] ?? EXPERIENCE_META.medium;

  return (
    <article className="group flex min-h-52 flex-col rounded-[6px] border border-cyan-300/15 bg-[#0d213f]/95 p-6 shadow-[0_0_0_rgba(100,255,231,0)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_18px_45px_rgba(100,255,231,0.18)]">
      <div className="flex items-start justify-between gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[6px] bg-[#07131e] ring-1 ring-cyan-300/15">
          <Image
            src={skill.icon}
            alt={`${skill.name} icon`}
            fill
            sizes="3.5rem"
            className="object-contain p-2.5"
          />
        </div>

        <span className="max-w-[6.5rem] break-words text-right text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#64ffe7]">
          {skill.timeline}
        </span>
      </div>

      <h3 className="mt-7 break-words text-xl font-black leading-tight tracking-[0] text-[#dce7ff] drop-shadow-[0_3px_0_rgba(0,0,0,0.45)]">
        {skill.name}
      </h3>

      <div className="mt-auto pt-7">
        <p className="break-words text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-slate-300/70">
          {meta.label}
        </p>
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto w-full max-w-[92rem] scroll-mt-20 px-5 pb-24 pt-24 sm:px-8 md:pt-28 lg:px-12"
    >
      <div className="text-center">
        <h2 className="text-3xl font-black tracking-[0] sm:text-5xl lg:text-6xl">
          <span className="animate-pulse bg-gradient-to-r from-[#64ffe7] via-[#ff6fd8] to-[#ffd36a] bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300/70 sm:text-xl">
          A quantitative breakdown of my technical capabilities, engineering
          proficiency, and the stack I leverage to solve complex
          problems in artificial intelligence.
        </p>
      </div>

      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      <div className="mx-auto mt-28 grid max-w-5xl gap-8 md:grid-cols-3">
        {[
          { value: `${SKILLS.length}+`, label: "Technologies", color: "text-[#22d3ee]" },
          { value: "1+", label: "Years Experience", color: "text-[#c084fc]" },
          { value: "15+", label: "Projects Built", color: "text-[#facc15]" },
        ].map((stat) => (
          <article
            key={stat.label}
            className="rounded-[8px] border border-cyan-300/15 bg-[#0d213f]/85 px-8 py-12 text-center"
          >
            <p className={`text-6xl font-light leading-none ${stat.color}`}>
              {stat.value}
            </p>
            <p className="mt-7 text-sm font-medium uppercase tracking-[0.28em] text-slate-200/85 sm:text-base">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
