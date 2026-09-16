import { MetadataRoute } from "next";
import { allGenerators } from "./lib/generators";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://randomid.app";

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "daily" as const },
    ...allGenerators.map((generator) => ({
      url: generator.href,
      priority: generator.priority,
      changeFrequency: generator.changeFrequency,
    })),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
