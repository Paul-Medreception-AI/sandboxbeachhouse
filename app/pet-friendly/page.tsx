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
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-6 text-4xl font-bold">Pet-Friendly Beach House on Anna Maria Island (Small Dogs Welcome)</h1>

          <p className="mb-10 max-w-3xl text-lg">
            If you&apos;ve ever filtered “pets allowed” and still ended up guessing about weight limits, hidden fees, or confusing rules, you&apos;re not
            alone. Sandbox Beach House keeps it simple: dogs 35 lbs or less are welcome — and we make the stay clean, calm, and easy.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {petFriendlyPages.map((page) => (
              <Link
                key={page.slug}
                href={`/pet-friendly/${page.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#103780]">Pet-Friendly Guide</div>
                <div className="mt-2 text-xl font-bold text-slate-900">{page.h1}</div>
                <p className="mt-2 text-sm text-slate-600">{page.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/availability" className="rounded-md bg-black px-8 py-4 font-semibold text-white hover:bg-gray-800">
              Check Availability
            </Link>
            <Link
              href="/location"
              className="rounded-md border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white"
            >
              See Location
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
