import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { EventRecord } from "@/lib/events-types";
import EventSchema from "./EventSchema";

const ACCENTS = [
  {
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    ringClass: "hover:border-sky-200",
  },
  {
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    ringClass: "hover:border-amber-200",
  },
  {
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    ringClass: "hover:border-emerald-200",
  },
  {
    badgeClass: "bg-rose-100 text-rose-900",
    blobClass: "bg-rose-200/70",
    iconBgClass: "bg-rose-700",
    ringClass: "hover:border-rose-200",
  },
] as const;

function slugToAccentIndex(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % 2147483647;
  }
  return hash % ACCENTS.length;
}

function formatEventDate(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const options: Intl.DateTimeFormatOptions = { 
    month: "long", 
    day: "numeric", 
    year: "numeric",
    timeZone: "America/New_York"
  };
  
  if (startDate === endDate || start.toDateString() === end.toDateString()) {
    return start.toLocaleDateString("en-US", options);
  }
  
  return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`;
}

export function getEventMetadata(event: EventRecord): Metadata {
  return {
    title: `${event.title} | Anna Maria Island Events | Sandbox Beach House`,
    description: event.excerpt,
  };
}

export default function EventTopic({ event }: { event: EventRecord }) {
  if (!event) return notFound();

  const accent = ACCENTS[slugToAccentIndex(event.slug)];
  const dateDisplay = formatEventDate(event.startDate, event.endDate);

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <EventSchema event={event} />
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass}`} />
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
              <span className="text-slate-500">{event.title}</span>
            </div>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 ring-1 ring-slate-200">
              {dateDisplay}
            </p>
            {event.badges.map((badge) => (
              <p key={badge} className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
                {badge}
              </p>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className={`mt-1 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm ${accent.iconBgClass}`}>
              <span className="text-xl">🎉</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{event.title}</h1>
              <p className="mt-5 text-lg text-slate-700">{event.excerpt}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/open-dates"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Open Dates
            </Link>
            {event.url && (
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
              >
                Event Website →
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10">
            <section className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${accent.ringClass}`}>
              <div className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl opacity-30 ${accent.blobClass}`} />
              <h2 className="text-2xl font-semibold text-slate-900">Event Details</h2>
              <div className="relative mt-4 space-y-3 text-lg text-slate-700">
                {event.description && <p>{event.description}</p>}
                {event.locationName && (
                  <p className="flex items-start gap-2">
                    <span className="text-sky-700">📍</span>
                    <span>{event.locationName}</span>
                  </p>
                )}
                {event.geoSummary && (
                  <p className="text-sm text-slate-600">{event.geoSummary}</p>
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Plan Your Visit</h2>
              <p className="mt-4 text-lg text-slate-700">
                Stay at Sandbox Beach House and enjoy easy access to all Anna Maria Island events. Our Holmes Beach
                location keeps you close to the action while providing a quiet retreat with a heated pool.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <Link className="font-semibold text-slate-900 hover:underline" href="/location">
                  Walk-to-beach location
                </Link>
                <Link className="font-semibold text-slate-900 hover:underline" href="/pool">
                  Heated pool
                </Link>
                <Link className="font-semibold text-slate-900 hover:underline" href="/guide">
                  Local guides
                </Link>
                <Link className="font-semibold text-slate-900 hover:underline" href="/experiences">
                  Experience guides
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-bold">Book your stay for this event</h2>
              <p className="mt-3 max-w-2xl text-white/85">
                Check availability around {dateDisplay} and secure your spot at Sandbox Beach House. Small dogs (35 lbs
                or less) welcome.
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
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
