export type PetFriendlyLink = {
  href: string;
  label: string;
};

export type PetFriendlyPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  painPoint: string[];
  howWeSolve: {
    intro: string[];
    bullets: string[];
  };
  localContext: {
    heading: string;
    body: string[];
  };
  internalLinks: PetFriendlyLink[];
  cta: string;
};

export const petFriendlyPages: PetFriendlyPage[] = [
  {
    slug: "dogs-35-lbs-or-less",
    title: "Dogs 35 lbs or less | Sandbox Beach House",
    description:
      "Traveling with a small dog? Sandbox Beach House welcomes dogs 35 lbs or less in Holmes Beach / Anna Maria Island with a clean, easy beach-house setup.",
    h1: "Dogs 35 lbs or less — Pet-Friendly Beach House in Holmes Beach",
    painPoint: [
      "Finding a dog-friendly beach rental shouldn’t feel like a scavenger hunt. You filter for pets, get excited, and then the fine print shows up: weight limits buried in messages, surprise fees, or ‘pets considered’ that turns into a maybe.",
      "If you’re traveling with a small dog, you want clarity upfront so you can plan the fun parts of Anna Maria Island — not negotiate your way into a booking.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House keeps it simple: small dogs are welcome, with a clear, consistent policy that helps protect the home and keeps it comfortable for every guest.",
      ],
      bullets: [
        "Dogs 35 lbs or less are welcome",
        "Clean, well-managed beach house (no mystery rules after you book)",
        "Easy island routines: quick walks, breezy evenings, and a calm home base",
      ],
    },
    localContext: {
      heading: "Small-dog trips are a perfect fit for Anna Maria Island",
      body: [
        "Holmes Beach has that easy island feel: relaxed streets, quick fresh-air breaks, and walkable pockets that make daily dog routines feel effortless.",
        "You’re close to everything you came for — the Gulf, sunsets, and the slower pace — with a stay that actually welcomes your small dog.",
      ],
    },
    internalLinks: [
      { href: "/availability", label: "Check availability" },
      { href: "/location", label: "See the location" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Pet rules & cleaning policy" },
      { href: "/pet-friendly/why-small-dogs-only", label: "Why small dogs only" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "dog-friendly-beach-house",
    title: "Dog-Friendly Beach House | Sandbox Beach House",
    description:
      "A dog-friendly beach house in Holmes Beach / Anna Maria Island that actually makes travel easy. Small dogs (35 lbs or less) welcome.",
    h1: "Dog-Friendly Beach House in Holmes Beach (Small Dogs Welcome)",
    painPoint: [
      "‘Pet-friendly’ can mean almost anything. Some rentals require approval after you book, others pile on confusing restrictions, and many don’t feel clean or comfortable for travelers who care about standards.",
      "If you’re trying to avoid the Airbnb/VRBO filter roulette, you deserve a clear yes — and a beach house that feels like a vacation, not a compromise.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is a boutique stay built for real beach trips with your small dog — simple rules, a clean setup, and an island location that keeps things easy.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Clean, well-managed home that’s ready when you arrive",
        "Walkable island vibe for low-stress dog routines",
      ],
    },
    localContext: {
      heading: "Holmes Beach is made for relaxed dog travel",
      body: [
        "Anna Maria Island is at its best when you slow down — morning coffee, quick walks, beach time, and sunset strolls.",
        "A comfortable home base in Holmes Beach makes it easy to enjoy the island without driving everywhere or worrying about where your dog fits in.",
      ],
    },
    internalLinks: [
      { href: "/photos", label: "View photos" },
      { href: "/availability", label: "Check availability" },
      { href: "/pet-friendly/better-than-airbnb-pet-filter", label: "Better than Airbnb’s pet filter" },
      { href: "/pet-friendly/near-dog-beach", label: "Near dog beach" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "near-dog-beach",
    title: "Near Dog Beach | Sandbox Beach House",
    description:
      "Stay near dog-friendly beach options around Anna Maria Island. Sandbox Beach House welcomes small dogs (35 lbs or less) in Holmes Beach.",
    h1: "Near a Dog Beach — Pet-Friendly Home Base on Anna Maria Island",
    painPoint: [
      "You book a ‘dog-friendly’ rental, arrive, and then realize there’s nowhere nearby for a simple dog outing. Suddenly you’re driving for every potty break, every walk, every attempt to find a pet-friendly spot.",
      "Dog travel should feel simple — especially on an island vacation.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House gives you a calm, central home base for exploring dog-friendly spots around Bradenton Beach and Anna Maria Island — with a clear small-dog policy you can trust.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Easy island routines from a Holmes Beach location",
        "Clear expectations so you can travel with confidence",
      ],
    },
    localContext: {
      heading: "Plan dog outings the stress-free way",
      body: [
        "Rules and access points can change, so the best approach is: stay central, keep a leash handy, and enjoy the island’s walkable vibe.",
        "With Sandbox Beach House as your base, you can build a routine that works — morning walk, beach day, sunset stroll — without turning vacation into logistics.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/bradenton-dog-beaches", label: "Bradenton dog beaches" },
      { href: "/pet-friendly/anna-maria-island-dog-rules", label: "Anna Maria Island dog rules" },
      { href: "/location", label: "Location" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "fenced-yard",
    title: "Fenced Yard | Sandbox Beach House",
    description:
      "Looking for a fenced-yard feel for your small dog on Anna Maria Island? Sandbox Beach House welcomes dogs 35 lbs or less in a relaxed beach-house setting.",
    h1: "Fenced Yard Feel — Easier Dog Breaks on Anna Maria Island",
    painPoint: [
      "A lot of ‘pet-friendly’ rentals are technically pet-friendly, but the outdoor setup isn’t. You end up doing awkward walks for every quick break and stressing about traffic, neighbors, or where your dog can safely sniff around.",
      "If you’re traveling with a small dog, you want a place that supports simple routines.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is designed to make the everyday parts of dog travel easier — quick breaks, calm resets, and a home that feels comfortable for you and your pup.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Outdoor-friendly beach-house vibe for quick breaks",
        "Clean, managed stay that keeps your trip low-stress",
      ],
    },
    localContext: {
      heading: "Island living is outdoor living",
      body: [
        "Holmes Beach is about fresh air and simple routines. When your home base supports quick dog breaks, the whole trip feels smoother.",
        "That means more beach time, more sunset walks, and less time worrying about where your dog can go next.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/short-walks-to-grass", label: "Short walks to grass" },
      { href: "/pet-friendly/outdoor-rinse-station", label: "Outdoor rinse station" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "no-carpet",
    title: "No Carpet | Sandbox Beach House",
    description:
      "No-carpet, easy-clean beach-house feel for dog-friendly stays on Anna Maria Island. Small dogs 35 lbs or less welcome.",
    h1: "No Carpet — Cleaner, Better for Dog-Friendly Beach Trips",
    painPoint: [
      "Pet-friendly rentals can be a gamble. The worst surprise is walking into a place that looks fine in photos but feels… lived-in. Carpets trap odors, sand, and old stains — especially in a humid beach climate.",
      "If you’re traveling with your dog, you want a stay that feels fresh from the moment you open the door.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House keeps the vibe clean and easy with a no-carpet approach that makes everyday vacation life simpler — for pet owners and non-pet owners alike.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "No-carpet feel for a cleaner, fresher stay",
        "Easy routines after beach walks and sandy paws",
      ],
    },
    localContext: {
      heading: "Beach + dogs + sand = you need an easy-clean setup",
      body: [
        "Anna Maria Island is meant to be enjoyed outside — which means sand happens. A home that’s easier to keep tidy helps you relax and enjoy the trip.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/easy-cleanup", label: "Easy cleanup" },
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Pet rules" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "easy-cleanup",
    title: "Easy Cleanup | Sandbox Beach House",
    description:
      "An easy-cleanup, dog-friendly beach-house stay in Holmes Beach / Anna Maria Island. Small dogs 35 lbs or less welcome.",
    h1: "Easy Cleanup — A Beach House That Works for Small Dog Travel",
    painPoint: [
      "Beach vacations are messy in the best way. Add a dog, and suddenly you’re juggling sand, towels, treats, and the fear of being charged for normal vacation life.",
      "Many rentals claim to be pet-friendly but make you feel like you’re one paw print away from a problem.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is set up for real guests — including small-dog travelers — with an easygoing approach that keeps the stay comfortable and manageable.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "No-carpet, beach-friendly feel that’s easier day-to-day",
        "Clear expectations so you’re not guessing what’s allowed",
      ],
    },
    localContext: {
      heading: "Anna Maria Island vacations should feel light",
      body: [
        "You’re in and out all day: beach, lunch, pool, sunset walks. The easier it is to rinse off and reset, the more relaxing the whole trip becomes.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/no-carpet", label: "No carpet" },
      { href: "/pet-friendly/outdoor-rinse-station", label: "Outdoor rinse station" },
      { href: "/availability", label: "Check availability" },
      { href: "/location", label: "Location" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "outdoor-rinse-station",
    title: "Outdoor Rinse Station | Sandbox Beach House",
    description:
      "Sandy paws? Sandbox Beach House supports easy beach routines with an outdoor rinse option. Small dogs 35 lbs or less welcome.",
    h1: "Outdoor Rinse Station — For Sandy Paws and Beach Days",
    painPoint: [
      "If you’ve ever traveled with a dog to the beach, you know the moment: sandy paws and a clean rental. Some places say ‘pet-friendly’ but give you no easy way to rinse off after a walk.",
      "That’s when a relaxing vacation turns into a cleanup scramble.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House supports the real beach routine — including sandy paws — so you can rinse off, reset, and get back to enjoying the island.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Outdoor rinse option to keep the beach mess outside",
        "Easy, low-stress routines from a Holmes Beach home base",
      ],
    },
    localContext: {
      heading: "More sunset walks, less worry",
      body: [
        "When it’s easy to rinse off, you’re more likely to do the spontaneous stuff: quick beach strolls, evening walks, and ‘one more’ trip outside.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/easy-cleanup", label: "Easy cleanup" },
      { href: "/pet-friendly/walk-to-beach-with-dog", label: "Walk to the beach with your dog" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning policy" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "walk-to-beach-with-dog",
    title: "Walk to Beach With Dog | Sandbox Beach House",
    description:
      "A walkable beach-house stay in Holmes Beach / Anna Maria Island for small-dog travel. Dogs 35 lbs or less welcome.",
    h1: "Walk to the Beach With Your Dog (Small Dogs Welcome)",
    painPoint: [
      "Dog-friendly rentals often fail in one big way: you still have to drive everywhere. Parking, heat, and timing can turn every outing into a mini mission.",
      "On vacation, you want the easy version — grab the leash, step outside, and enjoy the island.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is a simple, walkable home base for the Anna Maria Island lifestyle — perfect for guests traveling with small dogs.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Walkable island rhythm from Holmes Beach",
        "Calm, clean home base for low-stress dog routines",
      ],
    },
    localContext: {
      heading: "Holmes Beach is built for strolling",
      body: [
        "Even if your dog isn’t on the sand all day, the island is full of fresh air moments: morning walks, breezy evenings, and quick breaks between beach time and dinner.",
      ],
    },
    internalLinks: [
      { href: "/location", label: "Location" },
      { href: "/pet-friendly/quiet-neighborhood", label: "Quiet neighborhood" },
      { href: "/pet-friendly/near-dog-beach", label: "Near dog beach" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "quiet-neighborhood",
    title: "Quiet Neighborhood | Sandbox Beach House",
    description:
      "A quiet, pet-friendly beach-house stay in Holmes Beach / Anna Maria Island. Small dogs 35 lbs or less welcome.",
    h1: "Quiet Neighborhood — Better for Dogs (and Better Sleep)",
    painPoint: [
      "Noise can ruin a pet-friendly vacation fast. Busy roads and late-night foot traffic can make dogs anxious and make humans tired.",
      "If your dog is used to calmer routines, choosing the right neighborhood matters as much as choosing the right house.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House offers a calmer, boutique stay that supports rest, routine, and a more relaxed island pace.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "A peaceful home base that feels managed and cared for",
        "Easy routines: quick walks, simple breaks, and quiet evenings",
      ],
    },
    localContext: {
      heading: "Enjoy the best of Anna Maria Island — then come home to calm",
      body: [
        "Anna Maria Island has lively pockets and quieter pockets. Staying in a calmer area lets you enjoy the restaurants and beach time, then return to a more peaceful night.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/family-dog-friendly", label: "Family + dog friendly" },
      { href: "/pet-friendly/short-walks-to-grass", label: "Short walks to grass" },
      { href: "/availability", label: "Check availability" },
      { href: "/photos", label: "Photos" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "family-dog-friendly",
    title: "Family + Dog Friendly | Sandbox Beach House",
    description:
      "A family-friendly beach house that also welcomes small dogs (35 lbs or less) in Holmes Beach / Anna Maria Island.",
    h1: "Family + Dog Friendly Beach House (Small Dogs Welcome)",
    painPoint: [
      "Families traveling with pets get hit twice: limited inventory and confusing rules. You find a ‘pet-friendly’ listing, then discover it’s cramped, restrictive, or stressful for everyday family routines.",
      "You want one place that works for everyone — kids, adults, and your small dog.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is a comfortable, real-life beach stay — designed for simple routines, easy days, and a clean setup that feels welcoming.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Comfortable layout for real family routines",
        "Calm island location that makes days feel easy",
      ],
    },
    localContext: {
      heading: "Anna Maria Island is easy for families",
      body: [
        "Short drives, walkable areas, and a slower pace make the island a natural fit for family vacations. Bringing your small dog along shouldn’t make it complicated.",
      ],
    },
    internalLinks: [
      { href: "/photos", label: "View photos" },
      { href: "/location", label: "Location" },
      { href: "/pet-friendly/quiet-neighborhood", label: "Quiet neighborhood" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "snowbird-pet-stays",
    title: "Snowbird Pet Stays | Sandbox Beach House",
    description:
      "Snowbirding with a small dog? Sandbox Beach House welcomes dogs 35 lbs or less in Holmes Beach / Anna Maria Island for relaxed, longer pet-friendly stays.",
    h1: "Snowbird Pet Stays — Bring Your Small Dog to Anna Maria Island",
    painPoint: [
      "Snowbird planning is different: longer stays, more routine, and more need for a comfortable home. Unfortunately, many ‘pet-friendly’ rentals aren’t consistent — unclear rules, awkward limitations, and a vibe that doesn’t feel like a real home base.",
      "When you’re staying longer, you want clarity and comfort.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is a boutique option for longer stays with small dogs — clean, clear, and designed for easy day-to-day living.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Clean, managed home base for a smoother long stay",
        "Island routines that feel good: walks, breezes, and a slower pace",
      ],
    },
    localContext: {
      heading: "Why snowbirds love Holmes Beach",
      body: [
        "Anna Maria Island is known for its weather and easy lifestyle. With a small dog, it’s even better when your stay supports daily routines without extra stress.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning policy" },
      { href: "/pet-friendly/short-walks-to-grass", label: "Short walks to grass" },
      { href: "/availability", label: "Check availability" },
      { href: "/location", label: "Location" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "small-dog-travel",
    title: "Small Dog Travel | Sandbox Beach House",
    description:
      "Small-dog travel made easy in Holmes Beach / Anna Maria Island. Sandbox Beach House welcomes dogs 35 lbs or less with clear rules and a clean, walkable setup.",
    h1: "Small Dog Travel to Anna Maria Island (Beach Trip Made Easy)",
    painPoint: [
      "Small dogs are great travel buddies — but rentals can make it weird. Even after filtering for pets, you still don’t know if a host truly welcomes dogs or if you’ll get hit with extra restrictions after booking.",
      "You want a beach trip where your dog feels included and you feel confident.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is built for straightforward small-dog travel: clear policies, a clean setup, and an island vibe that fits daily routines.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Clear expectations (no back-and-forth)",
        "Great home base for walks and easy island days",
      ],
    },
    localContext: {
      heading: "Anna Maria Island is a small-dog dream",
      body: [
        "Breezy evenings, relaxed streets, and a slower pace make this an easy destination for small dogs — and their humans.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/why-small-dogs-only", label: "Why small dogs only" },
      { href: "/pet-friendly/pet-welcome-guide", label: "Pet welcome guide" },
      { href: "/location", label: "Location" },
      { href: "/availability", label: "Availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "short-walks-to-grass",
    title: "Short Walks to Grass | Sandbox Beach House",
    description:
      "Quick potty breaks matter. Sandbox Beach House is a pet-friendly option in Holmes Beach / Anna Maria Island for small dogs 35 lbs or less.",
    h1: "Short Walks to Grass — Easy Potty Breaks for Small Dogs",
    painPoint: [
      "One of the most annoying pet-travel surprises is realizing the ‘pet-friendly’ rental has nowhere convenient for quick breaks. You’re wandering around in the heat (or at night) searching for a decent patch of grass.",
      "On vacation, those small hassles add up.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House supports an easier routine for small dogs — so quick breaks feel quick, and your vacation stays relaxing.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Island neighborhood feel for simple, low-stress routines",
        "A calm home base for better sleep and easier days",
      ],
    },
    localContext: {
      heading: "Simple routines make better vacations",
      body: [
        "Anna Maria Island is all about ease. When your dog’s routine is simple, your whole trip feels smoother — especially early mornings and post-beach evenings.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/quiet-neighborhood", label: "Quiet neighborhood" },
      { href: "/pet-friendly/no-stairs-for-dogs", label: "No stairs for dogs" },
      { href: "/availability", label: "Check availability" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "no-stairs-for-dogs",
    title: "No Stairs for Dogs | Sandbox Beach House",
    description:
      "Easier travel for small dogs: Sandbox Beach House offers a simple vacation flow in Holmes Beach / Anna Maria Island and welcomes dogs 35 lbs or less.",
    h1: "No Stairs for Dogs — Easier on Small Legs (and Older Dogs)",
    painPoint: [
      "Many beach rentals hide stairs in the fine print. If you’re traveling with a small dog — or an older dog — constant stairs can turn simple routines into a chore.",
      "A vacation should feel easy, not physically exhausting.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House focuses on an easier vacation flow, so your dog’s routine stays comfortable and your days stay relaxed.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Simple in-and-out routines for walks and breaks",
        "Clean, calm home base that feels truly vacation-ready",
      ],
    },
    localContext: {
      heading: "Island days are active — make the home base easy",
      body: [
        "On Anna Maria Island you’re always moving: beach, meals, sunset walks. A stay that’s physically easy helps the whole trip feel lighter.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/short-walks-to-grass", label: "Short walks to grass" },
      { href: "/pet-friendly/family-dog-friendly", label: "Family + dog friendly" },
      { href: "/photos", label: "Photos" },
      { href: "/availability", label: "Availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "rules-cleaning-policy",
    title: "Pet Rules & Cleaning Policy | Sandbox Beach House",
    description:
      "Clear, simple pet rules for Sandbox Beach House in Holmes Beach / Anna Maria Island. Small dogs (35 lbs or less) welcome.",
    h1: "Pet Rules & Cleaning Policy (Simple, Clear, Small-Dog Friendly)",
    painPoint: [
      "Pet rules shouldn’t feel like legal paperwork. Most guests just want to know: Is my dog welcome? What do I need to do? Are there surprise charges?",
      "Airbnb and VRBO listings often bury restrictions or change expectations after you book. We’d rather be clear upfront.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House welcomes dogs 35 lbs or less and keeps expectations simple so you can relax.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Please keep your dog off beds and help us keep the home fresh",
        "Don’t leave your dog unattended for long stretches",
        "A quick rinse for sandy paws is always appreciated",
      ],
    },
    localContext: {
      heading: "Beach trips are sandy — clear expectations help",
      body: [
        "Anna Maria Island is sunny, breezy, and sandy. Clear pet guidelines keep the stay comfortable for you and the next guest — without turning your trip into a list of worries.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/pet-welcome-guide", label: "Pet welcome guide" },
      { href: "/pet-friendly/easy-cleanup", label: "Easy cleanup" },
      { href: "/availability", label: "Check availability" },
      { href: "/location", label: "Location" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "pet-welcome-guide",
    title: "Pet Welcome Guide | Sandbox Beach House",
    description:
      "A simple pet welcome guide for Sandbox Beach House in Holmes Beach / Anna Maria Island. Small dogs 35 lbs or less welcome.",
    h1: "Pet Welcome Guide — Sandbox Beach House (Small Dogs ≤35 lbs)",
    painPoint: [
      "You shouldn’t have to guess how to make a beach trip work with your dog. Most rentals don’t tell you what’s nearby, what’s allowed, or how to settle in quickly.",
      "A good welcome guide makes everything feel easier from day one.",
    ],
    howWeSolve: {
      intro: [
        "Here’s the warm, simple version for Sandbox Beach House — built around small-dog travel and easy island routines.",
      ],
      bullets: [
        "Bring a leash, waste bags, and a towel for sandy paws",
        "Pack your dog’s bed/blanket to create an instant ‘home base’",
        "Plan for short morning walks and breezy evening strolls",
        "Use the outdoor rinse option when paws get sandy",
      ],
    },
    localContext: {
      heading: "Holmes Beach makes dog routines feel natural",
      body: [
        "Anna Maria Island is full of fresh-air moments. Keep it simple: walk, relax, repeat.",
        "When your dog settles in quickly, your whole vacation feels better.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning policy" },
      { href: "/pet-friendly/bradenton-dog-beaches", label: "Bradenton dog beaches" },
      { href: "/pet-friendly/anna-maria-island-dog-rules", label: "Anna Maria Island dog rules" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "why-small-dogs-only",
    title: "Why Small Dogs Only | Sandbox Beach House",
    description:
      "Why Sandbox Beach House welcomes dogs 35 lbs or less in Holmes Beach / Anna Maria Island. Clear, kind, and designed for a clean stay.",
    h1: "Why Small Dogs Only (≤35 lbs) — A Better Stay for Everyone",
    painPoint: [
      "Some pet-friendly rentals don’t explain their limits, which can make guests feel judged or confused. We’d rather be transparent and kind.",
      "A clear policy helps you decide quickly — and it helps us keep the experience consistently clean and comfortable.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House welcomes dogs 35 lbs or less because it’s the best fit for the home — and it lets us keep standards high without being complicated.",
      ],
      bullets: [
        "Small dogs are typically easier on floors and furnishings",
        "Beach trips mean sand (and sand sticks to paws)",
        "A clear limit keeps expectations simple and consistent",
      ],
    },
    localContext: {
      heading: "Small dogs thrive on Anna Maria Island",
      body: [
        "Short walks, breezy evenings, and a slower pace make the island a perfect small-dog destination — especially when your rental truly welcomes them.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/dogs-35-lbs-or-less", label: "Dogs 35 lbs or less" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning policy" },
      { href: "/availability", label: "Check availability" },
      { href: "/location", label: "Location" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "better-than-airbnb-pet-filter",
    title: "Better Than Airbnb Pet Filter | Sandbox Beach House",
    description:
      "Skip the Airbnb/VRBO pet-filter confusion. Sandbox Beach House welcomes small dogs (35 lbs or less) with clear rules and a clean, boutique stay.",
    h1: "Better Than Airbnb’s Pet Filter (Because It’s Actually Clear)",
    painPoint: [
      "Airbnb and VRBO pet filters are notorious. You click ‘pets allowed’ and still end up messaging hosts, hunting for weight limits, or discovering fees and restrictions after you’ve already committed.",
      "If you’re planning a beach trip with your dog, you deserve clarity and confidence.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House is simple and upfront: small dogs are welcome, and the stay is designed to feel clean, easy, and truly pet-friendly.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Clear expectations (no ‘message to confirm’ surprises)",
        "Boutique, well-managed beach house experience",
      ],
    },
    localContext: {
      heading: "Dog-friendly stays on Anna Maria Island book fast",
      body: [
        "The clean, truly welcoming options fill up quickly. A clear policy helps you plan early and avoid last-minute scrambling.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/dogs-35-lbs-or-less", label: "Dogs 35 lbs or less" },
      { href: "/pet-friendly/why-small-dogs-only", label: "Why small dogs only" },
      { href: "/availability", label: "Check availability" },
      { href: "/photos", label: "Photos" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "bradenton-dog-beaches",
    title: "Bradenton Dog Beaches | Sandbox Beach House",
    description:
      "Planning a dog-friendly trip near Bradenton Beach and Anna Maria Island? Sandbox Beach House welcomes small dogs (35 lbs or less) and keeps the stay simple.",
    h1: "Bradenton Dog Beaches — Planning a Better Pet-Friendly Vacation",
    painPoint: [
      "Nothing is worse than arriving at the coast with your dog and realizing you’re not sure what’s allowed where. Between leash rules and changing access points, it’s easy to feel uncertain.",
      "Most travelers just want a clean home base and clear guidance.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House gives you a reliable, pet-friendly home base for small-dog travel — and helps you plan your outings the easy way.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Comfortable, clean place to reset after outdoor time",
        "Simple routines: walks, quick breaks, and relaxed evenings",
      ],
    },
    localContext: {
      heading: "Plan responsibly, then enjoy the island",
      body: [
        "Rules can vary across beaches and seasons. The best approach is to plan ahead, keep your dog leashed where required, and choose a calm home base you can trust.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/anna-maria-island-dog-rules", label: "Anna Maria Island dog rules" },
      { href: "/pet-friendly/near-dog-beach", label: "Near dog beach" },
      { href: "/pet-friendly/pet-welcome-guide", label: "Pet welcome guide" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
  {
    slug: "anna-maria-island-dog-rules",
    title: "Anna Maria Island Dog Rules | Sandbox Beach House",
    description:
      "Understand Anna Maria Island dog rules and plan an easy trip. Sandbox Beach House welcomes small dogs (35 lbs or less) in Holmes Beach.",
    h1: "Anna Maria Island Dog Rules — Simple Planning for a Better Trip",
    painPoint: [
      "Dog rules shouldn’t ruin the vibe, but they can surprise travelers. Many guests arrive expecting a fully dog-on-the-sand beach vacation, only to find restrictions they didn’t plan for.",
      "The easiest fix is a clear plan and a comfortable home base.",
    ],
    howWeSolve: {
      intro: [
        "Sandbox Beach House makes the first step easy: small dogs are welcome, and your stay is set up for calm routines and clean comfort.",
      ],
      bullets: [
        "Dogs 35 lbs or less welcome",
        "Great home base for walks, breaks, and island exploration",
        "Clear, simple pet expectations so you can relax",
      ],
    },
    localContext: {
      heading: "Enjoy Anna Maria Island the dog-friendly way",
      body: [
        "Rules can vary by beach access and can change over time. Plan ahead, keep your leash handy, and focus on the parts your dog loves: fresh air, new smells, and relaxed routines.",
      ],
    },
    internalLinks: [
      { href: "/pet-friendly/bradenton-dog-beaches", label: "Bradenton dog beaches" },
      { href: "/pet-friendly/rules-cleaning-policy", label: "Rules & cleaning policy" },
      { href: "/location", label: "Location" },
      { href: "/availability", label: "Check availability" },
    ],
    cta: "Check availability at Sandbox Beach House — your dog’s favorite beach vacation.",
  },
];

export function getPetFriendlyPage(slug: string) {
  return petFriendlyPages.find((p) => p.slug === slug) ?? null;
}
