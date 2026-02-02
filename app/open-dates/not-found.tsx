import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function OpenDatesNotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white">
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 text-6xl">📅</div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900">Date Not Found</h1>
          <p className="mb-8 text-lg text-slate-600">
            This specific date range isn't available or doesn't exist. Browse all our open dates below.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/open-dates"
              className="rounded-full bg-[#103780] px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2b63]"
            >
              View All Open Dates
            </Link>
            <Link
              href="/open-dates/last-minute"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Last-Minute Deals
            </Link>
            <Link
              href="/availability"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Check Calendar
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">Popular Searches</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/open-dates"
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-2 text-2xl">📆</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">All Available Dates</h3>
              <p className="text-sm text-slate-600">Browse all open weeks</p>
            </Link>
            <Link
              href="/open-dates/last-minute"
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-2 text-2xl">🔥</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Last-Minute</h3>
              <p className="text-sm text-slate-600">Available within 30 days</p>
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-2 text-2xl">🏠</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Home</h3>
              <p className="text-sm text-slate-600">Back to homepage</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
