import type { MetadataRoute } from "next";

const BASE_URL = "https://vibearticle.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    // Best-of pages (high traffic potential)
    { url: `${BASE_URL}/compare/best-ai-coding-tools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/compare/best-free-ai-coding-tools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/compare/best-hosting-for-developers`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/compare/best-laptop-for-coding`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/compare/best-monitor-for-programmers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    // AI coding comparisons
    { url: `${BASE_URL}/compare/cursor-vs-copilot`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/cursor-vs-windsurf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/cursor-vs-cline`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/cursor-vs-copilot-vs-cline`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/cursor-vs-copilot-vs-cline-vs-devin`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/cursor-free-vs-pro`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/copilot-vs-codeium`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    // Hosting comparisons
    { url: `${BASE_URL}/compare/vercel-vs-railway`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/compare/vercel-vs-netlify`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/compare/railway-vs-render`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  
    { url: `${BASE_URL}/compare/cline-vs-copilot`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
];

  return pages;
}
