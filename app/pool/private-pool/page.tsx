import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { POOL_PAGES } from "../content";

const page = POOL_PAGES.find((p) => p.slug === "private-pool");

export const metadata: Metadata = page
  ? {
      title: page.metaTitle,
      description: page.metaDescription,
    }
  : {
      title: "Pool & Outdoor Living | Sandbox Beach House",
      description:
        "Explore pool and outdoor-living highlights at Sandbox Beach House on Anna Maria Island.",
    };

export default function PrivatePoolPage() {
  if (!page) {
    notFound();
  }

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-sm text-slate-600">
            <Link href="/" className="font-semibold text-slate-900 hover:text-sky-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/pool" className="font-semibold text-slate-900 hover:text-sky-900">
              Pool
            </Link>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 ring-1 ring-slate-200">
              Pool highlight
            </p>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
              Private pool
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className="mt-1 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-700 text-white shadow-sm">
              <span className="text-xl">🏖️</span>
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
              <h2 className="text-2xl font-semibold text-slate-900">Sandbox Beach House vibe</h2>
              <div className="mt-4 space-y-3 text-lg text-slate-700">
                {page.brandPositioning.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Anna Maria Island context</h2>
              <ul className="mt-4 space-y-2 text-lg text-slate-700">
                {page.localContext.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900">Why guests love it</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {page.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-900 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Explore more</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.internalLinks.map((link) => (
                  <Link
                    key={link.href}
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
                  href="/photos"
                  className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Browse Photos
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
