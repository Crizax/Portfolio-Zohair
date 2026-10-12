import { useState } from "react";

const links = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold">Zohair Alam</a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="hover:text-teal">{label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-solid hidden md:inline-flex">Hire me</a>

        <button
          className="btn btn-ghost md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="rules border-t border-line px-5 pb-3 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="block py-3" onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
