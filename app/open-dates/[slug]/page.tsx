import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrackedLink from "@/components/TrackedLink";
import AvailabilityPlanner from "@/components/AvailabilityPlanner";
import VacationRentalSchema from "@/components/VacationRentalSchema";
import {
  fetchAvailability,
  calculateOpenRanges,
  formatDateRange,
  getSeasonalContent,
  type OpenDateRange,
} from "@/lib/availability";

export const revalidate = 86400;

export async function generateStaticParams() {
  try {
    const availability = await fetchAvailability();
    const openRanges = calculateOpenRanges(availability.blockedRanges);
    return openRanges.slice(0, 50).map((range) => ({
      slug: range.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const range = openRanges.find((r) => r.slug === slug);

  if (!range) {
    return {
      title: "Date Not Available - Sandbox Beach House",
    };
  }

  const dateDisplay = formatDateRange(range.start, range.end);
  const seasonal = getSeasonalContent(range.season, range.month);

  return {
    title: `${dateDisplay} Available - Book Now | Sandbox Beach House, Anna Maria Island`,
    description: `Book ${dateDisplay} at Sandbox Beach House on Holmes Beach. ${seasonal.description.slice(0, 120)}... Private pool, steps to beach, pet-friendly.`,
    openGraph: {
      title: `${dateDisplay} - Available at Sandbox Beach House`,
      description: `${range.nights} nights available. ${seasonal.title}. Book your Anna Maria Island vacation today.`,
    },
  };
}

async function DatePageContent({ slug }: { slug: string }) {
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const range = openRanges.find((r) => r.slug === slug);

  if (!range) {
    notFound();
  }

  const dateDisplay = formatDateRange(range.start, range.end);
  const seasonal = getSeasonalContent(range.season, range.month);
  const startDate = new Date(range.start);
  const monthName = startDate.toLocaleDateString("en-US", { month: "long" });

  const vrboUrl = buildVrboUrl(range.start, range.end);
  const beachRentalsUrl = buildBeachRentalsUrl(range.start, range.end);

  return (
    <div>
      <section className="relative overflow-hidden pt-4 pb-12">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full bg-green-100 px-4 py-1">
              <span className="text-sm font-bold text-green-700">✓ AVAILABLE</span>
            </div>
            {range.isLastMinute && (
              <div className="inline-flex rounded-full bg-red-100 px-4 py-1">
                <span className="text-sm font-bold text-red-700">🔥 LAST MINUTE</span>
              </div>
            )}
            {range.isHoliday && (
              <div className="inline-flex rounded-full bg-amber-100 px-4 py-1">
                <span className="text-sm font-bold text-amber-700">🎉 {range.holidayName}</span>
              </div>
            )}
          </div>

          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{dateDisplay}</h1>
          <p className="mb-2 text-xl text-slate-700">
            {range.nights} night{range.nights === 1 ? "" : "s"} at Sandbox Beach House
          </p>
          <p className="mb-8 max-w-3xl text-lg text-slate-600">
            Holmes Beach, Anna Maria Island • Private Pool • Steps to Beach • Dog Friendly
          </p>

          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href={beachRentalsUrl}
              eventLabel={`Book Direct - ${dateDisplay}`}
              className="rounded-full bg-[#103780] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              Book These Dates
            </TrackedLink>
            <TrackedLink
              href={vrboUrl}
              eventLabel={`VRBO - ${dateDisplay}`}
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              View on VRBO
            </TrackedLink>
            <Link
              href="/open-dates"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              See All Dates
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">{seasonal.title}</h2>
              <p className="mb-6 text-lg text-slate-700">{seasonal.description}</p>

              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">Perfect for {monthName}:</h3>
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
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Expected Weather</h3>
                <p className="text-slate-700">{seasonal.weather}</p>
              </div>
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">What Makes These Dates Special</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <SpecialFeature
              icon="📅"
              title="Confirmed Available"
              description="These exact dates are open and ready to book right now."
            />
            <SpecialFeature
              icon="💰"
              title="Book Direct & Save"
              description="Skip platform fees and get the best rate by booking directly with us."
            />
            <SpecialFeature
              icon="⚡"
              title="Instant Confirmation"
              description="Book online now or contact us for same-day confirmation."
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">The Sandbox Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Amenity icon="🏊" title="Private Heated Pool" />
            <Amenity icon="🏖️" title="Steps to Beach" />
            <Amenity icon="🐶" title="Dog Friendly (≤35 lbs)" />
            <Amenity icon="🛏️" title="Sleeps 6" />
            <Amenity icon="🚶" title="Walkable Location" />
            <Amenity icon="🎶" title="Unique Backyard Vibe" />
            <Amenity icon="🚌" title="Free Island Trolley" />
            <Amenity icon="⭐" title="5-Star Rated" />
          </div>
        </div>
      </section>

      <section id="book" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Ready to Book {dateDisplay}?</h2>
            <p className="text-lg text-slate-600">Choose your preferred booking method below</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <Suspense
              fallback={
                <div className="p-12 text-center text-slate-500">Loading booking calendar...</div>
              }
            >
              <AvailabilityPlanner />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#103780] to-[#0b2b63] p-8 text-white shadow-lg md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Questions About Your Stay?</h2>
            <p className="mb-6 text-lg text-white/90">
              We're here to help you plan the perfect Anna Maria Island vacation. Get in touch with any questions about
              these dates, pricing, or our property.
            </p>
            <div className="flex flex-wrap gap-3">
              <TrackedLink
                href={beachRentalsUrl}
                eventLabel={`CTA Book - ${dateDisplay}`}
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#103780] shadow-sm transition hover:bg-gray-100"
              >
                Book Now
              </TrackedLink>
              <Link
                href="/#availability"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Full Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">More Available Dates</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/open-dates"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              View All Open Dates
            </Link>
            <Link
              href="/open-dates/last-minute"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Last-Minute Deals
            </Link>
            <Link
              href={`/open-dates/month/${range.month}-${range.year}`}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              More in {monthName}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function buildVrboUrl(start: string, end: string): string {
  const url = new URL("https://www.vrbo.com/4984875ha");
  url.searchParams.set("chkin", start);
  url.searchParams.set("chkout", end);
  url.searchParams.set("x_pwa", "1");
  return url.toString();
}

function buildBeachRentalsUrl(start: string, end: string): string {
  const arrive = isoToUnixSeconds(start);
  const depart = isoToUnixSeconds(end);
  const nights = nightsBetween(start, end);
  const url = new URL("https://www.beachrentals.mobi/vacation-rentals/checkout/");
  url.searchParams.set("id", "140");
  url.searchParams.set("quote", "yes");
  url.searchParams.set("locid", "1");
  if (arrive) url.searchParams.set("arr", String(arrive));
  if (depart) url.searchParams.set("depart", String(depart));
  if (nights) url.searchParams.set("nights", String(nights));
  url.searchParams.set("persons", "1");
  return url.toString();
}

function isoToUnixSeconds(value: string) {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const [, yyyy, mm, dd] = m;
  const unixMs = Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd));
  return Math.floor(unixMs / 1000);
}

function nightsBetween(startIso: string, endIso: string) {
  const start = new Date(`${startIso}T00:00:00`);
  const end = new Date(`${endIso}T00:00:00`);
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

function SpecialFeature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function Amenity({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-semibold text-slate-900">{title}</span>
    </div>
  );
}

export default async function OpenDatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const availability = await fetchAvailability();
  const openRanges = calculateOpenRanges(availability.blockedRanges);
  const range = openRanges.find((r) => r.slug === slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      {range && (
        <VacationRentalSchema
          name={`Sandbox Beach House - ${formatDateRange(range.start, range.end)}`}
          description="Private pool, steps to beach, dog-friendly vacation rental on Anna Maria Island"
          checkInDate={range.start}
          checkOutDate={range.end}
        />
      )}
      <Breadcrumbs />
      <Suspense
        fallback={
          <div className="py-24 text-center">
            <div className="mx-auto max-w-2xl px-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-slate-500">
                Loading availability details...
              </div>
            </div>
          </div>
        }
      >
        <DatePageContent slug={slug} />
      </Suspense>
    </main>
  );
}
