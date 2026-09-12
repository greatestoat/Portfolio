"use client";

import { cn } from "@/lib/utils";

type GlitchTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function GlitchText({ text, as = "h1", className }: GlitchTextProps) {
  const Tag = as;

  return (
    <Tag
      data-text={text}
      className={cn(
        "glitch relative inline-block font-display font-semibold tracking-tight text-white",
        className
      )}
    >
      {text}
    </Tag>
  );
}
