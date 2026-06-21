import { cn } from "@/lib/utils";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
