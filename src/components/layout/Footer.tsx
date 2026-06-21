export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-6 text-xs font-mono text-[var(--color-text-muted)]">
        <p>
          &copy; {new Date().getFullYear()} Zeen Zheng. Built with Next.js.
        </p>
        <nav className="flex gap-4" aria-label="Legal links">
          <a href="/privacy" className="hover:text-[var(--color-text-secondary)] transition-colors">
            privacy.txt
          </a>
          <a href="/terms" className="hover:text-[var(--color-text-secondary)] transition-colors">
            terms.txt
          </a>
        </nav>
      </div>
    </footer>
  );
}
