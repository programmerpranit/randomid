import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://randomid.app";

  // All generator routes
  const routes = [
    // Home
    { url: "", priority: 1.0, changeFrequency: "daily" as const },

    // UUID versions
    { url: "/uuid/v1", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uuid/v3", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uuid/v4", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uuid/v5", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uuid/v7", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uuid/v8", priority: 0.9, changeFrequency: "weekly" as const },

    // CUID
    { url: "/cuid", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/cuid2", priority: 0.8, changeFrequency: "weekly" as const },

    // NanoID
    { url: "/nanoid-sync", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/nanoid-async", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/nanoid-custom", priority: 0.8, changeFrequency: "weekly" as const },

    // Hash-based
    { url: "/sha1", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/sha256", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/sha512", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blake2", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/md5", priority: 0.7, changeFrequency: "weekly" as const },

    // Base-encoded
    { url: "/hex", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base32", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base36", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base58", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base62", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base64", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/base64url", priority: 0.7, changeFrequency: "weekly" as const },

    // Human-readable
    { url: "/petname", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/haikunator", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/word2", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/word3", priority: 0.7, changeFrequency: "weekly" as const },

    // Other formats
    { url: "/guid", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/ulid", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/ksuid", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/snowflake", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/shortuuid", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/shortid", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/crypto-random", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/random-timestamp", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/random-sequence", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/prefixed", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/suffixed", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

