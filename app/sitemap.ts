import type { MetadataRoute } from "next";

const siteUrl = "https://dlawasfun.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/polityka-prywatnosci`,
      lastModified: new Date("2026-08-22"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
