import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackedLink from "@/components/TrackedLink";
import { fetchAvailability, calculateOpenRanges, formatDateRange, getSeasonalContent } from "@/lib/availability";

export const revalidate = 86400;

export async function generateStaticParams() {
  try {
    const availability = await fetchAvailability();
    const openRanges = calculateOpenRanges(availability.blockedRanges);
    const months = new Set(openRanges.map((r) => `${r.month}-${r.year}`));
    return Array.from(months).map((month) => ({ slug: month }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [monthName, year] = slug.split("-");
  const displayMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const monthRanges = openRanges.filter((r) => `${r.month}-${r.year}` === slug);

  if (monthRanges.length === 0) {
    return {
      title: `${displayMonth} ${year} - No Availability - Sandbox Beach House`,
    };
  }

  const sampleRange = monthRanges[0];
  const seasonal = getSeasonalContent(sampleRange.season, monthName);

  return {
    title: `${displayMonth} ${year} Availability - Book Sandbox Beach House | Anna Maria Island`,
    description: `${monthRanges.length} available week${monthRanges.length === 1 ? "" : "s"} in ${displayMonth} ${year} at Sandbox Beach House. ${seasonal.description.slice(0, 120)}... Private pool, steps to beach.`,
    openGraph: {
      title: `${displayMonth} ${year} - Available Dates at Sandbox Beach House`,
      description: `${monthRanges.length} open week${monthRanges.length === 1 ? "" : "s"} in ${displayMonth}. ${seasonal.title}`,
    },
  };
}

async function MonthPageContent({ slug }: { slug: string }) {
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const monthRanges = openRanges.filter((r) => `${r.month}-${r.year}` === slug);

  if (monthRanges.length === 0) {
    notFound();
  }

  const [monthName, year] = slug.split("-");
  const displayMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const sampleRange = monthRanges[0];
  const seasonal = getSeasonalContent(sampleRange.season, monthName);

  return (
    <div>
      <section className="relative overflow-hidden py-12">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-4 inline-flex rounded-full bg-[#103780]/10 px-4 py-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#103780]">
              {monthRanges.length} Available Week{monthRanges.length === 1 ? "" : "s"}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {displayMonth} {year} Availability
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-slate-600">
            Book your Anna Maria Island beach vacation for {displayMonth} {year}. Private pool, steps to the beach, and
            dog-friendly accommodations at Sandbox Beach House.
          </p>

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href="/#availability"
              eventLabel={`${displayMonth} ${year} - View Calendar`}
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

      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">{seasonal.title}</h2>
              <p className="mb-6 text-lg text-slate-700">{seasonal.description}</p>

              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Perfect for {displayMonth}:</h3>
                <ul className="space-y-2">
                  {seasonal.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-slate-700">
                      <span className="mt-1 text-[#103780]">✓</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Expected Weather in {displayMonth}</h3>
                <p className="text-slate-700">{seasonal.weather}</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src="/Backyard.avif" alt="Sandbox Beach House" fill className="object-cover" />
            </div>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Available Dates in {displayMonth} {year}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {monthRanges.map((range) => (
              <DateCard key={range.slug} range={range} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Visit in {displayMonth}?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Highlight
              icon="🌡️"
              title="Perfect Weather"
              description={`${seasonal.weather} - ideal for beach activities and outdoor relaxation.`}
            />
            <Highlight
              icon="🏖️"
              title="Beach Access"
              description="Walk directly to the Gulf of Mexico without crossing busy roads. Your beach paradise awaits."
            />
            <Highlight
              icon="🏊"
              title="Private Pool"
              description="Heated pool in your own backyard - perfect for morning swims or evening relaxation."
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Ready to Book {displayMonth} {year}?
            </h2>
            <p className="mb-6 text-slate-600">
              Choose from {monthRanges.length} available week{monthRanges.length === 1 ? "" : "s"} above, or view our
              full calendar to find the perfect dates for your Anna Maria Island vacation.
            </p>
            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href="/#availability"
                eventLabel={`${displayMonth} ${year} - Book Now CTA`}
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                View Calendar
              </TrackedLink>
              <Link
                href="/open-dates"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Browse All Dates
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

  return (
    <Link
      href={`/open-dates/${range.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      {range.isLastMinute && (
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
      <div className="text-sm font-semibold text-[#103780] group-hover:underline">View details & book →</div>
    </Link>
  );
}

function Highlight({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default async function MonthPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <Breadcrumbs />
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="mx-auto max-w-2xl px-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-slate-500">
                Loading availability...
              </div>
            </div>
          </div>
        }
      >
        <MonthPageContent slug={slug} />
      </Suspense>
    </main>
  );
}
