export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-6 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Zohair Alam • Karachi, Pakistan</p>
        <p className="font-mono">Engineered with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}