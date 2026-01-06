import { sendInquiry } from "@/app/actions/sendInquiry";

import InquiryForm from "@/components/InquiryForm";
import TrackedLink from "@/components/TrackedLink";

export default function AvailabilityPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Availability & Booking</h1>

          <p className="text-lg mb-10">
            Sandbox Beach House books quickly, especially during peak season.
            Availability is kept up to date through our primary booking platform.
          </p>

          <div className="space-y-8 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-2">How to Check Availability</h2>
              <p>
                The fastest way to see available dates is through our VRBO
                calendar, which reflects real-time availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Book Direct & Save</h2>
              <p>
                Booking directly may reduce platform fees and allows direct
                communication regarding your stay. If you’re interested in
                booking direct, simply contact us with your preferred dates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">What Happens After Booking</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmation and check-in details are sent promptly</li>
                <li>Property manager handles arrival and support</li>
                <li>Same experience — just simpler</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex gap-4 flex-wrap">
            <TrackedLink
              href="https://www.vrbo.com/4984875ha"
              eventLabel="VRBO Availability"
              className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800"
            >
              View VRBO Availability
            </TrackedLink>

            <a
              href="#inquiry"
              className="border border-black px-8 py-4 rounded-md font-semibold hover:bg-black hover:text-white"
            >
              Contact Us to Book Direct
            </a>
          </div>

          <div id="inquiry" className="mt-14">
            <p className="text-gray-600 text-sm max-w-xl">
              For fastest confirmation, availability is synced with VRBO.
              Prefer booking direct? Send us your dates and we’ll confirm options.
            </p>
            <InquiryForm action={sendInquiry} />
          </div>
        </div>
      </section>
    </main>
  );
}
