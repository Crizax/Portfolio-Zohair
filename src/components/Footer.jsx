export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-6 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Zohair Alam</p>
        <p>Built with React, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
