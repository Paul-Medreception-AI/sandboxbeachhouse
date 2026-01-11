import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { locations, type LocationData } from "@/lib/locations";

const brand = {
  name: "Sandbox Beach House",
  base: "Holmes Beach",
  baseSlug: "holmes-beach",
  h1Prefix: "Pet-Friendly Vacation Rentals in",
  policyLabel: "Pet policy (dogs 35 lbs or less)",
};

function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug) ?? null;
}

function getNearby(location: LocationData) {
  return location.nearby
    .map((slug) => getLocation(slug))
    .filter((item): item is LocationData => Boolean(item));
}

function buildIntro(location: LocationData) {
  const fitLine =
    location.slug === brand.baseSlug
      ? `Sandbox Beach House sits right here in ${location.name}, so you can settle in fast and walk or bike to the best spots.`
      : `From our ${brand.base} home, reaching ${location.name} is ${location.access}.`;
  return `${location.whyLove} It is best for ${location.bestFor} ${fitLine}`;
}

function buildStayCopy(location: LocationData) {
  const accessLine =
    location.slug === brand.baseSlug
      ? `You are already in ${location.name}, with easy access to the beach and local favorites.`
      : `${location.name} is ${location.access} from our ${brand.base} base, so day trips feel effortless.`;
  return `Sandbox Beach House is relaxed, flexible, and family-friendly, with space to unwind after beach days. Dogs 35 lbs or less are welcome, so your pup can join the trip. ${accessLine}`;
}

function buildMapsUrl(location: LocationData) {
  const query = `${location.name}, Florida`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const learnMoreLinks: Record<string, string> = {
  "anna-maria-island": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bradenton-beach": "https://www.expedia.com/Things-To-Do-In-Bradenton-Beach.d10159.Travel-Guide-Activities",
  "holmes-beach": "https://www.tripadvisor.com/Attractions-g635970-Activities-Anna_Maria_Island_Florida.html",
  "anna-maria-city": "https://www.annamaria.com/anna-maria-island-piers/",
  "coquina-beach": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "manatee-public-beach": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "ami-north-end": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "ami-south-end": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bean-point": "https://www.hotels.com/go/usa/us-best-things-to-do-anna-maria-island/",
  "pine-avenue": "https://www.annamaria.com/places-to-see-and-things-to-do-on-pine-avenue/",
  "gulf-drive-corridor": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bridge-street": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "cortez": "https://en.wikipedia.org/wiki/Florida_Maritime_Museum",
  "cortez-fishing-village": "https://en.wikipedia.org/wiki/Florida_Maritime_Museum",
  "sarasota-bay": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bradenton": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "west-bradenton": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "palmetto": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "longboat-key": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
};

function getLearnMoreLink(location: LocationData) {
  return learnMoreLinks[location.slug];
}

export function getLocationMetadata(slug: string): Metadata {
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `${brand.h1Prefix} ${location.name} | ${brand.name}`,
    description: `Pet-friendly stays near ${location.name}. ${location.whyLove} Check availability at ${brand.name}.`,
  };
}

export function LocationPage({ slug }: { slug: string }) {
  const location = getLocation(slug);
  if (!location) return notFound();

  const nearby = getNearby(location);

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-6 text-4xl font-bold">
            {brand.h1Prefix} {location.name}
          </h1>

          <p className="mb-10 max-w-3xl text-lg">{buildIntro(location)}</p>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Local highlights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-600">Beach type</p>
                <p className="mt-2 text-slate-700">{location.highlights.beach}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-600">Restaurants</p>
                <p className="mt-2 text-slate-700">{location.highlights.restaurants}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-600">Walkability</p>
                <p className="mt-2 text-slate-700">{location.highlights.walkability}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-600">Vibe</p>
                <p className="mt-2 text-slate-700">{location.highlights.vibe}</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
                href={buildMapsUrl(location)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open {location.name} in Google Maps
              </a>
            </div>
            {getLearnMoreLink(location) ? (
              <div className="mt-2">
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
                  href={getLearnMoreLink(location)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about {location.name}
                </a>
              </div>
            ) : null}
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Stay at {brand.name} here</h2>
            <p className="max-w-3xl text-lg text-slate-700">{buildStayCopy(location)}</p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Explore nearby</h2>
            <p className="max-w-3xl text-lg text-slate-700">
              Also explore{" "}
              {nearby.map((spot, index) => (
                <span key={spot.slug}>
                  <Link className="font-semibold text-slate-900 hover:underline" href={`/locations/${spot.slug}/`}>
                    {spot.name}
                  </Link>
                  {index === nearby.length - 1 ? "." : ", "}
                </span>
              ))}
              {" "}See our{" "}
              <Link className="font-semibold text-slate-900 hover:underline" href="/location">
                walk-to-beach location
              </Link>
              , review the{" "}
              <Link className="font-semibold text-slate-900 hover:underline" href="/faq">
                {brand.policyLabel}
              </Link>
              , and peek at{" "}
              <Link className="font-semibold text-slate-900 hover:underline" href="/photos">
                pool and family spaces
              </Link>
              .
            </p>
          </section>

          <p className="text-lg font-semibold text-slate-900">
            Check availability at {brand.name} in {location.name}.
          </p>
        </div>
      </section>
    </main>
  );
}
