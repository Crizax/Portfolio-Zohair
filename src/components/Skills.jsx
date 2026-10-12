import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="rules mt-10">
          {skills.map((g) => (
            <div key={g.group} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr]">
              <h3 className="text-xl font-bold">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => <li key={item} className="chip">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
