import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { BlogPostSummary } from "@/types/blog";

interface BlogCardProps {
  post: BlogPostSummary;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-shadow)] transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-mono text-base text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
            <span className="text-[var(--color-terminal-prefix)]">
              ./{String(index).padStart(2, "0")}
            </span>{" "}
            {frontmatter.title}
          </h3>
          <span className="font-mono text-xs text-[var(--color-text-muted)] whitespace-nowrap">
            [{frontmatter.date}]
          </span>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
          {frontmatter.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag}>#{tag}</Badge>
            ))}
          </div>
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {readingTime}
          </span>
        </div>
      </article>
    </Link>
  );
}
