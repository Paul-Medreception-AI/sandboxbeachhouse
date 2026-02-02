import Link from "next/link";

const quickLinks = [
  { href: "/availability", label: "Check availability", hint: "See open dates right away." },
  { href: "/open-dates", label: "Open dates", hint: "Browse flexible openings." },
  { href: "/late-summer", label: "Late-summer guides", hint: "July–September planning tips." },
  { href: "/guide", label: "Local guide", hint: "Best beaches, food, and activities." },
  { href: "/photos", label: "Photo tour", hint: "Preview the home and pool." },
  { href: "/", label: "Back to home", hint: "Start over from the main page." },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-amber-50 text-slate-900">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200/70 blur-3xl" />

      <section className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-20 pt-24">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">404</p>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">This page washed away with the tide.</h1>
          <p className="max-w-2xl text-lg text-slate-700">
            The link might be outdated or the address may have changed. Pick a new path below and we will get you back to
            planning your stay.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/open-dates"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Browse Open Dates
            </Link>
            <Link
              href="/availability"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Check Availability
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-200/40 blur-2xl transition group-hover:bg-amber-200/40" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-base font-semibold text-slate-900">{link.label}</p>
                  <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{link.hint}</p>
              </div>
            </Link>
          ))}
        </div>

        <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Need a fast answer?</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Start with open dates, then use the late-summer guides to match your pace: quiet weeks, family routines, or
            sunset-heavy stays.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/late-summer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Late-Summer Guides
            </Link>
            <Link
              href="/guide"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Local Guide
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
