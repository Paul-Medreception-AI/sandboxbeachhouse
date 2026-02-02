import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackedLink from "@/components/TrackedLink";
import { fetchAvailability, calculateOpenRanges, formatDateRange } from "@/lib/availability";

export const metadata = {
  title: "Last-Minute Deals - Available This Month | Sandbox Beach House, Anna Maria Island",
  description: "Book last-minute beach vacation deals at Sandbox Beach House. Available within 30 days with private pool, steps to beach, and dog-friendly. Holmes Beach, Anna Maria Island.",
  openGraph: {
    title: "Last-Minute Beach Vacation Deals - Sandbox Beach House",
    description: "Urgent availability! Book your Anna Maria Island getaway within 30 days. Private pool, walk to beach.",
  },
};

export const revalidate = 3600; // Revalidate every hour for last-minute deals

async function LastMinuteContent() {
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const lastMinute = openRanges.filter((r) => r.isLastMinute);

  return (
    <div>
      {lastMinute.length > 0 ? (
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 rounded-3xl border-2 border-red-200 bg-red-50 p-6 text-center">
              <p className="text-lg font-semibold text-red-900">
                🔥 {lastMinute.length} urgent opening{lastMinute.length === 1 ? "" : "s"} available within the next 30
                days!
              </p>
              <p className="mt-2 text-sm text-red-700">Book now before these dates are gone</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lastMinute.map((range) => (
                <DateCard key={range.slug} range={range} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
              <div className="mb-4 text-5xl">📅</div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">No Last-Minute Availability Right Now</h2>
              <p className="mb-6 text-lg text-slate-600">
                We don't have any openings within the next 30 days, but we have plenty of availability coming up!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/open-dates"
                  className="rounded-full bg-[#103780] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
                >
                  View All Open Dates
                </Link>
                <Link
                  href="/#availability"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Check Full Calendar
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Book Last-Minute?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Benefit
              icon="⚡"
              title="Instant Availability"
              description="These dates are confirmed open and ready to book right now - no waiting."
            />
            <Benefit
              icon="🏖️"
              title="Spontaneous Getaway"
              description="Perfect for impromptu beach vacations when you need to escape quickly."
            />
            <Benefit
              icon="💰"
              title="Book Direct & Save"
              description="Skip the platform fees and get the best rate by booking directly with us."
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Pack Your Bags & Go</h2>
              <p className="mb-6 text-lg text-slate-700">
                Sandbox Beach House is the perfect last-minute destination. We're ready for you with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#103780]">✓</span>
                  <span className="text-slate-700">
                    <strong>Fully equipped kitchen</strong> - No need to bring anything but groceries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#103780]">✓</span>
                  <span className="text-slate-700">
                    <strong>Private heated pool</strong> - Jump in as soon as you arrive
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#103780]">✓</span>
                  <span className="text-slate-700">
                    <strong>Steps to the beach</strong> - Walk straight to the Gulf in minutes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#103780]">✓</span>
                  <span className="text-slate-700">
                    <strong>Dog-friendly</strong> - Bring your pup along (≤35 lbs)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#103780]">✓</span>
                  <span className="text-slate-700">
                    <strong>Walkable location</strong> - Restaurants, shops, and trolley nearby
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/Backyard.avif" alt="Sandbox Beach House pool" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                  <Image src="/Front.webp" alt="Sandbox Beach House exterior" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                  <Image src="/64de59fb.webp" alt="Sandbox Beach House" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#103780] to-[#0b2b63] p-8 text-white shadow-lg md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Ready for a Last-Minute Beach Escape?</h2>
            <p className="mb-6 text-lg text-white/90">
              Don't wait - these dates won't last long. Book your spontaneous Anna Maria Island getaway today.
            </p>
            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href="/#availability"
                eventLabel="Last Minute - Book Now"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#103780] shadow-sm transition hover:bg-gray-100"
              >
                Book Now
              </TrackedLink>
              <Link
                href="/open-dates"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View All Dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DateCard({ range }: { range: any }) {
  const dateDisplay = formatDateRange(range.start, range.end);
  const daysUntil = Math.floor((new Date(range.start).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <Link
      href={`/open-dates/${range.slug}`}
      className="group relative overflow-hidden rounded-2xl border-2 border-red-200 bg-white p-6 shadow-sm transition hover:border-red-300 hover:shadow-md"
    >
      <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
        {daysUntil} DAYS
      </div>
      {range.isHoliday && (
        <div className="mb-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          🎉 {range.holidayName}
        </div>
      )}
      <div className="mb-3">
        <p className="text-lg font-bold text-slate-900 group-hover:text-[#103780]">{dateDisplay}</p>
        <p className="text-sm text-slate-600">
          {range.nights} night{range.nights === 1 ? "" : "s"}
        </p>
      </div>
      <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-2 py-1">{range.season}</span>
        <span>•</span>
        <span>{range.month}</span>
      </div>
      <div className="text-sm font-semibold text-red-600 group-hover:underline">Book now →</div>
    </Link>
  );
}

function Benefit({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default function LastMinutePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <Breadcrumbs />

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-red-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full bg-red-100 px-4 py-1">
              <span className="text-sm font-bold text-red-700">🔥 URGENT</span>
            </div>
            <div className="inline-flex rounded-full bg-[#103780]/10 px-4 py-1">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#103780]">Within 30 Days</span>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Last-Minute Beach Vacation Deals</h1>
          <p className="mb-8 max-w-3xl text-lg text-slate-600">
            Spontaneous beach getaway? We've got you covered. Book available dates within the next 30 days at Sandbox
            Beach House on Anna Maria Island.
          </p>

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href="/#availability"
              eventLabel="Last Minute Hero - View Calendar"
              className="rounded-full bg-[#103780] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              View Full Calendar
            </TrackedLink>
            <Link
              href="/open-dates"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              All Open Dates
            </Link>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-12">
            <div className="mx-auto max-w-2xl px-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-500">
                Loading last-minute availability...
              </div>
            </div>
          </div>
        }
      >
        <LastMinuteContent />
      </Suspense>
    </main>
  );
}
