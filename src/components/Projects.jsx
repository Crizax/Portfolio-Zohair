import { motion } from "framer-motion";
import { featuredProjects, otherProjects } from "../data/projects";

function ExternalIcon() {
  return (
    <svg className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 18,
      delay: i * 0.12,
    },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-300/90">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Featured <span className="text-gradient">Engineering Projects</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          Production-ready full-stack web applications, enterprise portals, and applied machine learning pipelines.
        </p>
      </motion.div>

      {/* Primary Featured Grid (HRMS + Monetiq) */}
      <div className="mt-10 grid gap-7 lg:grid-cols-2">
        {featuredProjects.map((p, idx) => (
          <motion.article
            key={p.id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -5 }}
            className="bento-card group flex flex-col justify-between"
          >
            <div className={`relative border-b border-white/[0.07] bg-gradient-to-br ${p.accent} p-6`}>
              <div className="flex items-center justify-between gap-2">
                <span className={`rounded-full border px-3 py-1 font-mono text-sm font-medium ${p.badgeColor}`}>
                  {p.tag}
                </span>
                <div className="flex gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn btn-primary inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-bold"
                    >
                      Live Demo <ExternalIcon />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-sm font-semibold text-slate-200 hover:border-white/35 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                {p.title}
              </h3>

              {/* Visual System Flow Bar */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                {p.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-1.5">
                    {i > 0 && <span className="font-mono text-xl text-slate-500">→</span>}
                    <span className="rounded-md border border-white/10 bg-[#090a0f]/80 px-2.5 py-1 font-mono text-[13px] text-slate-300">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-7">
              <div>
                <p className="text-md text-slate-300 leading-relaxed">{p.summary}</p>
                <ul className="mt-4 space-y-2 text-md text-slate-400">
                  {p.highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                {p.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[13px] text-slate-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Secondary Applied AI & Data Grid */}
      <div className="mt-7 grid gap-6 md:grid-cols-3">
        {otherProjects.map((p, idx) => (
          <motion.article
            key={p.id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -4 }}
            className="bento-card flex flex-col justify-between p-6"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-300/80">
                {p.tag}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-100">{p.title}</h3>
              <p className="mt-2.5 text-md text-slate-400 leading-relaxed">{p.summary}</p>
            </div>

            <div className="mt-6">
              <ul className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[12px] text-slate-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {(p.live || p.github) && (
                <div className="mt-4 flex gap-3 border-t border-white/[0.07] pt-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-md font-semibold text-slate-200 hover:text-white hover:underline"
                    >
                      Live App ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-md font-semibold text-slate-400 hover:text-slate-200"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}