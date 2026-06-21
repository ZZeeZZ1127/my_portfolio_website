"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "span";
  className?: string;
}

export default function GlitchText({
  children,
  as: Tag = "h1",
  className,
}: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  return (
    <Tag
      className={cn(
        glitching && "animate-glitch",
        className,
      )}
      onMouseEnter={() => setGlitching(true)}
      onAnimationEnd={() => setGlitching(false)}
    >
      {children}
    </Tag>
  );
}
