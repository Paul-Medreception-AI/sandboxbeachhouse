import type { MetadataRoute } from "next";

import { lateSummerPages } from "@/app/late-summer/data";
import { petFriendlyPages } from "@/app/pet-friendly/data";
import { POOL_TOPICS } from "@/app/pool/topics";
import { locations } from "@/lib/locations";
import { fetchAvailability, calculateOpenRanges } from "@/lib/availability";

const BASE_URL = "https://sandboxbeachhouse.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    "/late-summer",
    "/open-dates",
    "/open-dates/last-minute",
  ];

  // Fetch dynamic open dates
  let openDatesPages: MetadataRoute.Sitemap = [];
  let monthPages: MetadataRoute.Sitemap = [];
  
  try {
    const availability = await fetchAvailability();
    const openRanges = calculateOpenRanges(availability.blockedRanges);
    
    // Individual date pages
    openDatesPages = openRanges.map((range) => ({
      url: `${BASE_URL}/open-dates/${range.slug}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
    }));

    // Month pages
    const months = new Set(openRanges.map((r) => `${r.month}-${r.year}`));
    monthPages = Array.from(months).map((month) => ({
      url: `${BASE_URL}/open-dates/month/${month}`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating open dates sitemap:", error);
  }

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority: path === "" ? 1 : path === "/open-dates" ? 0.9 : 0.7,
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
    ...lateSummerPages.map((page) => ({
      url: `${BASE_URL}/late-summer/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...openDatesPages,
    ...monthPages,
  ];
}
