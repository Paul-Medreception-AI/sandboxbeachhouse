"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { sendInquiry } from "@/app/actions/sendInquiry";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import InquiryForm from "@/components/InquiryForm";
import TrackedLink from "@/components/TrackedLink";

type AvailabilityPlannerProps = {
  action?: (formData: FormData) => void | Promise<void>;
};

function formatRange(startIso: string, endIso: string) {
  const start = new Date(`${startIso}T00:00:00`);
  const end = new Date(`${endIso}T00:00:00`);
  const startText = start.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  const endText = end.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  return `${startText} - ${endText}`;
}

function buildVrboUrl({
  startIso,
  endIso,
}: {
  startIso: string;
  endIso: string;
}) {
  const url = new URL("https://www.vrbo.com/4984875ha");
  url.searchParams.set("chkin", startIso);
  url.searchParams.set("chkout", endIso);
  url.searchParams.set("x_pwa", "1");
  return url.toString();
}

function isoToUnixSeconds(value: string) {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const [, yyyy, mm, dd] = m;
  const unixMs = Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd));
  return Math.floor(unixMs / 1000);
}

function buildBeachRentalsUrl({
  startIso,
  endIso,
}: {
  startIso: string;
  endIso: string;
}) {
  const arrive = isoToUnixSeconds(startIso);
  const depart = isoToUnixSeconds(endIso);
  const nights = nightsBetween(startIso, endIso);
  const url = new URL("https://www.beachrentals.mobi/vacation-rentals/checkout/");
  url.searchParams.set("id", "140");
  url.searchParams.set("quote", "yes");
  url.searchParams.set("locid", "1");
  if (arrive) url.searchParams.set("arr", String(arrive));
  if (depart) url.searchParams.set("depart", String(depart));
  if (nights) url.searchParams.set("nights", String(nights));
  url.searchParams.set("persons", "1");
  return url.toString();
}

function nightsBetween(startIso: string, endIso: string) {
  const start = new Date(`${startIso}T00:00:00`);
  const end = new Date(`${endIso}T00:00:00`);
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

function isValidIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

export default function AvailabilityPlanner({ action = sendInquiry }: AvailabilityPlannerProps) {
  const [selectedStartIso, setSelectedStartIso] = useState<string | null>(null);
  const [selectedEndIso, setSelectedEndIso] = useState<string | null>(null);
  const mobileDatesRef = useRef<HTMLDivElement | null>(null);
  const lastAutoScrollKey = useRef<string | null>(null);

  const prefillDates = useMemo(() => {
    if (!selectedStartIso || !selectedEndIso) return "";
    return formatRange(selectedStartIso, selectedEndIso);
  }, [selectedStartIso, selectedEndIso]);

  const vrboUrl = useMemo(() => {
    if (!selectedStartIso || !selectedEndIso) return null;
    return buildVrboUrl({ startIso: selectedStartIso, endIso: selectedEndIso });
  }, [selectedStartIso, selectedEndIso]);

  const beachRentalsUrl = useMemo(() => {
    if (!selectedStartIso || !selectedEndIso) return null;
    return buildBeachRentalsUrl({ startIso: selectedStartIso, endIso: selectedEndIso });
  }, [selectedStartIso, selectedEndIso]);

  const nights = useMemo(() => {
    if (!selectedStartIso || !selectedEndIso) return 0;
    return nightsBetween(selectedStartIso, selectedEndIso);
  }, [selectedStartIso, selectedEndIso]);

  useEffect(() => {
    if (!selectedStartIso || !selectedEndIso) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    const key = `${selectedStartIso}-${selectedEndIso}`;
    if (lastAutoScrollKey.current === key) return;
    lastAutoScrollKey.current = key;
    mobileDatesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedStartIso, selectedEndIso]);

  function setStart(next: string) {
    const iso = next.trim();
    if (!iso) {
      setSelectedStartIso(null);
      setSelectedEndIso(null);
      return;
    }
    if (!isValidIsoDate(iso)) return;
    setSelectedStartIso(iso);
    if (selectedEndIso && selectedEndIso <= iso) {
      setSelectedEndIso(null);
    }
  }

  function setEnd(next: string) {
    const iso = next.trim();
    if (!iso) {
      setSelectedEndIso(null);
      return;
    }
    if (!isValidIsoDate(iso)) return;
    if (!selectedStartIso) {
      setSelectedStartIso(iso);
      setSelectedEndIso(null);
      return;
    }
    if (iso <= selectedStartIso) {
      setSelectedEndIso(null);
      return;
    }
    setSelectedEndIso(iso);
  }

  return (
    <div className="relative">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <AvailabilityCalendar
            selection={{ startIso: selectedStartIso, endIso: selectedEndIso }}
            onSelectionChange={(next) => {
              setSelectedStartIso(next.startIso);
              setSelectedEndIso(next.endIso);
            }}
          />

          <div className="mt-6 lg:hidden" id="inquiry">
            <div ref={mobileDatesRef} className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Your dates</h3>
              <p className="mt-1 text-sm text-slate-600">Pick dates on the calendar or enter them below.</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1 text-sm text-slate-700">
                  <span className="text-xs text-slate-600">Check-in</span>
                  <input
                    type="date"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    value={selectedStartIso ?? ""}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </label>
                <label className="grid gap-1 text-sm text-slate-700">
                  <span className="text-xs text-slate-600">Check-out</span>
                  <input
                    type="date"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    value={selectedEndIso ?? ""}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </label>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-slate-700">
                  {selectedStartIso && selectedEndIso ? (
                    <>
                      <div className="font-semibold text-slate-900">{prefillDates}</div>
                      <div className="text-xs text-slate-600">{nights} night{nights === 1 ? "" : "s"}</div>
                    </>
                  ) : (
                    <div className="text-xs text-slate-600">Select a start date and an end date to see pricing.</div>
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Estimated total</div>
                    <div className="mt-1 text-sm text-slate-600">Pricing will show during checkout.</div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-slate-500">via BeachRentals</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                {beachRentalsUrl ? (
                  <TrackedLink
                    href={beachRentalsUrl}
                    eventLabel={`BeachRentals Booking — ${prefillDates}`}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Book these dates
                  </TrackedLink>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white opacity-50"
                  >
                    Book these dates
                  </button>
                )}

                {vrboUrl ? (
                  <TrackedLink
                    href={vrboUrl}
                    eventLabel={`VRBO Booking — ${prefillDates}`}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Or book on VRBO
                  </TrackedLink>
                ) : null}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Request availability</h3>
              <p className="mt-1 text-sm text-slate-600">Prefer to book direct? Send your dates and we’ll confirm.</p>
              <div className="mt-4">
                <InquiryForm action={action} prefillDates={prefillDates} />
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block" id="inquiry">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Your dates</h3>
              <p className="mt-1 text-sm text-slate-600">Pick dates on the calendar or enter them below.</p>

              <div className="mt-4 grid gap-3">
                <label className="grid gap-1 text-sm text-slate-700">
                  <span className="text-xs text-slate-600">Check-in</span>
                  <input
                    type="date"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    value={selectedStartIso ?? ""}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </label>
                <label className="grid gap-1 text-sm text-slate-700">
                  <span className="text-xs text-slate-600">Check-out</span>
                  <input
                    type="date"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                    value={selectedEndIso ?? ""}
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </label>
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div className="text-sm text-slate-700">
                  {selectedStartIso && selectedEndIso ? (
                    <>
                      <div className="font-semibold text-slate-900">{prefillDates}</div>
                      <div className="text-xs text-slate-600">{nights} night{nights === 1 ? "" : "s"}</div>
                    </>
                  ) : (
                    <div className="text-xs text-slate-600">Select a start date and an end date to see pricing.</div>
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Estimated total</div>
                    <div className="mt-1 text-sm text-slate-600">Pricing will show during checkout.</div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-slate-500">via BeachRentals</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                {beachRentalsUrl ? (
                  <TrackedLink
                    href={beachRentalsUrl}
                    eventLabel={`BeachRentals Booking — ${prefillDates}`}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Book these dates
                  </TrackedLink>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-4 py-3 text-sm font-semibold text-white opacity-50"
                  >
                    Book these dates
                  </button>
                )}

                {vrboUrl ? (
                  <TrackedLink
                    href={vrboUrl}
                    eventLabel={`VRBO Booking — ${prefillDates}`}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Or book on VRBO
                  </TrackedLink>
                ) : null}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Request availability</h3>
              <p className="mt-1 text-sm text-slate-600">Prefer to book direct? Send your dates and we’ll confirm.</p>
              <div className="mt-4">
                <InquiryForm action={action} prefillDates={prefillDates} />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {beachRentalsUrl || vrboUrl ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-2">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-slate-900">{prefillDates}</div>
              <div className="text-xs text-slate-600">{nights} night{nights === 1 ? "" : "s"}</div>
            </div>
            <TrackedLink
              href={beachRentalsUrl ?? vrboUrl ?? "#"}
              eventLabel={`${beachRentalsUrl ? "BeachRentals" : "VRBO"} Booking — ${prefillDates}`}
              className="shrink-0 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Book now
            </TrackedLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
