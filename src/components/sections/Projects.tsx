import Link from "next/link";
import HudPanel from "@/components/ui/HudPanel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-3xl px-6 py-12 md:px-0">
      <h2 className="mb-6 font-mono text-xs tracking-[0.3em] text-crimson/80">
        // SELECTED WORK
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <HudPanel className="group p-6 transition-colors hover:border-crimson/60">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg text-white group-hover:text-crimson">
                    {p.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-steel">
                    {p.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-crimson/25 px-2 py-0.5 font-mono text-[10px] text-steel"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-xs text-steel">{p.year}</span>
              </div>
            </HudPanel>
          </Link>
        ))}
      </div>
    </section>
  );
}
