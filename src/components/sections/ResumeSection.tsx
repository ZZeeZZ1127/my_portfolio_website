import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function ResumeSection() {
  const { education, resumeUrl } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="cat /home/zeen/education.txt" />

      <div className="max-w-xl p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] mb-8">
        <div className="space-y-3 font-mono text-sm">
          <p>
            <span className="text-[var(--color-text-muted)]">INSTITUTION</span>
            <span className="text-[var(--color-text-muted)]">:</span>{" "}
            <span className="text-[var(--color-text-primary)]">
              {education.school}
            </span>
          </p>
          <p>
            <span className="text-[var(--color-text-muted)]">DEGREE</span>
            <span className="text-[var(--color-text-muted)]">
              {"     "}:
            </span>{" "}
            <span className="text-[var(--color-text-primary)]">
              {education.degree}
            </span>
          </p>
          <p>
            <span className="text-[var(--color-text-muted)]">EXPECTED</span>
            <span className="text-[var(--color-text-muted)]">  :</span>{" "}
            <span className="text-[var(--color-text-primary)]">
              {education.graduation}
            </span>
          </p>
          <p>
            <span className="text-[var(--color-text-muted)]">LOCATION</span>
            <span className="text-[var(--color-text-muted)]">   :</span>{" "}
            <span className="text-[var(--color-text-primary)]">
              {education.location}
            </span>
          </p>
        </div>

        {education.courses.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-3">
              $ ls ~/courses/
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {education.courses.map((course) => (
                <li
                  key={course}
                  className="font-mono text-xs text-[var(--color-text-secondary)] break-words"
                >
                  <span className="text-[var(--color-terminal-prefix)]">./</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Button href={resumeUrl} download>
        $ wget Zeen-Zheng-Resume.pdf
      </Button>
    </section>
  );
}
