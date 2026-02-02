import type { ReactNode } from "react";
import { Suspense } from "react";

import Image from "next/image";

import AvailabilityPlanner from "@/components/AvailabilityPlanner";
import TrackedLink from "@/components/TrackedLink";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative min-h-[600px] sm:h-[70vh] sm:min-h-[520px]">
        <div className="pointer-events-none absolute -left-24 -top-24 z-10 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 z-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />
        <Image
          src="/Backyard.avif"
          alt="Sandbox Beach House backyard"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 z-20 flex items-center py-8">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 text-white">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <p className="inline-flex rounded-full bg-black/40 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-[0.3em] text-white shadow-lg">
                Holmes Beach · Anna Maria Island
              </p>
              <p className="inline-flex rounded-full bg-white/15 px-2 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-white">
                Private pool
              </p>
              <p className="inline-flex rounded-full bg-white/15 px-2 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-white">
                Dogs ≤ 35 lbs
              </p>
            </div>
            <h1 className="mb-3 text-3xl sm:text-4xl font-bold drop-shadow-lg md:text-5xl">
              The Sandbox Cottage — Steps to the Beach
            </h1>
            <p className="mb-4 max-w-2xl text-base sm:text-lg drop-shadow md:text-xl">
              The Sandbox is a one-of-a-kind 2BR/1.5BA Holmes Beach retreat with a private pool, unique backyard, and
              unbeatable walk-to-beach location. Sleeps 6 with a queen sleeper sofa.
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
              <a
                href="/open-dates"
                className="rounded-full bg-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-black shadow-lg shadow-black/30 transition hover:bg-slate-100"
              >
                View Open Dates
              </a>
              <a
                href="/availability"
                className="rounded-full border border-white/60 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-white hover:bg-white/15"
              >
                Check Calendar
              </a>
              <a
                href="#availability"
                className="rounded-full border border-white/60 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-white hover:bg-white/15"
              >
                Book Direct &amp; Save
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg font-medium">⭐⭐⭐⭐⭐ Highly rated on Airbnb &amp; VRBO</p>
          <p className="mt-2 text-gray-600">Guests consistently book The Sandbox for its location, privacy, and unique vibe.</p>
        </div>
      </section>

      <section id="direct" className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-3xl font-bold">Why Book Direct with Sandbox Beach House</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-lg text-slate-900 shadow-sm">✔ Lower total cost — no platform service fees</li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-lg text-slate-900 shadow-sm">✔ Direct communication with the owner</li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-lg text-slate-900 shadow-sm">✔ Same home, same rules, better value</li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6 text-lg text-slate-900 shadow-sm">✔ Priority access to open weeks</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">What Makes The Sandbox Different</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Feature title="Private Heated Pool">Relax in your own secluded backyard oasis.</Feature>
            <Feature title="Steps to the Beach">No busy roads — walk straight to the Gulf.</Feature>
            <Feature title="Unique Backyard Vibe">
              Former live-music venue with character you won’t find elsewhere.
            </Feature>
            <Feature title="Walkable Location">Shops, dining, and the free island trolley nearby.</Feature>
            <Feature title="Dog Friendly">Bring your well-behaved pup along for the trip.</Feature>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Plan your island days</h2>
              <p className="mt-2 max-w-2xl text-lg text-slate-600">
                From beach mornings to sunset dinners, explore curated local experiences and favorite stops around Holmes Beach.
              </p>
            </div>
            <a
              href="/experiences"
              className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 md:mt-0"
            >
              Explore Experiences
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Planning guides</p>
              <h2 className="mt-3 text-3xl font-bold">Not sure where to start?</h2>
              <p className="mt-2 max-w-2xl text-lg text-slate-600">
                Use quick guides to pick the right base, timing, and trip style before you lock in dates.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="/where-to-stay"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Where to stay</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Best areas & vibes</h3>
                <p className="mt-2 text-slate-600">Compare Holmes Beach, Bradenton Beach, and quiet north-end stays.</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                  Explore areas <span className="transition group-hover:translate-x-0.5">→</span>
                </p>
              </div>
            </a>
            <a
              href="/late-summer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Late summer</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">July–September plans</h3>
                <p className="mt-2 text-slate-600">Weather tips, itineraries, and the best weeks to book.</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800">
                  Plan late summer <span className="transition group-hover:translate-x-0.5">→</span>
                </p>
              </div>
            </a>
            <a
              href="/pet-friendly"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Pet-friendly</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">Bring your small dog</h3>
                <p className="mt-2 text-slate-600">Walkable routes, local rules, and easy dog-friendly routines.</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                  See pet-friendly tips <span className="transition group-hover:translate-x-0.5">→</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Photo src="/Front.webp" alt="Exterior" />
            <Photo src="/Backyard.avif" alt="Backyard" />
            <Photo src="/61108cdc.jpg" alt="House" />
            <Photo src="/w1918h1079x0y1-13973549.avif" alt="Property" />
            <Photo src="/64de59fb.webp" alt="Sandbox Beach House" />
            <Photo src="/6972a927.avif" alt="Sandbox Beach House" />
          </div>
        </div>
      </section>

      <section id="availability" className="bg-gradient-to-b from-sky-50 via-white to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center text-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#103780]">Plan Your Stay</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Live Availability & Direct Booking</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">
              Pick your ideal dates right on this page. We sync daily with our BeachRentals calendar ({`property #140`}) so
              you always see the latest availability before booking direct or through VRBO.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-500">
              Not sure where to stay? Start with the{" "}
              <a className="font-semibold text-slate-700 hover:underline" href="/where-to-stay">
                Where to stay guide
              </a>
              .
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <Suspense
              fallback={
                <div className="rounded-3xl border border-slate-200 bg-white/50 p-10 text-center text-slate-500">
                  Loading calendar…
                </div>
              }
            >
              <AvailabilityPlanner />
            </Suspense>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/open-dates"
              className="rounded-full bg-[#103780] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              Browse All Open Dates
            </a>
            <a
              href="/open-dates/last-minute"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Last-Minute Deals
            </a>
            <TrackedLink
              href="https://www.vrbo.com/4984875ha"
              eventLabel="VRBO Availability"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              View on VRBO
            </TrackedLink>
          </div>
        </div>
      </section>

      <UpcomingEventsSection />

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sandbox Beach House · Holmes Beach, FL
      </footer>
    </main>
  );
}

async function UpcomingEventsSection() {
  const { getUpcomingEvents } = await import("@/lib/events");
  const events = await getUpcomingEvents(4);

  if (events.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">What's Happening</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Upcoming Events on Anna Maria Island</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            Plan your visit around local festivals, live music, and seasonal celebrations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => {
            const eventDate = new Date(event.startDate);
            const dateDisplay = eventDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });

            return (
              <a
                key={`${event.slug}-${event.startDate}`}
                href={`/events/${event.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-200/50 blur-2xl" />
                <div className="relative">
                  <div className="mb-3 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-900">
                    {dateDisplay}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-800">
                    {event.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{event.excerpt}</p>
                  {event.badges.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {event.badges.slice(0, 2).map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/events"
            className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            View All Events
          </a>
          <a
            href="/availability"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, children }: { title: string; children: ReactNode }) {
  const icon =
    title === "Private Heated Pool"
      ? "🏊"
      : title === "Steps to the Beach"
        ? "🏖️"
        : title === "Unique Backyard Vibe"
          ? "🎶"
          : title === "Walkable Location"
            ? "🚶"
            : title === "Dog Friendly"
              ? "🐶"
              : "✨";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-2xl">{icon}</p>
      <h3 className="mt-4 mb-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
    </div>
  );
}
