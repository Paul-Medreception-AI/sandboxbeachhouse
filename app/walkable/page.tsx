import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Walkable Vacation Rentals on Anna Maria Island | Sandbox Beach House",
  description:
    "Explore walkable, no-car-needed vacation planning for Anna Maria Island—beach access, dining nearby, and easy island exploring from Sandbox Beach House.",
};

const highlights = [
  {
    title: "Beach in minutes",
    description: "Walk to the Gulf for morning swims, sunset strolls, and quick sand-to-shower resets.",
    badge: "Walkable",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    icon: "🏖️",
    href: "/location",
    cta: "See location",
  },
  {
    title: "Dining & coffee nearby",
    description: "Skip the parking stress—grab food on foot and keep your vacation rhythm simple.",
    badge: "Local",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    icon: "🍽️",
    href: "/faq",
    cta: "Read FAQ",
  },
  {
    title: "Pool breaks between outings",
    description: "Walkable days feel better with a private pool reset when the sun’s at its strongest.",
    badge: "Pool",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-200/70",
    iconBgClass: "bg-amber-700",
    icon: "☀️",
    href: "/pool",
    cta: "Pool pages",
  },
  {
    title: "Photos first",
    description: "Preview the outdoor living setup, backyard vibe, and the spaces you’ll actually use every day.",
    badge: "Gallery",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-200/70",
    iconBgClass: "bg-indigo-700",
    icon: "📸",
    href: "/photos",
    cta: "Browse photos",
  },
] as const;

export default function WalkablePage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Walkability &amp; no-car-needed stays</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Walkable Vacation Planning</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            <p>
              Walkable stays make Anna Maria Island feel effortless: beach time without driving, easy dinner plans, and more
              vacation hours spent outside.
            </p>
            <p>
              SandboxBeachHouse.com keeps the vibe relaxed and family-friendly—perfect for guests who want a simple,
              walkable rhythm with pool breaks built in.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/location"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Location Details
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-60 ${item.blobClass}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${item.iconBgClass}`}>
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${item.badgeClass}`}>
                        {item.badge}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-slate-700">{item.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                    {item.cta}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Make your week feel effortless</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Walk to the beach, come back for a pool reset, then head out again. Less driving, fewer decisions, better days.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </Link>
              <Link
                href="/pool"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Pool Pages
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
