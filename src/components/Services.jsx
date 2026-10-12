import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-4xl font-bold">What I can build</h2>
      <p className="mt-3 max-w-xl text-muted">
        For teams hiring and for freelance clients.
      </p>
      <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border-t-2 border-ink pt-4">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="text-muted mt-2 max-w-md">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
