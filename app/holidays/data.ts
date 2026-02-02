export type HolidayLink = {
  href: string;
  label: string;
};

export type HolidayPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  badge: string;
  icon: string;
  intro: string[];
  focus: string;
  highlights: string[];
  timing: string[];
  itinerary: string[];
  localTips: string[];
  monthHints: string[];
  internalLinks: HolidayLink[];
  cta: string;
};

type HolidayConfig = {
  slug: string;
  holiday: string;
  badge: string;
  icon: string;
  description: string;
  focus: string;
  lead: string;
  support: string;
  highlightLead: string;
  timingWindow: string;
  arrivalTip: string;
  itinerary: string[];
  localTips: string[];
  monthHints: string[];
  cta: string;
};

const BASE_LINKS: HolidayLink[] = [
  { href: "/open-dates", label: "Open dates" },
  { href: "/availability", label: "Check availability" },
  { href: "/location", label: "Location" },
  { href: "/pool/heated-pool", label: "Heated pool" },
  { href: "/walkable", label: "Walkability" },
  { href: "/pet-friendly", label: "Pet-friendly" },
  { href: "/photos", label: "Photos" },
  { href: "/locations/bridge-street/", label: "Bridge Street" },
];

const DEFAULT_HIGHLIGHTS = [
  "Private heated pool for off-beach time.",
  "Walk to the Gulf without crossing busy roads.",
  "Central Holmes Beach base near Pine Avenue and Bridge Street.",
  "Dog friendly for well-behaved pups 35 lbs or less.",
];

const LONG_WEEKEND_RHYTHM = [
  "Day 1: arrive, settle in, and take a sunset walk on the beach.",
  "Day 2: beach morning, pool reset, then dinner around Bridge Street.",
  "Day 3: coffee on Pine Avenue, one more swim, easy checkout.",
];

const HOLIDAY_WEEK_RHYTHM = [
  "Arrival day: groceries, quick beach walk, and a calm pool dip.",
  "Midweek: slow mornings, beach time, and a sunset dinner out.",
  "One day: explore Anna Maria City or Bradenton Beach by trolley.",
  "Last day: sunrise stroll, pack up, and head home refreshed.",
];

const FAMILY_WEEKEND_RHYTHM = [
  "Day 1: check in early, pool time, and a simple dinner in.",
  "Day 2: beach morning, nap or pool break, sunset walk.",
  "Day 3: pancakes, quick beach visit, and head out.",
];

const ROMANTIC_WEEKEND_RHYTHM = [
  "Day 1: arrive, beach walk, and a quiet dinner nearby.",
  "Day 2: slow morning, pool reset, sunset on the Gulf.",
  "Day 3: coffee on Pine Avenue, last swim, checkout.",
];

const WINTER_BREAK_RHYTHM = [
  "Arrival day: stock the kitchen, then unwind by the pool.",
  "Midweek: beach mornings, easy lunches, and sunset walks.",
  "One day: trolley ride to Bridge Street for dinner and dessert.",
  "Departure day: early beach stroll and a final pool dip.",
];

function buildHolidayPage(config: HolidayConfig): HolidayPage {
  return {
    slug: config.slug,
    title: `${config.holiday} Rentals in Holmes Beach | Sandbox Beach House`,
    description: config.description,
    h1: `${config.holiday} Stays in Holmes Beach (Anna Maria Island)`,
    badge: config.badge,
    icon: config.icon,
    intro: [config.lead, config.support],
    focus: config.focus,
    highlights: [config.highlightLead, ...DEFAULT_HIGHLIGHTS],
    timing: [
      `For ${config.holiday}, start watching open dates about ${config.timingWindow}.`,
      `If you can shift arrival by a day or two, ${config.arrivalTip} can unlock more options.`,
    ],
    itinerary: config.itinerary,
    localTips: config.localTips,
    monthHints: config.monthHints,
    internalLinks: BASE_LINKS,
    cta: config.cta,
  };
}

const SUPPORT_LINES = [
  "Sandbox Beach House is a boutique 2BR/1.5BA in Holmes Beach with a heated pool and a short walk to the Gulf.",
  "Stay in central Holmes Beach with a private pool, a calm neighborhood feel, and easy access to Pine Avenue and Bridge Street.",
  "The Sandbox is a relaxed, dog-friendly home base with a heated pool and walk-to-beach access.",
  "A heated pool, walkable dining pockets, and a laid-back neighborhood keep holiday trips simple.",
  "Sandbox Beach House keeps the plan easy: private pool, beach access, and a cozy layout for small groups.",
  "Holmes Beach is central on the island, so day trips to Anna Maria City and Bradenton Beach stay easy.",
];

const holidayConfigs: HolidayConfig[] = [
  {
    slug: "new-years-day",
    holiday: "New Year's Day",
    badge: "Fresh start",
    icon: "🎉",
    description:
      "Plan a New Year's Day escape in Holmes Beach with beach walks, a private heated pool, and easy access to Anna Maria Island dining.",
    focus: "Best for low-key starts, couples, and anyone who wants sunshine after the holidays.",
    lead: "Start the year with an easy coastal reset: beach air, warm light, and a quiet home base.",
    support: SUPPORT_LINES[0],
    highlightLead: "A calm, sunny way to reset your routine after the holidays.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: ROMANTIC_WEEKEND_RHYTHM,
    localTips: [
      "Take a sunrise walk, then linger over coffee around Pine Avenue.",
      "Use the pool for a gentle afternoon reset before an early dinner.",
    ],
    monthHints: ["January"],
    cta: "Kick off the new year with beach days. Check open dates now.",
  },
  {
    slug: "new-years-eve",
    holiday: "New Year's Eve",
    badge: "Celebrate",
    icon: "🥂",
    description:
      "Celebrate New Year's Eve on Anna Maria Island with a boutique Holmes Beach stay, a private pool, and easy beach access.",
    focus: "Best for couples or small groups who want a relaxed celebration by the Gulf.",
    lead: "Trade the noisy party scene for beach air, a sunset walk, and a cozy countdown.",
    support: SUPPORT_LINES[1],
    highlightLead: "A quieter, more personal New Year's Eve with a beach-first vibe.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "an early-week check-in",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Plan a sunset walk, then keep the evening simple with a favorite takeout spot.",
      "Ring in the new year with a poolside toast under the stars.",
    ],
    monthHints: ["December"],
    cta: "Reserve a calm New Year's Eve on the island. Browse open dates.",
  },
  {
    slug: "new-years-week",
    holiday: "New Year's Week",
    badge: "Holiday week",
    icon: "🎊",
    description:
      "Plan a New Year's Week stay in Holmes Beach with a private heated pool, walk-to-beach access, and a relaxed island rhythm.",
    focus: "Best for families and friends who want a full week of sunshine and downtime.",
    lead: "Stretch the holiday into a full week of beach mornings and slow afternoons.",
    support: SUPPORT_LINES[2],
    highlightLead: "Turn the holiday into a true reset with a full week on the island.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Saturday or Sunday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Mix beach days with one afternoon exploring Pine Avenue shops.",
      "Use the pool for a midday break when the sun is at its peak.",
    ],
    monthHints: ["December", "January"],
    cta: "Make New Year's a full week. Check open dates and plan early.",
  },
  {
    slug: "new-years-weekend",
    holiday: "New Year's Weekend",
    badge: "Long weekend",
    icon: "🎇",
    description:
      "Book a New Year's Weekend trip to Anna Maria Island for beach walks, a private pool, and relaxed Holmes Beach dining.",
    focus: "Best for quick resets and long-weekend travelers.",
    lead: "A long weekend is enough to reset when you keep the plan simple.",
    support: SUPPORT_LINES[3],
    highlightLead: "Quick, easy, and centered on beach time.",
    timingWindow: "6 to 9 weeks out",
    arrivalTip: "a Thursday or Friday check-in",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Catch sunset on the Gulf, then keep dinner casual on Bridge Street.",
      "Start the morning with a beach walk and a slow breakfast.",
    ],
    monthHints: ["December", "January"],
    cta: "Plan a simple New Year's Weekend. Browse open dates now.",
  },
  {
    slug: "mlk-weekend",
    holiday: "MLK Weekend",
    badge: "Three-day break",
    icon: "🕊️",
    description:
      "Plan an MLK Weekend escape in Holmes Beach with walk-to-beach access, a private heated pool, and easy island dining.",
    focus: "Best for short winter breaks with minimal travel stress.",
    lead: "Use MLK Weekend for a quick Gulf reset and a little extra sunshine.",
    support: SUPPORT_LINES[4],
    highlightLead: "A short winter break with maximum beach time.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Thursday or Friday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Plan one Pine Avenue afternoon for coffee and easy browsing.",
      "Keep the rest of the time focused on beach and pool.",
    ],
    monthHints: ["January"],
    cta: "Turn MLK Weekend into a beach break. Check open dates.",
  },
  {
    slug: "presidents-day-weekend",
    holiday: "Presidents' Day Weekend",
    badge: "Long weekend",
    icon: "🇺🇸",
    description:
      "Escape for Presidents' Day Weekend in Holmes Beach with a private pool, walk-to-beach access, and a calm island pace.",
    focus: "Best for couples and friends looking for a winter long weekend.",
    lead: "Presidents' Day is a perfect excuse for a winter beach weekend.",
    support: SUPPORT_LINES[5],
    highlightLead: "Warm sun, cooler crowds, and a relaxed beach-town rhythm.",
    timingWindow: "7 to 10 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Mix a beach morning with an afternoon bike ride or trolley hop.",
      "End the day with a quiet pool soak.",
    ],
    monthHints: ["February"],
    cta: "Lock in a Presidents' Day escape. Browse open dates now.",
  },
  {
    slug: "presidents-week",
    holiday: "Presidents' Week",
    badge: "School break",
    icon: "🗽",
    description:
      "Plan a Presidents' Week stay on Anna Maria Island for beach time, a private heated pool, and easy family routines.",
    focus: "Best for families traveling during school break weeks.",
    lead: "Presidents' Week is ideal for families who want warm weather without peak summer crowds.",
    support: SUPPORT_LINES[0],
    highlightLead: "A full week of sun and simple family routines.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: FAMILY_WEEKEND_RHYTHM,
    localTips: [
      "Build in pool breaks between beach time to keep the week easy.",
      "Plan one afternoon at Bridge Street for dinner and dessert.",
    ],
    monthHints: ["February"],
    cta: "Plan Presidents' Week early. Check open dates now.",
  },
  {
    slug: "valentines-weekend",
    holiday: "Valentine's Weekend",
    badge: "Romantic",
    icon: "❤️",
    description:
      "Plan a Valentine's Weekend escape in Holmes Beach with a private heated pool, walkable dining, and quiet beach sunsets.",
    focus: "Best for couples who want a simple, romantic beach getaway.",
    lead: "Valentine's Weekend works best when the plan is slow and beach-forward.",
    support: SUPPORT_LINES[1],
    highlightLead: "Sunsets, a private pool, and a relaxed couples vibe.",
    timingWindow: "6 to 9 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: ROMANTIC_WEEKEND_RHYTHM,
    localTips: [
      "Plan a sunset walk, then dinner around Bridge Street.",
      "Sleep in and make the pool your afternoon reset.",
    ],
    monthHints: ["February"],
    cta: "Book a calm Valentine's Weekend on the island. Check open dates.",
  },
  {
    slug: "spring-break",
    holiday: "Spring Break",
    badge: "Family escape",
    icon: "🌴",
    description:
      "Book a Spring Break stay on Anna Maria Island with walk-to-beach access, a private heated pool, and a relaxed Holmes Beach base.",
    focus: "Best for families who want beach days without a packed itinerary.",
    lead: "Spring Break on AMI is about beach time, pool resets, and easy meals.",
    support: SUPPORT_LINES[2],
    highlightLead: "Classic spring beach days with a calm home base.",
    timingWindow: "10 to 16 weeks out",
    arrivalTip: "a Saturday or Sunday check-in",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Use the trolley for a low-stress trip to Bridge Street.",
      "Keep afternoons flexible with pool time back at the house.",
    ],
    monthHints: ["March", "April"],
    cta: "Start Spring Break planning now. Browse open dates.",
  },
  {
    slug: "spring-break-week",
    holiday: "Spring Break Week",
    badge: "Weeklong stay",
    icon: "🏖️",
    description:
      "Plan a full Spring Break week in Holmes Beach with a private pool, walkable dining, and easy beach access.",
    focus: "Best for weeklong family stays with a mix of beach and downtime.",
    lead: "A full Spring Break week lets you slow down and build an easy rhythm.",
    support: SUPPORT_LINES[3],
    highlightLead: "Space for beach time, pool breaks, and simple routines.",
    timingWindow: "12 to 18 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Schedule one Pine Avenue afternoon for shopping and snacks.",
      "Use beach mornings and pool afternoons to avoid burnout.",
    ],
    monthHints: ["March", "April"],
    cta: "Claim a Spring Break week early. Check open dates.",
  },
  {
    slug: "easter-weekend",
    holiday: "Easter Weekend",
    badge: "Family time",
    icon: "🐣",
    description:
      "Celebrate Easter Weekend on Anna Maria Island with beach walks, a private heated pool, and a peaceful Holmes Beach base.",
    focus: "Best for family weekends with a calm coastal backdrop.",
    lead: "Easter Weekend is perfect for a simple family trip with beach time built in.",
    support: SUPPORT_LINES[4],
    highlightLead: "A light, sunny holiday weekend with room to relax.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: FAMILY_WEEKEND_RHYTHM,
    localTips: [
      "Plan an early beach walk before brunch or a relaxed lunch.",
      "Keep the afternoon flexible with pool time.",
    ],
    monthHints: ["March", "April"],
    cta: "Make Easter Weekend simple and sunny. Browse open dates.",
  },
  {
    slug: "easter-week",
    holiday: "Easter Week",
    badge: "School break",
    icon: "🌷",
    description:
      "Plan an Easter Week stay in Holmes Beach with a private heated pool, walk-to-beach access, and an easy island rhythm.",
    focus: "Best for families with spring school breaks.",
    lead: "Easter Week gives you room for beach time without a rushed schedule.",
    support: SUPPORT_LINES[5],
    highlightLead: "A full week of spring sunshine and relaxed beach days.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Pick one day for a trolley ride to Anna Maria City.",
      "Use the pool for a midweek reset.",
    ],
    monthHints: ["March", "April"],
    cta: "Plan Easter Week early and lock in open dates.",
  },
  {
    slug: "mothers-day-weekend",
    holiday: "Mother's Day Weekend",
    badge: "Celebrate mom",
    icon: "💐",
    description:
      "Treat mom to a Mother's Day Weekend in Holmes Beach with a private heated pool, beach walks, and easy dining options.",
    focus: "Best for family weekends that feel special but low stress.",
    lead: "Give mom a weekend that feels calm, sunny, and easy.",
    support: SUPPORT_LINES[0],
    highlightLead: "A gentle, beach-first weekend that feels like a gift.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Friday check-in",
    itinerary: FAMILY_WEEKEND_RHYTHM,
    localTips: [
      "Plan a relaxed brunch, then head to the beach.",
      "End the day with a poolside sunset moment.",
    ],
    monthHints: ["May"],
    cta: "Plan a thoughtful Mother's Day trip. Check open dates.",
  },
  {
    slug: "memorial-day-weekend",
    holiday: "Memorial Day Weekend",
    badge: "Summer kickoff",
    icon: "🇺🇸",
    description:
      "Kick off summer with Memorial Day Weekend in Holmes Beach, featuring walk-to-beach access, a private pool, and a relaxed island vibe.",
    focus: "Best for early summer escapes and long-weekend travelers.",
    lead: "Memorial Day Weekend marks the start of summer and pairs perfectly with beach time.",
    support: SUPPORT_LINES[1],
    highlightLead: "Beach days and a private pool to start summer right.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Start with a beach morning, then use the pool to cool off.",
      "Grab dinner on Bridge Street to end the day.",
    ],
    monthHints: ["May"],
    cta: "Start summer with a beach long weekend. Browse open dates.",
  },
  {
    slug: "memorial-day-week",
    holiday: "Memorial Day Week",
    badge: "Early summer",
    icon: "☀️",
    description:
      "Plan a Memorial Day Week stay in Holmes Beach with a heated pool, walk-to-beach access, and a calm island routine.",
    focus: "Best for travelers who want a full week to ease into summer.",
    lead: "Stretch Memorial Day into a full week of sun and easy routines.",
    support: SUPPORT_LINES[2],
    highlightLead: "A full week to settle into summer beach rhythms.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Add a Pine Avenue afternoon to break up beach days.",
      "Keep evening plans flexible with poolside downtime.",
    ],
    monthHints: ["May", "June"],
    cta: "Book a Memorial Day Week on AMI. Check open dates now.",
  },
  {
    slug: "fathers-day-weekend",
    holiday: "Father's Day Weekend",
    badge: "Easy getaway",
    icon: "🧢",
    description:
      "Plan a Father's Day Weekend escape to Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for low-key family weekends with time outdoors.",
    lead: "Father's Day Weekend is made for beach time and simple meals.",
    support: SUPPORT_LINES[3],
    highlightLead: "A relaxed outdoor weekend with beach and pool time.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Friday check-in",
    itinerary: FAMILY_WEEKEND_RHYTHM,
    localTips: [
      "Spend the morning on the beach, then grill or order takeout.",
      "Catch a sunset walk to end the day.",
    ],
    monthHints: ["June"],
    cta: "Make Father's Day simple and sunny. Browse open dates.",
  },
  {
    slug: "fourth-of-july",
    holiday: "Fourth of July",
    badge: "Summer holiday",
    icon: "🎆",
    description:
      "Celebrate the Fourth of July on Anna Maria Island with walk-to-beach access, a private heated pool, and a Holmes Beach home base.",
    focus: "Best for summer travelers who want beach time and a relaxed holiday vibe.",
    lead: "The Fourth of July feels better when the plan is beach time and sunsets.",
    support: SUPPORT_LINES[4],
    highlightLead: "A classic summer holiday with beach days and pool time.",
    timingWindow: "12 to 16 weeks out",
    arrivalTip: "a Saturday or Sunday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Get to the beach early for easy parking and a calm morning.",
      "Use the pool as a midday escape from the heat.",
    ],
    monthHints: ["July"],
    cta: "Plan your Fourth early. Check open dates now.",
  },
  {
    slug: "fourth-of-july-week",
    holiday: "Fourth of July Week",
    badge: "Holiday week",
    icon: "🎇",
    description:
      "Book a full Fourth of July Week on Anna Maria Island with a private heated pool, beach access, and a relaxed Holmes Beach base.",
    focus: "Best for families who want a full week of summer beach time.",
    lead: "A full holiday week gives you room for beach days and slow evenings.",
    support: SUPPORT_LINES[5],
    highlightLead: "A full week to enjoy summer days at a comfortable pace.",
    timingWindow: "14 to 18 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Plan a Pine Avenue afternoon for a change of pace.",
      "Keep midweek flexible with pool time and naps.",
    ],
    monthHints: ["June", "July"],
    cta: "Reserve a Fourth of July week early. Browse open dates.",
  },
  {
    slug: "fourth-of-july-weekend",
    holiday: "Fourth of July Weekend",
    badge: "Long weekend",
    icon: "🇺🇸",
    description:
      "Spend Fourth of July Weekend in Holmes Beach with walk-to-beach access, a private heated pool, and easy island dining.",
    focus: "Best for long-weekend travelers who want quick beach time.",
    lead: "A long holiday weekend can still feel relaxed with a simple plan.",
    support: SUPPORT_LINES[0],
    highlightLead: "A quick summer break with beach walks and pool resets.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Thursday or Friday check-in",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Start with a sunrise beach walk to beat the crowds.",
      "Keep dinner casual on Bridge Street.",
    ],
    monthHints: ["July"],
    cta: "Grab a Fourth of July Weekend slot. Check open dates.",
  },
  {
    slug: "labor-day-weekend",
    holiday: "Labor Day Weekend",
    badge: "Summer finale",
    icon: "🌞",
    description:
      "Wrap up summer with Labor Day Weekend in Holmes Beach, featuring walk-to-beach access and a private heated pool.",
    focus: "Best for end-of-summer long weekends with beach time.",
    lead: "Labor Day Weekend is a great way to close out summer with sunshine.",
    support: SUPPORT_LINES[1],
    highlightLead: "Late-summer beach days with a calm island pace.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Thursday or Friday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Take a morning beach walk, then cool off in the pool.",
      "Head to Pine Avenue for an easy dinner plan.",
    ],
    monthHints: ["September"],
    cta: "Plan a Labor Day beach weekend. Browse open dates.",
  },
  {
    slug: "labor-day-week",
    holiday: "Labor Day Week",
    badge: "Late summer",
    icon: "🏝️",
    description:
      "Book a Labor Day Week stay in Holmes Beach for late-summer beach time, a private heated pool, and easy island routines.",
    focus: "Best for travelers who want a full week to unwind at the end of summer.",
    lead: "A full Labor Day week gives you space to slow down and breathe.",
    support: SUPPORT_LINES[2],
    highlightLead: "An easy week of late-summer sunshine and beach time.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Build in a midweek Pine Avenue afternoon to change the pace.",
      "Use the pool for a daily reset.",
    ],
    monthHints: ["August", "September"],
    cta: "Reserve a Labor Day week early. Check open dates now.",
  },
  {
    slug: "veterans-day-weekend",
    holiday: "Veterans Day Weekend",
    badge: "Fall long weekend",
    icon: "🎖️",
    description:
      "Plan a Veterans Day Weekend trip to Holmes Beach with a private heated pool, beach access, and a calm fall rhythm.",
    focus: "Best for fall long weekends with lighter crowds.",
    lead: "Veterans Day Weekend is a sweet-spot fall break with warm days.",
    support: SUPPORT_LINES[3],
    highlightLead: "Fall sunshine with fewer crowds and easy beach access.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Pair a beach morning with an afternoon pool break.",
      "Grab an early dinner on Bridge Street.",
    ],
    monthHints: ["November"],
    cta: "Plan a Veterans Day beach weekend. Browse open dates.",
  },
  {
    slug: "indigenous-peoples-day-weekend",
    holiday: "Indigenous Peoples Day Weekend",
    badge: "October break",
    icon: "🌿",
    description:
      "Take an Indigenous Peoples Day Weekend escape to Holmes Beach with a private heated pool and walk-to-beach access.",
    focus: "Best for quick October getaways with beach time.",
    lead: "October long weekends are perfect for a quick coastal reset.",
    support: SUPPORT_LINES[4],
    highlightLead: "A fast fall getaway with warm afternoons and beach walks.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Thursday or Friday check-in",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Plan a morning beach walk before the day warms up.",
      "Use the pool for a late-afternoon break.",
    ],
    monthHints: ["October"],
    cta: "Book an October long weekend. Check open dates.",
  },
  {
    slug: "fall-break",
    holiday: "Fall Break",
    badge: "School break",
    icon: "🍂",
    description:
      "Plan a Fall Break stay in Holmes Beach with a private heated pool, walk-to-beach access, and an easy island pace.",
    focus: "Best for families looking for warm fall travel.",
    lead: "Fall Break offers warm weather and a calmer island feel.",
    support: SUPPORT_LINES[5],
    highlightLead: "Warm fall days with less crowded beaches.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Add a Pine Avenue afternoon between beach days.",
      "Keep evenings simple with pool time and an early dinner.",
    ],
    monthHints: ["October"],
    cta: "Plan a Fall Break week early. Browse open dates.",
  },
  {
    slug: "halloween-week",
    holiday: "Halloween Week",
    badge: "Spooky season",
    icon: "🎃",
    description:
      "Spend Halloween Week on Anna Maria Island with beach days, a private heated pool, and a relaxed Holmes Beach base.",
    focus: "Best for families who want a warm-weather Halloween week.",
    lead: "Halloween Week on the island means beach mornings and cozy evenings.",
    support: SUPPORT_LINES[0],
    highlightLead: "Warm days and easy nights during spooky season.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Keep afternoons free for pool time and easy dinners.",
      "Plan one day for shopping and snacks on Pine Avenue.",
    ],
    monthHints: ["October"],
    cta: "Plan a warm Halloween Week escape. Check open dates.",
  },
  {
    slug: "halloween-weekend",
    holiday: "Halloween Weekend",
    badge: "Weekend escape",
    icon: "🕸️",
    description:
      "Book a Halloween Weekend stay in Holmes Beach with walk-to-beach access, a private heated pool, and an easy island vibe.",
    focus: "Best for short fall getaways that keep the plan simple.",
    lead: "A Halloween Weekend at the beach is a fun and easy reset.",
    support: SUPPORT_LINES[1],
    highlightLead: "A light, beach-forward weekend with a hint of fall.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a Friday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Take a sunset walk, then keep dinner casual nearby.",
      "Use the pool for a quiet afternoon break.",
    ],
    monthHints: ["October"],
    cta: "Book a Halloween Weekend beach escape. Browse open dates.",
  },
  {
    slug: "thanksgiving",
    holiday: "Thanksgiving",
    badge: "Family holiday",
    icon: "🦃",
    description:
      "Plan a Thanksgiving stay on Anna Maria Island with a private heated pool, walk-to-beach access, and a calm Holmes Beach home base.",
    focus: "Best for families who want a warm-weather Thanksgiving.",
    lead: "Thanksgiving feels lighter when the plan includes beach time and fresh air.",
    support: SUPPORT_LINES[2],
    highlightLead: "A warm, beachy Thanksgiving with room to relax.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Saturday or Sunday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Keep Thanksgiving Day simple with a morning beach walk.",
      "Use the pool for downtime after meals.",
    ],
    monthHints: ["November"],
    cta: "Make Thanksgiving sunny this year. Check open dates.",
  },
  {
    slug: "thanksgiving-week",
    holiday: "Thanksgiving Week",
    badge: "Weeklong stay",
    icon: "🍁",
    description:
      "Book a Thanksgiving Week in Holmes Beach with a private heated pool, beach access, and easy island routines.",
    focus: "Best for families who want a full holiday week on the beach.",
    lead: "A full Thanksgiving Week gives you space to unwind before and after the holiday.",
    support: SUPPORT_LINES[3],
    highlightLead: "A full week to relax, cook, and enjoy the beach.",
    timingWindow: "12 to 16 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: HOLIDAY_WEEK_RHYTHM,
    localTips: [
      "Plan a Pine Avenue afternoon for coffee and browsing.",
      "Keep evenings easy with pool time and a simple meal.",
    ],
    monthHints: ["November"],
    cta: "Secure a Thanksgiving Week stay early. Browse open dates.",
  },
  {
    slug: "thanksgiving-weekend",
    holiday: "Thanksgiving Weekend",
    badge: "Long weekend",
    icon: "🥧",
    description:
      "Take a Thanksgiving Weekend break in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for short holiday getaways and post-dinner beach walks.",
    lead: "If you only have the long weekend, keep the plan simple and beach-first.",
    support: SUPPORT_LINES[4],
    highlightLead: "A quick holiday reset with beach walks and pool time.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Plan a morning beach walk, then relax poolside.",
      "Wrap the day with an easy dinner near Bridge Street.",
    ],
    monthHints: ["November"],
    cta: "Plan a short Thanksgiving beach break. Check open dates.",
  },
  {
    slug: "christmas",
    holiday: "Christmas",
    badge: "Holiday escape",
    icon: "🎄",
    description:
      "Spend Christmas on Anna Maria Island with a private heated pool, walk-to-beach access, and a calm Holmes Beach base.",
    focus: "Best for families who want a warm, relaxed holiday.",
    lead: "Christmas on the beach is simple, sunny, and stress-free.",
    support: SUPPORT_LINES[5],
    highlightLead: "A warm Christmas with beach walks and quiet evenings.",
    timingWindow: "12 to 16 weeks out",
    arrivalTip: "a Saturday or Sunday check-in",
    itinerary: WINTER_BREAK_RHYTHM,
    localTips: [
      "Start the morning with a beach walk before holiday meals.",
      "Use the pool for a midday reset.",
    ],
    monthHints: ["December"],
    cta: "Plan a sunny Christmas on AMI. Browse open dates.",
  },
  {
    slug: "christmas-week",
    holiday: "Christmas Week",
    badge: "Weeklong stay",
    icon: "🎅",
    description:
      "Book a Christmas Week stay in Holmes Beach with a private heated pool, beach access, and easy holiday routines.",
    focus: "Best for families who want a full week of holiday downtime.",
    lead: "A full Christmas Week gives you time for beach days and slow meals.",
    support: SUPPORT_LINES[0],
    highlightLead: "A full week to celebrate with sun and sea air.",
    timingWindow: "14 to 18 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: WINTER_BREAK_RHYTHM,
    localTips: [
      "Use the pool daily to keep the week relaxed.",
      "Plan one Pine Avenue afternoon for shopping and coffee.",
    ],
    monthHints: ["December"],
    cta: "Reserve a Christmas Week stay early. Check open dates.",
  },
  {
    slug: "christmas-weekend",
    holiday: "Christmas Weekend",
    badge: "Long weekend",
    icon: "🎁",
    description:
      "Celebrate Christmas Weekend in Holmes Beach with a private heated pool, walk-to-beach access, and easy island dining.",
    focus: "Best for quick holiday getaways that still feel special.",
    lead: "Even a short Christmas Weekend can feel restorative at the beach.",
    support: SUPPORT_LINES[1],
    highlightLead: "A short holiday escape with beach walks and pool time.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a Thursday or Friday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Keep meals simple, then enjoy a sunset walk.",
      "Use the pool for a calm afternoon break.",
    ],
    monthHints: ["December"],
    cta: "Plan a Christmas Weekend escape. Browse open dates.",
  },
  {
    slug: "hanukkah",
    holiday: "Hanukkah",
    badge: "Holiday season",
    icon: "🕎",
    description:
      "Spend Hanukkah on Anna Maria Island with a private heated pool, beach access, and a relaxed Holmes Beach base.",
    focus: "Best for families who want sunshine and a calm holiday routine.",
    lead: "Hanukkah in Holmes Beach means warm afternoons and simple evenings.",
    support: SUPPORT_LINES[2],
    highlightLead: "A warm-weather holiday with a relaxed pace.",
    timingWindow: "10 to 14 weeks out",
    arrivalTip: "a weekend check-in",
    itinerary: WINTER_BREAK_RHYTHM,
    localTips: [
      "Plan a morning beach walk before holiday plans.",
      "Use the pool for an easy afternoon reset.",
    ],
    monthHints: ["December"],
    cta: "Plan a sunny Hanukkah stay. Check open dates.",
  },
  {
    slug: "winter-break",
    holiday: "Winter Break",
    badge: "School break",
    icon: "❄️",
    description:
      "Plan a Winter Break stay in Holmes Beach with a private heated pool, walk-to-beach access, and an easy island routine.",
    focus: "Best for families traveling during school break weeks.",
    lead: "Winter Break is ideal for a warm-weather reset without a packed schedule.",
    support: SUPPORT_LINES[3],
    highlightLead: "A warm break from winter with easy beach days.",
    timingWindow: "12 to 16 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: WINTER_BREAK_RHYTHM,
    localTips: [
      "Keep afternoons flexible with pool time and naps.",
      "Plan one outing to Bridge Street for dinner.",
    ],
    monthHints: ["December", "January"],
    cta: "Plan Winter Break early. Browse open dates now.",
  },
  {
    slug: "winter-holiday-week",
    holiday: "Winter Holiday Week",
    badge: "Holiday week",
    icon: "⛄",
    description:
      "Book a Winter Holiday Week in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for families who want a full week of low-key holiday time.",
    lead: "Turn the holiday season into a full week of sunshine and beach walks.",
    support: SUPPORT_LINES[4],
    highlightLead: "A full holiday week with warm days and relaxed nights.",
    timingWindow: "12 to 16 weeks out",
    arrivalTip: "a Saturday check-in",
    itinerary: WINTER_BREAK_RHYTHM,
    localTips: [
      "Use the pool daily to keep everyone happy.",
      "Mix beach time with one Pine Avenue afternoon.",
    ],
    monthHints: ["December"],
    cta: "Claim a Winter Holiday Week slot. Check open dates.",
  },
  {
    slug: "midwinter-break",
    holiday: "Midwinter Break",
    badge: "Winter escape",
    icon: "🌬️",
    description:
      "Take a Midwinter Break in Holmes Beach with a private heated pool, walk-to-beach access, and a calm island vibe.",
    focus: "Best for quick winter escapes and long-weekend travelers.",
    lead: "Midwinter is a great time to trade cold days for beach sun.",
    support: SUPPORT_LINES[5],
    highlightLead: "A quick winter escape with warm afternoons.",
    timingWindow: "6 to 9 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: LONG_WEEKEND_RHYTHM,
    localTips: [
      "Plan a morning beach walk, then reset by the pool.",
      "End the day with a sunset stroll.",
    ],
    monthHints: ["February"],
    cta: "Plan a midwinter beach break. Browse open dates.",
  },
];

export const holidayPages: HolidayPage[] = holidayConfigs.map(buildHolidayPage);

export function getHolidayPage(slug: string) {
  return holidayPages.find((page) => page.slug === slug);
}
