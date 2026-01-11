import type { ReactNode } from "react";
import { Suspense } from "react";

import Image from "next/image";

import AvailabilityPlanner from "@/components/AvailabilityPlanner";
import TrackedLink from "@/components/TrackedLink";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[70vh] min-h-[520px]">
        <Image
          src="/Backyard.avif"
          alt="Sandbox Beach House backyard"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-6 text-white">
            <h1 className="mb-4 text-4xl font-bold drop-shadow-lg md:text-5xl">
              The Sandbox Cottage — Steps to the Beach
            </h1>
            <p className="mb-6 max-w-2xl text-lg drop-shadow md:text-xl">
              The Sandbox is a one-of-a-kind 2BR/1.5BA Holmes Beach retreat with a private pool, unique backyard, and
              unbeatable walk-to-beach location. Sleeps 6 with a queen sleeper sofa.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <TrackedLink
                href="https://www.vrbo.com/4984875ha"
                eventLabel="VRBO Calendar"
                className="bg-white text-black px-6 py-3 rounded-md font-semibold border"
              >
                View VRBO Calendar
              </TrackedLink>
              <a
                href="#availability"
                className="bg-black text-white px-6 py-3 rounded-md font-semibold"
              >
                Book Direct &amp; Save
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg font-medium">⭐⭐⭐⭐⭐ Highly rated on Airbnb &amp; VRBO</p>
          <p className="mt-2 text-gray-600">Guests consistently book The Sandbox for its location, privacy, and unique vibe.</p>
        </div>
      </section>

      <section id="direct" className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-3xl font-bold">Why Book Direct with Sandbox Beach House</h2>
          <ul className="grid gap-6 text-lg md:grid-cols-2">
            <li>✔ Lower total cost — no platform service fees</li>
            <li>✔ Direct communication with the owner</li>
            <li>✔ Same home, same rules, better value</li>
            <li>✔ Priority access to open weeks</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">What Makes The Sandbox Different</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Feature title="Private Heated Pool">Relax in your own secluded backyard oasis.</Feature>
            <Feature title="Steps to the Beach">No busy roads — walk straight to the Gulf.</Feature>
            <Feature title="Unique Backyard Vibe">
              Former live-music venue with character you won’t find elsewhere.
            </Feature>
            <Feature title="Walkable Location">Shops, dining, and the free island trolley nearby.</Feature>
            <Feature title="Dog Friendly">Bring your well-behaved pup along for the trip.</Feature>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Photo src="/Front.webp" alt="Exterior" />
            <Photo src="/Backyard.avif" alt="Backyard" />
            <Photo src="/61108cdc.jpg" alt="House" />
            <Photo src="/w1918h1079x0y1-13973549.avif" alt="Property" />
            <Photo src="/64de59fb.webp" alt="Sandbox Beach House" />
            <Photo src="/6972a927.avif" alt="Sandbox Beach House" />
          </div>
        </div>
      </section>

      <section id="availability" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center text-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#103780]">Plan Your Stay</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Live Availability & Direct Booking</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base text-slate-600 sm:text-lg">
              Pick your ideal dates right on this page. We sync daily with our BeachRentals calendar ({`property #140`}) so
              you always see the latest availability before booking direct or through VRBO.
            </p>
          </div>
          <Suspense fallback={<div className="rounded-3xl border border-slate-200 bg-white/50 p-10 text-center text-slate-500">Loading calendar…</div>}>
            <AvailabilityPlanner />
          </Suspense>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sandbox Beach House · Holmes Beach, FL
      </footer>
    </main>
  );
}

function Feature({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
    </div>
  );
}
