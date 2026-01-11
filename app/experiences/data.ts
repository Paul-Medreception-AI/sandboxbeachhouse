export type ExperienceLink = {
  href: string;
  label: string;
};

export type ExperiencePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  opening: string[];
  brandPositioning: {
    intro: string[];
    bullets: string[];
  };
  localContext: {
    heading: string;
    body: string[];
  };
  internalLinks: ExperienceLink[];
  cta: string;
};

const baseLinks: ExperienceLink[] = [
  { href: "/availability", label: "Check availability" },
  { href: "/location", label: "Walk-to-beach location" },
  { href: "/walkable", label: "Walkability" },
  { href: "/pool/heated-pool", label: "Heated pool" },
  { href: "/locations/bridge-street/", label: "Bridge Street" },
  { href: "/locations/pine-avenue/", label: "Pine Avenue" },
];

export const experiencePages: ExperiencePage[] = [
  {
    slug: "romantic-getaway",
    title: "Romantic Getaway Anna Maria Island | Sandbox Beach House",
    description:
      "Plan a relaxed romantic getaway on Anna Maria Island. Boutique Holmes Beach stay with a heated pool. Small dogs (35 lbs or less) welcome.",
    h1: "Romantic Getaways in Anna Maria Island (Holmes Beach)",
    opening: [
      "The best romantic trips are simple: slow mornings, beach air, and sunsets that feel like a reset.",
      "Anna Maria Island and Bradenton Beach are special for couples because dining and beaches are close, and the pace stays unhurried.",
    ],
    brandPositioning: {
      intro: [
        "Sandbox Beach House is casual romance done right: cozy, charming, and boutique — with a heated pool for private downtime.",
        "Dogs 35 lbs or less are welcome, so couples traveling with a small dog can bring them along.",
      ],
      bullets: [
        "Cozy, boutique feel for couples",
        "Heated pool",
        "Small dogs (35 lbs or less) welcome",
        "Two twin beds available for flexible sleeping",
      ],
    },
    localContext: {
      heading: "Local romance, made easy",
      body: [
        "Do sunset first, then dinner around Bridge Street. For a slower day, wander Pine Avenue for shops and coffee.",
      ],
    },
    internalLinks: [...baseLinks, { href: "/pet-friendly", label: "Pet-friendly guides" }],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "couples-retreat",
    title: "Couples Retreat Anna Maria Island | Sandbox Beach House",
    description:
      "A couples retreat in Holmes Beach with a relaxed boutique vibe, heated pool, and small-dog friendly policy (dogs 35 lbs or less).",
    h1: "Couples Retreats in Holmes Beach (Anna Maria Island)",
    opening: [
      "A couples retreat should feel like an exhale: privacy, warm breezes, and nights that end with a sunset.",
      "AMI makes romance easy — walkable pockets, great dining, and a calm beach-town rhythm.",
    ],
    brandPositioning: {
      intro: [
        "Sandbox Beach House is a boutique home base for couples who want comfort and simplicity — plus a heated pool.",
        "Small dogs (35 lbs or less) are welcome.",
      ],
      bullets: ["Relaxed boutique stay", "Heated pool", "Small dogs welcome", "Great for quiet escapes"],
    },
    localContext: {
      heading: "Date-night ideas on AMI",
      body: ["Bridge Street is a favorite for dinner and an evening stroll. Pine Avenue is perfect for daytime browsing."],
    },
    internalLinks: [...baseLinks, { href: "/photos", label: "Photos" }],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "honeymoon",
    title: "Honeymoon Anna Maria Island | Sandbox Beach House",
    description:
      "A relaxed honeymoon stay on Anna Maria Island: cozy boutique vibe, heated pool, and small dogs (35 lbs or less) welcome in Holmes Beach.",
    h1: "Honeymoon Stays in Anna Maria Island (Relaxed & Cozy)",
    opening: [
      "Honeymoons don’t need a packed itinerary — they need sunshine, beach time, and a place that feels easy.",
      "AMI delivers laid-back romance with sunsets, walkable dining pockets, and a slower pace.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique stay for two, with a heated pool for quiet time.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Boutique, relaxed vibe", "Walkable island pockets", "Small dogs welcome"],
    },
    localContext: {
      heading: "Keep the plan simple",
      body: ["One Pine Avenue afternoon, one Bridge Street evening, and as many sunsets as you can fit in."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "anniversary",
    title: "Anniversary Trip Anna Maria Island | Sandbox Beach House",
    description:
      "Celebrate an anniversary on Anna Maria Island with a boutique Holmes Beach stay, heated pool, and small dogs (35 lbs or less) welcome.",
    h1: "Anniversary Trips in Anna Maria Island (Holmes Beach)",
    opening: [
      "Anniversaries are better when the plan is easy: beach time, a great meal, and a cozy place to come home to.",
      "AMI adds the magic with warm nights and sunset walks.",
    ],
    brandPositioning: {
      intro: ["Boutique, cozy vibe + heated pool for private time.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Cozy boutique stay", "Heated pool", "Walkable dining pockets", "Small dogs welcome"],
    },
    localContext: {
      heading: "Plan one perfect night",
      body: ["Bridge Street is ideal for a celebratory dinner vibe. Balance it with a slow beach morning."],
    },
    internalLinks: [...baseLinks, { href: "/faq", label: "FAQs" }],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "babymoon",
    title: "Babymoon Anna Maria Island | Sandbox Beach House",
    description:
      "A gentle babymoon on Anna Maria Island with a cozy boutique home base in Holmes Beach. Heated pool and small dogs (35 lbs or less) welcome.",
    h1: "Babymoon Stays in Anna Maria Island (Relaxed & Easy)",
    opening: [
      "A babymoon is about rest, fresh air, and feeling taken care of.",
      "Anna Maria Island is naturally calming: warm breezes, simple days, and sunsets that do the planning for you.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique stay with a heated pool for low-key relaxation.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Quiet routines", "Easy island access", "Small dogs welcome"],
    },
    localContext: {
      heading: "Low-stress AMI days",
      body: ["Keep it simple: one easy outing (Pine Avenue), one sunset walk, and lots of quiet pool time."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "quiet-escape",
    title: "Quiet Escape Anna Maria Island | Sandbox Beach House",
    description:
      "A quiet escape in Holmes Beach on Anna Maria Island. Boutique, relaxed, heated pool, and small dogs (35 lbs or less) welcome.",
    h1: "Quiet Escapes in Holmes Beach (Anna Maria Island)",
    opening: [
      "If you want less noise and more beach air, AMI is the right move.",
      "Couples love the calm rhythm: beach mornings, easy dinners, and sunset walks.",
    ],
    brandPositioning: {
      intro: ["Relaxed boutique home base with a heated pool.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Calm boutique vibe", "Heated pool", "Central Holmes Beach base", "Small dogs welcome"],
    },
    localContext: {
      heading: "Quiet, but close",
      body: ["Holmes Beach is a sweet spot: central access while keeping a more residential feel."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "girls-weekend",
    title: "Girls Weekend Anna Maria Island | Sandbox Beach House",
    description:
      "Plan a girls’ weekend on Anna Maria Island: beach mornings, pool afternoons, and walkable dining pockets. Heated pool and small dogs (35 lbs or less) welcome.",
    h1: "Girls’ Weekends in Anna Maria Island (Beach + Pool)",
    opening: [
      "AMI is perfect for a girls’ weekend: beach time, dinner out, and a pool for the in-between moments.",
      "It’s social without being chaotic — and sunsets basically plan the evening.",
    ],
    brandPositioning: {
      intro: ["Boutique home base with a heated pool and relaxed vibe.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Great base for dining", "Relaxed boutique feel", "Small dogs welcome"],
    },
    localContext: {
      heading: "Easy weekend flow",
      body: ["Bridge Street for dinner energy, Pine Avenue for daytime browsing and coffee."],
    },
    internalLinks: [...baseLinks, { href: "/pool", label: "Pool" }],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "guys-fishing-trip",
    title: "Guys Fishing Trip Near AMI | Sandbox Beach House",
    description:
      "Planning a guys’ fishing trip near Anna Maria Island and Bradenton Beach? Stay in Holmes Beach with a relaxed boutique vibe and heated pool.",
    h1: "Guys’ Fishing Trips Near Anna Maria Island (Relaxed Home Base)",
    opening: [
      "A great fishing trip needs a comfortable reset after early mornings and salty air.",
      "AMI and Bradenton Beach make it easy to balance water time with good meals and sunsets.",
    ],
    brandPositioning: {
      intro: ["Relaxed boutique home base with a heated pool.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Easy island base", "Boutique comfort", "Small dogs welcome"],
    },
    localContext: {
      heading: "Local spots",
      body: ["Cortez is a classic for fishing-village vibes and seafood. Bridge Street is an easy dinner option."],
    },
    internalLinks: [...baseLinks, { href: "/locations/cortez-fishing-village/", label: "Cortez Fishing Village" }],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "wellness-retreat",
    title: "Wellness Retreat Anna Maria Island | Sandbox Beach House",
    description:
      "A wellness retreat on Anna Maria Island with beach air, a heated pool, and a relaxed boutique vibe. Small dogs (35 lbs or less) welcome.",
    h1: "Wellness Retreats in Anna Maria Island",
    opening: [
      "Wellness on AMI looks like sunlight, salt air, and space to breathe.",
      "Couples love how the island stays calm and close to the water.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique stay + heated pool for restorative downtime.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Beach walks", "Relaxed rhythm", "Small dogs welcome"],
    },
    localContext: {
      heading: "AMI wellness is outdoors",
      body: ["A morning beach walk, a slow pool afternoon, and a sunset reset is a perfect wellness day."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "yoga-relaxation",
    title: "Yoga & Relaxation Anna Maria Island | Sandbox Beach House",
    description:
      "Yoga and relaxation on Anna Maria Island starts with a calm home base. Boutique Holmes Beach stay with a heated pool. Small dogs (35 lbs or less) welcome.",
    h1: "Yoga & Relaxation Stays in Anna Maria Island",
    opening: [
      "Yoga on vacation is about feeling better — not doing more.",
      "AMI makes relaxation natural: warm breezes, soft sand, and sunset evenings.",
    ],
    brandPositioning: {
      intro: ["Calm boutique stay with a heated pool for gentle recovery.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Quiet nights", "Beach air", "Small dogs welcome"],
    },
    localContext: {
      heading: "Sunrise + sunset anchors",
      body: ["Start with a sunrise walk and end with a sunset stroll — everything else is optional."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "sunset-lovers",
    title: "Sunset Lovers Anna Maria Island | Sandbox Beach House",
    description:
      "For sunset lovers planning Anna Maria Island, stay in Holmes Beach at Sandbox Beach House. Heated pool and small dogs (35 lbs or less) welcome.",
    h1: "Sunset Lovers’ Stays in Anna Maria Island",
    opening: [
      "If sunsets are your love language, AMI will feel like it was made for you.",
      "Golden hour is the main event — and the island makes it easy.",
    ],
    brandPositioning: {
      intro: ["Boutique home base for couples chasing golden hour, with a heated pool for stay-in nights.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Cozy boutique stay", "Easy beach access", "Small dogs welcome"],
    },
    localContext: {
      heading: "Golden hour, then dinner",
      body: ["Do sunset first. Then head to Bridge Street for dinner and a stroll."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "wine-dine-stays",
    title: "Wine & Dine Stays Anna Maria Island | Sandbox Beach House",
    description:
      "Plan a wine-and-dine style weekend on Anna Maria Island with a cozy boutique home base. Heated pool and small dogs (35 lbs or less) welcome.",
    h1: "Wine & Dine Stays in Anna Maria Island",
    opening: [
      "Wine-and-dine weekends are about timing: beach first, dinner later, and a cozy home base in between.",
      "AMI keeps it close — Bridge Street for evening energy, Pine Avenue for daytime browsing.",
    ],
    brandPositioning: {
      intro: ["Relaxed boutique stay with a heated pool for after-dinner downtime.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Dining hubs nearby", "Boutique comfort", "Small dogs welcome"],
    },
    localContext: {
      heading: "Two perfect pockets",
      body: ["Bridge Street for date-night. Pine Avenue for a slower daytime wander."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "spa-like-vacations",
    title: "Spa-Like Vacation Anna Maria Island | Sandbox Beach House",
    description:
      "Create a spa-like vacation on Anna Maria Island with warm breezes and a heated pool. Boutique Holmes Beach stay; small dogs (35 lbs or less) welcome.",
    h1: "Spa-Like Vacations in Anna Maria Island",
    opening: [
      "Spa-like vacations are about how your day feels: quiet mornings, warm water, and no pressure.",
      "AMI is naturally calming — beach air, soft sunsets, and a slower pace.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique base with a heated pool for a private ‘resort’ moment.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Quiet comfort", "Easy island rhythm", "Small dogs welcome"],
    },
    localContext: {
      heading: "Relaxation is the plan",
      body: ["Pick one easy outing (Pine Avenue), then let the rest be pool time and beach walks."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "privacy-seekers",
    title: "Privacy Seekers Anna Maria Island | Sandbox Beach House",
    description:
      "A calm, private-feeling stay for couples on Anna Maria Island. Boutique Holmes Beach vibe, heated pool, and small dogs (35 lbs or less) welcome.",
    h1: "Privacy-Seeking Stays in Holmes Beach (Anna Maria Island)",
    opening: [
      "Privacy means you can relax without feeling surrounded — and still be close to everything.",
      "AMI is perfect for couples who want calm days and easy access to beach and dining.",
    ],
    brandPositioning: {
      intro: ["Boutique, relaxed feel with a heated pool for private downtime.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Boutique vibe", "Heated pool", "Central base", "Small dogs welcome"],
    },
    localContext: {
      heading: "Quiet side of AMI",
      body: ["Holmes Beach balances central access with a more residential feel."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "second-honeymoon",
    title: "Second Honeymoon Anna Maria Island | Sandbox Beach House",
    description:
      "Plan a second honeymoon on Anna Maria Island with a cozy boutique stay, heated pool, and small dogs (35 lbs or less) welcome in Holmes Beach.",
    h1: "Second Honeymoon Stays in Anna Maria Island",
    opening: [
      "Second honeymoons are the best kind: you know what you like, and you want it easy.",
      "AMI delivers relaxed romance with sunsets and simple days.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique base + heated pool for ‘stay in tonight’ vibes.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Boutique comfort", "Sunset walks", "Small dogs welcome"],
    },
    localContext: {
      heading: "Make it special, keep it calm",
      body: ["One great dinner near Bridge Street, one Pine Avenue afternoon, and lots of beach time."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "mini-moon",
    title: "Mini-moon Anna Maria Island | Sandbox Beach House",
    description:
      "A mini-moon weekend on Anna Maria Island: cozy boutique home base, heated pool, and small dogs (35 lbs or less) welcome in Holmes Beach.",
    h1: "Mini-moon Weekends in Anna Maria Island",
    opening: [
      "Mini-moons prove you don’t need two weeks to feel refreshed.",
      "AMI is perfect for short trips: big mood, low stress, and sunset magic.",
    ],
    brandPositioning: {
      intro: ["Boutique comfort designed for quick resets — heated pool included.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Easy dining", "Quick beach access", "Small dogs welcome"],
    },
    localContext: {
      heading: "48 hours done right",
      body: ["Night one: sunset + Bridge Street dinner. Day two: beach morning + Pine Avenue wander."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "proposal-trips",
    title: "Proposal Trip Anna Maria Island | Sandbox Beach House",
    description:
      "Planning a proposal trip to Anna Maria Island? Cozy boutique Holmes Beach stay with a heated pool. Small dogs (35 lbs or less) welcome.",
    h1: "Proposal Trips in Anna Maria Island",
    opening: [
      "The best proposals feel personal — a quiet moment, a sunset, and the right setting.",
      "AMI is naturally romantic with golden-hour beach walks and charming dining pockets.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique base with a heated pool for a private celebration afterward.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Cozy vibe", "Sunset walks", "Small dogs welcome"],
    },
    localContext: {
      heading: "Celebrate after",
      body: ["Sunset first, then Bridge Street for dinner — and back to the pool for a quiet night."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "elopement-stays",
    title: "Elopement Stay Anna Maria Island | Sandbox Beach House",
    description:
      "Eloping on Anna Maria Island? Choose a cozy boutique home base in Holmes Beach with a heated pool. Small dogs (35 lbs or less) welcome.",
    h1: "Elopement Stays in Anna Maria Island",
    opening: [
      "Elopements are about choosing each other — and keeping the day simple.",
      "AMI gives you beach backdrops, sunset light, and a calm pace.",
    ],
    brandPositioning: {
      intro: ["Boutique stay for an easy elopement weekend — heated pool included.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Cozy home base", "Easy dining access", "Small dogs welcome"],
    },
    localContext: {
      heading: "Low-stress celebration",
      body: ["Beach moment, Bridge Street dinner, then a quiet swim and early night."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "birthday-trips",
    title: "Birthday Trip Anna Maria Island | Sandbox Beach House",
    description:
      "Plan a birthday trip to Anna Maria Island with a cozy boutique stay in Holmes Beach. Heated pool and small dogs (35 lbs or less) welcome.",
    h1: "Birthday Trips in Anna Maria Island",
    opening: [
      "Beach birthdays hit different: warm air, sunset light, and a day that doesn’t need a big itinerary.",
      "AMI makes celebrating feel effortless.",
    ],
    brandPositioning: {
      intro: ["Relaxed boutique base with a heated pool for a private celebration moment.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Cozy vibe", "Great dining access", "Small dogs welcome"],
    },
    localContext: {
      heading: "Celebrate with a sunset",
      body: ["Plan a sunset walk, then dinner around Bridge Street."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
  {
    slug: "weekend-escapes",
    title: "Weekend Escape Anna Maria Island | Sandbox Beach House",
    description:
      "A weekend escape to Anna Maria Island in Holmes Beach. Cozy boutique vibe, heated pool, and small dogs (35 lbs or less) welcome.",
    h1: "Weekend Escapes in Anna Maria Island (Holmes Beach)",
    opening: [
      "Weekend escapes should be easy: arrive, drop your bags, and feel the reset.",
      "AMI delivers beach time, walkable pockets, and sunsets that change your mood fast.",
    ],
    brandPositioning: {
      intro: ["Cozy boutique stay designed for quick resets — heated pool included.", "Small dogs (35 lbs or less) welcome."],
      bullets: ["Heated pool", "Easy island base", "Relaxed vibe", "Small dogs welcome"],
    },
    localContext: {
      heading: "Two nights, big impact",
      body: ["One great dinner, one long beach walk, one pool day — you’ll go home feeling different."],
    },
    internalLinks: [...baseLinks],
    cta: "Plan a romantic beach escape — check availability at Sandbox Beach House.",
  },
];

export function getExperiencePage(slug: string) {
  return experiencePages.find((p) => p.slug === slug) ?? null;
}
