import { useState } from "react";

const EMAIL = "zohairalam03@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="max-w-2xl text-4xl font-bold md:text-5xl">
        I'm open to full-stack and AI engineering roles, and to freelance projects.
      </h2>
      <p className="mt-5 max-w-xl text-muted">
        Send a short note about what you're building. I reply by email.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${EMAIL}`} className="btn btn-solid">Email {EMAIL}</a>
        <button onClick={copy} className="btn btn-ghost" aria-live="polite">
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>

      <p className="mt-6 flex gap-6">
        <a className="font-semibold underline hover:text-teal" href="https://github.com/Crizax" target="_blank" rel="noreferrer">GitHub</a>
        <a className="font-semibold underline hover:text-teal" href="https://linkedin.com/in/zohair-alam-0b6947279" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}
