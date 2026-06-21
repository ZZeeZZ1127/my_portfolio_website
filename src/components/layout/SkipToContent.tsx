export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-surface)] focus:text-[var(--color-accent)] focus:border focus:border-[var(--color-accent)] focus:rounded font-mono text-sm"
    >
      Skip to content
    </a>
  );
}
