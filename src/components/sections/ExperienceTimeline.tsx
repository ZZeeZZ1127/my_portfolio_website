import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="tail -f /var/log/experience.log" />

      <div className="relative border-l-2 border-[var(--color-border)] ml-4 space-y-10">
        {experience.map((exp) => (
          <article key={exp.id} className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-3 h-3 -translate-x-[7px] rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />

            <div className="font-mono text-xs text-[var(--color-text-muted)] mb-1">
              [{exp.startDate}] — [{exp.endDate}]
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-[var(--color-accent)]">
                {exp.role}
              </h3>
              {exp.category === "non-technical" && (
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  ops
                </span>
              )}
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              {exp.company} &middot; {exp.location}
            </p>

            <ul className="space-y-1.5">
              {exp.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="text-sm text-[var(--color-text-secondary)] leading-relaxed"
                >
                  <span className="font-mono text-[var(--color-terminal-prefix)]">
                    &gt;{" "}
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
