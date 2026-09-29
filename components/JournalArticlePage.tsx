import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCta } from "@/components/ContactCta";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { TrackedLink } from "@/components/TrackedLink";
import { creativeServices } from "@/data/creative-services";
import { formatJournalDate, type JournalArticle } from "@/data/journal";
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

            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 pt-14">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-light leading-[1.08] tracking-[-0.04em]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-5 text-base leading-8 text-[var(--muted)]">
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
                        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {section.table ? (
                  <div className="mt-8 overflow-x-auto border border-white/10">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm leading-6">
                      <caption className="sr-only">{section.table.caption}</caption>
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
              </section>
            ))}

            {article.faqs.length ? (
              <section id="faq" className="scroll-mt-28 pt-14">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-light tracking-[-0.04em]">Questions fréquentes</h2>
                <div className="mt-6 space-y-6">
                  {article.faqs.map((faq) => (
                    <div key={faq.question} className="border-t border-white/10 pt-5">
                      <h3 className="text-lg font-light tracking-[-0.02em] text-white">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sommaire" className="border border-white/10 bg-white/[0.02] p-6">
              <span className="mono-label">Sommaire</span>
              <ol className="mt-4 space-y-2">
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
              <p className="text-lg font-light tracking-[-0.02em]">Un projet en tête ?</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Réponse sous 24 h, premier échange sans engagement.</p>
              <TrackedLink
                href="/contact"
                trackId={`journal_${article.slug}`}
                trackLocation="journal_sidebar"
                className="mt-5 inline-flex h-12 items-center gap-3 bg-white px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-black transition hover:bg-white/90"
              >
                Lancer un projet <span aria-hidden>↗</span>
              </TrackedLink>
            </div>
          </aside>
        </div>
      </article>

      <ContactCta />
    </SiteChrome>
  );
}
