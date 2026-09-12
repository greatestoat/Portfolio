"use client";

import { motion } from "framer-motion";

type StatBarProps = {
  label: string;
  value: number; // 0-100
};

export default function StatBar({ label, value }: StatBarProps) {
  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs text-steel">
        <span>{label}</span>
        <span className="text-crimson">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-crimson shadow-glow"
        />
      </div>
    </div>
  );
}
