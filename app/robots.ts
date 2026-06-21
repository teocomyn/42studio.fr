import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Autorise explicitement les crawlers classiques ET les crawlers IA
// (opt-in clair pour la visibilité dans ChatGPT, Perplexity, Gemini, etc.).
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" }))
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
