export type SeasonalLink = {
  href: string;
  label: string;
};

export type SeasonalPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  badge: string;
  intro: string[];
  focus: string;
  highlights: string[];
  timing: string[];
  itinerary: string[];
  localTips: string[];
  monthHints: string[];
  internalLinks: SeasonalLink[];
  cta: string;
};

type SeasonalConfig = {
  slug: string;
  season: string;
  badge: string;
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

const BASE_LINKS: SeasonalLink[] = [
  { href: "/open-dates", label: "Open dates" },
  { href: "/availability", label: "Check availability" },
  { href: "/location", label: "Location" },
  { href: "/pool/heated-pool", label: "Heated pool" },
  { href: "/walkable", label: "Walkability" },
  { href: "/pet-friendly", label: "Pet-friendly" },
  { href: "/photos", label: "Photos" },
  { href: "/locations/pine-avenue/", label: "Pine Avenue" },
];

const DEFAULT_HIGHLIGHTS = [
  "Private heated pool for a calm reset between outings.",
  "Walk to the Gulf without crossing busy roads.",
  "Central Holmes Beach base near Pine Avenue and Bridge Street.",
  "Dog friendly for well-behaved pups 35 lbs or less.",
];

const WEEKEND_RHYTHM = [
  "Day 1: arrive, beach walk, and a relaxed dinner nearby.",
  "Day 2: beach morning, pool reset, and sunset on the Gulf.",
  "Day 3: coffee on Pine Avenue, last swim, checkout.",
];

const WEEK_RHYTHM = [
  "Arrival day: groceries, quick beach walk, and pool time.",
  "Midweek: slow mornings, beach time, and an easy dinner out.",
  "One day: trolley ride to Bridge Street or Anna Maria City.",
  "Last day: sunrise stroll and a final pool dip.",
];

const FAMILY_RHYTHM = [
  "Day 1: check in, pool time, and an early dinner in.",
  "Day 2: beach morning, nap or pool break, sunset walk.",
  "Day 3: pancakes, quick beach visit, checkout.",
];

const EXTENDED_RHYTHM = [
  "Week 1: settle into a beach-pool rhythm and stock the kitchen.",
  "Week 2: add Pine Avenue afternoons and a Bridge Street dinner.",
  "Week 3: explore different beaches and keep evenings simple.",
  "Final stretch: slow mornings, pool resets, and sunset walks.",
];

function buildSeasonalPage(config: SeasonalConfig): SeasonalPage {
  return {
    slug: config.slug,
    title: `${config.season} Stays in Holmes Beach | Sandbox Beach House`,
    description: config.description,
    h1: `${config.season} in Holmes Beach (Anna Maria Island)`,
    badge: config.badge,
    intro: [config.lead, config.support],
    focus: config.focus,
    highlights: [config.highlightLead, ...DEFAULT_HIGHLIGHTS],
    timing: [
      `For ${config.season.toLowerCase()} travel, start watching open dates about ${config.timingWindow}.`,
      `If you can shift arrival by a day or two, ${config.arrivalTip} can open more options.`,
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
  "A heated pool, walkable dining pockets, and a laid-back neighborhood keep the stay simple.",
  "Sandbox Beach House keeps the plan easy: private pool, beach access, and a cozy layout for small groups.",
  "Holmes Beach is central on the island, so day trips to Anna Maria City and Bradenton Beach stay easy.",
];

const seasonalConfigs: SeasonalConfig[] = [
  {
    slug: "january-beach-weeks",
    season: "January Beach Weeks",
    badge: "Winter sun",
    description:
      "Plan January beach weeks in Holmes Beach with a private heated pool, walk-to-beach access, and a relaxed island rhythm.",
    focus: "Best for winter travelers looking for warmth and easy routines.",
    lead: "January is made for warm afternoons, quiet beaches, and simple plans.",
    support: SUPPORT_LINES[0],
    highlightLead: "Sunny winter days with a calm, uncrowded feel.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Start with a beach walk, then linger at the pool.",
      "Use Pine Avenue for a coffee and easy browsing break.",
    ],
    monthHints: ["January"],
    cta: "Book a January beach week and reset in the sun. Check open dates.",
  },
  {
    slug: "february-beach-weeks",
    season: "February Beach Weeks",
    badge: "Winter escape",
    description:
      "Plan February beach weeks on Anna Maria Island with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for couples and snowbirds who want warm winter getaways.",
    lead: "February stays feel warm, bright, and easy on AMI.",
    support: SUPPORT_LINES[1],
    highlightLead: "Warm days, cooler nights, and easy beach access.",
    timingWindow: "7 to 11 weeks out",
    arrivalTip: "a Sunday or Monday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a Bridge Street dinner midweek for a change of pace.",
      "Keep afternoons for pool resets and naps.",
    ],
    monthHints: ["February"],
    cta: "Grab a February beach week. Browse open dates now.",
  },
  {
    slug: "march-spring-weeks",
    season: "March Spring Weeks",
    badge: "Early spring",
    description:
      "Book March spring weeks in Holmes Beach with a private heated pool, walk-to-beach access, and a relaxed island pace.",
    focus: "Best for early spring breaks with beach time and light crowds.",
    lead: "March brings a bright, easy spring energy to the island.",
    support: SUPPORT_LINES[2],
    highlightLead: "Fresh spring air and classic beach days.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday or Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Mix beach mornings with a Pine Avenue afternoon.",
      "Use the pool for a midweek reset.",
    ],
    monthHints: ["March"],
    cta: "Plan a March spring week. Check open dates now.",
  },
  {
    slug: "april-spring-weeks",
    season: "April Spring Weeks",
    badge: "Spring sun",
    description:
      "Plan April spring weeks on Anna Maria Island with a private heated pool, walkable dining, and a calm Holmes Beach base.",
    focus: "Best for spring travelers who want warm days and easy routines.",
    lead: "April feels like the sweet spot for beach time and warm afternoons.",
    support: SUPPORT_LINES[3],
    highlightLead: "Easy spring weather with a relaxed island pace.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Add a Bridge Street dinner midweek for variety.",
      "Use the pool to cool off after beach mornings.",
    ],
    monthHints: ["April"],
    cta: "Book an April spring week now. Browse open dates.",
  },
  {
    slug: "may-pre-summer",
    season: "May Pre-Summer Weeks",
    badge: "Early summer",
    description:
      "Plan May pre-summer weeks in Holmes Beach with a private heated pool, walk-to-beach access, and easy island routines.",
    focus: "Best for early summer trips with lighter crowds.",
    lead: "May delivers warm days and a calmer beach scene before peak summer.",
    support: SUPPORT_LINES[4],
    highlightLead: "Warm water, sunny days, and an early-summer vibe.",
    timingWindow: "6 to 9 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a Pine Avenue afternoon for shopping and snacks.",
      "Keep evenings flexible with pool time and a simple meal.",
    ],
    monthHints: ["May"],
    cta: "Lock in a May pre-summer week. Check open dates.",
  },
  {
    slug: "june-summer-weeks",
    season: "June Summer Weeks",
    badge: "Summer start",
    description:
      "Book June summer weeks in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for families and friends starting summer vacations.",
    lead: "June is for beach days, pool resets, and long, sunny afternoons.",
    support: SUPPORT_LINES[5],
    highlightLead: "Classic summer days with beach and pool time.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a Saturday check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Get to the beach early, then use the pool midday.",
      "Plan dinner on Bridge Street one night.",
    ],
    monthHints: ["June"],
    cta: "Plan a June summer week. Browse open dates now.",
  },
  {
    slug: "july-summer-weeks",
    season: "July Summer Weeks",
    badge: "Peak summer",
    description:
      "Plan July summer weeks on Anna Maria Island with a private heated pool, walk-to-beach access, and a relaxed Holmes Beach base.",
    focus: "Best for peak-summer beach weeks with full sunshine.",
    lead: "July is full summer mode: beach mornings, pool afternoons, sunset walks.",
    support: SUPPORT_LINES[0],
    highlightLead: "Peak-summer energy with beach access at your door.",
    timingWindow: "10 to 16 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Use the pool for a daily cool-down.",
      "Plan one off-beach afternoon on Pine Avenue.",
    ],
    monthHints: ["July"],
    cta: "Reserve a July summer week early. Check open dates.",
  },
  {
    slug: "august-late-summer",
    season: "August Late-Summer Weeks",
    badge: "Late summer",
    description:
      "Book August late-summer weeks in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for summer travelers who want a slightly slower pace.",
    lead: "August keeps the summer vibe but with a more relaxed rhythm.",
    support: SUPPORT_LINES[1],
    highlightLead: "Warm days, long sunsets, and a calmer island feel.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Keep midday for pool resets and shade breaks.",
      "Use the trolley for a low-stress island loop.",
    ],
    monthHints: ["August"],
    cta: "Plan an August late-summer week. Browse open dates.",
  },
  {
    slug: "september-shoulder-season",
    season: "September Shoulder Season",
    badge: "Shoulder season",
    description:
      "Plan September shoulder-season stays in Holmes Beach with a private heated pool, walk-to-beach access, and a quieter island pace.",
    focus: "Best for travelers who want warm weather with fewer crowds.",
    lead: "September is a calm, warm month that feels unrushed.",
    support: SUPPORT_LINES[2],
    highlightLead: "Warm water and a more relaxed island tempo.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Take advantage of easier dining reservations on Bridge Street.",
      "Keep afternoons for pool time and shade.",
    ],
    monthHints: ["September"],
    cta: "Grab a September shoulder-season week. Check open dates.",
  },
  {
    slug: "october-fall-beach",
    season: "October Fall Beach Weeks",
    badge: "Fall sun",
    description:
      "Book October fall beach weeks in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for fall travelers who want warm afternoons and quiet beaches.",
    lead: "October brings warm days and a calmer island vibe.",
    support: SUPPORT_LINES[3],
    highlightLead: "Sunny fall days with room to breathe.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a Pine Avenue afternoon between beach days.",
      "Use the pool to stretch out the day.",
    ],
    monthHints: ["October"],
    cta: "Plan an October beach week now. Browse open dates.",
  },
  {
    slug: "november-fall-beach",
    season: "November Fall Beach Weeks",
    badge: "Late fall",
    description:
      "Plan November fall beach weeks in Holmes Beach with a private heated pool, walk-to-beach access, and an easy island rhythm.",
    focus: "Best for fall travelers who want warmth without the crowds.",
    lead: "November delivers calm beaches and plenty of sun.",
    support: SUPPORT_LINES[4],
    highlightLead: "Late-fall sunshine and quiet beaches.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Mix a beach morning with a Bridge Street dinner.",
      "Keep afternoons flexible with pool time.",
    ],
    monthHints: ["November"],
    cta: "Book a November fall week. Check open dates.",
  },
  {
    slug: "december-holiday-sun",
    season: "December Holiday Sun",
    badge: "Holiday sun",
    description:
      "Spend December in Holmes Beach with holiday sun, a private heated pool, and easy beach access.",
    focus: "Best for travelers who want warm weather during the holiday season.",
    lead: "December on AMI feels calm, sunny, and easy.",
    support: SUPPORT_LINES[5],
    highlightLead: "Warm afternoons and a relaxed holiday pace.",
    timingWindow: "8 to 12 weeks out",
    arrivalTip: "a weekend check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a morning beach walk before holiday plans.",
      "Use the pool for a midday reset.",
    ],
    monthHints: ["December"],
    cta: "Plan a December sun escape. Browse open dates.",
  },
  {
    slug: "winter-sun-escape",
    season: "Winter Sun Escapes",
    badge: "Winter sun",
    description:
      "Plan a winter sun escape to Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for winter travelers who want warmth and a calm pace.",
    lead: "Winter sun on AMI is all about simple beach days and warm afternoons.",
    support: SUPPORT_LINES[0],
    highlightLead: "Sunlit days and a calm, uncrowded feel.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Use the pool for a mid-afternoon reset.",
      "Plan an easy dinner on Bridge Street.",
    ],
    monthHints: ["January", "February"],
    cta: "Chase winter sun on AMI. Check open dates now.",
  },
  {
    slug: "snowbird-stays",
    season: "Snowbird Stays",
    badge: "Extended winter",
    description:
      "Plan snowbird stays in Holmes Beach with a private heated pool, walk-to-beach access, and a relaxed island routine.",
    focus: "Best for longer winter stays and seasonal escapes.",
    lead: "Settle into a snowbird rhythm with beach mornings and easy routines.",
    support: SUPPORT_LINES[1],
    highlightLead: "A comfortable home base for longer winter stays.",
    timingWindow: "12 to 20 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: EXTENDED_RHYTHM,
    localTips: [
      "Plan a weekly Pine Avenue afternoon for a change of pace.",
      "Use the pool as a daily reset.",
    ],
    monthHints: ["January", "February", "March"],
    cta: "Secure a snowbird stay early. Browse open dates.",
  },
  {
    slug: "extended-stay-monthly",
    season: "Extended Monthly Stays",
    badge: "Longer stays",
    description:
      "Plan extended monthly stays in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for travelers who want a longer, slower island rhythm.",
    lead: "Monthly stays let you settle in and enjoy a true island routine.",
    support: SUPPORT_LINES[2],
    highlightLead: "A relaxed pace with time to explore the island.",
    timingWindow: "12 to 20 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: EXTENDED_RHYTHM,
    localTips: [
      "Build in one day each week for a new neighborhood or beach.",
      "Use the pool and patio for quiet afternoons.",
    ],
    monthHints: ["January", "February", "March", "April"],
    cta: "Plan a longer stay and settle in. Check open dates.",
  },
  {
    slug: "early-spring-reset",
    season: "Early Spring Resets",
    badge: "Early spring",
    description:
      "Plan early spring reset trips to Holmes Beach with a private heated pool, walk-to-beach access, and easy island routines.",
    focus: "Best for travelers who want a calm spring getaway.",
    lead: "Early spring is quiet, sunny, and perfect for a reset.",
    support: SUPPORT_LINES[3],
    highlightLead: "Bright spring days and a relaxed beach rhythm.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a sunrise walk before the beach warms up.",
      "Use Pine Avenue for a slow afternoon break.",
    ],
    monthHints: ["March"],
    cta: "Plan an early spring reset. Browse open dates now.",
  },
  {
    slug: "late-spring-sun",
    season: "Late Spring Sun",
    badge: "Spring warmth",
    description:
      "Book late spring sun trips to Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for warm spring trips before peak summer.",
    lead: "Late spring offers warm days with a little extra breathing room.",
    support: SUPPORT_LINES[4],
    highlightLead: "Warm spring sun with a relaxed island feel.",
    timingWindow: "6 to 9 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Use the pool for a mid-afternoon cool-down.",
      "Mix beach time with an easy Bridge Street dinner.",
    ],
    monthHints: ["April", "May"],
    cta: "Plan a late spring sun trip. Check open dates.",
  },
  {
    slug: "early-summer-kickoff",
    season: "Early Summer Kickoff",
    badge: "Summer start",
    description:
      "Kick off summer in Holmes Beach with a private heated pool, walk-to-beach access, and an easy island pace.",
    focus: "Best for early summer trips before peak July crowds.",
    lead: "Early summer is all beach days, pool breaks, and simple plans.",
    support: SUPPORT_LINES[5],
    highlightLead: "The first wave of summer with easy, sunny days.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Start beach mornings early to beat the heat.",
      "Use the pool for a daily reset.",
    ],
    monthHints: ["May", "June"],
    cta: "Plan an early summer kickoff on AMI. Browse open dates.",
  },
  {
    slug: "midsummer-family",
    season: "Midsummer Family Weeks",
    badge: "Family time",
    description:
      "Plan midsummer family weeks in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for families who want classic summer beach days.",
    lead: "Midsummer is peak family time with long days and beach energy.",
    support: SUPPORT_LINES[0],
    highlightLead: "Long summer days with beach and pool time built in.",
    timingWindow: "10 to 16 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: FAMILY_RHYTHM,
    localTips: [
      "Use the pool to break up hot afternoons.",
      "Plan one day for Bridge Street snacks and strolling.",
    ],
    monthHints: ["July"],
    cta: "Plan a midsummer family week early. Check open dates.",
  },
  {
    slug: "late-summer-deals",
    season: "Late Summer Deals",
    badge: "Value season",
    description:
      "Find late summer deals in Holmes Beach with a private heated pool, walk-to-beach access, and a calm island rhythm.",
    focus: "Best for travelers who want summer sun with a lighter pace.",
    lead: "Late summer keeps the warmth while the island feels calmer.",
    support: SUPPORT_LINES[1],
    highlightLead: "Warm days and a relaxed pace with potential value windows.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Plan a Pine Avenue afternoon to change the routine.",
      "Use the pool as your midday recharge.",
    ],
    monthHints: ["August", "September"],
    cta: "Grab late summer openings while they last. Browse open dates.",
  },
  {
    slug: "early-fall-reset",
    season: "Early Fall Resets",
    badge: "Fall reset",
    description:
      "Plan early fall reset trips to Holmes Beach with a private heated pool, walk-to-beach access, and easy island routines.",
    focus: "Best for quiet fall breaks with warm afternoons.",
    lead: "Early fall is calm, warm, and great for a reset.",
    support: SUPPORT_LINES[2],
    highlightLead: "Warm fall days with fewer crowds.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a Sunday check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Enjoy easier beach access and simple dinners.",
      "Use the pool to extend the day.",
    ],
    monthHints: ["September"],
    cta: "Plan an early fall reset. Check open dates now.",
  },
  {
    slug: "late-fall-warmth",
    season: "Late Fall Warmth",
    badge: "Late fall",
    description:
      "Chase late fall warmth in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for travelers who want warm weather into November.",
    lead: "Late fall stays deliver sun, calm beaches, and an easy pace.",
    support: SUPPORT_LINES[3],
    highlightLead: "Sunny days with an unrushed fall vibe.",
    timingWindow: "5 to 8 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Pair beach mornings with an afternoon on Pine Avenue.",
      "Keep evenings easy with pool time.",
    ],
    monthHints: ["October", "November"],
    cta: "Plan a late fall warmth escape. Browse open dates.",
  },
  {
    slug: "shoulder-season-deals",
    season: "Shoulder Season Deals",
    badge: "Value windows",
    description:
      "Find shoulder season deals in Holmes Beach with a private heated pool, walk-to-beach access, and a calm island pace.",
    focus: "Best for travelers who want warm weather with fewer crowds.",
    lead: "Shoulder season keeps the sunshine while the island feels quieter.",
    support: SUPPORT_LINES[4],
    highlightLead: "A calmer pace with potential value windows.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Use the pool for a daily reset.",
      "Plan a Bridge Street dinner when reservations are easier.",
    ],
    monthHints: ["September", "October"],
    cta: "Browse shoulder season openings now. Check open dates.",
  },
  {
    slug: "quiet-season",
    season: "Quiet Season Stays",
    badge: "Quiet pace",
    description:
      "Plan quiet season stays in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for travelers who want calm beaches and a slower rhythm.",
    lead: "Quiet season is about space, simplicity, and beach time.",
    support: SUPPORT_LINES[5],
    highlightLead: "A calm, uncrowded island feel.",
    timingWindow: "3 to 6 weeks out",
    arrivalTip: "a Sunday or Monday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Take long beach walks when the shoreline is quiet.",
      "Use the pool as a daily slow-down ritual.",
    ],
    monthHints: ["September", "October"],
    cta: "Plan a quiet season reset. Browse open dates.",
  },
  {
    slug: "pool-season",
    season: "Pool Season",
    badge: "Pool time",
    description:
      "Plan pool season stays in Holmes Beach with a private heated pool, walk-to-beach access, and easy island routines.",
    focus: "Best for travelers who want pool time every day.",
    lead: "Pool season means morning swims, midday resets, and sunset dips.",
    support: SUPPORT_LINES[0],
    highlightLead: "A private pool that anchors every day.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Split the day between beach walks and pool time.",
      "Keep evenings light with a nearby dinner.",
    ],
    monthHints: ["May", "June", "July", "August"],
    cta: "Book a pool season stay. Check open dates now.",
  },
  {
    slug: "beach-morning-season",
    season: "Beach Morning Season",
    badge: "Early starts",
    description:
      "Plan beach morning season stays in Holmes Beach with walk-to-beach access, a private heated pool, and easy island routines.",
    focus: "Best for travelers who love early beach walks and calm mornings.",
    lead: "Early mornings on the Gulf are quiet, bright, and perfect for a reset.",
    support: SUPPORT_LINES[1],
    highlightLead: "Quiet shorelines and calm morning light.",
    timingWindow: "3 to 6 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Walk the beach at sunrise, then ease into the day.",
      "Use the pool for an afternoon break.",
    ],
    monthHints: ["April", "May", "September"],
    cta: "Plan a beach-morning escape. Browse open dates.",
  },
  {
    slug: "sunset-season",
    season: "Sunset Season",
    badge: "Golden hour",
    description:
      "Plan sunset season stays in Holmes Beach with walk-to-beach access, a private heated pool, and easy island routines.",
    focus: "Best for travelers who want daily sunset walks and golden-hour beach time.",
    lead: "Sunset season on AMI is a daily ritual you will want to repeat.",
    support: SUPPORT_LINES[2],
    highlightLead: "Golden-hour walks just steps from the house.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a midweek check-in",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Plan dinners after sunset to keep evenings slow.",
      "Use the pool for a gentle pre-sunset reset.",
    ],
    monthHints: ["February", "March", "November"],
    cta: "Chase sunsets on the island. Check open dates.",
  },
  {
    slug: "walkable-season",
    season: "Walkable Season",
    badge: "No-car days",
    description:
      "Plan walkable season stays in Holmes Beach with easy access to the beach, Pine Avenue, and Bridge Street.",
    focus: "Best for travelers who want to park the car and walk.",
    lead: "Walkable season is all about leaving the car parked and exploring on foot.",
    support: SUPPORT_LINES[3],
    highlightLead: "Walk to the beach, coffee, and casual dining.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a Sunday check-in",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Plan a morning coffee run on Pine Avenue.",
      "Walk to the beach at sunset for the best light.",
    ],
    monthHints: ["March", "April", "October"],
    cta: "Plan a walkable island week. Browse open dates.",
  },
  {
    slug: "pet-friendly-season",
    season: "Pet-Friendly Season",
    badge: "Small dogs",
    description:
      "Plan pet-friendly season stays in Holmes Beach with walk-to-beach access and a private heated pool. Small dogs 35 lbs or less welcome.",
    focus: "Best for travelers bringing a small dog along.",
    lead: "Pet-friendly season is about easy routines for you and your pup.",
    support: SUPPORT_LINES[4],
    highlightLead: "Bring a small dog and keep the trip simple.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Plan short morning walks before the sand heats up.",
      "Use the pool for a midday break while your pup rests.",
    ],
    monthHints: ["February", "March", "November"],
    cta: "Plan a pet-friendly stay now. Check open dates.",
  },
  {
    slug: "couples-season",
    season: "Couples Season",
    badge: "Couples time",
    description:
      "Plan couples season stays in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for couples who want a simple, relaxed beach escape.",
    lead: "Couples season is about quiet mornings, sunset walks, and slow dinners.",
    support: SUPPORT_LINES[5],
    highlightLead: "A relaxed island base for couples.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a Thursday arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Plan a sunset walk, then dinner around Bridge Street.",
      "Use the pool for a midday reset.",
    ],
    monthHints: ["January", "February", "October"],
    cta: "Plan a couples escape on AMI. Browse open dates.",
  },
  {
    slug: "family-season",
    season: "Family Season",
    badge: "Family time",
    description:
      "Plan family season stays in Holmes Beach with a private heated pool, walk-to-beach access, and easy island routines.",
    focus: "Best for families who want simple beach days and pool time.",
    lead: "Family season is all about easy routines and lots of time outdoors.",
    support: SUPPORT_LINES[0],
    highlightLead: "Simple family routines with beach and pool time.",
    timingWindow: "6 to 10 weeks out",
    arrivalTip: "a Saturday arrival",
    itinerary: FAMILY_RHYTHM,
    localTips: [
      "Use the pool to break up beach days for kids.",
      "Plan one afternoon for Pine Avenue treats.",
    ],
    monthHints: ["June", "July", "August"],
    cta: "Plan a family beach week. Check open dates.",
  },
  {
    slug: "wellness-season",
    season: "Wellness Season",
    badge: "Reset",
    description:
      "Plan wellness season stays in Holmes Beach with a private heated pool, walkable beach access, and a calm island pace.",
    focus: "Best for travelers who want rest, quiet routines, and beach walks.",
    lead: "Wellness season is about slow mornings, long walks, and quiet afternoons.",
    support: SUPPORT_LINES[1],
    highlightLead: "A calm, restorative beach routine.",
    timingWindow: "3 to 6 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Start the day with a beach walk and a calm breakfast.",
      "Use the pool for a gentle afternoon reset.",
    ],
    monthHints: ["January", "February", "September"],
    cta: "Plan a wellness reset on AMI. Browse open dates.",
  },
  {
    slug: "foodie-season",
    season: "Foodie Season",
    badge: "Dining",
    description:
      "Plan foodie season stays in Holmes Beach with walkable dining, a private heated pool, and easy beach access.",
    focus: "Best for travelers who want great meals and a relaxed island pace.",
    lead: "Foodie season blends beach mornings with casual dining nights.",
    support: SUPPORT_LINES[2],
    highlightLead: "Walkable dining and easy beach access.",
    timingWindow: "4 to 7 weeks out",
    arrivalTip: "a Sunday check-in",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Plan one Bridge Street dinner and one Pine Avenue lunch.",
      "Keep afternoons for pool time to balance the meals.",
    ],
    monthHints: ["March", "April", "October"],
    cta: "Plan a foodie beach stay. Check open dates.",
  },
  {
    slug: "fishing-season",
    season: "Fishing Season",
    badge: "On the water",
    description:
      "Plan fishing season stays in Holmes Beach with a private heated pool, easy beach access, and a calm home base after time on the water.",
    focus: "Best for anglers who want early mornings and a quiet base.",
    lead: "Fishing season pairs perfectly with a calm, close-to-the-beach home base.",
    support: SUPPORT_LINES[3],
    highlightLead: "Easy mornings and a comfortable place to reset.",
    timingWindow: "5 to 9 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Start early on the water, then relax poolside.",
      "Keep dinners casual and close by.",
    ],
    monthHints: ["April", "May", "October"],
    cta: "Plan a fishing season stay. Browse open dates.",
  },
  {
    slug: "trolley-season",
    season: "Trolley Season",
    badge: "Car-free",
    description:
      "Plan trolley season stays in Holmes Beach with easy access to the free island trolley, walkable beaches, and a private heated pool.",
    focus: "Best for travelers who want to explore the island without driving.",
    lead: "Trolley season is about hopping between island neighborhoods with ease.",
    support: SUPPORT_LINES[4],
    highlightLead: "Easy island access without the car.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a Sunday arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Ride the trolley to Bridge Street for dinner.",
      "Keep beach mornings close and simple.",
    ],
    monthHints: ["March", "April", "November"],
    cta: "Plan a trolley-friendly stay. Check open dates.",
  },
  {
    slug: "bay-sunrise-season",
    season: "Bay Sunrise Season",
    badge: "Early light",
    description:
      "Plan bay sunrise season stays in Holmes Beach with calm mornings, walkable beach access, and a private heated pool.",
    focus: "Best for early risers who want quiet mornings and soft light.",
    lead: "Bay sunrises are a calm, quiet way to start the day.",
    support: SUPPORT_LINES[5],
    highlightLead: "Soft morning light and quiet streets.",
    timingWindow: "3 to 6 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Start early, then enjoy a slow breakfast and beach time.",
      "Use the pool for a late-morning reset.",
    ],
    monthHints: ["January", "February", "November"],
    cta: "Plan a sunrise-focused stay. Browse open dates.",
  },
  {
    slug: "island-hopping-season",
    season: "Island Hopping Season",
    badge: "Explore",
    description:
      "Plan island hopping season stays in Holmes Beach with easy access to Anna Maria City, Bradenton Beach, and a private heated pool.",
    focus: "Best for travelers who want to explore multiple island neighborhoods.",
    lead: "Island hopping is simple when you stay central in Holmes Beach.",
    support: SUPPORT_LINES[0],
    highlightLead: "Central base for easy island exploration.",
    timingWindow: "4 to 8 weeks out",
    arrivalTip: "a Sunday or Monday arrival",
    itinerary: WEEK_RHYTHM,
    localTips: [
      "Take one day for Anna Maria City and another for Bridge Street.",
      "Use the pool to rest between outings.",
    ],
    monthHints: ["March", "April", "October"],
    cta: "Explore the island with ease. Check open dates.",
  },
  {
    slug: "weekend-escape-season",
    season: "Weekend Escape Season",
    badge: "Quick trips",
    description:
      "Plan weekend escape season stays in Holmes Beach with walk-to-beach access, a private heated pool, and an easy island rhythm.",
    focus: "Best for quick resets and short getaways.",
    lead: "A weekend is enough when the plan is simple and beach-forward.",
    support: SUPPORT_LINES[1],
    highlightLead: "A fast, easy reset with beach time built in.",
    timingWindow: "3 to 6 weeks out",
    arrivalTip: "a Thursday or Friday arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Start with a sunset walk, then keep dinner close.",
      "Use the pool for a quick afternoon reset.",
    ],
    monthHints: ["February", "March", "October"],
    cta: "Plan a weekend escape now. Browse open dates.",
  },
  {
    slug: "midweek-escape",
    season: "Midweek Escapes",
    badge: "Midweek",
    description:
      "Plan midweek escape stays in Holmes Beach with a private heated pool, walk-to-beach access, and a calm island pace.",
    focus: "Best for travelers who want more flexibility on dates.",
    lead: "Midweek stays often open up more options and a quieter vibe.",
    support: SUPPORT_LINES[2],
    highlightLead: "More open dates and a calmer island feel.",
    timingWindow: "2 to 5 weeks out",
    arrivalTip: "a Tuesday or Wednesday check-in",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Enjoy quieter beaches and easier dining reservations.",
      "Use the pool for midday downtime.",
    ],
    monthHints: ["January", "February", "September"],
    cta: "Try a midweek escape. Check open dates now.",
  },
  {
    slug: "last-minute-season",
    season: "Last-Minute Season",
    badge: "Last-minute",
    description:
      "Find last-minute season stays in Holmes Beach with a private heated pool, walkable dining, and easy beach access.",
    focus: "Best for flexible travelers who can move quickly on open dates.",
    lead: "Last-minute trips work best when you keep the plan simple.",
    support: SUPPORT_LINES[3],
    highlightLead: "Flexible dates can unlock great openings.",
    timingWindow: "2 to 4 weeks out",
    arrivalTip: "a midweek arrival",
    itinerary: WEEKEND_RHYTHM,
    localTips: [
      "Keep your itinerary light and beach-focused.",
      "Use the pool for a quick reset between outings.",
    ],
    monthHints: ["January", "September"],
    cta: "Watch for last-minute openings. Browse open dates.",
  },
];

export const seasonalPages: SeasonalPage[] = seasonalConfigs.map(buildSeasonalPage);

export function getSeasonalPage(slug: string) {
  return seasonalPages.find((page) => page.slug === slug);
}
