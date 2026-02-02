import type { EventRecord, EventCategory, EventHub } from "./events-types";
import { fetchAllEvents } from "./events-source";
import { normalizeEvents } from "./events-normalize";

export const eventCategories: EventCategory[] = [
  {
    slug: "music-festivals",
    title: "Music Festivals",
    description: "Live music, concerts, and festival vibes on Anna Maria Island.",
    icon: "🎵",
  },
  {
    slug: "food-and-wine",
    title: "Food & Wine",
    description: "Culinary events, seafood festivals, and wine tastings.",
    icon: "🍷",
  },
  {
    slug: "arts-and-culture",
    title: "Arts & Culture",
    description: "Art shows, gallery openings, and cultural celebrations.",
    icon: "🎨",
  },
  {
    slug: "holiday-events",
    title: "Holiday Events",
    description: "Seasonal celebrations and holiday traditions.",
    icon: "🎉",
  },
  {
    slug: "family-events",
    title: "Family Events",
    description: "Kid-friendly activities and family-focused gatherings.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    slug: "sports-tournaments",
    title: "Sports & Tournaments",
    description: "Fishing tournaments, runs, and athletic competitions.",
    icon: "🏆",
  },
  {
    slug: "markets-and-fairs",
    title: "Markets & Fairs",
    description: "Farmers markets, craft fairs, and vendor events.",
    icon: "🛍️",
  },
  {
    slug: "parades-and-celebrations",
    title: "Parades & Celebrations",
    description: "Community parades, fireworks, and public celebrations.",
    icon: "🎆",
  },
  {
    slug: "community-events",
    title: "Community Events",
    description: "Local gatherings and neighborhood happenings.",
    icon: "🏘️",
  },
];

export const eventMonthHubs: EventHub[] = [
  {
    slug: "january",
    title: "January Events",
    description: "Winter events and New Year celebrations on Anna Maria Island.",
    h1: "January Events on Anna Maria Island",
    focus: "winter visitors and snowbirds looking for local happenings",
  },
  {
    slug: "february",
    title: "February Events",
    description: "Valentine's Day celebrations and winter festivals.",
    h1: "February Events on Anna Maria Island",
    focus: "romantic getaways and winter escapes",
  },
  {
    slug: "march",
    title: "March Events",
    description: "Spring break activities and early spring festivals.",
    h1: "March Events on Anna Maria Island",
    focus: "spring break travelers and families",
  },
  {
    slug: "april",
    title: "April Events",
    description: "Spring festivals and outdoor celebrations.",
    h1: "April Events on Anna Maria Island",
    focus: "spring visitors and outdoor enthusiasts",
  },
  {
    slug: "may",
    title: "May Events",
    description: "Late spring events and Memorial Day weekend activities.",
    h1: "May Events on Anna Maria Island",
    focus: "holiday weekend travelers and families",
  },
  {
    slug: "june",
    title: "June Events",
    description: "Summer kickoff events and beach celebrations.",
    h1: "June Events on Anna Maria Island",
    focus: "early summer visitors and families",
  },
  {
    slug: "july",
    title: "July Events",
    description: "Fourth of July celebrations and peak summer festivals.",
    h1: "July Events on Anna Maria Island",
    focus: "summer vacationers and holiday travelers",
  },
  {
    slug: "august",
    title: "August Events",
    description: "Late summer festivals and beach activities.",
    h1: "August Events on Anna Maria Island",
    focus: "late summer travelers and families",
  },
  {
    slug: "september",
    title: "September Events",
    description: "Fall transition events and Labor Day weekend activities.",
    h1: "September Events on Anna Maria Island",
    focus: "shoulder season travelers and couples",
  },
  {
    slug: "october",
    title: "October Events",
    description: "Fall festivals and Halloween celebrations.",
    h1: "October Events on Anna Maria Island",
    focus: "fall visitors and families",
  },
  {
    slug: "november",
    title: "November Events",
    description: "Thanksgiving events and early winter activities.",
    h1: "November Events on Anna Maria Island",
    focus: "holiday travelers and snowbirds arriving",
  },
  {
    slug: "december",
    title: "December Events",
    description: "Holiday celebrations and winter festivities.",
    h1: "December Events on Anna Maria Island",
    focus: "holiday vacationers and winter visitors",
  },
];

let cachedEvents: EventRecord[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function getEvents(forceRefresh = false): Promise<EventRecord[]> {
  const now = Date.now();
  if (!forceRefresh && cachedEvents && now - cacheTimestamp < CACHE_DURATION) {
    return cachedEvents;
  }

  try {
    const rawEvents = await fetchAllEvents();
    cachedEvents = normalizeEvents(rawEvents);
    cacheTimestamp = now;
    console.log(`✅ Events cache refreshed: ${cachedEvents.length} events loaded`);
    return cachedEvents;
  } catch (error) {
    console.error("Error fetching events:", error);
    return cachedEvents || [];
  }
}

export function clearEventsCache(): void {
  cachedEvents = null;
  cacheTimestamp = 0;
  console.log("🗑️ Events cache cleared");
}

export async function getEventBySlug(slug: string): Promise<EventRecord | null> {
  const events = await getEvents();
  return events.find((e) => e.slug === slug) || null;
}

export async function getEventsByCategory(category: string): Promise<EventRecord[]> {
  const events = await getEvents();
  return events.filter((e) => e.categories.includes(category));
}

export async function getEventsByMonth(monthSlug: string): Promise<EventRecord[]> {
  const events = await getEvents();
  return events.filter((e) => {
    const eventMonth = e.startDate.substring(5, 7);
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return monthNames[parseInt(eventMonth, 10) - 1] === monthSlug;
  });
}

export async function getUpcomingEvents(limit = 10): Promise<EventRecord[]> {
  const events = await getEvents();
  const now = new Date();
  return events.filter((e) => new Date(e.startDate) >= now).slice(0, limit);
}

export function getCategoryBySlug(slug: string): EventCategory | null {
  return eventCategories.find((c) => c.slug === slug) || null;
}

export function getMonthHubBySlug(slug: string): EventHub | null {
  return eventMonthHubs.find((m) => m.slug === slug) || null;
}
