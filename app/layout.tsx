import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { getGtagConsentInitScript } from "@/lib/gtag-consent-script";
import "./globals.css";

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
    title: "Brand, Web, Produit",
    description:
      "42studio est un studio créatif basé à Arras qui a accompagné plus de 60 marques en branding, sites web, e-commerce Shopify et produits digitaux.",
    path: "/",
    keywords: [
      "studio branding Arras",
      "agence web Arras",
      "studio design France",
      "création site Shopify",
      "design system marque",
      "studio produit digital"
    ]
  }),
  metadataBase: new URL("https://42studio.fr"),
  title: {
    default: "42studio · Studio créatif Brand, Web & Produit à Arras",
    template: "%s - 42studio"
  },
  applicationName: "42studio",
  authors: [{ name: "42studio", url: "https://42studio.fr" }],
  creator: "42studio",
  publisher: "42studio",
  category: "Design studio",
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
      </head>
      <body className={`${display.variable} ${mono.variable}`}>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <GoogleAnalytics />
        {children}
        <CookieConsent />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
