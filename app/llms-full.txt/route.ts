import { creativePillars, creativeServices, studioModel } from "@/data/creative-services";
import { journalArticles } from "@/data/journal";
import { offers } from "@/data/offers";
import { entityDescription, siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

// Version longue de llms.txt : le contenu éditorial des services et du Journal,
// en texte brut, pour les moteurs de réponse IA.
export function GET() {
  const lines: string[] = [
    "# 42studio : contenu complet",
    "",
    `> ${entityDescription}`,
    "",
    studioModel,
    "",
    `Contact : ${siteConfig.email} · ${siteUrl}/contact · Réponse sous 24 h à chaque brief.`,
    "",
    "## Accompagnements",
    `URL : ${siteUrl}/accompagnements. Chaque projet est chiffré sur devis. Les délais sont indicatifs, selon le périmètre et les validations.`,
    ...offers.map((offer) => `- ${offer.name} (${offer.duration}) : ${offer.description} Livrables : ${offer.deliverables.join(" ; ")}.`),
    "",
    "## Les quatre piliers",
    ...creativePillars.map((pillar) => `- ${pillar.title} : ${pillar.output}. ${pillar.text}`),
    ""
  ];

  for (const service of creativeServices) {
    lines.push(
      `## ${service.name}`,
      `URL : ${siteUrl}/${service.slug}`,
      "",
      service.definition,
      "",
      service.intro,
      "",
      "### Ce que le studio produit",
      ...service.formats.map((format) => `- ${format.name} : ${format.text}`),
      "",
      "### Quand faire appel au studio",
      ...service.useCases.map((useCase) => `- ${useCase.title} : ${useCase.text}`),
      "",
      "### Méthode",
      ...service.process.map((step) => `${step.step}. ${step.title} : ${step.text}`),
      "",
      "### Livrables",
      ...service.deliverables.map((item) => `- ${item}`),
      "",
      "### Ce qui fait varier le budget",
      ...service.budgetFactors.map((item) => `- ${item}`),
      "",
      `Format conseillé : ${service.offer.name}. ${service.offer.text}`,
      "",
      "### Questions fréquentes",
      ...service.faqs.flatMap((faq) => [`Q : ${faq.question}`, `R : ${faq.answer}`, ""]),
      ""
    );
  }

  for (const article of journalArticles) {
    lines.push(
      `## Journal : ${article.title}`,
      `URL : ${siteUrl}/journal/${article.slug} · Publié le ${article.datePublished} · Auteur : Teo Comyn`,
      "",
      "L'essentiel :",
      ...article.essentials.map((item) => `- ${item}`),
      ""
    );
    for (const section of article.sections) {
      lines.push(`### ${section.title}`);
      section.paragraphs?.forEach((paragraph) => lines.push(paragraph));
      section.bullets?.forEach((bullet) => lines.push(`- ${bullet}`));
      section.steps?.forEach((step, index) => lines.push(`${index + 1}. ${step.title} : ${step.text}`));
      if (section.table) {
        lines.push(`| ${section.table.head.join(" | ")} |`, `| ${section.table.head.map(() => "---").join(" | ")} |`);
        section.table.rows.forEach((row) => lines.push(`| ${row.join(" | ")} |`));
      }
      lines.push("");
    }
    if (article.faqs.length) {
      lines.push("### Questions fréquentes", ...article.faqs.flatMap((faq) => [`Q : ${faq.question}`, `R : ${faq.answer}`, ""]));
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
