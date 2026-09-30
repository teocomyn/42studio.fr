import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { JournalTool } from "@/components/JournalTool";
import { SiteChrome } from "@/components/SiteChrome";
import { TrackedLink } from "@/components/TrackedLink";
import { creativeServices } from "@/data/creative-services";
import { formatJournalDate, getJournalArticle, type JournalArticle } from "@/data/journal";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type JournalArticlePageProps = {
  article: JournalArticle;
};

function readingMinutes(article: JournalArticle) {
  const text = [
    article.excerpt,
    ...article.essentials,
    ...article.sections.flatMap((section) => [
      section.title,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
      ...(section.steps ?? []).flatMap((step) => [step.title, step.text]),
      ...(section.example ? [section.example.title, section.example.text] : []),
      ...(section.diagram?.stages.flatMap((stage) => [stage.title, stage.text]) ?? []),
      ...(section.table?.rows.flat() ?? [])
    ]),
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export function JournalArticlePage({ article }: JournalArticlePageProps) {
  const path = `/journal/${article.slug}`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Journal", path: "/journal" },
    { name: article.title, path }
  ];
  const related = article.relatedServices
    .map((slug) => creativeServices.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const relatedArticles = article.relatedArticles?.map(getJournalArticle).filter((item): item is JournalArticle => Boolean(item)) ?? [];
  const contactHref = article.cta?.href ?? "/contact";

  return (
    <SiteChrome>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.description,
          path,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          image: article.ogImage,
          keywords: article.keywords,
          about: article.about
        })}
      />
      {article.faqs.length ? <JsonLd data={faqJsonLd(article.faqs)} /> : null}

      <article>
        <header className="section-pad border-b border-white/10 pt-32 md:pt-36">
          <Breadcrumbs items={crumbs} />
          <p className="mono-label mt-10">Journal · {article.category}</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.2rem,6vw,4rem)] font-black leading-[0.95] tracking-[-0.05em] text-balance">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{article.excerpt}</p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
            Par{" "}
            <Link href="/studio" className="text-white/75 underline-offset-4 hover:text-white hover:underline">
              Teo Comyn
            </Link>
            , fondateur de 42studio · Publié le{" "}
            <time dateTime={article.datePublished}>{formatJournalDate(article.datePublished)}</time>
            {article.dateModified !== article.datePublished ? (
              <>
                {" "}
                · Mis à jour le <time dateTime={article.dateModified}>{formatJournalDate(article.dateModified)}</time>
              </>
            ) : null}{" "}
            · {readingMinutes(article)} min de lecture
          </p>
          <div className="mt-7 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/80">
            <a href={`#${article.sections[0].id}`} className="inline-flex min-h-11 items-center underline underline-offset-4">Lire le guide ↓</a>
            {article.tool && <a href="#outil" className="inline-flex min-h-11 items-center underline underline-offset-4">Utiliser l’outil ↓</a>}
            <a href="#faq" className="inline-flex min-h-11 items-center underline underline-offset-4">Questions fréquentes ↓</a>
          </div>
          <details className="mt-5 border-t border-white/15 pt-4 lg:hidden">
            <summary className="cursor-pointer py-2 text-sm text-white/85">Sommaire du guide</summary>
            <nav aria-label="Sommaire mobile" className="mt-3 grid gap-2">
              {article.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="py-2 text-sm text-white/75 underline underline-offset-4">{section.title}</a>)}
            </nav>
          </details>
          {article.cover && (
            <figure className="mt-10 max-w-6xl">
              <Image src={article.cover.src} alt={article.cover.alt} width={1536} height={1024} sizes="(max-width: 768px) 100vw, 85vw" priority className="h-auto w-full border border-white/10" />
              <figcaption className="mt-3 max-w-3xl text-xs leading-6 text-white/60">{article.cover.caption}</figcaption>
            </figure>
          )}
        </header>

        <div className="section-pad grid gap-12 border-b border-white/10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="min-w-0 max-w-3xl">
            <aside aria-label="L'essentiel" className="border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h2 className="mono-label">L&apos;essentiel</h2>
              <ul className="mt-5 space-y-3">
                {article.essentials.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-white/80">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>

            {article.sections.map((section, sectionIndex) => (
              <div key={section.id}>
              <section id={section.id} className="scroll-mt-28 pt-14">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-light leading-[1.08] tracking-[-0.04em]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-5 text-base leading-8 text-white/75">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-7 text-white/78">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.steps?.length ? (
                  <ol className="mt-6 grid gap-3">
                    {section.steps.map((step, index) => (
                      <li key={step.title} className="border border-white/10 bg-white/[0.02] p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-lg font-light tracking-[-0.02em] text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/75">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {section.table ? (
                  <div tabIndex={0} role="region" aria-label={section.table.caption} className="mt-8 overflow-x-auto border border-white/10">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm leading-6">
                      <caption className="caption-top border-b border-white/10 p-4 text-left text-xs leading-6 text-white/65">{section.table.caption} · Faites défiler le tableau sur petit écran.</caption>
                      <thead>
                        <tr>
                          {section.table.head.map((cell) => (
                            <th
                              key={cell}
                              scope="col"
                              className="border-b border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-white/70"
                            >
                              {cell}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row[0]} className="align-top">
                            {row.map((cell, index) =>
                              index === 0 ? (
                                <th
                                  key={cell}
                                  scope="row"
                                  className="border-b border-white/10 p-4 font-mono text-[11px] font-normal uppercase tracking-[0.08em] text-white/60"
                                >
                                  {cell}
                                </th>
                              ) : (
                                <td key={`${row[0]}-${index}`} className="border-b border-white/10 p-4 text-white/75">
                                  {cell}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.example && <aside className="mt-8 border-l-2 border-white/60 bg-white/[0.03] p-5 md:p-6"><h3 className="text-base font-medium">{section.example.title}</h3><p className="mt-3 text-sm leading-7 text-white/75">{section.example.text}</p></aside>}
                {section.diagram && <figure className="mt-8"><ol className="grid border-y border-white/20 sm:grid-cols-2">{section.diagram.stages.map((stage, index) => <li key={stage.title} className="border-b border-white/10 p-5"><p className="font-mono text-[11px] text-white/60">{String(index + 1).padStart(2, "0")} <span aria-hidden>→</span></p><h3 className="mt-3 text-lg">{stage.title}</h3><p className="mt-2 text-sm leading-6 text-white/75">{stage.text}</p></li>)}</ol><figcaption className="mt-3 text-xs leading-6 text-white/65">{section.diagram.caption}</figcaption></figure>}
                {section.links?.map((link) => <div key={link.href} className="mt-7 border-t border-white/15 pt-4"><Link href={link.href} className="inline-flex min-h-11 items-center gap-3 text-sm text-white underline underline-offset-4">{link.label} <span aria-hidden>↗</span></Link><p className="mt-1 text-sm leading-7 text-white/65">{link.description}</p></div>)}
              </section>
              {sectionIndex === 1 && article.tool && <JournalTool key={article.slug} tool={article.tool} slug={article.slug} href={contactHref} />}
              {sectionIndex === 2 && article.cta && <aside className="mt-12 border-y border-white/20 py-7"><p className="text-xl font-light">{article.cta.title}</p><p className="mt-3 text-sm leading-7 text-white/75">{article.cta.text}</p><TrackedLink href={contactHref} trackId={`journal_mid_${article.slug}`} trackLocation="journal_mid" className="mt-4 inline-flex min-h-12 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] underline underline-offset-4">{article.cta.label} <span aria-hidden>↗</span></TrackedLink></aside>}
              </div>
            ))}

            {article.faqs.length ? (
              <section id="faq" className="scroll-mt-28 pt-14">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-light tracking-[-0.04em]">Questions fréquentes</h2>
                <div className="mt-6 space-y-6">
                  {article.faqs.map((faq) => (
                    <details key={faq.question} className="group border-t border-white/15">
                      <summary className="cursor-pointer py-5 text-lg font-light leading-7 tracking-[-0.02em] text-white">{faq.question}</summary>
                      <p className="pb-5 leading-8 text-white/75">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
            {article.sources?.length ? <section className="pt-12"><h2 className="text-xl font-light">Références pour approfondir</h2><ul className="mt-5 space-y-5">{article.sources.map((source) => <li key={source.href}><a href={source.href} rel="noopener noreferrer" target="_blank" className="text-sm text-white underline underline-offset-4">{source.title} <span aria-hidden>↗</span><span className="sr-only"> (nouvel onglet)</span></a><p className="mt-2 text-sm leading-7 text-white/65">{source.note}</p></li>)}</ul></section> : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sommaire" className="border border-white/10 bg-white/[0.02] p-6">
              <span className="mono-label">Sommaire</span>
              <ol className="mt-4 space-y-2">
                {article.tool && <li><a href="#outil" className="block py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white underline underline-offset-4">L’outil de cadrage ↓</a></li>}
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/60 transition hover:text-white"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
                <li><a href="#faq" className="block py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/75">Questions fréquentes</a></li>
              </ol>
            </nav>
            {related.length ? (
              <nav aria-label="Services liés" className="border border-white/10 bg-white/[0.02] p-6">
                <span className="mono-label">Services liés</span>
                <div className="mt-4 grid gap-3">
                  {related.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="border-b border-white/10 pb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70 transition hover:text-white"
                    >
                      {service.name} <span aria-hidden>↗</span>
                    </Link>
                  ))}
                </div>
              </nav>
            ) : null}
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <p className="text-lg font-light tracking-[-0.02em]">{article.cta?.title ?? "Un projet en tête ?"}</p>
              <p className="mt-2 text-sm leading-7 text-white/75">{article.cta?.text ?? "Réponse sous 24 h, premier échange sans engagement."}</p>
              <TrackedLink
                href={contactHref}
                trackId={`journal_${article.slug}`}
                trackLocation="journal_sidebar"
                className="mt-5 inline-flex min-h-12 items-center gap-3 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-black transition hover:bg-white/90"
              >
                <span>{article.cta?.label ?? "Lancer un projet"}</span> <span aria-hidden>↗</span>
              </TrackedLink>
            </div>
          </aside>
        </div>
        {relatedArticles.length > 0 && <section className="section-pad border-b border-white/10" aria-labelledby="continue-reading"><p className="mono-label">Pour la suite</p><h2 id="continue-reading" className="mt-4 text-3xl font-light tracking-[-0.03em]">Poursuivre votre préparation.</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{relatedArticles.map((item) => <Link key={item.slug} href={`/journal/${item.slug}`} className="group border-t border-white/20 pt-5">{item.cover && <Image src={item.cover.src} alt="" width={768} height={512} sizes="(max-width: 768px) 100vw, 30vw" className="mb-5 h-auto w-full" />}<h3 className="text-xl font-light leading-7 group-hover:underline underline-offset-4">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{item.excerpt}</p><span className="mt-5 inline-block font-mono text-[11px] uppercase text-white/75">Lire le guide ↗</span></Link>)}</div></section>}
      </article>

      {article.cta ? <section className="section-pad border-b border-white/10"><p className="mono-label">Votre prochain pas</p><h2 className="mt-5 max-w-3xl text-3xl font-light tracking-[-0.03em] md:text-5xl">{article.cta.title}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{article.cta.text}</p><TrackedLink href={contactHref} trackId={`journal_bottom_${article.slug}`} trackLocation="journal_bottom" className="mt-7 inline-flex min-h-14 items-center gap-4 bg-white px-6 font-mono text-[11px] uppercase tracking-[0.08em] text-black hover:bg-white/90">{article.cta.label} <span aria-hidden>↗</span></TrackedLink></section> : <ContactCta />}
    </SiteChrome>
  );
}
