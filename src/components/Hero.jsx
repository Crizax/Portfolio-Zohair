import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RULES = [
  [/careem|uber|indrive|petrol|fuel|pso|shell/i, "Transport", "text-slate-200 bg-slate-500/15 border-slate-500/30"],
  [/carrefour|imtiaz|naheed|grocery|foodpanda|kfc|restaurant|cafe|coffee/i, "Food & Groceries", "text-indigo-200 bg-indigo-500/15 border-indigo-500/30"],
  [/k-?electric|ssgc|ptcl|nayatel|utility|bill/i, "Bills & Utilities", "text-sky-200 bg-sky-500/15 border-sky-500/30"],
  [/netflix|spotify|youtube|cinema|steam|amazonprime/i, "Entertainment", "text-purple-200 bg-purple-500/15 border-purple-500/30"],
  [/daraz|amazon|store|shop/i, "Shopping", "text-teal-200 bg-teal-500/15 border-teal-500/30"],
  [/salary|payroll|credited/i, "Income", "text-emerald-200 bg-emerald-500/15 border-emerald-500/30"],
];

const SAMPLE = `CARREFOUR KHI POS PURCHASE 4,820
CAREEM RIDE 10 OCT 650
K-ELECTRIC BILL PAYMENT 7,300
NETFLIX.COM 1,500
SALARY CREDITED 90,000`;

const categorize = (line) => {
  const match = RULES.find(([re]) => re.test(line));
  return match
    ? { cat: match[1], color: match[2] }
    : { cat: "Uncategorized", color: "text-slate-400 bg-slate-800/80 border-slate-700" };
};

const classify = (text) =>
  text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 6)
    .map((line) => ({ line, ...categorize(line) }));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

function StatementDemo() {
  const [text, setText] = useState(SAMPLE);
  const [results, setResults] = useState(() => classify(SAMPLE));
  const [run, setRun] = useState(0);

  const go = () => {
    setResults(classify(text));
    setRun((r) => r + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.25 }}
    >
      <div className="bento-card relative overflow-hidden p-5 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="ml-2 font-mono text-xs text-slate-400">
              nlp-classifier-demo.py
            </span>
          </div>
          <span className="rounded-full border border-indigo-400/25 bg-indigo-400/10 px-2.5 py-0.5 font-mono text-[11px] text-indigo-300">
            Live Playground
          </span>
        </div>

        <p className="mt-3.5 text-sm text-slate-400">
          Interactive preview of how my <strong className="text-slate-200">Monetiq</strong> platform classifies raw bank statements:
        </p>

        <ul
          className="mt-3 divide-y divide-white/[0.05] rounded-xl border border-white/[0.07] bg-[#090a0f]/90 px-3.5 py-1"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.div key={run}>
              {results.map((r, i) => (
                <motion.li
                  key={`${run}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  className="flex items-center justify-between gap-3 py-2.5 border-b border-white/[0.04] last:border-none"
                >
                  <span className="truncate font-mono text-xs text-slate-300">{r.line}</span>
                  <span className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium ${r.color}`}>
                    {r.cat}
                  </span>
                </motion.li>
              ))}
            </motion.div>
          </AnimatePresence>
        </ul>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label htmlFor="statement" className="font-mono text-xs text-slate-400">
              Test custom transaction lines (up to 6):
            </label>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={go}
              className="btn-primary rounded-lg px-3 py-1 font-mono text-xs font-bold cursor-pointer"
            >
              Run Classifier →
            </motion.button>
          </div>
          <textarea
            id="statement"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-[#090a0f] p-2.5 font-mono text-xs text-slate-200 focus:border-slate-400 focus:outline-none transition-colors"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.15fr_0.95fr] lg:items-center lg:pt-20"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Available for Full-Stack & AI Engineering Roles
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.08]"
        >
          Engineering scalable{" "}
          <span className="text-gradient">Full-Stack Apps</span> & intelligent{" "}
          <span className="text-gradient">AI Systems.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
        >
          Hi, I'm <strong className="text-slate-100 font-semibold">Zohair Alam</strong> — a Software Engineer based in Karachi. I architect responsive{" "}
          <strong className="text-slate-200">React & Spring Boot</strong> platforms and integrate{" "}
          <strong className="text-slate-200">Python, FastAPI & NLP</strong> models that turn raw data into product features.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5">
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="btn-primary rounded-xl px-6 py-3 text-sm font-bold"
          >
            Explore Featured Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="/Zohair_Alam_Resume.pdf"
            download
            className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition"
          >
            Download CV
          </motion.a>
          <a
            href="https://github.com/Crizax"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/[0.08] bg-transparent px-4 py-3 text-sm font-medium text-slate-400 hover:border-white/25 hover:text-slate-100 transition"
          >
            GitHub ↗
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-6"
        >
          <div>
            <p className="font-display text-2xl font-bold text-slate-100">B.E. SE</p>
            <p className="text-xs text-slate-500">Iqra University ('26)</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-slate-200">Full-Stack</p>
            <p className="text-xs text-slate-500">React • Spring Boot • FastAPI</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-indigo-300">Applied AI</p>
            <p className="text-xs text-slate-500">PyTorch • Transformers • YOLO</p>
          </div>
        </motion.div>
      </motion.div>

      <StatementDemo />
    </section>
  );
}