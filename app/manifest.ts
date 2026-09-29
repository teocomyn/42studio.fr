import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "42studio",
    short_name: "42studio",
    description: "Studio créatif à Arras : branding, graphisme, sites web, direction artistique, motion design, 3D et vidéo.",
    start_url: "/",
    display: "standalone",
    background_color: "#070708",
    theme_color: "#070708",
    lang: "fr-FR",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
