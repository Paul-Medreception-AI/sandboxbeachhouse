import { locations } from "@/lib/locations";
import Link from "next/link";

export const metadata = {
  title: "Anna Maria Island Location Guides | Sandbox Beach House",
  description:
    "Explore Anna Maria Island, Bradenton Beach, Holmes Beach, and nearby coastal spots. Find the best beach areas for your Sandbox Beach House stay.",
};

export default function LocationsIndexPage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Location guides</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Anna Maria Island Location Guides</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Explore the best beach towns, neighborhoods, and day-trip spots around Anna Maria Island. Each guide helps
            you match the vibe you want with a relaxed, family-friendly stay near the Gulf.
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
              Our Exact Location
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}/`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl" />
                <div className="relative">
                  <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-900">
                    Area guide
                  </p>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{location.name}</h2>
                  <p className="mt-2 text-sm text-slate-600">{location.highlights.vibe}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#103780]">
                    View guide
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
