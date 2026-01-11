import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { getPetFriendlyPage, petFriendlyPages } from "@/app/pet-friendly/data";

export function generateStaticParams() {
  return petFriendlyPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getPetFriendlyPage(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default function PetFriendlyTopicPage({ params }: { params: { slug: string } }) {
  const page = getPetFriendlyPage(params.slug);
  if (!page) notFound();

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#103780]">
            Pet-Friendly Anna Maria Island
          </div>

          <h1 className="mb-6 text-4xl font-bold">{page.h1}</h1>

          <div className="space-y-5 text-lg">
            {page.painPoint.map((p) => (
              <p key={p} className="text-slate-700">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">How Sandbox Beach House solves it</h2>
            <div className="mt-4 space-y-4 text-slate-700">
              {page.howWeSolve.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="list-disc pl-6 space-y-2">
                {page.howWeSolve.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">{page.localContext.heading}</h2>
            <div className="mt-4 space-y-4 text-lg text-slate-700">
              {page.localContext.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Helpful links</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.internalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg border border-slate-200 px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg font-semibold text-slate-900">{page.cta}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/availability" className="rounded-md bg-black px-8 py-4 font-semibold text-white hover:bg-gray-800">
                Check Availability
              </Link>
              <Link
                href="/pet-friendly"
                className="rounded-md border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white"
              >
                Browse Pet-Friendly Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
