import TerminalPrompt from "./TerminalPrompt";

export default function SectionHeader({ command }: { command: string }) {
  return (
    <div className="mb-12">
      <TerminalPrompt command={command} className="text-base" />
      <hr className="mt-3 border-[var(--color-border)]" />
    </div>
  );
}
