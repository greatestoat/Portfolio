import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        panel: "#0b0b0d",
        crimson: {
          DEFAULT: "#ff2b3d",
          dim: "#7a1620",
          glow: "#ff5a68",
        },
        cyan: {
          DEFAULT: "#3ee6e0",
          dim: "#0f5c59",
        },
        steel: "#8a8f98",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 0 12px rgba(255,43,61,0.55), 0 0 2px rgba(255,43,61,0.9)",
        "glow-cyan": "0 0 12px rgba(62,230,224,0.5), 0 0 2px rgba(62,230,224,0.9)",
        panel: "inset 0 0 0 1px rgba(255,43,61,0.25), 0 0 24px rgba(255,43,61,0.06)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.4" },
          "94%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        flicker: "flicker 6s infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
