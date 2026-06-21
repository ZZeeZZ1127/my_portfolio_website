import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import TerminalPrompt from "@/components/ui/TerminalPrompt";

const categoryLabels: Record<string, string> = {
  language: "language",
  framework: "framework",
  tool: "tool",
  cloud: "cloud",
  other: "other",
};

export default function AboutSection() {
  const { aboutParagraphs, skills } = portfolioData;

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      const cat = skill.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="cat /home/zeen/about.txt" />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
        <div className="space-y-4">
          {aboutParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-[var(--color-text-secondary)] leading-relaxed"
            >
              <span className="font-mono text-[var(--color-terminal-prefix)]">
                &gt;{" "}
              </span>
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <TerminalPrompt command="ls /skills/" className="mb-4" />

          <div className="space-y-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <p className="font-mono text-xs text-[var(--color-text-muted)] mb-2">
                  ~/skills/{categoryLabels[category] || category}/
                </p>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill.name}>
                      .{skill.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
