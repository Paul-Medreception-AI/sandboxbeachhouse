import { longStayTopics } from "@/lib/long-stays";

export const metadata = {
  title: "Long Stay Rentals on Anna Maria Island | Sandbox Beach House",
  description:
    "Browse long-stay guides for snowbirds, monthly rentals, and winter stays on Anna Maria Island. Pet-friendly and relaxed for seasonal living.",
};

export default function LongStaysIndexPage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Long stays on Anna Maria Island
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Long Stay Rentals on Anna Maria Island</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Planning a 30 to 180 day stay? These guides cover snowbird travel, monthly rentals, and long-term beach
            living with a relaxed, family-friendly vibe. Dogs 35 lbs or less are welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </a>
            <a
              href="/locations"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Locations
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {longStayTopics.map((topic, index) => {
              const accent = [
                "from-sky-100 to-white",
                "from-emerald-100 to-white",
                "from-amber-100 to-white",
                "from-indigo-100 to-white",
              ][index % 4];
              return (
                <a
                  key={topic.slug}
                  href={`/long-stays/${topic.slug}/`}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-70`} />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Long stay guide</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{topic.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">Seasonal living on Anna Maria Island.</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                      Read guide <span className="transition group-hover:translate-x-0.5">→</span>
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Ready for a longer island stay?</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Build your season around beach mornings, pool afternoons, and a calm pace that feels like home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </a>
              <a
                href="/photos"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Photos
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
