const steps = [
  ["Understand", "Clarify what the product must do and who uses it before choosing tools."],
  ["Plan", "Sketch the data model and API endpoints so frontend and backend agree early."],
  ["Build", "Develop the React interface and the Spring Boot or FastAPI services in small, working pieces."],
  ["Test", "Check the app in the browser and on mobile. Compare models against a baseline with precision, recall and F1."],
  ["Ship", "Containerize with Docker so it runs the same everywhere, then deploy."],
];

export default function Process() {
  return (
    <section id="process" className="bg-paper border-y border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl font-bold">How I work</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-6">
          {steps.map(([title, text], i) => (
            <li key={title} className="border-t-2 border-ink pt-4">
              <span className="font-display text-3xl font-extrabold text-teal">{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{title}</h3>
              <p className="text-muted mt-2 text-[0.95rem]">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
