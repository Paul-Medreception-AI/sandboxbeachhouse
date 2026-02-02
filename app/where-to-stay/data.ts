export type StayLink = {
  href: string;
  label: string;
};

export type StayPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  bestFor: string;
  highlights: string[];
  tips: string[];
  internalLinks: StayLink[];
  cta: string;
  group: string;
  badge: string;
};

const baseLinks: StayLink[] = [
  { href: "/availability", label: "Check availability" },
  { href: "/open-dates", label: "Open dates" },
  { href: "/location", label: "Walk-to-beach location" },
  { href: "/walkable", label: "Walkability" },
  { href: "/photos", label: "Photo tour" },
  { href: "/guide", label: "Local guide" },
  { href: "/locations", label: "All locations" },
];

const areaPages: StayPage[] = [
  {
    slug: "best-areas-overview",
    title: "Where to Stay on Anna Maria Island | Sandbox Beach House",
    description: "Compare the best areas to stay on Anna Maria Island: Holmes Beach, Bradenton Beach, and Anna Maria City.",
    h1: "Where to Stay on Anna Maria Island: Best Areas and Vibes",
    intro: [
      "Anna Maria Island is small, but each area feels different.",
      "This guide compares walkability, dining, and beach access across the island.",
    ],
    bestFor: "Best for first-time visitors choosing an area.",
    highlights: [
      "Holmes Beach: central and balanced",
      "Bradenton Beach: Bridge Street dining",
      "Anna Maria City: quiet and residential",
    ],
    tips: [
      "Pick Holmes Beach for a central base.",
      "Choose Bradenton Beach for dining nights.",
      "Go north for quieter routines.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/holmes-beach/", label: "Holmes Beach" }],
    cta: "Compare areas, then check availability.",
    group: "Area comparisons",
    badge: "Overview",
  },
  {
    slug: "holmes-beach",
    title: "Stay in Holmes Beach | Sandbox Beach House",
    description: "Holmes Beach is a central, walkable base on Anna Maria Island with easy access to beaches and dining.",
    h1: "Holmes Beach: A Central Base on AMI",
    intro: [
      "Holmes Beach keeps everything close: beach access, dining, and a relaxed neighborhood feel.",
      "It is a balanced choice for most travelers.",
    ],
    bestFor: "Best for travelers who want central access with a calm vibe.",
    highlights: [
      "Central island access",
      "Walkable pockets",
      "Quick drives to Bridge Street and Pine Avenue",
    ],
    tips: [
      "Use Holmes Beach as the home base and day-trip north or south.",
      "Plan beach mornings and sunset dinners nearby.",
      "Keep parking stress low with short drives.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/holmes-beach/", label: "Holmes Beach guide" }],
    cta: "Stay in Holmes Beach and check open dates.",
    group: "Area comparisons",
    badge: "Holmes Beach",
  },
  {
    slug: "bradenton-beach",
    title: "Stay in Bradenton Beach | Sandbox Beach House",
    description: "Bradenton Beach is a lively pocket with Bridge Street dining and easy beach access.",
    h1: "Bradenton Beach: Dining and Walkable Energy",
    intro: [
      "Bradenton Beach is ideal if you want dining and a social feel close to the sand.",
      "Bridge Street anchors the area with walkable restaurants and shops.",
    ],
    bestFor: "Best for visitors who want dining and a lively evening vibe.",
    highlights: [
      "Bridge Street dining",
      "Walkable evening options",
      "Easy beach access",
    ],
    tips: [
      "Plan at least one dinner on Bridge Street.",
      "Arrive early for easy parking.",
      "Balance with quiet beach mornings.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bradenton-beach/", label: "Bradenton Beach guide" }],
    cta: "Plan a Bradenton Beach stay and check dates.",
    group: "Area comparisons",
    badge: "Bradenton Beach",
  },
  {
    slug: "anna-maria-city",
    title: "Stay in Anna Maria City | Sandbox Beach House",
    description: "Anna Maria City offers a quieter, residential feel with charming streets and beach access.",
    h1: "Anna Maria City: Quiet and Residential",
    intro: [
      "Anna Maria City is relaxed and residential, with a quieter beach-town rhythm.",
      "It is a great choice for travelers who want low-key days.",
    ],
    bestFor: "Best for quiet stays and low-key routines.",
    highlights: [
      "Residential, calm vibe",
      "Easy access to northern beaches",
      "Slower pace",
    ],
    tips: [
      "Plan slower mornings and longer beach sessions.",
      "Use Pine Avenue for simple dining and shopping.",
      "Keep the schedule flexible.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/anna-maria-city/", label: "Anna Maria City guide" }],
    cta: "Pick a quiet base and check availability.",
    group: "Area comparisons",
    badge: "Anna Maria City",
  },
  {
    slug: "holmes-vs-bradenton-beach",
    title: "Holmes Beach vs Bradenton Beach | Sandbox Beach House",
    description: "Compare Holmes Beach and Bradenton Beach for walkability, dining, and overall vibe.",
    h1: "Holmes Beach vs Bradenton Beach",
    intro: [
      "These two areas are close, but the vibe is different.",
      "Holmes Beach feels central and relaxed, while Bradenton Beach is more dining-forward.",
    ],
    bestFor: "Best for travelers choosing between central calm and dining energy.",
    highlights: [
      "Holmes Beach: balanced and central",
      "Bradenton Beach: Bridge Street dining",
      "Both offer easy beach access",
    ],
    tips: [
      "Choose Holmes Beach for a quieter base.",
      "Choose Bradenton Beach for walkable dining nights.",
      "Split your days between beach and Bridge Street.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bridge-street/", label: "Bridge Street" }],
    cta: "Compare the two, then check availability.",
    group: "Area comparisons",
    badge: "Comparison",
  },
  {
    slug: "holmes-vs-anna-maria-city",
    title: "Holmes Beach vs Anna Maria City | Sandbox Beach House",
    description: "Compare Holmes Beach and Anna Maria City for quiet stays, walkability, and access.",
    h1: "Holmes Beach vs Anna Maria City",
    intro: [
      "Holmes Beach is central while Anna Maria City is quieter and more residential.",
      "Pick based on the pace you want.",
    ],
    bestFor: "Best for travelers deciding between central access and quiet streets.",
    highlights: [
      "Holmes Beach: central access",
      "Anna Maria City: quiet, residential feel",
      "Both are beach-first",
    ],
    tips: [
      "Choose Holmes Beach if you want easy access to everything.",
      "Choose Anna Maria City if you want a calmer neighborhood vibe.",
      "Plan day trips to the other end.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/anna-maria-city/", label: "Anna Maria City" }],
    cta: "Pick your pace, then check dates.",
    group: "Area comparisons",
    badge: "Comparison",
  },
  {
    slug: "bradenton-beach-vs-anna-maria-city",
    title: "Bradenton Beach vs Anna Maria City | Sandbox Beach House",
    description: "Compare Bradenton Beach and Anna Maria City for dining energy vs quiet stays.",
    h1: "Bradenton Beach vs Anna Maria City",
    intro: [
      "Bradenton Beach is lively and dining-focused, while Anna Maria City is quiet and residential.",
      "Both are great beach bases with different energy.",
    ],
    bestFor: "Best for travelers deciding between lively evenings and quiet nights.",
    highlights: [
      "Bradenton Beach: Bridge Street dining",
      "Anna Maria City: residential calm",
      "Both offer easy Gulf access",
    ],
    tips: [
      "Choose Bradenton Beach if dining is your priority.",
      "Choose Anna Maria City for quiet routines.",
      "Plan a day trip to the other area.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bridge-street/", label: "Bridge Street" }],
    cta: "Compare the areas, then check open dates.",
    group: "Area comparisons",
    badge: "Comparison",
  },
];

const intentPages: StayPage[] = [
  {
    slug: "best-area-families",
    title: "Best Area for Families on AMI | Sandbox Beach House",
    description: "Find the best area for family stays on Anna Maria Island: walkable, easy dining, and beach access.",
    h1: "Best Area for Families on Anna Maria Island",
    intro: [
      "Families do best with a simple, walkable base.",
      "Holmes Beach is a strong pick thanks to central access and easy routines.",
    ],
    bestFor: "Best for families who want easy beach access and short drives.",
    highlights: [
      "Central access from Holmes Beach",
      "Walkable pockets for dining",
      "Quick beach routines",
    ],
    tips: [
      "Plan beach mornings and pool breaks.",
      "Keep dining early and casual.",
      "Use the trolley for easy movement.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/family-activities/", label: "Family activities" }],
    cta: "Plan a family stay and check dates.",
    group: "Best by traveler type",
    badge: "Families",
  },
  {
    slug: "best-area-couples",
    title: "Best Area for Couples on AMI | Sandbox Beach House",
    description: "Find the best area for couples on Anna Maria Island with walkable dining and sunsets.",
    h1: "Best Area for Couples on Anna Maria Island",
    intro: [
      "Couples usually want dining, sunsets, and a relaxed pace.",
      "Holmes Beach is central and calm, with easy access to Bridge Street.",
    ],
    bestFor: "Best for couples who want central access and quiet evenings.",
    highlights: [
      "Sunset-friendly evenings",
      "Walkable dining pockets",
      "Short drives to Bridge Street",
    ],
    tips: [
      "Plan one Bridge Street dinner.",
      "Keep mornings slow and beach-first.",
      "Choose a central base for flexibility.",
    ],
    internalLinks: [...baseLinks, { href: "/experiences/romantic-getaway/", label: "Romantic getaway" }],
    cta: "Plan a couples stay and check availability.",
    group: "Best by traveler type",
    badge: "Couples",
  },
  {
    slug: "best-area-quiet",
    title: "Best Area for Quiet Stays on AMI | Sandbox Beach House",
    description: "Find the calmest areas to stay on Anna Maria Island for quiet beach routines.",
    h1: "Best Area for Quiet Stays on Anna Maria Island",
    intro: [
      "Quiet stays work best in residential neighborhoods.",
      "Anna Maria City and parts of Holmes Beach are great for low-key routines.",
    ],
    bestFor: "Best for travelers who want calm, residential surroundings.",
    highlights: [
      "Residential streets",
      "Lower evening noise",
      "Relaxed beach days",
    ],
    tips: [
      "Pick a base away from Bridge Street energy.",
      "Plan simple dining and sunset walks.",
      "Keep the schedule open.",
    ],
    internalLinks: [...baseLinks, { href: "/experiences/quiet-escape/", label: "Quiet escape" }],
    cta: "Choose a quiet base and check open dates.",
    group: "Best by traveler type",
    badge: "Quiet stays",
  },
  {
    slug: "best-area-walkability",
    title: "Most Walkable Area on AMI | Sandbox Beach House",
    description: "Find the most walkable areas on Anna Maria Island for dining, beach access, and easy routines.",
    h1: "Most Walkable Area on Anna Maria Island",
    intro: [
      "Walkability keeps vacation plans simple.",
      "Holmes Beach and Bridge Street are strong picks for short walks to dining and the beach.",
    ],
    bestFor: "Best for travelers who want to walk more and drive less.",
    highlights: [
      "Dining within short walks",
      "Easy beach access",
      "Trolley stops nearby",
    ],
    tips: [
      "Plan walkable evenings.",
      "Keep beach gear light.",
      "Use the trolley for longer hops.",
    ],
    internalLinks: [...baseLinks, { href: "/walkable", label: "Walkability" }],
    cta: "Stay walkable and check availability.",
    group: "Best by traveler type",
    badge: "Walkable",
  },
  {
    slug: "best-area-dining",
    title: "Best Area for Dining on AMI | Sandbox Beach House",
    description: "Find the best area on Anna Maria Island for walkable dining and casual restaurants.",
    h1: "Best Area for Dining on Anna Maria Island",
    intro: [
      "If dining is a priority, focus on Bridge Street and nearby Holmes Beach.",
      "These pockets keep meals easy and close.",
    ],
    bestFor: "Best for travelers who want dining within short walks or drives.",
    highlights: [
      "Bridge Street dining",
      "Casual restaurants near Holmes Beach",
      "Easy sunset dinners",
    ],
    tips: [
      "Plan one Bridge Street evening.",
      "Go early for a relaxed meal.",
      "Balance dinner with beach time.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-restaurants/", label: "Best restaurants" }],
    cta: "Stay near dining and check open dates.",
    group: "Best by traveler type",
    badge: "Dining",
  },
  {
    slug: "best-area-beach-access",
    title: "Best Area for Beach Access on AMI | Sandbox Beach House",
    description: "Find the best area for quick beach access on Anna Maria Island.",
    h1: "Best Area for Beach Access on Anna Maria Island",
    intro: [
      "Beach access is excellent across the island, but central bases keep drives short.",
      "Holmes Beach is a reliable pick for quick access.",
    ],
    bestFor: "Best for travelers who want quick, simple beach routines.",
    highlights: [
      "Short drives to multiple beach spots",
      "Easy parking windows",
      "Flexible beach plans",
    ],
    tips: [
      "Arrive early for easy setup.",
      "Keep a light beach kit ready.",
      "Use the pool for midday breaks.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-beaches/", label: "Best beaches" }],
    cta: "Pick a beach-first base and check dates.",
    group: "Best by traveler type",
    badge: "Beach access",
  },
  {
    slug: "best-area-pet-friendly",
    title: "Best Area for Pet-Friendly Stays on AMI | Sandbox Beach House",
    description: "Find the best area for small-dog-friendly stays on Anna Maria Island.",
    h1: "Best Area for Pet-Friendly Stays on Anna Maria Island",
    intro: [
      "Pet-friendly trips are easiest with walkable routes and shaded streets.",
      "Holmes Beach is a strong base for simple dog-friendly routines.",
    ],
    bestFor: "Best for travelers bringing a small dog (35 lbs or less).",
    highlights: [
      "Walkable streets for quick outings",
      "Easy beach access nearby",
      "Short drives for pet-friendly errands",
    ],
    tips: [
      "Plan early walks before the day warms up.",
      "Keep water and towels handy.",
      "Stick to shaded routes when possible.",
    ],
    internalLinks: [...baseLinks, { href: "/pet-friendly", label: "Pet-friendly guides" }],
    cta: "Plan a pet-friendly stay and check open dates.",
    group: "Best by traveler type",
    badge: "Pet-friendly",
  },
  {
    slug: "best-area-short-stays",
    title: "Best Area for Short Stays on AMI | Sandbox Beach House",
    description: "Find the best area for 2 to 4 night stays on Anna Maria Island with easy access and walkability.",
    h1: "Best Area for Short Stays on Anna Maria Island",
    intro: [
      "Short stays work best with a central base and simple routines.",
      "Holmes Beach keeps driving minimal and beach time high.",
    ],
    bestFor: "Best for weekend trips and quick resets.",
    highlights: [
      "Central access",
      "Quick beach routines",
      "Easy dining options",
    ],
    tips: [
      "Plan one outing per day.",
      "Keep meals walkable.",
      "Use open-date windows for flexibility.",
    ],
    internalLinks: [...baseLinks, { href: "/open-dates", label: "Open dates" }],
    cta: "Book a short stay and check availability.",
    group: "Best by traveler type",
    badge: "Short stays",
  },
];

const neighborhoodPages: StayPage[] = [
  {
    slug: "bridge-street-area",
    title: "Stay Near Bridge Street | Sandbox Beach House",
    description: "Bridge Street is the dining and evening hub on Anna Maria Island. Stay nearby for walkable nights.",
    h1: "Stay Near Bridge Street",
    intro: [
      "Bridge Street is the island's dining and evening hub.",
      "Stay nearby if you want walkable restaurants and sunset strolls.",
    ],
    bestFor: "Best for visitors who want dining and evening energy.",
    highlights: [
      "Walkable dining",
      "Sunset-friendly evenings",
      "Easy access to Bradenton Beach",
    ],
    tips: [
      "Plan one dinner on Bridge Street.",
      "Arrive early for easy parking.",
      "Pair dinner with a sunset walk.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bridge-street/", label: "Bridge Street guide" }],
    cta: "Stay near Bridge Street and check open dates.",
    group: "Neighborhood spotlights",
    badge: "Bridge Street",
  },
  {
    slug: "pine-avenue-area",
    title: "Stay Near Pine Avenue | Sandbox Beach House",
    description: "Pine Avenue offers shops, cafes, and a quieter daytime vibe on Anna Maria Island.",
    h1: "Stay Near Pine Avenue",
    intro: [
      "Pine Avenue is the north end's main street for shops and cafes.",
      "It is a great daytime stop for coffee and browsing.",
    ],
    bestFor: "Best for travelers who want quiet mornings and local shopping.",
    highlights: [
      "Walkable shops and cafes",
      "Quiet, charming streets",
      "Easy access to northern beaches",
    ],
    tips: [
      "Plan a morning coffee run.",
      "Pair Pine Avenue with a beach afternoon.",
      "Keep evenings low-key.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/pine-avenue/", label: "Pine Avenue guide" }],
    cta: "Stay near Pine Avenue and check availability.",
    group: "Neighborhood spotlights",
    badge: "Pine Avenue",
  },
  {
    slug: "gulf-drive-corridor",
    title: "Stay Along Gulf Drive | Sandbox Beach House",
    description: "Gulf Drive runs the length of the island and keeps beach access close.",
    h1: "Stay Along Gulf Drive",
    intro: [
      "Gulf Drive keeps beach access close and makes island driving easy.",
      "It is a convenient corridor for simple routines.",
    ],
    bestFor: "Best for travelers who want quick access to multiple beach spots.",
    highlights: [
      "Beach access points",
      "Easy north-south drives",
      "Flexible day plans",
    ],
    tips: [
      "Use Gulf Drive for beach hopping.",
      "Arrive early for parking.",
      "Plan sunset stops along the drive.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/gulf-drive-corridor/", label: "Gulf Drive corridor" }],
    cta: "Stay along Gulf Drive and check open dates.",
    group: "Neighborhood spotlights",
    badge: "Gulf Drive",
  },
  {
    slug: "ami-north-end",
    title: "Stay on the AMI North End | Sandbox Beach House",
    description: "The north end of AMI is quieter and more residential, with easy beach access.",
    h1: "Stay on the AMI North End",
    intro: [
      "The north end is calm and residential with a slower pace.",
      "It is ideal for quiet stays and long beach mornings.",
    ],
    bestFor: "Best for quiet travelers and slow mornings.",
    highlights: [
      "Residential streets",
      "Calmer beach vibe",
      "Easy access to Bean Point",
    ],
    tips: [
      "Plan long beach mornings.",
      "Use Pine Avenue for simple dining.",
      "Keep the schedule light.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/ami-north-end/", label: "AMI north end" }],
    cta: "Stay on the north end and check availability.",
    group: "Neighborhood spotlights",
    badge: "North end",
  },
  {
    slug: "ami-south-end",
    title: "Stay on the AMI South End | Sandbox Beach House",
    description: "The south end is lively and close to Bridge Street dining and activity.",
    h1: "Stay on the AMI South End",
    intro: [
      "The south end puts you close to Bridge Street and dining.",
      "It is a good fit for visitors who want evening energy.",
    ],
    bestFor: "Best for dining-focused stays and evening activity.",
    highlights: [
      "Bridge Street nearby",
      "Easy dining options",
      "Short drives to Holmes Beach",
    ],
    tips: [
      "Plan a Bridge Street evening.",
      "Balance dining with beach mornings.",
      "Arrive early for parking.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/ami-south-end/", label: "AMI south end" }],
    cta: "Stay on the south end and check dates.",
    group: "Neighborhood spotlights",
    badge: "South end",
  },
  {
    slug: "cortez-fishing-village",
    title: "Stay Near Cortez Fishing Village | Sandbox Beach House",
    description: "Cortez offers a local fishing vibe and easy access to Bradenton Beach.",
    h1: "Stay Near Cortez Fishing Village",
    intro: [
      "Cortez is a historic fishing village near Bradenton Beach.",
      "It is a fun add-on for seafood nights and local flavor.",
    ],
    bestFor: "Best for visitors who want local seafood and a short drive to the beach.",
    highlights: [
      "Local seafood options",
      "Short drive to Bradenton Beach",
      "Unique local character",
    ],
    tips: [
      "Plan one seafood dinner.",
      "Pair with a beach day.",
      "Keep evenings simple.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/cortez-fishing-village/", label: "Cortez village" }],
    cta: "Stay nearby and check availability.",
    group: "Neighborhood spotlights",
    badge: "Cortez",
  },
  {
    slug: "holmes-beach-center",
    title: "Stay in Central Holmes Beach | Sandbox Beach House",
    description: "Central Holmes Beach is a balanced base with easy drives north and south.",
    h1: "Stay in Central Holmes Beach",
    intro: [
      "Central Holmes Beach keeps the island within quick reach.",
      "It is a balanced base for most trip styles.",
    ],
    bestFor: "Best for visitors who want a middle-of-the-island base.",
    highlights: [
      "Quick access north and south",
      "Easy beach routines",
      "Short drives to dining",
    ],
    tips: [
      "Use central access to explore both ends.",
      "Plan beach mornings and simple dinners.",
      "Keep parking stress low.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/holmes-beach/", label: "Holmes Beach guide" }],
    cta: "Stay central and check open dates.",
    group: "Neighborhood spotlights",
    badge: "Central",
  },
];

const stayNearPages: StayPage[] = [
  {
    slug: "near-manatee-public-beach",
    title: "Stay Near Manatee Public Beach | Sandbox Beach House",
    description: "Manatee Public Beach is a popular, easy-access beach with parking and amenities.",
    h1: "Stay Near Manatee Public Beach",
    intro: [
      "Manatee Public Beach is easy and convenient with amenities nearby.",
      "Stay close for simple beach routines.",
    ],
    bestFor: "Best for visitors who want easy parking and amenities.",
    highlights: [
      "Convenient beach access",
      "Amenities nearby",
      "Easy parking windows",
    ],
    tips: [
      "Arrive early for easy setup.",
      "Keep beach gear light.",
      "Plan a casual lunch nearby.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/manatee-public-beach/", label: "Manatee Public Beach" }],
    cta: "Stay nearby and check availability.",
    group: "Stay-near guides",
    badge: "Manatee Beach",
  },
  {
    slug: "near-coquina-beach",
    title: "Stay Near Coquina Beach | Sandbox Beach House",
    description: "Coquina Beach is a scenic, shaded beach with room to spread out.",
    h1: "Stay Near Coquina Beach",
    intro: [
      "Coquina Beach is known for shade and space.",
      "It is a great option for longer beach days.",
    ],
    bestFor: "Best for long beach days and relaxed afternoons.",
    highlights: [
      "Shady spots",
      "Room to spread out",
      "Easy parking windows",
    ],
    tips: [
      "Bring a simple picnic.",
      "Plan a longer beach session.",
      "Arrive early for easy parking.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/coquina-beach/", label: "Coquina Beach" }],
    cta: "Stay nearby and check open dates.",
    group: "Stay-near guides",
    badge: "Coquina",
  },
  {
    slug: "near-bean-point",
    title: "Stay Near Bean Point | Sandbox Beach House",
    description: "Bean Point is a quieter, scenic north-end beach with a calm vibe.",
    h1: "Stay Near Bean Point",
    intro: [
      "Bean Point is peaceful and scenic on the north end.",
      "It is great for quiet mornings and sunset views.",
    ],
    bestFor: "Best for quiet beach time and sunset seekers.",
    highlights: [
      "Quiet beach vibe",
      "Scenic views",
      "North-end calm",
    ],
    tips: [
      "Go early for the calmest feel.",
      "Plan sunset walks.",
      "Keep the schedule light.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bean-point/", label: "Bean Point" }],
    cta: "Stay near Bean Point and check availability.",
    group: "Stay-near guides",
    badge: "Bean Point",
  },
  {
    slug: "near-longboat-key",
    title: "Stay Near Longboat Key | Sandbox Beach House",
    description: "Longboat Key is a quiet, nearby day trip option for a change of scenery.",
    h1: "Stay Near Longboat Key",
    intro: [
      "Longboat Key is a calm day trip with a different beach feel.",
      "It is easy to reach from Holmes Beach.",
    ],
    bestFor: "Best for visitors who want an easy day trip.",
    highlights: [
      "Short drive",
      "Quiet beach feel",
      "Easy return for sunset",
    ],
    tips: [
      "Plan a morning visit.",
      "Keep the rest of the day flexible.",
      "Return for dinner on the island.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/longboat-key/", label: "Longboat Key" }],
    cta: "Plan a stay with day-trip flexibility.",
    group: "Stay-near guides",
    badge: "Longboat Key",
  },
  {
    slug: "near-sarasota-bay",
    title: "Stay Near Sarasota Bay | Sandbox Beach House",
    description: "Sarasota Bay is a nearby day trip for dining, shopping, and waterfront views.",
    h1: "Stay Near Sarasota Bay",
    intro: [
      "Sarasota Bay makes an easy day trip for a change of pace.",
      "Return to Holmes Beach for sunset and quiet evenings.",
    ],
    bestFor: "Best for visitors who want a dining and shopping day trip.",
    highlights: [
      "Easy drive",
      "Dining and shopping options",
      "Back for beach sunsets",
    ],
    tips: [
      "Go early and return mid-afternoon.",
      "Plan one main activity.",
      "Keep island evenings relaxed.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/sarasota-bay/", label: "Sarasota Bay" }],
    cta: "Stay on AMI and day-trip easily.",
    group: "Stay-near guides",
    badge: "Sarasota",
  },
  {
    slug: "near-bridge-street",
    title: "Stay Near Bridge Street Dining | Sandbox Beach House",
    description: "Stay near Bridge Street for walkable dining and easy evenings.",
    h1: "Stay Near Bridge Street Dining",
    intro: [
      "Bridge Street is the dining heart of the south end.",
      "Stay nearby for walkable evenings and sunset strolls.",
    ],
    bestFor: "Best for dining-focused stays.",
    highlights: [
      "Walkable dining",
      "Short drives from Holmes Beach",
      "Evening energy",
    ],
    tips: [
      "Plan one Bridge Street evening.",
      "Arrive early for easy parking.",
      "Balance dining with quiet mornings.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/bridge-street/", label: "Bridge Street" }],
    cta: "Stay near dining and check dates.",
    group: "Stay-near guides",
    badge: "Bridge Street",
  },
];

const logisticsPages: StayPage[] = [
  {
    slug: "walkable-vs-drive",
    title: "Walkable vs Drive-to-Beach Areas on AMI | Sandbox Beach House",
    description: "Compare walkable areas vs drive-to-beach areas on Anna Maria Island.",
    h1: "Walkable vs Drive-to-Beach Areas on AMI",
    intro: [
      "Some areas are walkable, others require short drives.",
      "This guide helps you choose the right rhythm.",
    ],
    bestFor: "Best for travelers deciding between walking and driving.",
    highlights: [
      "Walkable pockets near dining",
      "Short, simple drives to beaches",
      "Trolley options",
    ],
    tips: [
      "Choose walkable if you want fewer car trips.",
      "Choose drive-to-beach if you want more space.",
      "Plan for early beach arrivals either way.",
    ],
    internalLinks: [...baseLinks, { href: "/walkable", label: "Walkability" }],
    cta: "Choose your rhythm and check availability.",
    group: "Logistics and distance",
    badge: "Walk vs drive",
  },
  {
    slug: "minutes-to-beach",
    title: "How Far to the Beach on AMI | Sandbox Beach House",
    description: "A simple guide to typical drive times to popular Anna Maria Island beaches.",
    h1: "How Far to the Beach on AMI",
    intro: [
      "AMI is small, so most drives are short.",
      "Holmes Beach keeps you near several beach options.",
    ],
    bestFor: "Best for travelers who want quick, reliable beach access.",
    highlights: [
      "Short drives to multiple beach spots",
      "Easy access from a central base",
      "Flexible day planning",
    ],
    tips: [
      "Plan early beach mornings.",
      "Keep a light beach kit ready.",
      "Use the pool for midday breaks.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-beaches/", label: "Best beaches" }],
    cta: "Pick a central base and check dates.",
    group: "Logistics and distance",
    badge: "Drive times",
  },
  {
    slug: "minutes-to-dining",
    title: "How Far to Dining on AMI | Sandbox Beach House",
    description: "A quick guide to dining access on Anna Maria Island from different areas.",
    h1: "How Far to Dining on AMI",
    intro: [
      "Dining is concentrated around Bridge Street, Pine Avenue, and Holmes Beach.",
      "A central base keeps dinner options easy.",
    ],
    bestFor: "Best for travelers who want quick access to dining.",
    highlights: [
      "Bridge Street dining",
      "Pine Avenue cafes",
      "Central Holmes Beach access",
    ],
    tips: [
      "Plan one dining hub per day.",
      "Go early for a relaxed meal.",
      "Keep dinners close to your base.",
    ],
    internalLinks: [...baseLinks, { href: "/guide/best-restaurants/", label: "Best restaurants" }],
    cta: "Stay central and check availability.",
    group: "Logistics and distance",
    badge: "Dining",
  },
  {
    slug: "trolley-friendly-areas",
    title: "Trolley-Friendly Areas on AMI | Sandbox Beach House",
    description: "Find areas that make it easy to use the AMI trolley for beach and dining trips.",
    h1: "Trolley-Friendly Areas on AMI",
    intro: [
      "The AMI trolley is a simple way to get around.",
      "Stay near trolley stops for easy beach and dining access.",
    ],
    bestFor: "Best for visitors who want to drive less.",
    highlights: [
      "Trolley access along Gulf Drive",
      "Easy trips to dining hubs",
      "Simple day plans",
    ],
    tips: [
      "Plan around trolley stop locations.",
      "Keep a light day bag ready.",
      "Use the trolley for sunset dinners.",
    ],
    internalLinks: [...baseLinks, { href: "/walkable", label: "Walkability" }],
    cta: "Choose a trolley-friendly base and check dates.",
    group: "Logistics and distance",
    badge: "Trolley",
  },
  {
    slug: "parking-friendly-areas",
    title: "Parking-Friendly Areas on AMI | Sandbox Beach House",
    description: "Tips for choosing areas with easier parking access on Anna Maria Island.",
    h1: "Parking-Friendly Areas on AMI",
    intro: [
      "Parking is easier when you stay central and go early.",
      "Holmes Beach keeps access flexible for multiple beach spots.",
    ],
    bestFor: "Best for visitors who plan to drive to beaches or dining.",
    highlights: [
      "Central access to multiple beaches",
      "Shorter drives",
      "Flexible parking options",
    ],
    tips: [
      "Arrive early at popular beaches.",
      "Keep a list of backup spots.",
      "Use the trolley when possible.",
    ],
    internalLinks: [...baseLinks, { href: "/open-dates", label: "Open dates" }],
    cta: "Pick a central base and check availability.",
    group: "Logistics and distance",
    badge: "Parking",
  },
  {
    slug: "central-base-guide",
    title: "Why a Central Base Matters on AMI | Sandbox Beach House",
    description: "A central base keeps drives short and beach access easy on Anna Maria Island.",
    h1: "Why a Central Base Matters on AMI",
    intro: [
      "A central base keeps drives short and plans flexible.",
      "Holmes Beach is a strong pick for quick access north and south.",
    ],
    bestFor: "Best for visitors who want flexibility across the island.",
    highlights: [
      "Short drives to dining and beaches",
      "Easy day trips",
      "Balanced pace",
    ],
    tips: [
      "Choose a central location for flexibility.",
      "Plan one main outing per day.",
      "Keep the rest of the day beach-first.",
    ],
    internalLinks: [...baseLinks, { href: "/locations/holmes-beach/", label: "Holmes Beach guide" }],
    cta: "Choose a central base and check open dates.",
    group: "Logistics and distance",
    badge: "Central base",
  },
];

export const whereToStayPages: StayPage[] = [
  ...areaPages,
  ...intentPages,
  ...neighborhoodPages,
  ...stayNearPages,
  ...logisticsPages,
];

export function getWhereToStayPage(slug: string) {
  return whereToStayPages.find((page) => page.slug === slug) ?? null;
}

export function getWhereToStaySlugs() {
  return whereToStayPages.map((page) => page.slug);
}

export const whereToStayGroups = whereToStayPages.reduce<Record<string, StayPage[]>>((acc, page) => {
  if (!acc[page.group]) acc[page.group] = [];
  acc[page.group].push(page);
  return acc;
}, {});
