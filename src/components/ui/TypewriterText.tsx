export default function TypewriterText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <p className="animate-typing font-mono text-[var(--color-text-secondary)]">
        {children}
      </p>
    </div>
  );
}
