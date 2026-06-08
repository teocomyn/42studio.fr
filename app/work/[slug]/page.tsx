import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { LenisProvider } from "@/components/LenisProvider";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <LenisProvider>
      <Cursor />
      <div className="site-shell">
        <div className="grid-overlay" />
        <Header />
        <main className="relative z-10">
          <section className="section-pad flex min-h-[92svh] flex-col justify-end pt-36">
            <div className="mb-8 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
              <span>({project.index})</span>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h1 className="text-[clamp(4rem,15vw,16rem)] font-black leading-[0.8] tracking-[-0.08em]">
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
          </section>

          <section className="section-pad border-y border-white/10">
            <Reveal className="grid gap-10 md:grid-cols-[1fr_28rem]">
              <div className="min-h-[32rem] overflow-hidden border border-white/10 bg-[var(--bg-elevated)]">
                <div className="halftone h-full min-h-[32rem]" />
              </div>
              <div>
                <span className="mono-label">Impact</span>
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

          <section className="section-pad">
            <Reveal className="grid gap-8 md:grid-cols-[1fr_26rem] md:items-end">
              <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.055em]">
                Un case study volontairement compact pour cette première version. Le système est prêt à accueillir les contenus réels.
              </h2>
              <Link
                href="/#work"
                className="inline-flex h-14 w-fit items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
              >
                Retour aux projets <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </section>
          <ContactCta />
        </main>
      </div>
    </LenisProvider>
  );
}
