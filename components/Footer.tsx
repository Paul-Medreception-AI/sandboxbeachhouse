import Link from "next/link";

import { locations } from "@/lib/locations";

const brand = {
  name: "Sandbox Beach House",
  tagline: "Relaxed, family-friendly beach stays with a flexible vibe.",
  policy: "Dogs 35 lbs or less allowed.",
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{brand.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{brand.tagline}</p>
            <p className="mt-3 text-sm text-slate-600">{brand.policy}</p>
            <Link
              href="/availability"
              className="mt-6 inline-flex rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Check Availability
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Locations</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link className="hover:text-slate-900 hover:underline" href={`/locations/${location.slug}/`}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                <Link className="hover:text-slate-900 hover:underline" href="/walkable">
                  Walkable stays
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900 hover:underline" href="/pool">
                  Pool pages
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900 hover:underline" href="/pet-friendly">
                  Pet-friendly stays
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900 hover:underline" href="/locations/">
                  Location guides
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900 hover:underline" href="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Sandbox Beach House · Holmes Beach, FL
        </div>
      </div>
    </footer>
  );
}
