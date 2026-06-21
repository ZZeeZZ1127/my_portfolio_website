import TerminalPrompt from "@/components/ui/TerminalPrompt";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <TerminalPrompt command="404: Resource Not Found" />

        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4 mb-8 font-mono text-sm">
          <span className="text-[var(--color-terminal-error)]">&gt; </span>
          The requested resource could not be located on this server.
        </p>

        <Button href="/" variant="secondary">
          $ cd ~
        </Button>
      </div>
    </main>
  );
}
