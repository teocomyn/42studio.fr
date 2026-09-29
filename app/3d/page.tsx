import type { Metadata } from "next";
import { CreativeServicePage } from "@/components/CreativeServicePage";
import { getCreativeService } from "@/data/creative-services";
import { createMetadata } from "@/lib/seo";

const service = getCreativeService("3d")!;

export const metadata: Metadata = createMetadata({
  title: service.title,
  description: service.description,
  path: `/${service.slug}`,
  keywords: service.keywords,
  ogImage: service.ogImage
});

export default function ThreeDPage() {
  return <CreativeServicePage service={service} />;
}
