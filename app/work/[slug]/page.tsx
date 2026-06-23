import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { getCaseStudy, getRelatedProjects } from "@/data/case-study";
import { projectTestimonialMap } from "@/data/project-testimonials";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { breadcrumbJsonLd, createMetadata, creativeWorkJsonLd } from "@/lib/seo";

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

  const caseStudy = getCaseStudy(project);

  return createMetadata({
    title: `${project.title} · ${caseStudy.industry}`,
    description: caseStudy.missionIntro,
    path: `/work/${project.slug}`,
    keywords: [...project.services, project.category, caseStudy.industry, "case study", "42studio"],
    type: "article",
    ogImage: project.image ?? `/work/${project.slug}/opengraph-image`
  });
}

function getProjectTestimonial(projectSlug: string) {
  const author = projectTestimonialMap[projectSlug];
  if (!author) return null;
  return testimonials.find((item) => item.author === author) ?? null;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const caseStudy = getCaseStudy(project);
  const testimonial = getProjectTestimonial(project.slug);
  const related = getRelatedProjects(project, projects);

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
          description: caseStudy.missionIntro,
          path: `/work/${project.slug}`,
          datePublished: `${project.year}-01-01`,
          keywords: [...project.services, caseStudy.industry],
          about: project.category
        })}
      />
      <CaseStudyPage project={project} caseStudy={caseStudy} testimonial={testimonial} related={related} />
    </SiteChrome>
  );
}
