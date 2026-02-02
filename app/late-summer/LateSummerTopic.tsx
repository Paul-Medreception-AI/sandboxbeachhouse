import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getLateSummerPage, lateSummerPages } from "./data";

const ACCENTS = [
  {
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    ringClass: "hover:border-amber-200",
  },
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

export function getLateSummerMetadata(slug: string): Metadata {
  const page = getLateSummerPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export function getLateSummerSlugs() {
  return lateSummerPages.map((page) => page.slug);
}

export default function LateSummerTopic({ slug }: { slug: string }) {
  const page = getLateSummerPage(slug);
  if (!page) return notFound();

  const accent = ACCENTS[slugToAccentIndex(page.slug)];

  return (
    <main className="bg-gradient-to-b from-amber-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass}`} />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/late-summer/" className="hover:text-slate-700">
                Late Summer
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{page.h1}</span>
            </div>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 ring-1 ring-slate-200">
              July to September
            </p>
            <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {page.badge}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className={`mt-1 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm ${accent.iconBgClass}`}>
              <span className="text-xl">\u2600\ufe0f</span>
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
              className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-amber-900/10 transition hover:bg-amber-800"
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
              <h2 className="text-2xl font-semibold text-slate-900">Best for</h2>
              <p className="mt-4 text-lg text-slate-700">{page.focus}</p>
            </section>

            <section className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${accent.ringClass}`}>
              <div className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl opacity-30 ${accent.blobClass}`} />
              <h2 className="text-2xl font-semibold text-slate-900">Highlights</h2>
              <ul className="mt-4 grid gap-3 text-lg text-slate-700 md:grid-cols-2">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-amber-700">\u2714</span>
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
                {page.internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-amber-200 hover:bg-amber-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-amber-900 p-8 text-white shadow-sm">
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
