"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors px-2 py-1 border border-[var(--color-border)] rounded"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      [{theme === "dark" ? "~" : "*"}]
    </button>
  );
}
