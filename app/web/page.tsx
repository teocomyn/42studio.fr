import type { Metadata } from "next";
import { CreativeServicePage } from "@/components/CreativeServicePage";
import { getCreativeService } from "@/data/creative-services";
import { createMetadata } from "@/lib/seo";

const service = getCreativeService("web")!;

export const metadata: Metadata = createMetadata({
  title: service.title,
  description: service.description,
  path: `/${service.slug}`,
  keywords: service.keywords,
  ogImage: service.ogImage
});

export default function WebPage() {
  return <CreativeServicePage service={service} />;
}
