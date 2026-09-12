import HudPanel from "@/components/ui/HudPanel";
import { experience } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-3xl px-6 py-24 md:px-0">
      <h2 className="mb-6 font-mono text-xs tracking-[0.3em] text-crimson/80">
        // ABOUT
      </h2>
      <HudPanel className="p-8">
        <p className="text-lg leading-relaxed text-white/90">
          Full-stack software developer building scalable web applications with
          Node.js, Python, Spring Boot, React, and cloud-native tooling. I enjoy
          turning complex workflows into dependable products, improving systems
          through measurement, and collaborating closely with engineering, QA,
          product, and support teams.
        </p>
      </HudPanel>
      <div className="mt-5 space-y-3">
        {experience.map((item) => (
          <HudPanel key={`${item.company}-${item.role}`} className="grid gap-3 p-5 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-display text-lg text-white">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-crimson">{item.company}</p>
              <p className="mt-3 text-sm text-steel">{item.detail}</p>
            </div>
            <div className="font-mono text-[10px] text-steel md:text-right">
              <p>{item.period}</p>
              <p className="mt-1 text-white/45">{item.location}</p>
            </div>
          </HudPanel>
        ))}
      </div>
    </section>
  );
}
