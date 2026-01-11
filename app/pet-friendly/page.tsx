import type { Metadata } from "next";

import Link from "next/link";

import { petFriendlyPages } from "@/app/pet-friendly/data";

export const metadata: Metadata = {
  title: "Pet-Friendly Beach House on Anna Maria Island | Sandbox Beach House",
  description:
    "Explore pet-friendly travel guides for Anna Maria Island and Bradenton Beach. Sandbox Beach House welcomes small dogs 35 lbs or less.",
};

export default function PetFriendlyHubPage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-[#103780]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#103780]">
              Pet-friendly guides
            </p>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
              Dogs ≤ 35 lbs
            </p>
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-900">
              Clean & easy rules
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Pet-Friendly Beach House on Anna Maria Island (Small Dogs Welcome)
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            If you&apos;ve ever filtered “pets allowed” and still ended up guessing about weight limits, hidden fees, or confusing rules, you&apos;re not
            alone. Sandbox Beach House keeps it simple: dogs 35 lbs or less are welcome — and we make the stay clean, calm, and easy.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-[#103780] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              Check Availability
            </Link>
            <Link
              href="/location"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              See Location
            </Link>
            <Link
              href="/pool"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Pool Pages
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {petFriendlyPages.map((page) => (
              <Link
                key={page.slug}
                href={`/pet-friendly/${page.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <p className="inline-flex rounded-full bg-[#103780]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#103780]">
                      Pet-friendly guide
                    </p>
                    <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                  </div>
                  <div className="mt-4 text-xl font-bold text-slate-900">{page.h1}</div>
                  <p className="mt-2 text-sm text-slate-600">{page.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#103780]">
                    Read guide
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Bring your pup — without the guesswork</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Lock in your dates, then use these guides to plan walkable beach time, pool resets, and dog-friendly routines.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Availability
              </Link>
              <Link
                href="/locations"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Locations
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
