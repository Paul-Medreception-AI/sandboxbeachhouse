import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "FAQ | Sandbox Beach House",
  description:
    "Frequently asked questions about booking, location, pets, check-in, and availability at Sandbox Beach House in Holmes Beach.",
};

export default function FAQPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>

          <FAQ
            q="Where is Sandbox Beach House located?"
            a="Sandbox Beach House is located in Holmes Beach on Anna Maria Island, Florida, just steps from the Gulf of Mexico in a quiet residential area."
          />

          <FAQ
            q="How close is the beach?"
            a="The beach is approximately a one-minute walk from the house, with no major roads to cross."
          />

          <FAQ
            q="How do I check availability?"
            a={
              <span>
                Check availability on our <Link href="/availability" className="font-semibold hover:underline">availability page</Link>. The
                fastest way to confirm real-time availability is through our VRBO calendar. You may also contact us
                directly with your preferred dates.
              </span>
            }
          />

          <FAQ
            q="Is booking direct allowed?"
            a="Yes. You may inquire directly about availability and pricing. Booking direct can reduce platform fees and allows direct communication."
          />

          <FAQ
            q="Is the home pet-friendly?"
            a="Yes, well-behaved dogs are welcome. Please inquire about any restrictions before booking."
          />

          <FAQ q="Does the house have a pool?" a="Yes. Sandbox Beach House features a private pool exclusively for guests." />

          <FAQ
            q="What is the check-in and check-out process?"
            a="Check-in details and access instructions are provided prior to arrival. The property manager is available for support during your stay."
          />

          <FAQ
            q="Who manages the property?"
            a="The home is professionally managed to ensure a smooth arrival, clean accommodations, and responsive support."
          />

          <div className="mt-14">
            <Link
              href="/availability"
              className="inline-block bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FAQ({ q, a }: { q: string; a: ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{q}</h2>
      <p className="text-gray-700 text-lg">{a}</p>
    </div>
  );
}
