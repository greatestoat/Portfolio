import { notFound } from "next/navigation";
import HudPanel from "@/components/ui/HudPanel";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-0">
      <p className="mb-2 font-mono text-xs tracking-[0.3em] text-crimson/80">
        // {project.year}
      </p>
      <h1 className="mb-6 font-display text-4xl text-white">
        {project.title}
      </h1>
      <HudPanel className="p-8">
        <p className="text-white/90">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border border-crimson/25 px-2 py-0.5 font-mono text-[10px] text-steel"
            >
              {s}
            </span>
          ))}
        </div>
      </HudPanel>
    </div>
  );
}
