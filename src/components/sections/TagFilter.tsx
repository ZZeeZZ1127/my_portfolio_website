import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-8">
      <Link
        href="/blog"
        className={cn(
          "font-mono text-xs px-3 py-1 rounded border transition-colors",
          !activeTag
            ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10"
            : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
        )}
      >
        all
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog?tag=${encodeURIComponent(tag)}`}
          className={cn(
            "font-mono text-xs px-3 py-1 rounded border transition-colors",
            activeTag === tag
              ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/10"
              : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
          )}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
