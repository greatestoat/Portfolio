"use client";

import { type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import CornerBrackets from "./CornerBrackets";

type HudPanelProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "crimson" | "cyan";
  brackets?: boolean;
};

export default function HudPanel({
  children,
  className,
  accent = "crimson",
  brackets = true,
}: HudPanelProps) {
  return (
    <div
      onPointerMove={(event: PointerEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -5;
        const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
        event.currentTarget.style.setProperty("--tilt-x", `${rotateX}deg`);
        event.currentTarget.style.setProperty("--tilt-y", `${rotateY}deg`);
      }}
      onPointerLeave={(event: PointerEvent<HTMLDivElement>) => {
        event.currentTarget.style.setProperty("--tilt-x", "0deg");
        event.currentTarget.style.setProperty("--tilt-y", "0deg");
      }}
      className={cn(
        "hud-panel relative overflow-hidden border bg-panel/60 backdrop-blur-md",
        accent === "crimson"
          ? "border-crimson/30 shadow-panel"
          : "border-cyan/30 shadow-[inset_0_0_0_1px_rgba(62,230,224,0.25),0_0_24px_rgba(62,230,224,0.06)]",
        className
      )}
    >
      {brackets && <CornerBrackets color={accent} />}
      {children}
    </div>
  );
}
