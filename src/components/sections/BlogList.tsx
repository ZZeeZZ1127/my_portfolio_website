import { getAllPosts, getAllTags } from "@/lib/blog";
import SectionHeader from "@/components/ui/SectionHeader";
import TagFilter from "./TagFilter";
import BlogCard from "./BlogCard";

interface BlogListProps {
  activeTag: string | null;
}

export default function BlogList({ activeTag }: BlogListProps) {
  const posts = getAllPosts();
  const allTags = getAllTags();

  const filteredPosts = activeTag
    ? posts.filter((post) => post.frontmatter.tags.includes(activeTag))
    : posts;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader command="cat /var/log/blog/*.mdx" />

      <TagFilter tags={allTags} activeTag={activeTag} />

      {filteredPosts.length === 0 ? (
        <p className="font-mono text-sm text-[var(--color-text-muted)] text-center mt-12">
          <span className="text-[var(--color-terminal-warning)]">&gt; </span>
          No posts found
          {activeTag && (
            <>
              {" "}
              for tag:{" "}
              <span className="text-[var(--color-accent)]">#{activeTag}</span>
            </>
          )}
        </p>
      ) : (
        <div className="space-y-4 mt-8">
          {filteredPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
