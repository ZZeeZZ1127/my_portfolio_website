import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

export default function ProjectShowcase() {
  const { projects } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="ls -la /projects/" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const isWide = projects.length % 2 === 1 && i === 0;
          return (
            <article
              key={project.id}
              className={`group p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-shadow)] transition-all duration-300 ${
                isWide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-mono text-base text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  <span className="text-[var(--color-terminal-prefix)]">
                    📁{" "}
                  </span>
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[var(--color-text-muted)] whitespace-nowrap">
                  [{project.date}]
                </span>
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t}>.{t.toLowerCase().replace(/\s+/g, "")}</Badge>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
