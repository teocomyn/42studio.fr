import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SiteChrome } from "@/components/SiteChrome";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd, createMetadata, creativeWorkJsonLd, defaultOgImage } from "@/lib/seo";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    keywords: [...project.services, project.category, "case study design", "42studio"],
    type: "article",
    ogImage: project.image ?? defaultOgImage
  });
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <SiteChrome>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Projets", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` }
        ])}
      />
      <JsonLd
        data={creativeWorkJsonLd({
          name: project.title,
          description: project.summary,
          path: `/work/${project.slug}`,
          datePublished: `${project.year}-01-01`,
          keywords: project.services,
          about: project.category
        })}
      />
      <section className="section-pad flex min-h-[92svh] flex-col justify-end pt-36">
        <div className="mb-8 flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
          <span>({project.index})</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
          <span className="border border-white/20 px-2 py-1 text-white/70">Réalisation client</span>
        </div>
        <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.88] tracking-[-0.06em]">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-4 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/85"
          >
            Voir le site live <span aria-hidden>↗</span>
          </a>
          {project.secondaryHrefs?.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Variante internationale <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-pad border-y border-white/10">
        <Reveal className="grid gap-10 md:grid-cols-[1fr_28rem]">
          <div className="min-h-[32rem] overflow-hidden border border-white/10 bg-[var(--bg-elevated)]">
            {project.image ? (
              <div className="relative h-full min-h-[32rem]">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `Capture du site ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 64vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="halftone grid h-full min-h-[32rem] place-items-center p-8 text-center">
                <p className="max-w-sm font-mono text-[11px] uppercase leading-6 tracking-[0.1em] text-white/70">
                  Capture à ajouter prochainement. Le site live est disponible via le lien.
                </p>
              </div>
            )}
          </div>
          <div>
            <span className="mono-label">Périmètre</span>
            <div className="mt-8 space-y-4">
              {project.metrics.map((metric) => (
                <div key={metric} className="border-b border-white/10 pb-4 text-3xl font-light tracking-[-0.04em]">
                  {metric}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span key={service} className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {(project.challenge || project.approach || project.result) && (
        <section className="section-pad border-b border-white/10">
          <Reveal className="grid gap-8 md:grid-cols-3">
            {project.challenge ? (
              <article className="border-t border-white/10 pt-7">
                <h2 className="text-2xl font-light tracking-[-0.03em]">Le contexte</h2>
                <p className="mt-5 leading-7 text-[var(--muted)]">{project.challenge}</p>
              </article>
            ) : null}
            {project.approach ? (
              <article className="border-t border-white/10 pt-7">
                <h2 className="text-2xl font-light tracking-[-0.03em]">L&apos;approche</h2>
                <p className="mt-5 leading-7 text-[var(--muted)]">{project.approach}</p>
              </article>
            ) : null}
            {project.result ? (
              <article className="border-t border-white/10 pt-7">
                <h2 className="text-2xl font-light tracking-[-0.03em]">Le résultat</h2>
                <p className="mt-5 leading-7 text-[var(--muted)]">{project.result}</p>
              </article>
            ) : null}
          </Reveal>
        </section>
      )}

      <section className="section-pad">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_26rem] md:items-end">
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.055em]">
            Un projet similaire en tête&nbsp;? Construisons-le ensemble.
          </h2>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex h-14 w-fit items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
            >
              Parler de mon projet <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] transition hover:text-white"
            >
              ← Retour aux projets
            </Link>
          </div>
        </Reveal>
      </section>
      <ContactCta />
    </SiteChrome>
  );
}
