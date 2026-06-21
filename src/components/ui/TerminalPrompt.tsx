export default function TerminalPrompt({
  command,
  className = "",
}: {
  command: string;
  className?: string;
}) {
  return (
    <p className={`font-mono text-sm text-[var(--color-text-muted)] ${className}`}>
      <span className="text-[var(--color-terminal-prefix)]">$</span> {command}
      <span className="inline-block w-2 h-4 bg-[var(--color-terminal-prefix)] ml-1 animate-blink align-middle" />
    </p>
  );
}
