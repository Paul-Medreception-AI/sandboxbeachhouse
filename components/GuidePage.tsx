import type { Metadata } from "next";
import Link from "next/link";

import { guideTopics, type GuideTopic } from "@/lib/guides";

const brand = {
  name: "Sandbox Beach House",
  base: "Anna Maria Island",
  baseSlug: "anna-maria-island",
  cta: "Stay nearby at Sandbox Beach House and enjoy all of this just steps away.",
};

const ACCENTS = [
  {
    badge: "Island guide",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-300",
    ringClass: "hover:border-sky-200",
    iconBgClass: "bg-sky-600",
  },
  {
    badge: "Family-friendly",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
    iconBgClass: "bg-emerald-600",
  },
  {
    badge: "Beach days",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-300",
    ringClass: "hover:border-amber-200",
    iconBgClass: "bg-amber-600",
  },
  {
    badge: "Relaxed pace",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-300",
    ringClass: "hover:border-indigo-200",
    iconBgClass: "bg-indigo-600",
  },
] as const;

type ExternalLink = {
  title: string;
  description: string;
  href: string;
};

const externalLinksBySlug: Record<string, ExternalLink[]> = {
  "best-restaurants": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Explore top-rated restaurants and menus before you arrive.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-seafood": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Seafood favorites and waterfront dining options.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-pizza": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Pizza spots and casual dining options.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-coffee": [
    {
      title: "Browse breakfast and coffee favorites",
      description: "A filtered list of morning spots and cafes.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfg9900-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-breakfast": [
    {
      title: "Browse breakfast and coffee favorites",
      description: "A filtered list of morning spots and cafes.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfg9900-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-ice-cream": [
    {
      title: "Find desserts and ice cream stops",
      description: "Sweet treats and family-friendly dessert spots.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfd20834-Anna_Maria_Island_Florida.html",
    },
  ],
  "things-to-do": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "A quick overview of top activities and beach stops.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
    {
      title: "Watch a quick Anna Maria Island overview",
      description: "A short video that shows the beach and walkable vibe.",
      href: "https://www.youtube.com/watch?v=dpa0jDP7778",
    },
  ],
  "family-activities": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Family-friendly ideas and easy day plans.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
    {
      title: "Watch a quick Anna Maria Island overview",
      description: "A short video that shows the beach and walkable vibe.",
      href: "https://www.youtube.com/watch?v=dpa0jDP7778",
    },
  ],
  "rainy-day-activities": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Backup ideas when beach weather changes.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "romantic-things-to-do": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Sunset-friendly ideas for couples.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "sunset-spots": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Sunset stops and beach viewpoints.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "fishing": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Local fishing tips, charters, and seasonal notes.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
  "boating": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Local charters, water access, and seasonal tips.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
  "kayaking": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Water access tips and nearby launch ideas.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
};

function getExternalLinks(slug: string) {
  return externalLinksBySlug[slug] ?? [];
}

function getTopic(slug: string) {
  return guideTopics.find((topic) => topic.slug === slug) ?? null;
}

function getAccent(slug: string) {
  const index = guideTopics.findIndex((topic) => topic.slug === slug);
  if (index < 0) return ACCENTS[0];
  return ACCENTS[index % ACCENTS.length];
}

function buildOpening(topic: GuideTopic) {
  return `${topic.h1} in ${brand.base} help travelers plan confident, easy days on the island. Locals love the relaxed pace, walkable pockets, and Gulf breezes that make every outing feel simple. This guide is best for ${topic.focus}`;
}

function buildWhyLove(topic: GuideTopic) {
  return `${brand.base} blends beach time with casual dining, local shops, and a friendly island rhythm. ${topic.title} stand out here because you can mix walkable stops with short drives and still be back at the house quickly.`;
}

function buildBestFor(topic: GuideTopic) {
  return `Best for ${topic.focus} plus visitors who want low-stress planning and a flexible day flow.`;
}

function buildDistance() {
  return "Most popular spots are a quick drive, while the Gulf beach, casual cafes, and trolley stops stay within easy reach of Holmes Beach.";
}

function buildBrandTieIn() {
  return "Sandbox Beach House keeps things relaxed and family-friendly. Pet-friendly walks, casual dining, and easy outings make it simple to include dogs 35 lbs or less in the plan.";
}

export function getGuideMetadata(slug: string): Metadata {
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.h1} in ${brand.base} | ${brand.name}`,
    description: `${topic.h1} in ${brand.base} with local tips, easy drives, and family-friendly stops near the beach.`,
  };
}

export function GuidePage({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const accent = getAccent(slug);
  const externalLinks = getExternalLinks(slug);

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/guide/" className="hover:text-slate-700">
                Guide
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{topic.title}</span>
            </div>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {accent.badge}
            </span>
            <span className="inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Local guide
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {topic.h1} in {brand.base}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">{buildOpening(topic)}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/experiences"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Experiences
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${accent.ringClass}`}>
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50 ${accent.blobClass}`} />
              <div className="relative">
                <div className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${accent.iconBgClass}`}>
                  <span className="text-lg">🌴</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Why people love it</h2>
                <p className="mt-3 text-slate-700">{buildWhyLove(topic)}</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/60 blur-3xl opacity-40" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm">
                  <span className="text-lg">👥</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Who it’s best for</h2>
                <p className="mt-3 text-slate-700">{buildBestFor(topic)}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Walking vs driving</h3>
              <p className="mt-3 text-slate-700">{buildDistance()}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Why Sandbox Beach House fits</h3>
              <p className="mt-3 text-slate-700">{buildBrandTieIn()}</p>
            </div>
          </div>

          {externalLinks.length ? (
            <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Learn more about the area</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-base font-semibold text-slate-900">{link.title}</div>
                    <p className="mt-2 text-slate-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Helpful links for planning</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <Link className="font-semibold text-slate-900 hover:underline" href={`/locations/${brand.baseSlug}/`}>
                {brand.base} location guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/bradenton-beach/">
                Bradenton Beach guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/bridge-street/">
                Bridge Street guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/location">
                Walk-to-beach location
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/pool">
                Pool & outdoor living
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/experiences">
                Experiences hub
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/pet-friendly">
                Pet-friendly guides
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/guide/">
                All local guides
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Stay nearby and make exploring effortless</h2>
            <p className="mt-3 max-w-2xl text-white/85">{brand.cta}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </Link>
              <Link
                href="/photos"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Photos
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
