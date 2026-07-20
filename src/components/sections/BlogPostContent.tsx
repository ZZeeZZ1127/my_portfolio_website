import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/types/blog";

const mdxComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="font-mono text-xl text-[var(--color-accent)] mt-10 mb-4">
      # {children}
    </h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="font-mono text-lg text-[var(--color-accent)] mt-8 mb-3 border-b border-[var(--color-border)] pb-1">
      ## {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="font-mono text-base text-[var(--color-text-primary)] mt-6 mb-2">
      ### {children}
    </h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
      {children}
    </p>
  ),
  a: ({
    href,
    children,
  }: {
    href?: string;
    children?: React.ReactNode;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent)] hover:underline underline-offset-2"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="space-y-1.5 mb-4">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="space-y-1.5 mb-4 list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
      <span className="font-mono text-[var(--color-terminal-prefix)]">
        &gt;{" "}
      </span>
      {children}
    </li>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-2 border-[var(--color-accent)] pl-4 py-1 my-4 text-sm text-[var(--color-text-secondary)] italic">
      {children}
    </blockquote>
  ),
  code: ({
    className,
    children,
    ...props
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    // Inline code has plain-string children; block code has React element children
    if (typeof children === "string") {
      return (
        <code className="inline-code font-mono text-[0.8125rem] px-1.5 py-0.5 rounded font-medium">
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: { children?: React.ReactNode }) => {
    const lang = (props as Record<string, unknown>)["data-language"] as
      | string
      | undefined;
    return (
      <div className="code-block-wrapper relative my-6">
        {lang && lang !== "plaintext" && (
          <span className="lang-tag absolute top-2 right-3 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-text-muted)] bg-[var(--color-surface-hover)] px-2 py-0.5 rounded border border-[var(--color-border)] select-none z-10">
            {lang}
          </span>
        )}
        <pre className="border border-[var(--color-border)] rounded-lg p-4 pt-9 overflow-x-auto bg-[var(--color-surface)] font-mono text-[0.8125rem] leading-relaxed">
          {children}
        </pre>
      </div>
    );
  },
  hr: () => <hr className="border-[var(--color-border)] my-8" />,
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm font-mono border-collapse">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-primary)] text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-secondary)]">
      {children}
    </td>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="text-[var(--color-text-primary)] font-semibold">
      {children}
    </strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="text-[var(--color-text-secondary)] italic">{children}</em>
  ),
  img: ({
    src,
    alt,
  }: {
    src?: string;
    alt?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="border border-[var(--color-border)] rounded-lg my-6 max-w-full h-auto"
    />
  ),
};

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { slug, frontmatter, content, readingTime } = post;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <SectionHeader command={`cat ~/blog/${slug}.mdx`} />

      <header className="mb-10">
        <h1 className="font-mono text-2xl text-[var(--color-text-primary)] mb-3">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm font-mono">
          <span className="text-[var(--color-text-muted)]">
            <span className="text-[var(--color-terminal-prefix)]">$</span> date
          </span>
          <span className="text-[var(--color-text-secondary)]">
            {frontmatter.date}
          </span>
          <span className="text-[var(--color-text-muted)]">|</span>
          <span className="text-[var(--color-text-muted)]">
            <span className="text-[var(--color-terminal-prefix)]">$</span> read
          </span>
          <span className="text-[var(--color-text-secondary)]">
            {readingTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag}>#{tag}</Badge>
          ))}
        </div>
      </header>

      {/* MDX content */}
      <div className="prose-custom">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      dark: "github-dark",
                      light: "github-light",
                    },
                    keepBackground: false,
                    defaultLang: "plaintext",
                  },
                ],
              ],
            },
          }}
          components={mdxComponents}
        />
      </div>

      {/* Back link */}
      <hr className="border-[var(--color-border)] mt-12 mb-6" />
      <Link
        href="/blog"
        className="font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
      >
        <span className="text-[var(--color-terminal-prefix)]">$</span> cd ../blog
      </Link>
    </article>
  );
}
