import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "zohairalam03@gmail.com";
const SUBJECT = encodeURIComponent("Opportunity / Project Inquiry");
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${SUBJECT}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "spring", stiffness: 85, damping: 18 }}
        className="bento-card relative overflow-hidden p-8 sm:p-12 text-center"
      >
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 font-mono text-xs text-slate-300">
          Let's Build Together
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
          Open to <span className="text-gradient">Full-Stack, AI Engineering</span> & Freelance Roles.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-400">
          Have an opportunity or a product you want to ship? Drop a message and I'll get back to you promptly.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          {/* Opens Gmail Web Compose directly in a new tab */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-xl px-6 py-3 text-sm font-bold"
          >
            Email via Gmail ↗
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={copy}
            className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.08] hover:text-white transition cursor-pointer"
            aria-live="polite"
          >
            {copied ? "✓ Email Copied!" : `Copy ${EMAIL}`}
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-slate-400">
          <a
            className="hover:text-white transition"
            href="https://github.com/Crizax"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="hover:text-white transition"
            href="https://linkedin.com/in/zohair-alam-0b6947279"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}