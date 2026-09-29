import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, founderJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { getGtagConsentInitScript } from "@/lib/gtag-consent-script";
import "./globals.css";

const homeTitle = "42studio · Studio créatif : branding, web, motion, 3D, vidéo";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "800"],
  adjustFontFallback: true
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  adjustFontFallback: true
});

export const metadata: Metadata = {
  ...createMetadata({
    title: homeTitle,
    description:
      "Studio créatif à Arras : branding, graphisme, sites web, direction artistique, motion design, 3D et vidéo pour des marques ambitieuses.",
    path: "/",
    keywords: [
      "studio créatif",
      "studio créatif Arras",
      "agence branding",
      "identité visuelle",
      "création site web sur mesure",
      "direction artistique",
      "motion design",
      "studio 3D",
      "réalisation vidéo"
    ]
  }),
  metadataBase: new URL("https://42studio.fr"),
  title: {
    default: homeTitle,
    template: "%s - 42studio"
  },
  applicationName: "42studio",
  authors: [
    { name: "Teo Comyn", url: "https://42studio.fr/studio" },
    { name: "42studio", url: "https://42studio.fr" }
  ],
  creator: "42studio",
  publisher: "42studio",
  category: "Creative studio",
  icons: {
    icon: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest"
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
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getGtagConsentInitScript() }} />
        <noscript>
          <style>{`
            .site-shell [style*="opacity:0;"],
            .site-shell [style$="opacity:0"],
            .site-shell [style*="opacity: 0;"],
            .site-shell [style$="opacity: 0"] { opacity: 1 !important; }
            .site-shell [style*="transform:"] { transform: none !important; }
            .site-shell header { flex-wrap: wrap; gap: 1rem; }
            .site-shell header nav { display: flex !important; flex-wrap: wrap; gap: 1rem; }
            .site-shell header button { display: none; }
          `}</style>
        </noscript>
      </head>
      <body className={`${display.variable} ${mono.variable}`}>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={founderJsonLd} />
        <GoogleAnalytics />
        {children}
        <CookieConsent />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
