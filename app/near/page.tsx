import type { Metadata } from "next";
import Link from "next/link";

import { nearGroups, nearPages } from "./data";

const ACCENTS = [
  {
    badge: "Nearby beaches",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-300",
    ringClass: "hover:border-sky-200",
    iconBgClass: "bg-sky-700",
  },
  {
    badge: "Walkable dining",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
    iconBgClass: "bg-emerald-700",
  },
  {
    badge: "Sunset spots",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-300",
    ringClass: "hover:border-amber-200",
    iconBgClass: "bg-amber-700",
  },
  {
    badge: "Easy day trips",
    badgeClass: "bg-rose-100 text-rose-900",
    blobClass: "bg-rose-300",
    ringClass: "hover:border-rose-200",
    iconBgClass: "bg-rose-700",
  },
] as const;

export const metadata: Metadata = {
  title: "Nearby Places to Stay Near | Sandbox Beach House",
  description:
    "Browse proximity guides for beaches, dining, sunsets, and day trips near Sandbox Beach House on Anna Maria Island.",
};

const orderedGroups = Object.keys(nearGroups);

export default function NearHubPage() {
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
              <span className="text-slate-500">Nearby</span>
            </div>
          </nav>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Neighborhood + proximity guides
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Stay Near the Best of Anna Maria Island</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            These nearby guides help you plan by proximity—beaches, dining, sunset spots, and day trips—all within easy
            reach of Sandbox Beach House in Holmes Beach.
          </p>

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
            <Link
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              View Photos
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-600">{nearPages.length} nearby guides</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12">
            {orderedGroups.map((group, groupIndex) => {
              const pages = nearGroups[group] ?? [];
              if (!pages.length) return null;
              const accent = ACCENTS[groupIndex % ACCENTS.length];

              return (
                <section key={group}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}
                      >
                        {accent.badge}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-900">{group}</h2>
                    </div>
                    <span className="text-sm font-semibold text-slate-400">{pages.length} guides</span>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {pages.map((page, index) => {
                      const cardAccent = ACCENTS[(groupIndex + index) % ACCENTS.length];
                      return (
                        <Link
                          key={page.slug}
                          href={`/near/${page.slug}/`}
                          className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${cardAccent.ringClass}`}
                        >
                          <div
                            className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50 ${cardAccent.blobClass}`}
                          />
                          <div className="relative">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${cardAccent.iconBgClass}`}
                                >
                                  <span className="text-lg">📍</span>
                                </div>
                                <p
                                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${cardAccent.badgeClass}`}
                                >
                                  {page.badge}
                                </p>
                              </div>
                              <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">
                                →
                              </span>
                            </div>

                            <h3 className="mt-4 text-2xl font-semibold text-slate-900">{page.h1}</h3>
                            <p className="mt-3 text-slate-700">{page.description}</p>

                            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                              Read guide
                              <span className="transition group-hover:translate-x-0.5">→</span>
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Ready to pick the right spot?</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Start with open dates, then choose the nearby guide that matches your pace—beaches, dining, sunsets, or day
              trips.
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
      </section>
    </main>
  );
}
