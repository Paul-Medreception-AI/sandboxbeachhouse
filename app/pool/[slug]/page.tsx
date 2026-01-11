import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { POOL_PAGES } from "../content";

const ACCENTS = [
  {
    badge: "Heated pool",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    highlightCardClass: "border-sky-200 bg-sky-50 text-sky-900",
  },
  {
    badge: "Outdoor living",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    highlightCardClass: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    badge: "Beach rhythm",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    highlightCardClass: "border-amber-200 bg-amber-50 text-amber-900",
  },
  {
    badge: "Family-friendly",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-200/70",
    iconBgClass: "bg-indigo-700",
    highlightCardClass: "border-indigo-200 bg-indigo-50 text-indigo-900",
  },
] as const;

function slugToAccentIndex(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % 2147483647;
  }
  return hash % ACCENTS.length;
}

export const dynamicParams = false;
export const dynamic = "force-static";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return POOL_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = POOL_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      title: "Pool & Outdoor Living | Sandbox Beach House",
      description:
        "Explore pool and outdoor-living highlights at Sandbox Beach House on Anna Maria Island.",
      openGraph: {
        title: "Pool & Outdoor Living | Sandbox Beach House",
        description:
          "Explore pool and outdoor-living highlights at Sandbox Beach House on Anna Maria Island.",
        url: "/pool",
        type: "website",
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

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/pool/${page.slug}`,
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

export default function PoolTopicPage({ params }: PageProps) {
  const page = POOL_PAGES.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  const accent = ACCENTS[slugToAccentIndex(page.slug)];

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl ${accent.blobClass}`} />
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
            <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {accent.badge}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-4">
            <div className={`mt-1 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm ${accent.iconBgClass}`}>
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
                    className={`rounded-xl border p-4 text-sm font-medium shadow-sm ${accent.highlightCardClass}`}
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
