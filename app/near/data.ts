export type NearLink = {
  href: string;
  label: string;
};

export type NearPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  distance: string;
  bestFor: string;
  highlights: string[];
  tips: string[];
  internalLinks: NearLink[];
  cta: string;
  group: string;
  badge: string;
};

const baseLinks: NearLink[] = [
  { href: "/availability", label: "Check availability" },
  { href: "/open-dates", label: "Open dates" },
  { href: "/open-dates/last-minute", label: "Last-minute openings" },
  { href: "/photos", label: "Photo tour" },
  { href: "/location", label: "Location overview" },
  { href: "/walkable", label: "Walkability" },
];

const places = [
  {
    slug: "holmes-beach",
    name: "Holmes Beach",
    distance: "3 minutes",
    vibe: "central, walkable, and easy",
    bestFor: "guests who want a calm, central home base",
    highlights: ["Easy beach access", "Local cafes and markets", "Trolley stops nearby"],
  },
  {
    slug: "anna-maria-island",
    name: "Anna Maria Island",
    distance: "on-island",
    vibe: "classic Gulf island with small-town energy",
    bestFor: "travelers who want beach days and easy dining",
    highlights: ["Sugar-sand beaches", "Local dining pockets", "Free island trolley"],
  },
  {
    slug: "bridge-street",
    name: "Bridge Street",
    distance: "8 minutes",
    vibe: "lively waterfront with dining and sunsets",
    bestFor: "guests who like walkable nightlife",
    highlights: ["Waterfront dining", "Sunset views", "Easy evening strolls"],
  },
  {
    slug: "pine-avenue",
    name: "Pine Avenue",
    distance: "12 minutes",
    vibe: "charming shops and local flavor",
    bestFor: "guests who love shopping and coffee runs",
    highlights: ["Boutiques and galleries", "Casual cafes", "Historic vibe"],
  },
  {
    slug: "manatee-public-beach",
    name: "Manatee Public Beach",
    distance: "6 minutes",
    vibe: "family-friendly beach hub",
    bestFor: "families who want amenities and lifeguards",
    highlights: ["Lifeguards and facilities", "Picnic-friendly", "Easy parking"],
  },
  {
    slug: "coquina-beach",
    name: "Coquina Beach",
    distance: "14 minutes",
    vibe: "wide, shaded, and relaxed",
    bestFor: "guests who want space and nature",
    highlights: ["Sea grape shade", "Long shoreline", "Quiet picnic areas"],
  },
  {
    slug: "bean-point",
    name: "Bean Point",
    distance: "15 minutes",
    vibe: "quiet, scenic, and sunset-ready",
    bestFor: "couples and sunset seekers",
    highlights: ["Secluded shoreline", "Sunset views", "Peaceful mornings"],
  },
  {
    slug: "cortez-fishing-village",
    name: "Cortez Fishing Village",
    distance: "16 minutes",
    vibe: "historic docks and seafood",
    bestFor: "foodies and old-Florida fans",
    highlights: ["Dockside seafood", "Historic village", "Local flavor"],
  },
  {
    slug: "sarasota-bay",
    name: "Sarasota Bay",
    distance: "35 minutes",
    vibe: "bayfront drives and marina stops",
    bestFor: "guests who want a day trip",
    highlights: ["Marina dining", "Bay views", "Scenic drives"],
  },
  {
    slug: "longboat-key",
    name: "Longboat Key",
    distance: "30 minutes",
    vibe: "quiet, upscale shoreline",
    bestFor: "guests who want calmer beaches",
    highlights: ["Long quiet beaches", "Upscale dining", "Relaxed pace"],
  },
  {
    slug: "bradenton-beach",
    name: "Bradenton Beach",
    distance: "10 minutes",
    vibe: "classic beach town energy",
    bestFor: "families and friend groups",
    highlights: ["Bridge Street nearby", "Beach access", "Casual dining"],
  },
  {
    slug: "ami-north-end",
    name: "AMI North End",
    distance: "14 minutes",
    vibe: "quiet, scenic, and residential",
    bestFor: "guests who want calm mornings",
    highlights: ["Peaceful streets", "Wide beaches", "Sunset walks"],
  },
];

const intents = [
  {
    slug: "beach-access",
    label: "Beach access",
    focus: "quick walks and easy sand time",
    badge: "Beach",
    tips: ["Arrive early for easy parking.", "Pack light and keep it simple.", "Plan a pool reset after lunch."],
  },
  {
    slug: "sunset-spots",
    label: "Sunset spots",
    focus: "easy evening walks and golden-hour views",
    badge: "Sunsets",
    tips: ["Aim for 30 minutes before sunset.", "Pair with a casual dinner.", "Keep evenings flexible."],
  },
  {
    slug: "family-friendly",
    label: "Family friendly",
    focus: "easy days with minimal logistics",
    badge: "Families",
    tips: ["Plan one activity per day.", "Keep naps and pool breaks built in.", "Choose early dinners."],
  },
  {
    slug: "walkable-dining",
    label: "Walkable dining",
    focus: "short strolls to meals and treats",
    badge: "Dining",
    tips: ["Go early to avoid waits.", "Mix one special meal with casual stops.", "Save dessert for sunset."],
  },
  {
    slug: "quiet-stays",
    label: "Quiet stays",
    focus: "calmer pockets and low-key routines",
    badge: "Quiet",
    tips: ["Target mid-week arrivals.", "Keep plans minimal.", "Use the pool for midday resets."],
  },
  {
    slug: "couples-getaway",
    label: "Couples getaway",
    focus: "romantic evenings and calm mornings",
    badge: "Couples",
    tips: ["Plan one sunset dinner.", "Keep mornings beach-first.", "Leave afternoons open."],
  },
  {
    slug: "day-trips",
    label: "Day trips",
    focus: "simple off-island adventures",
    badge: "Day trip",
    tips: ["Leave early and return before sunset.", "Pick one main stop.", "Keep dinner on the island."],
  },
  {
    slug: "shopping-cafes",
    label: "Shopping + cafes",
    focus: "boutiques, coffee, and easy strolls",
    badge: "Shops",
    tips: ["Go in the morning for quiet streets.", "Pair with a short beach walk.", "Keep plans flexible."],
  },
  {
    slug: "water-activities",
    label: "Water activities",
    focus: "swims, paddles, and warm water",
    badge: "Water",
    tips: ["Schedule water time early.", "Bring water shoes.", "Reset at the pool after."],
  },
];

function makeNearPage(place: (typeof places)[number], intent: (typeof intents)[number]): NearPage {
  const slug = `${place.slug}-${intent.slug}`;
  const title = `Stay near ${place.name} for ${intent.label} | Sandbox Beach House`;
  return {
    slug,
    title,
    description: `Plan a stay near ${place.name} with ${intent.focus}. Sandbox Beach House keeps you close with a ${place.vibe} base in Holmes Beach.`,
    h1: `Stay near ${place.name} for ${intent.label}`,
    intro: [
      `Sandbox Beach House places you ${place.distance} from ${place.name}, perfect for ${intent.focus}.`,
      `This area feels ${place.vibe}, making it easy to build a simple beach-first routine.`,
    ],
    distance: place.distance,
    bestFor: place.bestFor,
    highlights: place.highlights,
    tips: intent.tips,
    internalLinks: [
      ...baseLinks,
      { href: "/open-dates", label: "Open dates" },
      { href: "/availability", label: "Check calendar" },
    ],
    cta: `Check dates for a ${intent.label.toLowerCase()} stay near ${place.name}.`,
    group: place.name,
    badge: intent.badge,
  };
}

export const nearPages: NearPage[] = places.flatMap((place) => intents.map((intent) => makeNearPage(place, intent)));

export function getNearPage(slug: string) {
  return nearPages.find((page) => page.slug === slug) ?? null;
}

export function getNearSlugs() {
  return nearPages.map((page) => page.slug);
}

export const nearGroups = nearPages.reduce<Record<string, NearPage[]>>((acc, page) => {
  if (!acc[page.group]) acc[page.group] = [];
  acc[page.group].push(page);
  return acc;
}, {});
