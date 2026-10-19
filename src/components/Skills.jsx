import { motion } from "framer-motion";
import { skillGroups, timeline } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 border-t border-white/[0.07]">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr]">
        {/* Left Column: Tech Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
            Technical Arsenal
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Stack & <span className="text-gradient">Capabilities</span>
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g, idx) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className="bento-card p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${g.accent}`} />
                  <h3 className="text-base font-bold text-slate-100">{g.group}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-[#090a0f]/80 px-2.5 py-1 font-mono text-xs text-slate-300 hover:border-slate-500/50 hover:text-white transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-300/90">
            Background
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Experience & Education
          </h2>

          <div className="mt-8 space-y-4">
            {timeline.map((item) => (
              <motion.div
                key={item.role}
                whileHover={{ y: -3 }}
                className="bento-card p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-indigo-300">{item.period}</span>
                  <span className="rounded-full bg-white/[0.05] px-2.5 py-0.5 text-xs text-slate-300">
                    {item.org}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-slate-100">{item.role}</h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            <div className="bento-card border-dashed p-6">
              <h3 className="text-sm font-bold text-slate-100">
                What I Deliver for Teams & Clients
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><span className="text-indigo-300">•</span> Full-Stack React & Spring</li>
                <li className="flex items-center gap-1.5"><span className="text-indigo-300">•</span> Custom HRMS Portals</li>
                <li className="flex items-center gap-1.5"><span className="text-indigo-300">•</span> FastAPI NLP Services</li>
                <li className="flex items-center gap-1.5"><span className="text-indigo-300">•</span> Interactive Dashboards</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}