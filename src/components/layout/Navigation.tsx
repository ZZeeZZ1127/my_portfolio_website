"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "~/" },
  { href: "/about", label: "~/about" },
  { href: "/blog", label: "~/blog" },
  { href: "/experience", label: "~/experience" },
  { href: "/projects", label: "~/projects" },
  { href: "/certifications", label: "~/certifications" },
  { href: "/resume", label: "~/resume" },
  { href: "/contact", label: "~/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm text-[var(--color-accent)] hover:opacity-80 transition-opacity"
        >
          zeen@portfolio:~$
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-sm px-2 py-1 rounded transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)] bg-[var(--color-surface-hover)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileNav links={links} />
        </div>
      </nav>
    </header>
  );
}
