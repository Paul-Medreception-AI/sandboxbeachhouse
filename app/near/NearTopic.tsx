import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNearPage, nearPages } from "./data";

const ACCENTS = [
  {
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    ringClass: "hover:border-sky-200",
  },
  {
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    ringClass: "hover:border-emerald-200",
  },
  {
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    ringClass: "hover:border-amber-200",
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

export function getNearMetadata(slug: string): Metadata {
  const page = getNearPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export function getNearSlugs() {
  return nearPages.map((page) => page.slug);
}

export default function NearTopic({ slug }: { slug: string }) {
  const page = getNearPage(slug);
  if (!page) return notFound();

  const accent = ACCENTS[slugToAccentIndex(page.slug)];

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass}`} />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/near/" className="hover:text-slate-700">
                Nearby
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{page.h1}</span>
            </div>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 ring-1 ring-slate-200">
              Near Sandbox Beach House
            </p>
            <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {page.badge}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className={`mt-1 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm ${accent.iconBgClass}`}>
              <span className="text-xl">📍</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{page.h1}</h1>
              <div className="mt-5 space-y-4 text-lg text-slate-700">
                {page.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
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
            <Link
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              View Photos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Distance</h2>
              <p className="mt-4 text-lg text-slate-700">{page.distance} from Sandbox Beach House.</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Best for</h2>
              <p className="mt-4 text-lg text-slate-700">{page.bestFor}</p>
            </section>

            <section className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${accent.ringClass}`}>
              <div className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl opacity-30 ${accent.blobClass}`} />
              <h2 className="text-2xl font-semibold text-slate-900">Highlights</h2>
              <ul className="mt-4 grid gap-3 text-lg text-slate-700 md:grid-cols-2">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-sky-700">{"\u2714"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Planning tips</h2>
              <div className="mt-4 space-y-3 text-lg text-slate-700">
                {page.tips.map((tip) => (
                  <p key={tip}>{tip}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Helpful links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.internalLinks.map((link, index) => (
                  <Link
                    key={`${link.href}-${link.label}-${index}`}
                    href={link.href}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
              <p className="text-lg font-semibold">{page.cta}</p>
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
