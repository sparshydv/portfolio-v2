import type { MetadataRoute } from "next";

const BASE_URL = "https://sparshyadav.dev";

const projectSlugs = [
  "linea",
  "subtracker",
  "gsap-experience",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sparsh-yadav`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
