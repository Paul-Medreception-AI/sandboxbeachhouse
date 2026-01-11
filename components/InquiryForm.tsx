"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type InquiryFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  prefillDates?: string;
};

export default function InquiryForm({ action, prefillDates }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const datesInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!datesInputRef.current) return;
    if (prefillDates === undefined) return;
    datesInputRef.current.value = prefillDates;
  }, [prefillDates]);

  return (
    <form
      action={action}
      className="max-w-xl mx-auto space-y-4"
      onSubmit={() => {
        setSubmitted(true);

        try {
          window.dataLayer = window.dataLayer ?? [];
          window.dataLayer.push({
            event: "direct_inquiry",
            event_category: "booking",
            event_label: "Direct Inquiry Submitted",
          });

          window.gtag?.("event", "direct_inquiry", {
            event_category: "booking",
            event_label: "Direct Inquiry Submitted",
          });
        } catch {
          // ignore
        }
      }}
    >
      <input
        name="name"
        placeholder="Your name"
        required
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        ref={datesInputRef}
        name="dates"
        placeholder="Preferred dates"
        className="w-full border px-4 py-3 rounded-md"
      />
      <input
        name="guests"
        placeholder="Number of guests"
        className="w-full border px-4 py-3 rounded-md"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md font-semibold"
      >
        Request Availability
      </button>

      {submitted && (
        <p className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600">
          <span aria-hidden="true">✔</span>
          Submission received! We&apos;ll reply shortly.
        </p>
      )}
    </form>
  );
}
