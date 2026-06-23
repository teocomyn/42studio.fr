import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import type { CaseStudy } from "@/data/case-study";
import type { Project } from "@/data/projects";
import type { Testimonial } from "@/data/testimonials";

type CaseStudyPageProps = {
  project: Project;
  caseStudy: CaseStudy;
  testimonial: Testimonial | null;
  related: Project[];
};

function CaseStudyMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-5">
      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{label}</dt>
      <dd className="mt-3 text-lg font-light tracking-[-0.03em] text-white">{value}</dd>
    </div>
  );
}

function CaseStudyTable({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="mt-8 overflow-hidden border border-white/10">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/10 last:border-b-0">
              <th className="w-[38%] bg-white/[0.03] px-4 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 md:px-5">
                {row.label}
              </th>
              <td className="px-4 py-4 leading-7 text-white/75 md:px-5">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="border border-white/10 bg-white/[0.03] p-8 md:p-10">
      <p className="text-xl leading-8 text-white/80 md:text-2xl md:leading-9">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
        {testimonial.author} · {testimonial.role} · {testimonial.company}
      </footer>
    </blockquote>
  );
}

export function CaseStudyPage({ project, caseStudy, testimonial, related }: CaseStudyPageProps) {
  const displayMetrics = project.highlights?.length ? project.highlights : project.metrics;

  return (
    <>
      <section className="section-pad border-b border-white/10 pt-36">
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
          <Link href="/work" className="transition hover:text-white">
            Projets
          </Link>
          <span className="mx-3 text-white/25">/</span>
          <span className="text-white/70">{project.title}</span>
        </div>

        <p className="mono-label">{project.title} × 42studio</p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.2rem,6vw,4rem)] font-black leading-[0.94] tracking-[-0.05em]">
          {caseStudy.headline}
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-8 text-white/72 md:text-lg">{caseStudy.clientIntro}</p>
          <p className="text-base leading-8 text-white/72 md:text-lg">{caseStudy.missionIntro}</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
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
          <Link
            href="/contact"
            className="inline-flex h-14 items-center gap-4 border border-white/20 px-5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:bg-white hover:text-black"
          >
            Projet similaire <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>

      <section className="section-pad border-b border-white/10">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div className="min-h-[28rem] overflow-hidden border border-white/10 bg-[var(--bg-elevated)] md:min-h-[36rem]">
            {project.image ? (
              <div className="relative h-full min-h-[28rem] md:min-h-[36rem]">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `Capture du site ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="halftone grid h-full min-h-[28rem] place-items-center p-8 text-center md:min-h-[36rem]">
                <p className="max-w-sm font-mono text-[11px] uppercase leading-6 tracking-[0.1em] text-white/70">
                  Capture à ajouter prochainement. Le site live est disponible via le lien.
                </p>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-2">
              <CaseStudyMeta label="Industrie" value={caseStudy.industry} />
              <CaseStudyMeta label="Année" value={project.year} />
              <CaseStudyMeta label="Type" value={project.category} />
            </dl>

            <div className="mt-8 border-t border-white/10 pt-8">
              <span className="mono-label">Services</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="border border-white/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <span className="mono-label">Résultats clés</span>
              <ul className="mt-4 space-y-3">
                {displayMetrics.map((metric) => (
                  <li key={metric} className="border-b border-white/10 pb-3 text-lg font-light tracking-[-0.03em]">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>

            <nav aria-label="Sommaire" className="mt-8 border-t border-white/10 pt-8">
              <span className="mono-label">Sommaire</span>
              <ol className="mt-4 space-y-2">
                {caseStudy.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55 transition hover:text-white"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </Reveal>
      </section>

      {caseStudy.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="section-pad border-b border-white/10 scroll-mt-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
              <article>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{section.kicker}</p>
                <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">{section.title}</h2>
                <div className="mt-8 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-8">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-7 text-white/72">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.table?.length ? <CaseStudyTable rows={section.table} /> : null}
              </article>

              <aside className="hidden lg:block">
                <div className="sticky top-28 border border-white/10 bg-white/[0.02] p-6">
                  <span className="mono-label">Sommaire</span>
                  <ol className="mt-4 space-y-2">
                    {caseStudy.sections.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={
                            item.id === section.id
                              ? "font-mono text-[11px] uppercase tracking-[0.1em] text-white"
                              : "font-mono text-[11px] uppercase tracking-[0.1em] text-white/45 transition hover:text-white"
                          }
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            </div>
          </Reveal>
        </section>
      ))}

      {testimonial ? (
        <section className="section-pad border-b border-white/10">
          <Reveal>
            <span className="mono-label">Témoignage client</span>
            <div className="mt-6">
              <TestimonialBlock testimonial={testimonial} />
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="section-pad border-b border-white/10">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mono-label">Autres réalisations</span>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.04em]">
                D&apos;autres projets du même registre
              </h2>
            </div>
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] transition hover:text-white"
            >
              Voir tous les projets →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group overflow-hidden border border-white/10 bg-[var(--bg-elevated)] transition hover:border-white/35"
              >
                {item.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                    />
                  </div>
                ) : (
                  <div className="halftone aspect-[4/3]" />
                )}
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">{item.year}</p>
                  <h3 className="mt-2 text-xl font-light tracking-[-0.03em]">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-pad">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_26rem] md:items-end">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-light leading-[0.95] tracking-[-0.055em]">
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
    </>
  );
}
