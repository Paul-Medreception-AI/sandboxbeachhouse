import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { experiencePages, getExperiencePage } from "./data";

const ACCENTS = [
  {
    badge: "Romantic getaway",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    highlightCardClass: "border-sky-200 bg-sky-50 text-sky-900",
  },
  {
    badge: "Couples retreat",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-200/70",
    iconBgClass: "bg-indigo-700",
    highlightCardClass: "border-indigo-200 bg-indigo-50 text-indigo-900",
  },
  {
    badge: "Sunset plans",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    highlightCardClass: "border-amber-200 bg-amber-50 text-amber-900",
  },
  {
    badge: "Dogs ≤ 35 lbs",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    highlightCardClass: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
] as const;

function slugToAccentIndex(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % 2147483647;
  }
  return hash % ACCENTS.length;
}

export function getExperienceMetadata(slug: string): Metadata {
  const page = getExperiencePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export function getExperienceSlugs() {
  return experiencePages.map((p) => p.slug);
}

export default function ExperienceTopic({ slug }: { slug: string }) {
  const page = getExperiencePage(slug);
  if (!page) return notFound();

  const accent = ACCENTS[slugToAccentIndex(page.slug)];

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass}`} />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/experiences/" className="hover:text-slate-700">
                Experiences
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{page.h1}</span>
            </div>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 ring-1 ring-slate-200">
              Experience guide
            </p>
            <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {accent.badge}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className={`mt-1 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm ${accent.iconBgClass}`}>
              <span className="text-xl">💙</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{page.h1}</h1>
              <div className="mt-5 space-y-4 text-lg text-slate-700">
                {page.opening.map((p) => (
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
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              View Photos
            </Link>
            <Link
              href="/experiences"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Browse Experiences
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Sandbox Beach House positioning</h2>
              <div className="mt-4 space-y-3 text-lg text-slate-700">
                {page.brandPositioning.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {page.brandPositioning.bullets.map((b) => (
                  <div key={b} className={`rounded-xl border p-4 text-sm font-medium shadow-sm ${accent.highlightCardClass}`}>
                    {b}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{page.localContext.heading}</h2>
              <div className="mt-4 space-y-4 text-lg text-slate-700">
                {page.localContext.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Helpful links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.internalLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-sky-200 hover:bg-sky-50"
                  >
                    {l.label}
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
                  href="/experiences"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Browse Guides
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
