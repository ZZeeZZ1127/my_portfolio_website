import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  download,
  className,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const isDownload = download || href.endsWith(".pdf");

  const classes = cn(
    "inline-block font-mono text-sm px-5 py-2.5 rounded border transition-all duration-200",
    variant === "primary" &&
      "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] hover:brightness-110 active:scale-[0.98]",
    variant === "secondary" &&
      "bg-transparent text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-[0.98]",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        download={isDownload || undefined}
      >
        {children}
      </a>
    );
  }

  if (isDownload) {
    return (
      <a href={href} className={classes} download>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
