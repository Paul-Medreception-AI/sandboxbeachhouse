import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEventsByMonth, getMonthHubBySlug, eventMonthHubs } from "@/lib/events";

export const revalidate = 604800;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const monthHub = getMonthHubBySlug(slug);
  if (!monthHub) return {};
  return {
    title: `${monthHub.title} on Anna Maria Island | Sandbox Beach House`,
    description: `${monthHub.description} Best for ${monthHub.focus}.`,
  };
}

export async function generateStaticParams() {
  return eventMonthHubs.map((hub) => ({
    slug: hub.slug,
  }));
}

const ACCENTS = [
  {
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-300",
    ringClass: "hover:border-sky-200",
  },
  {
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-300",
    ringClass: "hover:border-amber-200",
  },
  {
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
  },
  {
    badgeClass: "bg-rose-100 text-rose-900",
    blobClass: "bg-rose-300",
    ringClass: "hover:border-rose-200",
  },
] as const;

export default async function EventMonthPage({ params }: Props) {
  const { slug } = await params;
  const monthHub = getMonthHubBySlug(slug);
  if (!monthHub) return notFound();

  const events = await getEventsByMonth(slug);
  const monthIndex = eventMonthHubs.findIndex((m) => m.slug === slug);
  const accent = ACCENTS[monthIndex % ACCENTS.length];

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass} opacity-60`} />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/events/" className="hover:text-slate-700">
                Events
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{monthHub.title}</span>
            </div>
          </nav>

          <p className={`mt-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
            Monthly Guide
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">{monthHub.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">{monthHub.description}</p>
          <p className="mt-4 text-base text-slate-600">Best for {monthHub.focus}.</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          {events.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => {
                const eventDate = new Date(event.startDate);
                const dateDisplay = eventDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <Link
                    key={`${event.slug}-${event.startDate}`}
                    href={`/events/${event.slug}`}
                    className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${accent.ringClass}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-40 ${accent.blobClass}`}
                    />
                    <div className="relative">
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${accent.badgeClass}`}>
                          {dateDisplay}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-800">{event.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{event.excerpt}</p>
                      {event.badges.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {event.badges.slice(0, 2).map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                        View details
                        <span className="transition group-hover:translate-x-0.5">→</span>
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
              <p className="text-lg text-slate-600">
                No upcoming events in {monthHub.title} at the moment. Check back soon or{" "}
                <Link href="/events" className="font-semibold text-sky-800 hover:underline">
                  browse all events
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Plan your {monthHub.title.toLowerCase()} stay</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Sandbox Beach House keeps you close to all the action while providing a quiet home base. Heated pool,
              walk to beach, and small dogs (35 lbs or less) welcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </Link>
              <Link
                href="/open-dates"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Open Dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
