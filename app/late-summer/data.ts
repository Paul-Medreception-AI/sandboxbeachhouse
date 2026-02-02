export type LateSummerLink = {
  href: string;
  label: string;
};

export type LateSummerPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  focus: string;
  highlights: string[];
  tips: string[];
  internalLinks: LateSummerLink[];
  cta: string;
  group: string;
  badge: string;
};

const baseLinks: LateSummerLink[] = [
  { href: "/availability", label: "Check availability" },
  { href: "/open-dates", label: "Open dates" },
  { href: "/open-dates/last-minute", label: "Last-minute openings" },
  { href: "/location", label: "Walk-to-beach location" },
  { href: "/walkable", label: "Walkability" },
  { href: "/photos", label: "Photo tour" },
  { href: "/guide", label: "Local guide" },
];

const months = [
  {
    key: "july",
    name: "July",
    vibe: "classic summer energy with long beach days",
    focus: "families, friend groups, and peak-summer beach time",
    tip: "Lock in dates early and plan slower afternoons by the pool.",
  },
  {
    key: "august",
    name: "August",
    vibe: "warm Gulf water and a slightly calmer pace",
    focus: "late-summer trips with flexible schedules",
    tip: "Aim for early mornings outside, then reset indoors or by the pool mid-day.",
  },
  {
    key: "september",
    name: "September",
    vibe: "shoulder-season calm with lingering summer water temps",
    focus: "quieter stays and better weeknight availability",
    tip: "Take advantage of lighter crowds and longer dining waits-free evenings.",
  },
];

function makeMonthOverview(month: (typeof months)[number]): LateSummerPage {
  return {
    slug: month.key,
    title: `Anna Maria Island in ${month.name} | Sandbox Beach House`,
    description: `Plan a ${month.name.toLowerCase()} stay on Anna Maria Island with beach-first days, pool resets, and easy dining in Holmes Beach.`,
    h1: `${month.name} on Anna Maria Island: Late-Summer Guide`,
    intro: [
      `${month.name} on AMI feels like ${month.vibe}.`,
      "Holmes Beach is a relaxed home base that keeps the beach, dining, and errands simple.",
    ],
    focus: `Best for ${month.focus}.`,
    highlights: [
      "Beach mornings and pool resets later in the day",
      "Walkable pockets for dining and sunset strolls",
      "Easy access to Holmes Beach, Bridge Street, and Pine Avenue",
    ],
    tips: [
      "Pick two anchor outings, then leave room for beach time.",
      month.tip,
      "Use the trolley or short drives to keep parking stress low.",
    ],
    internalLinks: [...baseLinks, { href: "/pool", label: "Pool and outdoor living" }],
    cta: `Check ${month.name} availability at Sandbox Beach House.`,
    group: "Months",
    badge: `${month.name} guide`,
  };
}

function makeTimingPage(
  month: (typeof months)[number],
  timing: "early" | "late",
  timingAngle: string,
): LateSummerPage {
  const label = `${timing[0].toUpperCase()}${timing.slice(1)} ${month.name}`;
  const slug = `${timing}-${month.key}`;
  return {
    slug,
    title: `${label} on Anna Maria Island | Sandbox Beach House`,
    description: `Plan a ${label.toLowerCase()} trip to Anna Maria Island with a beach-first rhythm, flexible dining, and a relaxed Holmes Beach base.`,
    h1: `${label} on Anna Maria Island`,
    intro: [
      `${label} is great for ${timingAngle}.`,
      "Late-summer stays work best when you keep the plan flexible and let the beach set the pace.",
    ],
    focus: "Best for guests who want to time their trip around energy levels and crowds.",
    highlights: [
      "Morning beach time, afternoon reset",
      "Flexible dining windows",
      "Easy access to island highlights without long drives",
    ],
    tips: [
      "Plan one must-do outing, then build the rest around it.",
      "Use the pool to break up the hottest part of the day.",
      "Save shopping and coffee runs for mornings.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/things-to-do/", label: "Things to do" }],
    cta: `See open dates for ${label.toLowerCase()} stays.`,
    group: "Timing",
    badge: `${label} timing`,
  };
}

const monthPages = months.map((month) => makeMonthOverview(month));

const timingPages = months.flatMap((month) => [
  makeTimingPage(month, "early", "lighter crowds and easier dinner reservations"),
  makeTimingPage(month, "late", "a calmer, slower island feel"),
]);

const bestWeekPages: LateSummerPage[] = [
  {
    slug: "best-weeks-families",
    title: "Best Late-Summer Weeks for Families | Sandbox Beach House",
    description: "Pick July, August, or September weeks that fit school calendars, beach time, and easy pool breaks.",
    h1: "Best Late-Summer Weeks for Families on AMI",
    intro: [
      "Families love late summer because the beach is the main event and the schedule can stay simple.",
      "This guide helps you choose weeks that keep the pace relaxed and the logistics easy.",
    ],
    focus: "Best for families who want easy beach days and short drives.",
    highlights: [
      "Short morning outings, long beach afternoons",
      "Dining and grocery runs close to Holmes Beach",
      "Pool time built into every day",
    ],
    tips: [
      "Plan a beach-first morning and a pool break mid-day.",
      "Keep dinner early and casual.",
      "Use the trolley for easy island movement.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/family-activities/", label: "Family activities" }],
    cta: "See family-friendly dates for July through September.",
    group: "Timing",
    badge: "Families",
  },
  {
    slug: "best-weeks-couples",
    title: "Best Late-Summer Weeks for Couples | Sandbox Beach House",
    description: "Choose July, August, or September weeks for quiet beach mornings, sunset dinners, and pool resets.",
    h1: "Best Late-Summer Weeks for Couples on AMI",
    intro: [
      "Late summer is ideal for couples who want beach time, sunset plans, and a calm home base.",
      "Pick weeks that let you keep plans simple and evenings flexible.",
    ],
    focus: "Best for couples who want beach mornings and sunset dinners.",
    highlights: [
      "Walkable dinner pockets",
      "Sunset-friendly evenings",
      "Pool time between outings",
    ],
    tips: [
      "Plan one sunset dinner and keep the rest open.",
      "Save shopping or coffee for early mornings.",
      "Pick a week with flexible arrival and departure windows.",
    ],
    internalLinks: [...baseLinks, { href: "/experiences/romantic-getaway/", label: "Romantic getaway" }],
    cta: "See late-summer couples dates.",
    group: "Timing",
    badge: "Couples",
  },
  {
    slug: "best-weeks-quiet",
    title: "Best Late-Summer Weeks for Quiet Stays | Sandbox Beach House",
    description: "Find July, August, or September weeks that feel calmer and less crowded on Anna Maria Island.",
    h1: "Best Late-Summer Weeks for Quiet Stays",
    intro: [
      "If you want calm beach time and a quieter island pace, late summer gives you options.",
      "This guide focuses on weeks that feel slower and more relaxed.",
    ],
    focus: "Best for guests who want calm routines and fewer crowds.",
    highlights: [
      "Low-key mornings and early-evening dining",
      "Easy parking and short drives",
      "Quiet pool resets",
    ],
    tips: [
      "Plan outings early in the day.",
      "Use mid-week arrival and departures when possible.",
      "Keep a flexible dinner plan.",
    ],
    internalLinks: [...baseLinks, { href: "/experiences/quiet-escape/", label: "Quiet escape" }],
    cta: "Browse calmer late-summer availability.",
    group: "Timing",
    badge: "Quiet stays",
  },
];

const weatherPages: LateSummerPage[] = [
  {
    slug: "summer-weather",
    title: "Late-Summer Weather on Anna Maria Island | Sandbox Beach House",
    description: "What to expect for July through September weather on Anna Maria Island and how to plan beach-first days.",
    h1: "Late-Summer Weather on Anna Maria Island",
    intro: [
      "July through September is warm, sunny, and built for beach-first schedules.",
      "The best days balance morning adventures with mid-day shade and pool time.",
    ],
    focus: "Best for travelers who want to plan around heat and afternoon showers.",
    highlights: [
      "Bright mornings with warm Gulf breezes",
      "Afternoon resets keep the day comfortable",
      "Evenings are great for sunset strolls",
    ],
    tips: [
      "Start beach time early and keep afternoons flexible.",
      "Plan light, walkable dinners near Holmes Beach.",
      "Keep a backup indoor plan.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/rainy-day-activities/", label: "Rainy-day ideas" }],
    cta: "Pick your ideal late-summer week.",
    group: "Weather and conditions",
    badge: "Weather",
  },
  {
    slug: "gulf-water-temp",
    title: "Gulf Water Temps in Late Summer | Sandbox Beach House",
    description: "Plan beach time around warm Gulf water during July, August, and September on Anna Maria Island.",
    h1: "Gulf Water Temps in Late Summer",
    intro: [
      "The Gulf stays warm in late summer, making long swim sessions and floating time easy.",
      "Pair beach mornings with a pool reset for the perfect rhythm.",
    ],
    focus: "Best for guests who want long swim sessions and beach time.",
    highlights: [
      "Warm water that stays inviting",
      "Ideal for early-morning swims",
      "Easy transition back to the pool",
    ],
    tips: [
      "Bring water shoes for comfort.",
      "Time swims for early morning or late afternoon.",
      "Rinse off and reset at the house after the beach.",
    ],
    internalLinks: [...baseLinks, { href: "/pool", label: "Pool and outdoor living" }],
    cta: "See open late-summer swim weeks.",
    group: "Weather and conditions",
    badge: "Water",
  },
  {
    slug: "afternoon-storms",
    title: "Afternoon Showers in Late Summer | Sandbox Beach House",
    description: "How to plan July through September beach days around typical afternoon showers on Anna Maria Island.",
    h1: "Planning Around Afternoon Showers",
    intro: [
      "Short afternoon showers are common in late summer, and they are easy to plan around.",
      "Use mornings for beach time, then pivot to lunch or indoor stops if needed.",
    ],
    focus: "Best for travelers who want a flexible daily plan.",
    highlights: [
      "Beach-first mornings",
      "Indoor backup ideas nearby",
      "Relaxed afternoons and pool resets",
    ],
    tips: [
      "Keep a short list of indoor stops ready.",
      "Move dinner earlier if a shower pops up.",
      "Use the pool once the shower passes.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/rainy-day-activities/", label: "Rainy-day activities" }],
    cta: "Plan a flexible late-summer stay.",
    group: "Weather and conditions",
    badge: "Showers",
  },
  {
    slug: "heat-humidity-tips",
    title: "Heat and Humidity Tips for Late Summer | Sandbox Beach House",
    description: "Simple tips for staying comfortable on Anna Maria Island during July, August, and September.",
    h1: "Heat and Humidity Tips for Late Summer",
    intro: [
      "Late summer is warm, so the right schedule keeps things comfortable.",
      "A beach-first morning and a midday reset is the easiest formula.",
    ],
    focus: "Best for guests who want to balance outdoor time with comfort.",
    highlights: [
      "Morning beach time with lighter crowds",
      "Midday pool resets",
      "Evenings for dining and sunsets",
    ],
    tips: [
      "Bring light layers and a brimmed hat.",
      "Keep hydration simple with water on hand.",
      "Plan indoor breaks between outings.",
    ],
    internalLinks: [...baseLinks, { href: "/photos", label: "Photo tour" }],
    cta: "Choose a late-summer week that matches your pace.",
    group: "Weather and conditions",
    badge: "Comfort",
  },
  {
    slug: "storm-season-awareness",
    title: "Storm Season Awareness for Late Summer | Sandbox Beach House",
    description: "A calm, practical guide to storm-season awareness for July through September stays on Anna Maria Island.",
    h1: "Storm Season Awareness for Late Summer",
    intro: [
      "Late summer is also storm season, so a flexible mindset helps.",
      "Most trips are simple and sunny, but it is smart to keep backup ideas ready.",
    ],
    focus: "Best for planners who want a simple, practical backup plan.",
    highlights: [
      "Flexible activity planning",
      "Indoor options nearby",
      "Easy reschedules when needed",
    ],
    tips: [
      "Keep a short list of indoor spots saved.",
      "Check forecasts before booking day trips.",
      "Stick to a flexible, beach-first schedule.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/rainy-day-activities/", label: "Rainy-day ideas" }],
    cta: "Browse late-summer availability with flexible dates.",
    group: "Weather and conditions",
    badge: "Planning",
  },
];

const activityPages: LateSummerPage[] = [
  {
    slug: "beach-days",
    title: "Late-Summer Beach Days on AMI | Sandbox Beach House",
    description: "Plan beach-first days in July, August, and September with an easy Holmes Beach home base.",
    h1: "Late-Summer Beach Days on Anna Maria Island",
    intro: [
      "Late summer is for long beach days, warm water, and simple plans.",
      "Holmes Beach keeps the beach routine easy and walkable.",
    ],
    focus: "Best for travelers who want classic beach-first days.",
    highlights: [
      "Easy morning beach access",
      "Pool resets between beach sessions",
      "Sunset walks to close the day",
    ],
    tips: [
      "Arrive early for the best beach setup.",
      "Break up the day with a shaded lunch.",
      "Pack a light, simple beach kit.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-beaches/", label: "Best beaches" }],
    cta: "Plan a beach-first late-summer stay.",
    group: "Activities",
    badge: "Beach days",
  },
  {
    slug: "sunset-spots-late-summer",
    title: "Late-Summer Sunset Spots on AMI | Sandbox Beach House",
    description: "Find the best sunset spots for July, August, and September evenings on Anna Maria Island.",
    h1: "Late-Summer Sunset Spots on Anna Maria Island",
    intro: [
      "Late-summer sunsets are a nightly ritual on AMI.",
      "Short walks and quick drives make it easy to find the right view.",
    ],
    focus: "Best for travelers who want sunset rituals and easy evening plans.",
    highlights: [
      "Gulf-front beach sunsets",
      "Bridge Street views",
      "Easy evening strolls",
    ],
    tips: [
      "Arrive early for a relaxed spot.",
      "Pair sunset with a casual dinner.",
      "Keep evenings flexible and simple.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/sunset-spots/", label: "Sunset spots guide" }],
    cta: "Book a late-summer stay for sunset nights.",
    group: "Activities",
    badge: "Sunsets",
  },
  {
    slug: "rainy-day-ideas",
    title: "Late-Summer Rainy-Day Ideas | Sandbox Beach House",
    description: "Backup ideas for July, August, and September showers on Anna Maria Island.",
    h1: "Late-Summer Rainy-Day Ideas on AMI",
    intro: [
      "Short showers are part of late summer, so a backup plan helps.",
      "Indoor options are close and easy from Holmes Beach.",
    ],
    focus: "Best for travelers who want quick pivots and indoor backups.",
    highlights: [
      "Local cafes and casual dining",
      "Shopping pockets",
      "Indoor family-friendly stops",
    ],
    tips: [
      "Keep a short list of indoor spots.",
      "Shift beach time earlier in the day.",
      "Use the pool once the shower passes.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/rainy-day-activities/", label: "Rainy-day guide" }],
    cta: "Plan a flexible late-summer stay.",
    group: "Activities",
    badge: "Rainy day",
  },
  {
    slug: "kayaking",
    title: "Late-Summer Kayaking on AMI | Sandbox Beach House",
    description: "Easy kayaking ideas for July through September on Anna Maria Island and nearby bays.",
    h1: "Late-Summer Kayaking on Anna Maria Island",
    intro: [
      "Kayaking is a great morning activity in late summer.",
      "Calmer early hours make the water feel smooth and easy.",
    ],
    focus: "Best for guests who want a quiet, active morning.",
    highlights: [
      "Morning paddles with calm water",
      "Short drives to launch points",
      "Easy reset back at the house",
    ],
    tips: [
      "Plan paddles early to beat the heat.",
      "Keep the afternoon open for the beach.",
      "Pack light and keep it simple.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/kayaking/", label: "Kayaking guide" }],
    cta: "Book a late-summer stay with a kayak morning.",
    group: "Activities",
    badge: "Kayak",
  },
  {
    slug: "fishing",
    title: "Late-Summer Fishing on AMI | Sandbox Beach House",
    description: "Plan fishing time during July, August, or September with a relaxed Holmes Beach home base.",
    h1: "Late-Summer Fishing on Anna Maria Island",
    intro: [
      "Late summer is great for early morning fishing plans.",
      "Holmes Beach keeps you close to docks and easy access points.",
    ],
    focus: "Best for guests who want calm morning fishing routines.",
    highlights: [
      "Morning dock time",
      "Short drives to access points",
      "Afternoon pool reset",
    ],
    tips: [
      "Plan fishing before the day warms up.",
      "Keep a flexible schedule for tides.",
      "Bring a cooler and hydrate.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/fishing/", label: "Fishing guide" }],
    cta: "Plan a late-summer fishing stay.",
    group: "Activities",
    badge: "Fishing",
  },
  {
    slug: "bike-rides",
    title: "Late-Summer Bike Rides on AMI | Sandbox Beach House",
    description: "Easy late-summer bike routes around Holmes Beach and Anna Maria Island.",
    h1: "Late-Summer Bike Rides on Anna Maria Island",
    intro: [
      "Biking is best early in the day when the island feels quiet.",
      "Ride for coffee, then head back for beach time.",
    ],
    focus: "Best for guests who want a casual morning activity.",
    highlights: [
      "Short, scenic rides",
      "Coffee stops nearby",
      "Easy return to the beach",
    ],
    tips: [
      "Ride early and bring water.",
      "Keep routes short and scenic.",
      "Plan a beach stop after.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/things-to-do/", label: "Things to do" }],
    cta: "Book a late-summer stay with easy bike mornings.",
    group: "Activities",
    badge: "Biking",
  },
  {
    slug: "family-activities",
    title: "Late-Summer Family Activities on AMI | Sandbox Beach House",
    description: "Family-friendly activity ideas for July through September on Anna Maria Island.",
    h1: "Late-Summer Family Activities on Anna Maria Island",
    intro: [
      "Keep it simple: beach time, ice cream, and a pool reset.",
      "Late summer is great for low-stress family days.",
    ],
    focus: "Best for families who want beach-first days with simple add-ons.",
    highlights: [
      "Beach and pool rhythms",
      "Short, walkable outings",
      "Simple dining options",
    ],
    tips: [
      "Plan one activity per day.",
      "Save energy for sunset walks.",
      "Keep the day flexible.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/family-activities/", label: "Family activities" }],
    cta: "See late-summer family availability.",
    group: "Activities",
    badge: "Families",
  },
  {
    slug: "pet-friendly-summer",
    title: "Pet-Friendly Late-Summer Stays on AMI | Sandbox Beach House",
    description: "Plan a late-summer trip with a small dog (35 lbs or less) on Anna Maria Island.",
    h1: "Pet-Friendly Late-Summer Stays on Anna Maria Island",
    intro: [
      "Late-summer stays are easier with a dog when you keep the plan flexible.",
      "Sandbox Beach House welcomes small dogs (35 lbs or less).",
    ],
    focus: "Best for travelers bringing a small dog.",
    highlights: [
      "Walkable routines",
      "Easy beach access",
      "Simple outdoor resets",
    ],
    tips: [
      "Plan early walks before the day warms up.",
      "Keep water and towels ready.",
      "Stick to shaded routes.",
    ],
    internalLinks: [...baseLinks, { href: "/pet-friendly/", label: "Pet-friendly guides" }],
    cta: "Book a pet-friendly late-summer stay.",
    group: "Activities",
    badge: "Pets",
  },
  {
    slug: "day-trip-sarasota",
    title: "Late-Summer Day Trips to Sarasota | Sandbox Beach House",
    description: "Plan an easy day trip to Sarasota from Holmes Beach during July, August, or September.",
    h1: "Late-Summer Day Trips to Sarasota",
    intro: [
      "Sarasota makes an easy day trip when you want a change of scenery.",
      "Keep it simple: one outing, one meal, then back to the beach.",
    ],
    focus: "Best for guests who want a simple, low-stress day trip.",
    highlights: [
      "Easy drive from Holmes Beach",
      "Great lunch and shopping options",
      "Back for sunset on AMI",
    ],
    tips: [
      "Go early, return before late afternoon.",
      "Pick one main activity.",
      "Keep dinner plans on the island.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/sarasota-bay/", label: "Sarasota Bay" }],
    cta: "Book a late-summer stay with day-trip flexibility.",
    group: "Activities",
    badge: "Day trip",
  },
  {
    slug: "day-trip-longboat-key",
    title: "Late-Summer Day Trips to Longboat Key | Sandbox Beach House",
    description: "Plan a quick day trip to Longboat Key while staying in Holmes Beach during late summer.",
    h1: "Late-Summer Day Trips to Longboat Key",
    intro: [
      "Longboat Key is a calm, easy outing from AMI.",
      "Pair the trip with a sunset return to Holmes Beach.",
    ],
    focus: "Best for guests who want a short drive and a new beach view.",
    highlights: [
      "Short drive from Holmes Beach",
      "Quiet beach feel",
      "Easy return for dinner",
    ],
    tips: [
      "Plan a morning visit and be back by late afternoon.",
      "Keep it to one main stop.",
      "Save dinner for the island.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/longboat-key/", label: "Longboat Key" }],
    cta: "Plan a late-summer stay with a Longboat Key day trip.",
    group: "Activities",
    badge: "Day trip",
  },
];

const foodPages: LateSummerPage[] = [
  {
    slug: "best-restaurants-summer",
    title: "Best Late-Summer Restaurants on AMI | Sandbox Beach House",
    description: "A simple late-summer dining guide for Anna Maria Island with easy, beach-friendly options.",
    h1: "Best Late-Summer Restaurants on Anna Maria Island",
    intro: [
      "Late-summer dining is best when it is relaxed and close to the beach.",
      "Holmes Beach keeps favorite spots within easy reach.",
    ],
    focus: "Best for travelers who want easy, casual dining plans.",
    highlights: [
      "Walkable dining pockets",
      "Short waits with flexible timing",
      "Beach-first schedule friendly",
    ],
    tips: [
      "Go early for a relaxed dinner.",
      "Keep one night for a sunset meal.",
      "Use casual spots between beach sessions.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-restaurants/", label: "Best restaurants" }],
    cta: "Plan late-summer dinners near the beach.",
    group: "Food and treats",
    badge: "Dining",
  },
  {
    slug: "best-breakfast-summer",
    title: "Best Late-Summer Breakfasts on AMI | Sandbox Beach House",
    description: "Start late-summer days with easy breakfast stops on Anna Maria Island.",
    h1: "Best Late-Summer Breakfasts on Anna Maria Island",
    intro: [
      "Morning routines are the easiest way to set the pace.",
      "Grab breakfast early, then head to the beach.",
    ],
    focus: "Best for early risers and beach-first days.",
    highlights: [
      "Short lines early",
      "Easy stops near Holmes Beach",
      "Simple coffee runs",
    ],
    tips: [
      "Go early for a relaxed start.",
      "Keep breakfast simple and quick.",
      "Pair with a beach morning.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-breakfast/", label: "Best breakfast" }],
    cta: "Book a stay built for beach mornings.",
    group: "Food and treats",
    badge: "Breakfast",
  },
  {
    slug: "seafood-summer",
    title: "Late-Summer Seafood on AMI | Sandbox Beach House",
    description: "Easy seafood picks for July, August, and September on Anna Maria Island.",
    h1: "Late-Summer Seafood on Anna Maria Island",
    intro: [
      "Seafood nights are a late-summer staple on AMI.",
      "Keep it easy: one seafood dinner, one sunset.",
    ],
    focus: "Best for guests who want a simple seafood night.",
    highlights: [
      "Casual seafood spots",
      "Sunset-friendly timing",
      "Short drives from Holmes Beach",
    ],
    tips: [
      "Aim for early dinners.",
      "Pair seafood with a sunset walk.",
      "Keep reservations flexible.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-seafood/", label: "Best seafood" }],
    cta: "Plan a late-summer seafood night near the beach.",
    group: "Food and treats",
    badge: "Seafood",
  },
  {
    slug: "ice-cream-summer",
    title: "Late-Summer Ice Cream Stops on AMI | Sandbox Beach House",
    description: "The best late-summer ice cream stops for beach days on Anna Maria Island.",
    h1: "Late-Summer Ice Cream Stops on Anna Maria Island",
    intro: [
      "Ice cream is the easiest late-summer tradition.",
      "Grab a scoop after the beach and call it a perfect day.",
    ],
    focus: "Best for families and anyone who loves a sunset treat.",
    highlights: [
      "Walkable dessert stops",
      "Easy post-beach ritual",
      "Kid-friendly evening plan",
    ],
    tips: [
      "Plan dessert after sunset.",
      "Keep the evening short and sweet.",
      "Pair with a boardwalk stroll.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-ice-cream/", label: "Best ice cream" }],
    cta: "Book a late-summer stay with nightly treats.",
    group: "Food and treats",
    badge: "Dessert",
  },
  {
    slug: "grocery-picnic",
    title: "Late-Summer Grocery and Picnic Guide | Sandbox Beach House",
    description: "Simple grocery runs and picnic ideas for July through September on Anna Maria Island.",
    h1: "Late-Summer Grocery and Picnic Guide",
    intro: [
      "Picnics and simple meals keep late-summer days easy.",
      "A short grocery run can cover most of the week.",
    ],
    focus: "Best for guests who want easy, low-effort meals.",
    highlights: [
      "Quick grocery runs",
      "Beach-friendly meals",
      "Easy prep between outings",
    ],
    tips: [
      "Shop early in the week.",
      "Plan two easy picnic meals.",
      "Keep snacks beach-ready.",
    ],
    internalLinks: [...baseLinks, { href: "/long-stays/grocery-walkability/", label: "Grocery walkability" }],
    cta: "Plan a late-summer stay with easy meals.",
    group: "Food and treats",
    badge: "Picnics",
  },
];

const planningPages: LateSummerPage[] = [
  {
    slug: "packing-list",
    title: "Late-Summer Packing List for AMI | Sandbox Beach House",
    description: "A simple packing list for July through September on Anna Maria Island.",
    h1: "Late-Summer Packing List for Anna Maria Island",
    intro: [
      "Late-summer packing is light and beach-first.",
      "This list keeps it simple and easy to manage.",
    ],
    focus: "Best for travelers who want a simple, no-stress packing plan.",
    highlights: [
      "Light layers and sun protection",
      "Beach essentials and easy footwear",
      "Simple evening outfits",
    ],
    tips: [
      "Pack for mornings and early evenings.",
      "Keep a small day bag ready.",
      "Bring a reusable water bottle.",
    ],
    internalLinks: [...baseLinks, { href: "/photos", label: "Photo tour" }],
    cta: "Pick late-summer dates and start packing.",
    group: "Planning and itineraries",
    badge: "Packing",
  },
  {
    slug: "3-day-itinerary",
    title: "3-Day Late-Summer Itinerary on AMI | Sandbox Beach House",
    description: "A simple 3-day late-summer itinerary with beach mornings, pool resets, and sunset dinners.",
    h1: "3-Day Late-Summer Itinerary",
    intro: [
      "Three days is enough for a full reset when the plan is simple.",
      "This itinerary keeps things beach-first and low-stress.",
    ],
    focus: "Best for weekend trips and short getaways.",
    highlights: [
      "Beach mornings",
      "One dining outing per day",
      "Sunset walk every night",
    ],
    tips: [
      "Keep day two flexible for weather.",
      "Plan one special dinner.",
      "Leave room for pool time.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/things-to-do/", label: "Things to do" }],
    cta: "Book a 3-day late-summer reset.",
    group: "Planning and itineraries",
    badge: "3 days",
  },
  {
    slug: "5-day-itinerary",
    title: "5-Day Late-Summer Itinerary on AMI | Sandbox Beach House",
    description: "A 5-day late-summer itinerary with beach time, easy day trips, and relaxed dining.",
    h1: "5-Day Late-Summer Itinerary",
    intro: [
      "Five days lets you mix beach time with one easy outing.",
      "This itinerary balances beach days and a simple day trip.",
    ],
    focus: "Best for week-long breaks with flexible plans.",
    highlights: [
      "Two beach-heavy days",
      "One day trip",
      "Pool resets built in",
    ],
    tips: [
      "Plan one outing and keep the rest open.",
      "Use mid-day breaks to stay comfortable.",
      "Keep dinners casual.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bridge-street/", label: "Bridge Street" }],
    cta: "Plan a five-day late-summer stay.",
    group: "Planning and itineraries",
    badge: "5 days",
  },
  {
    slug: "7-day-itinerary",
    title: "7-Day Late-Summer Itinerary on AMI | Sandbox Beach House",
    description: "A full-week late-summer itinerary for beach time, day trips, and relaxed evenings.",
    h1: "7-Day Late-Summer Itinerary",
    intro: [
      "A full week gives you time to slow down and settle into the island rhythm.",
      "This plan keeps each day simple and repeatable.",
    ],
    focus: "Best for longer stays and slow travel.",
    highlights: [
      "Beach mornings every day",
      "Two easy outings",
      "Pool time built in",
    ],
    tips: [
      "Plan two special outings and leave space around them.",
      "Keep groceries simple and repeat meals.",
      "Save one day for pure rest.",
    ],
    internalLinks: [...baseLinks, { href: "/long-stays", label: "Long stays" }],
    cta: "Book a full-week late-summer stay.",
    group: "Planning and itineraries",
    badge: "7 days",
  },
  {
    slug: "walkable-holmes-beach",
    title: "Walkable Holmes Beach in Late Summer | Sandbox Beach House",
    description: "How to plan a walkable late-summer trip in Holmes Beach.",
    h1: "Walkable Holmes Beach in Late Summer",
    intro: [
      "Walkable plans keep late-summer days easy and low-stress.",
      "Holmes Beach is a great base for short walks and quick drives.",
    ],
    focus: "Best for guests who want to walk more and drive less.",
    highlights: [
      "Short beach walks",
      "Easy dining pockets",
      "Quick coffee and grocery runs",
    ],
    tips: [
      "Plan one walkable outing per day.",
      "Use the trolley for longer hops.",
      "Keep beach gear light.",
    ],
    internalLinks: [...baseLinks, { href: "/walkable", label: "Walkability" }],
    cta: "Plan a walkable late-summer stay.",
    group: "Planning and itineraries",
    badge: "Walkable",
  },
  {
    slug: "pool-time-planning",
    title: "Pool Time Planning for Late Summer | Sandbox Beach House",
    description: "How to use the pool to break up late-summer days in Holmes Beach.",
    h1: "Pool Time Planning for Late Summer",
    intro: [
      "Pool time is the perfect reset between beach sessions.",
      "Plan mornings at the beach and afternoons by the pool.",
    ],
    focus: "Best for guests who want an easy, comfortable daily rhythm.",
    highlights: [
      "Midday reset",
      "Quiet downtime",
      "Easy transition to dinner",
    ],
    tips: [
      "Use the pool after lunch.",
      "Keep towels and snacks ready.",
      "Save evenings for a short walk.",
    ],
    internalLinks: [...baseLinks, { href: "/pool", label: "Pool and outdoor living" }],
    cta: "Book a late-summer stay with pool resets.",
    group: "Planning and itineraries",
    badge: "Pool",
  },
  {
    slug: "sun-protection",
    title: "Sun Protection Tips for Late Summer | Sandbox Beach House",
    description: "Simple sun protection tips for July through September on Anna Maria Island.",
    h1: "Sun Protection Tips for Late Summer",
    intro: [
      "Late-summer sun is strong, so a few habits keep days comfortable.",
      "Shade breaks and light layers go a long way.",
    ],
    focus: "Best for guests who want easy, practical comfort tips.",
    highlights: [
      "Beach time early in the day",
      "Shade breaks at lunch",
      "Evening outings after sunset",
    ],
    tips: [
      "Bring a brimmed hat and sunglasses.",
      "Reapply sunscreen regularly.",
      "Use the pool for cool-downs.",
    ],
    internalLinks: [...baseLinks, { href: "/photos", label: "Photo tour" }],
    cta: "Plan a sun-smart late-summer stay.",
    group: "Planning and itineraries",
    badge: "Sun care",
  },
  {
    slug: "beach-safety",
    title: "Late-Summer Beach Safety on AMI | Sandbox Beach House",
    description: "Simple beach safety reminders for July through September on Anna Maria Island.",
    h1: "Late-Summer Beach Safety on Anna Maria Island",
    intro: [
      "Beach days are simple when you keep safety basics in mind.",
      "A calm, early start keeps the day relaxed.",
    ],
    focus: "Best for families and first-time AMI visitors.",
    highlights: [
      "Early beach starts",
      "Stay aware of water conditions",
      "Keep kids close in the water",
    ],
    tips: [
      "Check local flags and posted guidance.",
      "Swim near lifeguarded areas when available.",
      "Take breaks between swim sessions.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-beaches/", label: "Best beaches" }],
    cta: "Plan a safe, relaxed late-summer stay.",
    group: "Planning and itineraries",
    badge: "Safety",
  },
  {
    slug: "travel-with-kids",
    title: "Late-Summer Travel With Kids on AMI | Sandbox Beach House",
    description: "A late-summer travel guide for families with kids on Anna Maria Island.",
    h1: "Late-Summer Travel With Kids on Anna Maria Island",
    intro: [
      "Kids do best with simple beach-first plans.",
      "Late-summer travel is easier when you build in pool breaks.",
    ],
    focus: "Best for families with younger kids.",
    highlights: [
      "Short, predictable outings",
      "Beach mornings",
      "Pool resets and easy dinners",
    ],
    tips: [
      "Keep outings early in the day.",
      "Plan one activity per day.",
      "Stay flexible around naps or rest.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/family-activities/", label: "Family activities" }],
    cta: "Book a late-summer family stay.",
    group: "Planning and itineraries",
    badge: "Kids",
  },
  {
    slug: "remote-work-break",
    title: "Late-Summer Remote Work Breaks on AMI | Sandbox Beach House",
    description: "Plan a late-summer work break with beach mornings and focused afternoons in Holmes Beach.",
    h1: "Late-Summer Remote Work Breaks on Anna Maria Island",
    intro: [
      "Late-summer stays can mix work and beach time in a calm rhythm.",
      "Do mornings outside, then focus indoors later in the day.",
    ],
    focus: "Best for remote workers who want a relaxed change of pace.",
    highlights: [
      "Morning beach time",
      "Focused afternoon work blocks",
      "Sunset resets",
    ],
    tips: [
      "Set a simple daily work window.",
      "Use early mornings for outdoor time.",
      "Keep the schedule consistent.",
    ],
    internalLinks: [...baseLinks, { href: "/long-stays/remote-work-stays/", label: "Remote work stays" }],
    cta: "Plan a late-summer remote work reset.",
    group: "Planning and itineraries",
    badge: "Remote work",
  },
  {
    slug: "booking-direct-vs-ota",
    title: "Late-Summer Booking: Direct vs OTA | Sandbox Beach House",
    description: "Compare booking direct vs OTAs for late-summer stays on Anna Maria Island.",
    h1: "Late-Summer Booking: Direct vs OTA",
    intro: [
      "Late-summer dates can move quickly, so clarity helps.",
      "This guide explains the difference between booking direct and using an OTA.",
    ],
    focus: "Best for planners deciding how to book.",
    highlights: [
      "Clear availability visibility",
      "Simple booking flow",
      "Flexible planning tips",
    ],
    tips: [
      "Compare dates and total cost.",
      "Book early if you have fixed dates.",
      "Use open-date filters if you are flexible.",
    ],
    internalLinks: [...baseLinks, { href: "/open-dates", label: "Open dates" }],
    cta: "Check open late-summer dates now.",
    group: "Planning and itineraries",
    badge: "Booking",
  },
  {
    slug: "how-to-book-late-summer",
    title: "How to Book Late-Summer Dates on AMI | Sandbox Beach House",
    description: "Step-by-step tips to choose and book July through September dates on Anna Maria Island.",
    h1: "How to Book Late-Summer Dates",
    intro: [
      "The easiest way to book late summer is to start with open dates.",
      "Pick a few date ranges, then confirm the best fit.",
    ],
    focus: "Best for guests who want a clear, simple booking path.",
    highlights: [
      "Open-date first search",
      "Flexible date windows",
      "Quick booking flow",
    ],
    tips: [
      "Start with a 3-5 night window.",
      "Consider mid-week arrivals for more options.",
      "Confirm flights after dates are selected.",
    ],
    internalLinks: [...baseLinks, { href: "/availability", label: "Availability" }],
    cta: "Start with open late-summer dates.",
    group: "Planning and itineraries",
    badge: "How to book",
  },
  {
    slug: "september-savings",
    title: "September Value Weeks on AMI | Sandbox Beach House",
    description: "Why September can feel like a better-value late-summer month on Anna Maria Island.",
    h1: "September Value Weeks on Anna Maria Island",
    intro: [
      "September often feels quieter, which can make planning easier.",
      "It is a great option if you want more flexibility.",
    ],
    focus: "Best for guests who want a quieter, flexible stay.",
    highlights: [
      "Calmer pace",
      "Flexible dining",
      "More open dates",
    ],
    tips: [
      "Target mid-week arrival windows.",
      "Keep plans simple and flexible.",
      "Build in extra rest time.",
    ],
    internalLinks: [...baseLinks, { href: "/open-dates", label: "Open dates" }],
    cta: "Browse September availability.",
    group: "Planning and itineraries",
    badge: "September",
  },
  {
    slug: "last-minute-dates",
    title: "Last-Minute Late-Summer Dates on AMI | Sandbox Beach House",
    description: "How to find last-minute July through September availability on Anna Maria Island.",
    h1: "Last-Minute Late-Summer Dates",
    intro: [
      "If you can travel quickly, late summer often has flexible windows.",
      "Use open-date views to find the best options.",
    ],
    focus: "Best for flexible travelers and short-notice trips.",
    highlights: [
      "Open-date search",
      "Short planning timeline",
      "Flexible arrival windows",
    ],
    tips: [
      "Check open dates first.",
      "Keep a 3-4 day window in mind.",
      "Move quickly on the best options.",
    ],
    internalLinks: [...baseLinks, { href: "/open-dates/last-minute", label: "Last-minute openings" }],
    cta: "See last-minute late-summer openings.",
    group: "Planning and itineraries",
    badge: "Last-minute",
  },
];

export const lateSummerPages: LateSummerPage[] = [
  ...monthPages,
  ...timingPages,
  ...bestWeekPages,
  ...weatherPages,
  ...activityPages,
  ...foodPages,
  ...planningPages,
];

export function getLateSummerPage(slug: string) {
  return lateSummerPages.find((page) => page.slug === slug) ?? null;
}

export function getLateSummerSlugs() {
  return lateSummerPages.map((page) => page.slug);
}

export const lateSummerGroups = lateSummerPages.reduce<Record<string, LateSummerPage[]>>((acc, page) => {
  if (!acc[page.group]) acc[page.group] = [];
  acc[page.group].push(page);
  return acc;
}, {});
