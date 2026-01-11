import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { getPetFriendlyPage } from "@/app/pet-friendly/data";

export function getPetFriendlyMetadata(slug: string): Metadata {
  const page = getPetFriendlyPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/pet-friendly/${page.slug}`,
      type: "article",
      images: [
        {
          url: "/Front.webp",
          width: 1200,
          height: 630,
          alt: "Sandbox Beach House",
        },
      ],
    },
  };
}

export default function PetFriendlyTopic({ slug }: { slug: string }) {
  const page = getPetFriendlyPage(slug);
  if (!page) notFound();

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-[#103780]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#103780]">
              Pet-friendly Anna Maria Island
            </p>
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900">
              Dogs ≤ 35 lbs
            </p>
          </div>
          <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">{page.h1}</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            {page.painPoint.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-[#103780] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              Check Availability
            </Link>
            <Link
              href="/pet-friendly"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              All Pet-Friendly Guides
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Location Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">How Sandbox Beach House solves it</h2>
            <div className="mt-4 space-y-4 text-slate-700">
              {page.howWeSolve.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="list-disc space-y-2 pl-6">
                {page.howWeSolve.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{page.localContext.heading}</h2>
            <div className="mt-4 space-y-4 text-lg text-slate-700">
              {page.localContext.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Helpful links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.internalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">{page.cta}</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Check your dates first, then plan pet-friendly beach time with clear rules and an easy home base.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Availability
              </Link>
              <Link
                href="/pet-friendly"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Pet-Friendly Guides
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
