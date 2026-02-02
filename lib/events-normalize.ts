import type { RawEvent, EventRecord } from "./events-types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractExcerpt(description: string, maxLength = 160): string {
  const clean = description.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return clean.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

function categorizeEvent(raw: RawEvent): string[] {
  const categories: string[] = [];
  const titleLower = raw.title.toLowerCase();
  const descLower = (raw.description || "").toLowerCase();
  const combined = `${titleLower} ${descLower}`;

  if (/\b(concert|band|jazz|blues|singer|songwriter|musician|acoustic|orchestra|symphony|performer)\b|live music|music festival|music event|musical performance/.test(combined)) categories.push("music-festivals");
  if (/\b(food|wine|seafood|culinary|taste|dining|restaurant)\b/.test(combined)) categories.push("food-and-wine");
  if (/\b(gallery|exhibit|sculpture|painter|visual art)\b|art show|art festival|craft fair/.test(combined)) categories.push("arts-and-culture");
  if (/\b(holiday|christmas|thanksgiving|new year|easter|fourth of july)\b/.test(combined))
    categories.push("holiday-events");
  if (/\b(family|kid|children|child)\b/.test(combined)) categories.push("family-events");
  if (/\b(sport|tournament|fishing|golf|run|race|athletic)\b/.test(combined)) categories.push("sports-tournaments");
  if (/\b(market|vendor|fair|bazaar)\b/.test(combined)) categories.push("markets-and-fairs");
  if (/\b(parade|firework|celebration)\b/.test(combined)) categories.push("parades-and-celebrations");

  return categories.length > 0 ? categories : ["community-events"];
}

function inferAudience(raw: RawEvent): string[] {
  const combined = `${raw.title} ${raw.description || ""}`.toLowerCase();
  const audience: string[] = [];

  if (/family|kid|children/.test(combined)) audience.push("families");
  if (/couple|romantic|date night/.test(combined)) audience.push("couples");
  if (/senior|retiree|55\+/.test(combined)) audience.push("seniors");
  if (/young adult|millennial|nightlife/.test(combined)) audience.push("young-adults");

  return audience.length > 0 ? audience : ["all-ages"];
}

function getSeason(dateStr: string): string {
  const month = parseInt(dateStr.substring(5, 7), 10);
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "fall";
  return "winter";
}

function getMonthKey(dateStr: string): string {
  const [year, month] = dateStr.split("-");
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
  return `${monthNames[parseInt(month, 10) - 1]}-${year}`;
}

function generateBadges(raw: RawEvent, categories: string[]): string[] {
  const badges: string[] = [];
  const combined = `${raw.title} ${raw.description || ""}`.toLowerCase();

  if (/free|no charge|no admission/.test(combined)) badges.push("Free");
  if (/outdoor|beach|park/.test(combined)) badges.push("Outdoor");
  if (/pet.friendly|dog.friendly/.test(combined)) badges.push("Pet-Friendly");
  if (categories.includes("music-festivals")) badges.push("Live Music");
  if (categories.includes("food-and-wine")) badges.push("Food & Drink");

  return badges;
}

export function normalizeEvent(raw: RawEvent): EventRecord {
  const categories = categorizeEvent(raw);
  const audience = inferAudience(raw);
  const season = getSeason(raw.startDate);
  const monthKey = getMonthKey(raw.startDate);
  const badges = generateBadges(raw, categories);

  return {
    slug: slugify(`${raw.title}-${raw.startDate.substring(0, 10)}`),
    title: raw.title,
    excerpt: raw.summary || extractExcerpt(raw.description || raw.title),
    description: raw.description || raw.summary || "",
    startDate: raw.startDate,
    endDate: raw.endDate || raw.startDate,
    timezone: raw.timezone || "America/New_York",
    locationName: raw.locationName || "Anna Maria Island",
    address: raw.address || "",
    url: raw.url || "",
    image: raw.image,
    source: raw.source,
    categories,
    badges,
    audience,
    keywords: [...categories, ...audience, season],
    monthKey,
    season,
    geoSummary: raw.city && raw.state ? `${raw.city}, ${raw.state}` : "Anna Maria Island, FL",
  };
}

export function normalizeEvents(rawEvents: RawEvent[]): EventRecord[] {
  const now = new Date();
  const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);

  return rawEvents
    .filter((raw) => {
      const eventDate = new Date(raw.startDate);
      return eventDate >= sixMonthsAgo;
    })
    .map(normalizeEvent)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
}
