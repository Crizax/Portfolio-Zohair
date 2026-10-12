import { projects, additional } from "../data/projects";

function Links({ p, dark }) {
  if (!p.github && !p.live) return null;
  const cls = dark ? "btn btn-light" : "btn btn-ghost";
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {p.live && <a className={cls} href={p.live} target="_blank" rel="noreferrer">Live preview</a>}
      {p.github && <a className={cls} href={p.github} target="_blank" rel="noreferrer">View code</a>}
    </div>
  );
}

export default function Projects() {
  const [main, ...rest] = projects;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="mt-3 max-w-xl text-muted">
        My full-stack project first, then applied machine learning work from my degree.
      </p>

      <article className="bg-ink text-mist mt-10 rounded-2xl p-7 md:p-12">
        <h3 className="max-w-2xl text-3xl font-bold md:text-4xl">{main.title}</h3>
        <p className="text-dim mt-4 max-w-2xl">{main.summary}</p>

        <ol className="mt-8 flex flex-wrap items-center gap-y-3" aria-label="How the parts connect">
          {main.flow.map((step, i) => (
            <li key={step} className="flex items-center">
              {i > 0 && <span className="h-px w-6 bg-[#3a4a5a] sm:w-10" aria-hidden="true" />}
              <span className="rounded-lg border border-[#3a4a5a] px-3 py-1.5 font-semibold">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-dim mt-3 text-sm">All services run together with Docker Compose.</p>

        <ul className="text-dim mt-8 max-w-2xl list-disc space-y-2 pl-5">
          {main.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-2">
          {main.stack.map((s) => <li key={s} className="chip chip-dark">{s}</li>)}
        </ul>
        <Links p={main} dark />
      </article>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {rest.map((p) => (
          <article key={p.id} className="bg-paper flex flex-col rounded-xl border border-line p-6">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-muted mt-3">{p.summary}</p>
            <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-[0.95rem]">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
            </ul>
            <Links p={p} />
          </article>
        ))}
      </div>

      <div className="rules mt-12 border-t border-line">
        {additional.map((a) => (
          <div key={a.title} className="grid gap-1 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
            <h3 className="text-lg font-bold">{a.title}</h3>
            <p className="text-muted">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
