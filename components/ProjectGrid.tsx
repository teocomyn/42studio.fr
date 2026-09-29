import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

type ProjectGridProps = {
  slugs?: string[];
  className?: string;
};

// Grille de réalisations réelles (data/projects.ts). N'affiche que les projets illustrés.
export function ProjectGrid({ slugs, className = "mt-10" }: ProjectGridProps) {
  if (!slugs?.length) return null;

  const items = slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project && project.image));

  if (!items.length) return null;

  return (
    <div className={`${className} grid gap-3 sm:grid-cols-2 lg:grid-cols-3`}>
      {items.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group overflow-hidden border border-white/10 bg-[var(--bg-elevated)] transition hover:border-white/30"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src={project.image!}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
            />
          </div>
          <div className="p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">{project.year}</p>
            <p className="mt-1 text-sm font-light tracking-[-0.02em] text-white">{project.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
