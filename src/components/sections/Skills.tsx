import HudPanel from "@/components/ui/HudPanel";
import StatBar from "@/components/ui/StatBar";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-3xl px-6 py-12 md:px-0">
      <h2 className="mb-6 font-mono text-xs tracking-[0.3em] text-crimson/80">
        // CAPABILITIES
      </h2>
      <HudPanel className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
        {skills.map((s) => (
          <StatBar key={s.label} label={s.label} value={s.value} />
        ))}
      </HudPanel>
    </section>
  );
}
