import type { MetadataRoute } from "next";

import { petFriendlyPages } from "@/app/pet-friendly/data";
import { POOL_TOPICS } from "@/app/pool/topics";
import { locations } from "@/lib/locations";

const BASE_URL = "https://sandboxbeachhouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const changeFrequency = "weekly" as const;

  const staticRoutes = [
    "",
    "/photos",
    "/location",
    "/availability",
    "/faq",
    "/pool",
    "/walkable",
    "/locations",
    "/pet-friendly",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority: path === "" ? 1 : 0.7,
    })),
    ...POOL_TOPICS.map((topic) => ({
      url: `${BASE_URL}/pool/${topic.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...petFriendlyPages.map((page) => ({
      url: `${BASE_URL}/pet-friendly/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...locations.map((loc) => ({
      url: `${BASE_URL}/locations/${loc.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
  ];
}
