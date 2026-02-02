import type { MetadataRoute } from "next";

import { lateSummerPages } from "@/app/late-summer/data";
import { holidayPages } from "@/app/holidays/data";
import { seasonalPages } from "@/app/seasonal/data";
import { nearPages } from "@/app/near/data";
import { petFriendlyPages } from "@/app/pet-friendly/data";
import { whereToStayPages } from "@/app/where-to-stay/data";
import { POOL_TOPICS } from "@/app/pool/topics";
import { locations } from "@/lib/locations";
import { fetchAvailability, calculateOpenRanges } from "@/lib/availability";
import { getEvents, eventCategories, eventMonthHubs } from "@/lib/events";

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
    "/holidays",
    "/seasonal",
    "/where-to-stay",
    "/near",
    "/open-dates",
    "/open-dates/last-minute",
    "/events",
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

  // Fetch dynamic events
  let eventPages: MetadataRoute.Sitemap = [];
  let eventCategoryPages: MetadataRoute.Sitemap = [];
  let eventMonthPages: MetadataRoute.Sitemap = [];

  try {
    const events = await getEvents();
    eventPages = events.map((event) => ({
      url: `${BASE_URL}/events/${event.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    eventCategoryPages = eventCategories.map((category) => ({
      url: `${BASE_URL}/events/category/${category.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    eventMonthPages = eventMonthHubs.map((hub) => ({
      url: `${BASE_URL}/events/month/${hub.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error generating events sitemap:", error);
  }

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority: path === "" ? 1 : path === "/open-dates" ? 0.9 : path === "/events" ? 0.8 : 0.7,
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
    ...holidayPages.map((page) => ({
      url: `${BASE_URL}/holidays/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...seasonalPages.map((page) => ({
      url: `${BASE_URL}/seasonal/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...nearPages.map((page) => ({
      url: `${BASE_URL}/near/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...whereToStayPages.map((page) => ({
      url: `${BASE_URL}/where-to-stay/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...openDatesPages,
    ...monthPages,
    ...eventPages,
    ...eventCategoryPages,
    ...eventMonthPages,
  ];
}
