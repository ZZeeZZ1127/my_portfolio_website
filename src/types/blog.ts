export interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

/** Blog post summary for the listing page — no full content, just metadata. */
export type BlogPostSummary = Omit<BlogPost, "content">;
