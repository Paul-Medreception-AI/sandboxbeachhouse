export type PoolPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  brandPositioning: string[];
  localContext: string[];
  highlights: string[];
  internalLinks: { href: string; label: string }[];
  cta: string;
};

export const POOL_PAGES: PoolPage[] = [
  {
    slug: "heated-pool",
    metaTitle: "Bradenton Beach Rentals with Heated Pool | Sandbox Beach House",
    metaDescription:
      "Relax in a private heated pool steps from the Gulf in Holmes Beach on Anna Maria Island. Family-friendly and dog-friendly (dogs ≤ 35 lbs).",
    h1: "Bradenton Beach Rentals with Heated Pool",
    intro: [
      "A private heated pool is the centerpiece of a Florida beach vacation: swim before breakfast, rinse off after the sand, and unwind at night without leaving your rental.",
      "It’s also a big upgrade over hotel stays—your own space, your own schedule, no crowds.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed, family-friendly, and flexible—built for real beach-house time (not strict resort rules).",
      "You get a heated pool for comfortable swims, plus a fun outdoor-living vibe.",
      "Dogs ≤ 35 lbs are welcome, so your small pup can join the vacation too.",
    ],
    localContext: [
      "Anna Maria Island weather makes pool time easy year-round, especially for breezy evenings.",
      "After a Bradenton Beach day, the pool becomes the perfect reset—cool down, snack, repeat.",
      "Evening swims feel extra special when the sky starts to glow near sunset.",
    ],
    highlights: [
      "Comfortable heated-pool water—even when the breeze kicks up",
      "Private, uncrowded pool time (unlike hotel pools)",
      "Easy indoor/outdoor flow for families",
    ],
    internalLinks: [
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "private-pool",
    metaTitle: "Anna Maria Island Homes with Private Pool | Sandbox Beach House",
    metaDescription:
      "Book a private-pool beach house in Holmes Beach on Anna Maria Island. Family-friendly outdoor living and dogs ≤ 35 lbs welcome.",
    h1: "Anna Maria Island Homes with Private Pool",
    intro: [
      "A private pool gives you resort comfort with beach-town freedom—dip in anytime, dry off in your own yard, and skip the crowds.",
      "It’s the kind of upgrade hotels can’t match because it’s entirely yours.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com keeps the vibe relaxed and family-friendly, with a private pool for easy swim breaks throughout the day.",
      "Dogs ≤ 35 lbs are welcome, making it simple to bring your small dog along for the trip.",
      "Expect a fun, casual outdoor-living setup—ideal for families and repeat visitors.",
    ],
    localContext: [
      "Anna Maria Island has long sunny days that naturally turn into “pool breaks” between beach sessions.",
      "Bradenton Beach afternoons can be hot—your pool is the quickest cool-down.",
      "End the day with a quiet swim after dinner when the island calms down.",
    ],
    highlights: [
      "Private swim time whenever you want it",
      "Great for families who want flexibility",
      "Perfect “in-between” option when you want a break from the beach",
    ],
    internalLinks: [
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "pool-and-beach",
    metaTitle: "Bradenton Beach Rentals: Pool + Beach Combo | Sandbox Beach House",
    metaDescription:
      "Get the best of both worlds: beach mornings and private pool afternoons on Anna Maria Island. Family-friendly and dog-friendly (dogs ≤ 35 lbs).",
    h1: "Bradenton Beach Rentals: Pool + Beach Combo",
    intro: [
      "The best Florida trips don’t make you choose: beach mornings, pool afternoons, and evening swims once the sand’s out of your towels.",
      "A pool + beach combo is a high-impact upgrade over hotel stays—more privacy, more room, and zero crowds.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is made for relaxed outdoor living with a family-friendly feel.",
      "The pool is your “reset button” after the Gulf—especially for kids who want to keep splashing.",
      "Dogs ≤ 35 lbs are welcome, so beach walks can include your small pup too.",
    ],
    localContext: [
      "Anna Maria Island weather makes it easy to alternate between the Gulf and the pool all day long.",
      "Bradenton Beach sunsets are the perfect backdrop for an evening swim.",
      "When the wind picks up at the shore, your pool stays comfortable and calm.",
    ],
    highlights: [
      "Beach time + private pool time in one stay",
      "Less driving and more relaxing",
      "Perfect rhythm: beach → rinse → pool → dinner",
    ],
    internalLinks: [
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "sun-loungers",
    metaTitle: "Anna Maria Island Rentals with Sun Loungers by the Pool | Sandbox",
    metaDescription:
      "Sun loungers + a private pool make your Anna Maria Island stay feel resort-like—without the hotel crowds. Dogs ≤ 35 lbs welcome.",
    h1: "Anna Maria Island Rentals with Sun Loungers by the Pool",
    intro: [
      "Outdoor living is a huge part of a Florida beach vacation—and sun loungers turn your pool deck into a personal resort.",
      "Instead of fighting for chairs at a hotel, you claim your spot once and relax all day.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed, family-friendly, and built for flexible pool days.",
      "Dogs ≤ 35 lbs are welcome—so your pup can hang out nearby while you lounge.",
      "The vibe is simple: swim, sun, snack, repeat.",
    ],
    localContext: [
      "Anna Maria Island mornings are ideal for quieter sun time before the beach crowds.",
      "After a Bradenton Beach afternoon, lounging by the pool is the easiest wind-down.",
      "Golden hour hits differently when you’re poolside.",
    ],
    highlights: [
      "A resort-style setup without shared spaces",
      "Great for post-beach rest",
      "Easy all-day outdoor living",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "outdoor-grill",
    metaTitle: "Bradenton Beach Homes with Pool + Outdoor Grill | Sandbox Beach House",
    metaDescription:
      "Enjoy pool days and easy dinners with an outdoor grill at a relaxed, family-friendly Anna Maria Island rental. Dogs ≤ 35 lbs welcome.",
    h1: "Bradenton Beach Homes with Pool + Outdoor Grill",
    intro: [
      "A pool is the centerpiece—but an outdoor grill turns your backyard into a full vacation hang.",
      "It’s a big upgrade over hotel stays because you can keep meals easy and stay in your own private space.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is designed for relaxed, fun outdoor living with a family-friendly feel.",
      "Grill lunch between swims, do casual dinners after the beach, and keep the schedule flexible.",
      "Dogs ≤ 35 lbs are welcome—so your small pup can join the cookout crew.",
    ],
    localContext: [
      "Anna Maria Island evenings are perfect for outdoor meals.",
      "After Bradenton Beach, rinse off and head straight to the backyard for dinner.",
      "Wrap it up with a calm evening swim.",
    ],
    highlights: [
      "Easy pool-to-grill-to-dinner flow",
      "Private backyard meals (no waiting, no crowds)",
      "Perfect for families who want low-stress evenings",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/photos", label: "Photos" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "covered-patio",
    metaTitle: "Anna Maria Island Rentals with Covered Patio by the Pool | Sandbox",
    metaDescription:
      "Stay comfortable in the Florida sun with a covered patio and private pool on Anna Maria Island. Family-friendly and dogs ≤ 35 lbs welcome.",
    h1: "Anna Maria Island Rentals with Covered Patio by the Pool",
    intro: [
      "A covered patio makes outdoor living work all day—shade during peak sun and a cozy spot when a quick shower passes through.",
      "It’s a major upgrade over hotel balconies because it’s spacious, private, and built for real pool days.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com keeps it relaxed and family-friendly, with a heated pool and easy backyard flow.",
      "Dogs ≤ 35 lbs are welcome, so your small dog can lounge in the shade too.",
      "This is beach-house living—flexible, comfortable, and outdoorsy.",
    ],
    localContext: [
      "Anna Maria Island sun can be strong—shade makes pool days last longer.",
      "After Bradenton Beach, the patio is perfect for snacks and downtime.",
      "Evenings feel breezy and calm under cover.",
    ],
    highlights: [
      "Shade for midday comfort",
      "Great “reset zone” between swims",
      "A rainy-day-friendly outdoor setup",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "outdoor-dining",
    metaTitle: "Bradenton Beach Rentals with Poolside Outdoor Dining | Sandbox",
    metaDescription:
      "Poolside outdoor dining makes your Anna Maria Island vacation feel resort-like—without shared hotel spaces. Dogs ≤ 35 lbs welcome.",
    h1: "Bradenton Beach Rentals with Poolside Outdoor Dining",
    intro: [
      "Poolside outdoor dining is Florida vacation at its best—breakfast in the breeze, lunch between swims, and casual dinners under the evening sky.",
      "Compared to hotels, you get your own table, your own timing, and your own backyard.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed and family-friendly with a heated pool and easygoing outdoor living.",
      "Dogs ≤ 35 lbs are welcome—perfect for guests who want a true beach-house feel.",
      "It’s designed for simple moments: eat together, swim together, relax together.",
    ],
    localContext: [
      "After Bradenton Beach, outdoor meals keep the day smooth—rinse, eat, then swim again.",
      "Anna Maria Island evenings are ideal for dining outside.",
      "Sunsets can turn dinner into a nightly tradition.",
    ],
    highlights: [
      "Family-friendly outdoor meals",
      "Private dining (no restaurant waits)",
      "Perfect for after-beach resets",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "pool-safety-for-kids",
    metaTitle: "Family Rentals with Pool Safety in Mind | Sandbox Beach House",
    metaDescription:
      "Enjoy a private pool on Anna Maria Island with a family-friendly setup and a relaxed environment. Dogs ≤ 35 lbs welcome.",
    h1: "Family Rentals with Safe Pool Setup on Anna Maria Island",
    intro: [
      "A private pool is amazing for families—but safety is what makes it truly relaxing.",
      "Compared to busy hotel pools, a private rental gives you more control, fewer distractions, and a calmer environment.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is family-friendly and flexible, with a relaxed backyard feel.",
      "Schedule swim time around naps, meals, and beach trips—without worrying about pool hours.",
      "Dogs ≤ 35 lbs are welcome, so your family trip stays complete.",
    ],
    localContext: [
      "Anna Maria Island weather means kids will want to swim daily.",
      "After Bradenton Beach, pool time is the easiest way to cool down quickly.",
      "Evening swims can be a calm, end-of-day tradition.",
    ],
    highlights: [
      "More control than a hotel pool",
      "Flexible swim timing for families",
      "Private space for calmer supervision",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "resort-style-backyard",
    metaTitle: "Bradenton Beach Rentals with Resort-Style Backyard | Sandbox",
    metaDescription:
      "Get a resort-style backyard experience with a private heated pool on Anna Maria Island. Relaxed, family-friendly, dogs ≤ 35 lbs welcome.",
    h1: "Bradenton Beach Rentals with Resort-Style Backyard",
    intro: [
      "A resort-style backyard brings the “wow” of a luxury stay—without sharing it with strangers.",
      "You get the pool, the lounging space, and the freedom to make it yours all week.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed and family-friendly, centered around easy outdoor living.",
      "The heated pool anchors the backyard experience—perfect for casual swim days.",
      "Dogs ≤ 35 lbs are welcome, fitting the flexible, fun vibe.",
    ],
    localContext: [
      "Anna Maria Island sunshine makes backyard time a daily highlight.",
      "After Bradenton Beach, a private backyard feels like a true reset.",
      "Evenings are built for pool hangs and sunset skies.",
    ],
    highlights: [
      "Private backyard resort feel",
      "Great for groups and families",
      "Easy after-beach relaxation",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "outdoor-shower",
    metaTitle: "Anna Maria Island Rentals with Outdoor Shower + Pool | Sandbox",
    metaDescription:
      "Rinse off after the beach with an outdoor shower, then jump into your private heated pool. Family-friendly, dogs ≤ 35 lbs welcome.",
    h1: "Anna Maria Island Rentals with Outdoor Shower + Pool",
    intro: [
      "An outdoor shower is one of those beach-house features you’ll use constantly—rinse off sand after the Gulf and head straight back to the pool.",
      "It’s a simple upgrade that makes a private rental feel more resort-like than any hotel.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed and family-friendly with a heated pool and easy outdoor flow.",
      "Dogs ≤ 35 lbs are welcome—so quick rinse-offs after beach walks are simple.",
      "The goal is effortless beach living: beach → rinse → pool.",
    ],
    localContext: [
      "Anna Maria Island beach days often end with sandy feet—an outdoor shower makes cleanup fast.",
      "After Bradenton Beach, rinse and reset without bringing the beach indoors.",
      "Evening showers + swims keep the routine easy.",
    ],
    highlights: [
      "Cleaner, easier post-beach routine",
      "Less sand indoors",
      "Perfect pairing with a private pool",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/location", label: "Location" },
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "evening-pool-lighting",
    metaTitle: "Bradenton Beach Rentals with Evening Pool Lighting | Sandbox",
    metaDescription:
      "Enjoy calm night swims with evening pool lighting at a private Anna Maria Island rental. Family-friendly, dogs ≤ 35 lbs welcome.",
    h1: "Bradenton Beach Rentals with Evening Pool Lighting",
    intro: [
      "Evening pool lighting extends the best part of the day.",
      "Instead of heading inside like you might at a hotel, your backyard stays inviting for a calm night swim.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is built for relaxed outdoor living with a family-friendly feel.",
      "The heated pool makes evening dips comfortable.",
      "Dogs ≤ 35 lbs are welcome—perfect for quiet patio time after dinner.",
    ],
    localContext: [
      "Anna Maria Island nights are often warm and breezy.",
      "Bradenton Beach sunsets are a natural lead-in to night swims.",
      "Evening lighting keeps pool time feeling safe and comfortable.",
    ],
    highlights: [
      "More usable pool time after dinner",
      "A cozy night-resort vibe",
      "Ideal for quieter end-of-day routines",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/photos", label: "Photos" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "tropical-landscaping",
    metaTitle: "Anna Maria Island Rentals with Tropical Pool Landscaping | Sandbox",
    metaDescription:
      "Enjoy a tropical, private pool setting on Anna Maria Island. Relaxed, family-friendly outdoor living with dogs ≤ 35 lbs welcome.",
    h1: "Anna Maria Island Rentals with Tropical Pool Landscaping",
    intro: [
      "Tropical landscaping makes your pool area feel like a private resort—palms, greenery, and that “we’re really in Florida” vibe.",
      "Hotels can’t match it because your setting is quiet and personal.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com pairs a heated pool with relaxed, family-friendly outdoor living.",
      "Dogs ≤ 35 lbs are welcome—perfect for mornings outside with your pup nearby.",
      "It’s designed to feel like a true escape while staying casual and fun.",
    ],
    localContext: [
      "Anna Maria Island sunshine and greenery are part of what makes the island feel special.",
      "After Bradenton Beach, tropical landscaping adds to the “vacation” feeling back at the house.",
      "Evenings outside feel calm and secluded.",
    ],
    highlights: [
      "A more “resort-like” pool atmosphere",
      "Great for relaxing photos and quiet mornings",
      "A true Florida backyard feel",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "privacy-fencing",
    metaTitle: "Bradenton Beach Rentals with Private Fenced Pool Area | Sandbox",
    metaDescription:
      "Enjoy a more private pool experience on Anna Maria Island with a fenced outdoor space. Family-friendly and dogs ≤ 35 lbs welcome.",
    h1: "Bradenton Beach Rentals with Private Fenced Pool Area",
    intro: [
      "Privacy fencing turns a nice pool into a true retreat.",
      "You get quieter swim time and a backyard that feels personal—something hotels can’t replicate.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed and family-friendly with a heated pool as your backyard centerpiece.",
      "Dogs ≤ 35 lbs are welcome—so your small pup can enjoy the outdoor space too.",
      "It’s a flexible, easygoing stay where you can truly unwind.",
    ],
    localContext: [
      "Anna Maria Island invites you outside all day—privacy makes that time more comfortable.",
      "After Bradenton Beach, a private yard is the perfect decompression zone.",
      "Evenings feel calm and tucked away.",
    ],
    highlights: [
      "More privacy than typical hotel setups",
      "Great for families who want a contained outdoor area",
      "A quieter pool atmosphere",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "quiet-pool",
    metaTitle: "Quiet Pool Rentals on Anna Maria Island | Sandbox Beach House",
    metaDescription:
      "Find a quiet, private pool experience on Anna Maria Island—no crowds, no shared spaces. Family-friendly and dogs ≤ 35 lbs welcome.",
    h1: "Quiet Pool Rentals on Anna Maria Island",
    intro: [
      "A quiet private pool is the antidote to crowded hotel decks—no competing music, no saving chairs, no interruptions.",
      "It’s just your space to swim, float, read, and reset.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is designed for relaxed, family-friendly vacations with easy outdoor living.",
      "Dogs ≤ 35 lbs are welcome, fitting the calm, comfortable beach-house vibe.",
      "The heated pool makes quiet swims comfortable throughout the year.",
    ],
    localContext: [
      "Anna Maria Island mornings are naturally calm—perfect for quiet pool time.",
      "After Bradenton Beach, a quiet pool is where the whole family recharges.",
      "Evenings are great for a peaceful final swim.",
    ],
    highlights: [
      "A calmer alternative to busy hotel pools",
      "Perfect for early swimmers and readers",
      "Private space to recharge between beach outings",
    ],
    internalLinks: [
      { href: "/location", label: "Location" },
      { href: "/availability", label: "Availability" },
      { href: "/photos", label: "Photos" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "morning-swims",
    metaTitle: "Morning Swim Rentals with Heated Pool in Bradenton Beach | Sandbox",
    metaDescription:
      "Start your day with a quiet morning swim in a heated private pool on Anna Maria Island. Family-friendly and dogs ≤ 35 lbs welcome.",
    h1: "Morning Swim Rentals with Heated Pool in Bradenton Beach",
    intro: [
      "Morning swims set the tone: quiet water, warm air, and a calm start before the beach crowds arrive.",
      "It’s a different kind of luxury than a hotel—because you’re not coordinating around anyone else’s schedule.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com keeps it simple and fun: family-friendly, relaxed outdoor living, and a heated pool.",
      "Dogs ≤ 35 lbs are welcome—so your morning routine can include a quick backyard stroll.",
      "This is the kind of vacation that feels easy from the first swim.",
    ],
    localContext: [
      "Anna Maria Island mornings are cooler and calmer—ideal for a first dip.",
      "Bradenton Beach is best enjoyed when you’ve already had a quiet start.",
      "Morning pool time is perfect for kids who wake up ready to splash.",
    ],
    highlights: [
      "A calmer start than hotel mornings",
      "Great for families and early risers",
      "Heated water for comfortable dips",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/photos", label: "Photos" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "sunset-swims",
    metaTitle: "Sunset Swim Rentals on Anna Maria Island | Sandbox Beach House",
    metaDescription:
      "End the day with a sunset swim in a private heated pool on Anna Maria Island. Family-friendly outdoor living with dogs ≤ 35 lbs welcome.",
    h1: "Sunset Swim Rentals on Anna Maria Island",
    intro: [
      "Sunset swims are pure Florida: the air softens, the sky turns orange, and the pool feels like your own private resort.",
      "Hotels can’t compete with that level of privacy and comfort.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com brings a relaxed, family-friendly vibe with a heated pool for evening dips.",
      "Dogs ≤ 35 lbs are welcome—perfect for a calm backyard hang as the day winds down.",
      "It’s simple: dinner, sunset, swim.",
    ],
    localContext: [
      "Anna Maria Island sunsets are the daily headline.",
      "After Bradenton Beach, a sunset swim is the best way to end the day.",
      "Evenings are often warm enough for easy pool time.",
    ],
    highlights: [
      "A classic Florida evening ritual",
      "Private, peaceful pool atmosphere",
      "Perfect post-dinner wind-down",
    ],
    internalLinks: [
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "clean-sanitized-pool",
    metaTitle: "Clean & Sanitized Pool Rentals in Bradenton Beach | Sandbox",
    metaDescription:
      "Enjoy a clean, private heated pool at a family-friendly Anna Maria Island rental. Relaxed outdoor living and dogs ≤ 35 lbs welcome.",
    h1: "Clean & Sanitized Pool Rentals in Bradenton Beach",
    intro: [
      "A clean, well-maintained pool is the foundation of a great outdoor-living vacation.",
      "It’s one of the biggest reasons private rentals beat hotels: fewer unknowns and a space that feels truly yours.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is family-friendly and relaxed, anchored by a heated pool and easy backyard living.",
      "Dogs ≤ 35 lbs are welcome, matching the flexible beach-house vibe.",
      "The goal is simple: spend more time enjoying the water and less time worrying about logistics.",
    ],
    localContext: [
      "Anna Maria Island sunshine makes pool time a daily habit.",
      "After Bradenton Beach, a clean pool is the perfect reset.",
      "Evenings are great for a final, calm dip.",
    ],
    highlights: [
      "Peace of mind for families",
      "A more comfortable alternative to crowded hotel pools",
      "Great for daily swims",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/faq", label: "FAQ" },
      { href: "/photos", label: "Photos" },
      { href: "/location", label: "Location" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
  {
    slug: "rainy-day-pool-fun",
    metaTitle: "Rainy Day Pool Fun Rentals on Anna Maria Island | Sandbox",
    metaDescription:
      "Florida showers happen—stay flexible with a heated private pool and comfortable outdoor living on Anna Maria Island. Dogs ≤ 35 lbs welcome.",
    h1: "Rainy Day Pool Fun Rentals on Anna Maria Island",
    intro: [
      "Florida weather can sprinkle and pass quickly—so having a pool and a comfortable outdoor setup keeps vacation fun flexible.",
      "Hotels can feel cramped when weather shifts, but a private rental keeps your day simple.",
    ],
    brandPositioning: [
      "SandboxBeachHouse.com is relaxed and family-friendly, with a heated pool that makes short swim windows comfortable.",
      "Dogs ≤ 35 lbs are welcome, so rainy-day routines stay easy.",
      "You can pivot between beach time, pool time, and downtime—without leaving home base.",
    ],
    localContext: [
      "Anna Maria Island showers often clear quickly.",
      "When the beach gets windy or gray, the pool can still be the highlight.",
      "A warm swim between rain bursts is peak Florida vacation energy.",
    ],
    highlights: [
      "More flexibility than a hotel stay",
      "A comfortable backup plan when weather shifts",
      "Still feels like a resort day—just private",
    ],
    internalLinks: [
      { href: "/availability", label: "Availability" },
      { href: "/photos", label: "Photos" },
      { href: "/location", label: "Location" },
      { href: "/faq", label: "FAQ" },
    ],
    cta: "Relax in your own heated pool — check availability at Sandbox Beach House.",
  },
];
