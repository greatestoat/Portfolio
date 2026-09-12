"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GlitchText from "@/components/ui/GlitchText";
import HudPanel from "@/components/ui/HudPanel";

const roles = ["SOFTWARE ENGINEER", "INTERACTION ARCHITECT", "SYSTEMS BUILDER"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="hero-orbit hero-orbit-left" aria-hidden />
      <div className="hero-orbit hero-orbit-right" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-4 flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.35em] text-crimson/80">
          <span className="status-dot" />
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(5px)" }}
              transition={{ duration: 0.35 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="h-px w-8 bg-crimson/50" />
        </div>
        <GlitchText
          text="RAHUL PADAM"
          as="h1"
          className="text-5xl md:text-7xl lg:text-8xl"
        />
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-steel">
          I build production systems that move cleanly from API design to
          cloud deployment, with a sharp eye for reliability and detail.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 font-mono text-[9px] tracking-[0.2em] text-white/45">
          <span>LOC // 12.4K</span>
          <span className="h-3 w-px bg-white/20" />
          <span>BUILD // 99.8%</span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-cyan">LIVE</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-14 grid grid-cols-2 gap-3 md:grid-cols-4"
      >
        {[
          ["Experience", "2+ yrs"],
          ["Projects", "6 shipped"],
          ["Stack", "Node / React"],
          ["Status", "Available"],
        ].map(([label, value]) => (
          <HudPanel key={label} className="px-5 py-3 transition-transform duration-300 hover:-translate-y-1">
            <p className="font-mono text-[10px] text-steel">{label}</p>
            <p className="mt-1 text-sm text-white">{value}</p>
          </HudPanel>
        ))}
      </motion.div>
    </section>
  );
}
