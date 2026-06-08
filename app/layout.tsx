import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://42studio.fr"),
  title: {
    default: "42studio - Brand, Web, Produit",
    template: "%s - 42studio"
  },
  description:
    "42studio est un studio creatif base a Arras qui pense et construit des marques, sites web et produits digitaux sans rupture entre direction artistique et execution technique.",
  openGraph: {
    title: "42studio - Brand, Web, Produit",
    description:
      "Studio creatif haut de gamme a la croisee du branding, du web et du produit digital.",
    url: "https://42studio.fr",
    siteName: "42studio",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "42studio - Brand, Web, Produit",
    description:
      "Du symbole au code : identites, sites et produits digitaux penses comme un seul systeme."
  }
};

export const viewport: Viewport = {
  themeColor: "#070708",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "42studio",
    url: "https://42studio.fr",
    email: "hello@42studio.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Arras",
      addressCountry: "FR"
    },
    areaServed: "Worldwide",
    sameAs: ["https://www.instagram.com/42studio", "https://www.linkedin.com/company/42studio"]
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
