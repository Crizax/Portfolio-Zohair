import { useState } from "react";

// Keyword rules stand in for the NLP model so the idea can run in the browser.
const RULES = [
  [/careem|uber|indrive|petrol|fuel|pso|shell/i, "Transport"],
  [/carrefour|imtiaz|naheed|grocery|foodpanda|kfc|restaurant|cafe|coffee/i, "Food and groceries"],
  [/k-?electric|ssgc|ptcl|nayatel|utility|bill/i, "Bills and utilities"],
  [/netflix|spotify|youtube|cinema|steam|amazonprime/i, "Entertainment"],
  [/daraz|amazon|store|shop/i, "Shopping"],
  [/salary|payroll|credited/i, "Income"],
];

const SAMPLE = `CARREFOUR KHI POS PURCHASE 4,820
CAREEM RIDE 10 OCT 650
K-ELECTRIC BILL PAYMENT 7,300
NETFLIX.COM 1,500
SALARY CREDITED 90,000`;

const categorize = (line) => (RULES.find(([re]) => re.test(line)) || [null, "Uncategorized"])[1];
const classify = (text) =>
  text.split("\n").map((l) => l.trim()).filter(Boolean).slice(0, 6)
    .map((line) => ({ line, cat: categorize(line) }));

function StatementDemo() {
  const [text, setText] = useState(SAMPLE);
  const [results, setResults] = useState(() => classify(SAMPLE));
  const [run, setRun] = useState(0);

  const go = () => {
    setResults(classify(text));
    setRun((r) => r + 1); // new key replays the reveal
  };

  return (
    <div className="rounded-2xl border-2 border-ink bg-paper p-5 shadow-[6px_6px_0_var(--marigold)] sm:p-6">
      <p className="font-display text-xl font-bold">Statement categorizer</p>
      <p className="mt-1 text-sm text-muted">
        My finance tracker labels every bank-statement line. This version uses simple keyword
        rules in your browser; the real one asks an NLP model through FastAPI.
      </p>

      <ul key={run} className="rules mt-4 border-y border-line" aria-live="polite">
        {results.map((r, i) => (
          <li key={i} className="flex items-center justify-between gap-3 py-2">
            <span className="truncate font-mono text-[0.8rem]">{r.line}</span>
            <span className="row-result shrink-0" style={{ animationDelay: `${0.5 + i * 0.45}s` }}>
              <mark className="mark rounded px-2 py-0.5 text-sm font-semibold text-ink"
                    style={{ animationDelay: `${0.7 + i * 0.45}s` }}>
                {r.cat}
              </mark>
            </span>
          </li>
        ))}
      </ul>

      <label htmlFor="statement" className="mt-4 block text-sm font-semibold">
        Edit the lines or paste your own (up to 6)
      </label>
      <textarea
        id="statement"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mt-1 w-full rounded-lg border border-line bg-mist p-2 font-mono text-[0.8rem]"
      />
      <button onClick={go} className="btn btn-solid mt-3 w-full sm:w-auto">Categorize</button>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-24">
      <div>
        <h1 className="text-5xl font-extrabold sm:text-6xl">
          I build full-stack apps, and the NLP services that make them smarter.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I'm Zohair, a software engineer in Karachi. I work with React, Tailwind and Spring Boot,
          and add Python and FastAPI services when a product needs a model.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-solid">See my projects</a>
          <a href="/Zohair_Alam_Resume.pdf" className="btn btn-ghost" download>Download resume</a>
        </div>

        <dl className="mt-10 grid gap-5 text-[0.95rem] sm:grid-cols-2">
          <div>
            <dt className="text-muted">Education</dt>
            <dd className="font-semibold">B.E. Software Engineering, Iqra University (2026)</dd>
          </div>
          <div>
            <dt className="text-muted">Experience</dt>
            <dd className="font-semibold">Front-End Engineer Intern, Sunshine Digital Solutions</dd>
          </div>
        </dl>
      </div>

      <StatementDemo />
    </section>
  );
}
