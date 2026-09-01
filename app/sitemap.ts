import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://ZDDWLIG.github.io/academic-homepage";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
