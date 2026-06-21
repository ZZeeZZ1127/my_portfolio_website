import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactSection() {
  const { social } = portfolioData;

  const contacts = [
    { label: "MAILTO", value: social.email, href: `mailto:${social.email}` },
    { label: "GIT", value: social.github.replace("https://", ""), href: social.github },
    { label: "LINK", value: social.linkedin.replace("https://www.", ""), href: social.linkedin },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="cat ~/.contactrc" />

      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-prose">
        <span className="font-mono text-[var(--color-terminal-prefix)]">&gt; </span>
        I&apos;m always open to discussing new opportunities, interesting projects,
        or just connecting with fellow developers.
      </p>

      <div className="max-w-lg p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-sm space-y-3">
        {contacts.map((c) => (
          <p key={c.label}>
            <span className="text-[var(--color-terminal-warning)]">
              {c.label}
            </span>
            <span className="text-[var(--color-text-muted)]">:</span>{" "}
            <a
              href={c.href}
              className="text-[var(--color-accent)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.value}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}
