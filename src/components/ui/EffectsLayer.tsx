"use client";

import { useEffect } from "react";

export default function EffectsLayer() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      root.style.setProperty("--mouse-x", currentX.toFixed(4));
      root.style.setProperty("--mouse-y", currentY.toFixed(4));
      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX / window.innerWidth - 0.5;
      targetY = event.clientY / window.innerHeight - 0.5;
      root.style.setProperty("--cursor-left", `${event.clientX}px`);
      root.style.setProperty("--cursor-top", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="atmosphere" aria-hidden />
      <div className="cursor-spotlight" aria-hidden />
      <div className="hud-cursor" aria-hidden>
        <span />
      </div>
    </>
  );
}
