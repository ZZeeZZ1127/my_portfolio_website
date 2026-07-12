import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost, BlogPostSummary } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

/** Strip path traversal characters; returns empty string if slug was tampered with. */
function sanitizeSlug(slug: string): string {
  const sanitized = slug.replace(/[^a-zA-Z0-9_-]/g, "");
  if (sanitized !== slug) return "";
  return sanitized;
}

/** Estimate reading time from word count. */
function calculateReadingTime(content: string): string {
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/** Validate frontmatter has all required fields. */
function isValidFrontmatter(data: unknown): data is BlogFrontmatter {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.title === "string" &&
    typeof d.date === "string" &&
    Array.isArray(d.tags) &&
    d.tags.every((t: unknown) => typeof t === "string") &&
    typeof d.excerpt === "string"
  );
}

/** Read all .mdx files from content/blog/, parse frontmatter, sort by date descending. */
export function getAllPosts(): BlogPostSummary[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const filenames = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"));

  const posts: BlogPostSummary[] = [];

  for (const filename of filenames) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    if (!isValidFrontmatter(data)) {
      console.warn(`Skipping ${filename}: invalid frontmatter`);
      continue;
    }

    const slug = filename.replace(/\.mdx$/, "");

    posts.push({
      slug,
      frontmatter: data,
      readingTime: calculateReadingTime(content),
    });
  }

  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );

  return posts;
}

/** Read a single post by slug. Returns null if not found or slug is invalid. */
export function getPostBySlug(slug: string): BlogPost | null {
  const clean = sanitizeSlug(slug);
  if (!clean) return null;

  const filePath = path.join(BLOG_DIR, `${clean}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!isValidFrontmatter(data)) return null;

  return {
    slug: clean,
    frontmatter: data,
    content,
    readingTime: calculateReadingTime(content),
  };
}

/** Collect all unique tags across posts, sorted alphabetically. */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.frontmatter.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}
