import { portfolioData } from "@/data/portfolio";
import GlitchText from "@/components/ui/GlitchText";
import TypewriterText from "@/components/ui/TypewriterText";
import TerminalPrompt from "@/components/ui/TerminalPrompt";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { name, title, tagline, bio, resumeUrl } = portfolioData;

  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <TerminalPrompt command="visitor@portfolio:~$ whoami" />

        <GlitchText
          as="h1"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mt-6 mb-4 text-[var(--color-text-primary)]"
        >
          {name}
        </GlitchText>

        <TypewriterText className="mb-6">
          {title}
        </TypewriterText>

        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-prose">
          <span className="font-mono text-[var(--color-terminal-prefix)]">&gt; </span>
          {bio[0]}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button href="/projects" variant="primary">
            $ ./view_projects.sh
          </Button>
          <Button href={resumeUrl} variant="secondary" download>
            $ wget resume.pdf
          </Button>
        </div>
      </div>
    </section>
  );
}
