import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackedLink from "@/components/TrackedLink";
import VacationRentalSchema from "@/components/VacationRentalSchema";
import { fetchAvailability, calculateOpenRanges, formatDateRange } from "@/lib/availability";

export const metadata = {
  title: "Open Dates - Available Weeks at Sandbox Beach House | Holmes Beach, Anna Maria Island",
  description: "View all available dates for The Sandbox Beach House on Anna Maria Island. Book your perfect beach vacation with private pool, steps to the beach, and dog-friendly accommodations.",
  openGraph: {
    title: "Open Dates - Book Your Beach Vacation at Sandbox Beach House",
    description: "Browse available weeks at our Holmes Beach vacation rental. Private pool, walk to beach, pet-friendly.",
  },
};

export const revalidate = 86400;

async function OpenDatesContent() {
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);

  const lastMinute = openRanges.filter((r) => r.isLastMinute);
  const upcoming = openRanges.filter((r) => !r.isLastMinute);
  const byMonth = upcoming.reduce(
    (acc, range) => {
      const key = `${range.month}-${range.year}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(range);
      return acc;
    },
    {} as Record<string, typeof openRanges>,
  );

  return (
    <div>
      {lastMinute.length > 0 && (
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-red-100 px-4 py-1">
              <span className="text-sm font-bold text-red-700">🔥 LAST MINUTE</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Available Within 30 Days</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lastMinute.map((range) => (
              <DateCard key={range.slug} range={range} urgent />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-6 text-2xl font-bold text-slate-900">All Available Dates</h2>
        <div className="space-y-8">
          {Object.entries(byMonth).map(([monthYear, ranges]) => {
            const [month, year] = monthYear.split("-");
            const displayMonth = month.charAt(0).toUpperCase() + month.slice(1);
            return (
              <div key={monthYear}>
                <h3 className="mb-4 text-xl font-semibold text-slate-800">
                  {displayMonth} {year}
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {ranges.map((range) => (
                    <DateCard key={range.slug} range={range} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {openRanges.length === 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-lg text-slate-600">
            No open dates available at the moment. Check back soon or{" "}
            <Link href="/#availability" className="font-semibold text-[#103780] hover:underline">
              view our calendar
            </Link>{" "}
            for the latest availability.
          </p>
        </div>
      )}
    </div>
  );
}

function DateCard({ range, urgent = false }: { range: any; urgent?: boolean }) {
  const dateDisplay = formatDateRange(range.start, range.end);

  return (
    <Link
      href={`/open-dates/${range.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      {urgent && (
        <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          URGENT
        </div>
      )}
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
      <div className="text-sm font-semibold text-[#103780] group-hover:underline">View details →</div>
    </Link>
  );
}

export default function OpenDatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <VacationRentalSchema
        name="Sandbox Beach House - Available Dates"
        description="Browse all available dates for Sandbox Beach House on Anna Maria Island. Private pool, steps to beach, dog-friendly vacation rental in Holmes Beach, Florida."
      />
      <Breadcrumbs />

      <section className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-4 inline-flex rounded-full bg-[#103780]/10 px-4 py-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#103780]">Live Availability</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Open Dates at Sandbox Beach House
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-slate-600">
            Browse all available weeks for your Anna Maria Island beach vacation. Private pool, steps to the beach,
            and dog-friendly. Updated daily from our live calendar.
          </p>

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href="/#availability"
              eventLabel="Open Dates - View Calendar"
              className="rounded-full bg-[#103780] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              View Full Calendar
            </TrackedLink>
            <Link
              href="/open-dates/last-minute"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Last-Minute Deals
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-slate-500">
                Loading available dates...
              </div>
            }
          >
            <OpenDatesContent />
          </Suspense>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Book Sandbox Beach House?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Feature icon="🏊" title="Private Heated Pool">
              Your own secluded backyard oasis for relaxing after beach days.
            </Feature>
            <Feature icon="🏖️" title="Steps to the Beach">
              Walk straight to the Gulf without crossing busy roads.
            </Feature>
            <Feature icon="🐶" title="Dog Friendly">
              Bring your well-behaved pup (≤35 lbs) along for the vacation.
            </Feature>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Questions About Availability?</h2>
            <p className="mb-6 text-slate-600">
              Can't find the perfect dates? Interested in a longer stay? We're here to help you plan your ideal Anna
              Maria Island vacation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#availability"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Check Live Calendar
              </Link>
              <Link
                href="/long-stays"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Long Stay Discounts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
