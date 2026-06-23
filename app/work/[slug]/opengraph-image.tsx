import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const alt = "42studio — Case study";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  const title = project?.title ?? "Projet";
  const category = project?.category ?? "42studio";
  const year = project?.year ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#f4f3ef",
          background:
            "radial-gradient(circle at 76% 24%, rgba(255,255,255,.45), transparent 240px), linear-gradient(116deg, #070708 0%, #101014 48%, #070708 100%)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <div style={{ fontWeight: 800 }}>42studio</div>
          <div style={{ opacity: 0.58 }}>{category.toUpperCase()}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.92,
              letterSpacing: -5,
              fontWeight: 800,
              maxWidth: 980
            }}
          >
            {title}
          </div>
          {year ? (
            <div style={{ fontSize: 24, color: "rgba(244,243,239,.58)", letterSpacing: 6 }}>{year}</div>
          ) : null}
        </div>
      </div>
    ),
    size
  );
}
