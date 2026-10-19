import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Projects", "#projects"],
  ["Stack & Experience", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-nav sticky top-0 z-50 border-b border-white/[0.07]"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
        aria-label="Main Navigation"
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] font-mono text-xs font-bold text-white group-hover:border-white/30 transition">
            ZA
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            Zohair Alam
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/Zohair_Alam_Resume.pdf"
            download
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300 hover:border-white/25 hover:text-white transition"
          >
            Resume.pdf
          </a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="btn-primary rounded-lg px-4 py-2 text-xs font-bold"
          >
            Let's Talk
          </motion.a>
        </div>

        <button
          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.07] bg-[#090a0f]/95 px-5 py-4 space-y-3 md:hidden"
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-3">
              <a
                href="/Zohair_Alam_Resume.pdf"
                download
                className="flex-1 text-center rounded-lg border border-white/15 py-2 text-xs font-semibold text-white"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 text-center rounded-lg py-2 text-xs font-bold"
              >
                Hire Me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}