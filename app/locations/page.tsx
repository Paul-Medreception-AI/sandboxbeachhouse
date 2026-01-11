import { locations } from "@/lib/locations";

export const metadata = {
  title: "Anna Maria Island Location Guides | Sandbox Beach House",
  description:
    "Explore Anna Maria Island, Bradenton Beach, Holmes Beach, and nearby coastal spots. Find the best beach areas for your Sandbox Beach House stay.",
};

export default function LocationsIndexPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-6 text-4xl font-bold">Anna Maria Island Location Guides</h1>
          <p className="mb-10 max-w-3xl text-lg">
            Explore the best beach towns, neighborhoods, and day-trip spots around Anna Maria Island. Each guide helps
            you match the vibe you want with a relaxed, family-friendly stay near the Gulf.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <a
                key={location.slug}
                href={`/locations/${location.slug}/`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-800 hover:border-slate-300 hover:bg-white"
              >
                <h2 className="text-lg font-semibold">{location.name}</h2>
                <p className="mt-2 text-sm text-slate-600">{location.highlights.vibe}</p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/availability"
              className="inline-flex rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
