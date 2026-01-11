"use client";

import { useEffect, useMemo, useState } from "react";

type AvailabilityOk = {
  ok: true;
  propertyId: number;
  sourceUrl: string;
  fetchedAt: string;
  durationMs: number;
  blockedDates: string[];
  blockedRanges: Array<{ start: string; end: string }>;
};

type AvailabilityErr = {
  ok: false;
  message: string;
  status?: number;
};

type AvailabilityResponse = AvailabilityOk | AvailabilityErr;

type CalendarSelection = {
  startIso: string | null;
  endIso: string | null;
};

type AvailabilityCalendarProps = {
  selection?: CalendarSelection;
  onSelectionChange?: (selection: CalendarSelection) => void;
};

type Status =
  | { state: "loading" }
  | { state: "ready"; data: AvailabilityOk }
  | { state: "error"; message: string };

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function isoDateFromParts(year: number, monthIndex: number, day: number) {
  return `${year}-${pad2(monthIndex + 1)}-${pad2(day)}`;
}

function monthLabel(year: number, monthIndex: number) {
  return new Date(year, monthIndex, 1).toLocaleString(undefined, { month: "long", year: "numeric" });
}

function daysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function startWeekday(year: number, monthIndex: number) {
  return new Date(year, monthIndex, 1).getDay();
}

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function compareIso(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function isBetweenInclusive(value: string, start: string, end: string) {
  return compareIso(value, start) >= 0 && compareIso(value, end) <= 0;
}

export default function AvailabilityCalendar({ selection, onSelectionChange }: AvailabilityCalendarProps) {
  const [status, setStatus] = useState<Status>({ state: "loading" });

  const [internalSelection, setInternalSelection] = useState<CalendarSelection>({
    startIso: null,
    endIso: null,
  });

  const activeSelection = selection ?? internalSelection;

  function setSelection(next: CalendarSelection) {
    if (onSelectionChange) onSelectionChange(next);
    if (!selection) setInternalSelection(next);
  }

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch("/api/availability", { method: "GET" });
        const json = (await res.json()) as AvailabilityResponse;

        if (!res.ok || !json.ok) {
          const message = (json as AvailabilityErr)?.message || "Failed to load availability.";
          if (!cancelled) setStatus({ state: "error", message });
          return;
        }

        if (!cancelled) setStatus({ state: "ready", data: json });
      } catch {
        if (!cancelled) setStatus({ state: "error", message: "Failed to load availability." });
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const blockedSet = useMemo(() => {
    if (status.state !== "ready") return new Set<string>();
    return new Set(status.data.blockedDates);
  }, [status]);

  const checkInSet = useMemo(() => {
    if (status.state !== "ready") return new Set<string>();
    return new Set(status.data.blockedRanges.map((r) => r.start));
  }, [status]);

  const checkOutSet = useMemo(() => {
    if (status.state !== "ready") return new Set<string>();
    return new Set(status.data.blockedRanges.map((r) => r.end));
  }, [status]);

  const fullyBlockedSet = useMemo(() => {
    const set = new Set<string>();
    if (status.state !== "ready") return set;
    for (const d of status.data.blockedDates) {
      if (checkInSet.has(d)) continue;
      if (checkOutSet.has(d)) continue;
      set.add(d);
    }
    return set;
  }, [status, checkInSet, checkOutSet]);

  const todayIso = useMemo(() => {
    const d = new Date();
    return isoDateFromParts(d.getFullYear(), d.getMonth(), d.getDate());
  }, []);

  const months = useMemo(() => {
    const now = new Date();
    const list: Array<{ year: number; monthIndex: number }> = [];
    for (let i = 0; i < 12; i += 1) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      list.push({ year: d.getFullYear(), monthIndex: d.getMonth() });
    }
    return list;
  }, []);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Availability calendar</h2>
          <p className="mt-1 text-sm text-slate-600">Blocked dates are shown in navy.</p>
        </div>

        {status.state === "ready" ? (
          <div className="text-xs text-slate-500">
            Updated {new Date(status.data.fetchedAt).toLocaleString()} ({Math.round(status.data.durationMs)}ms)
          </div>
        ) : null}
      </div>

      {status.state === "loading" ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">Loading…</div>
      ) : null}

      {status.state === "error" ? (
        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-900">{status.message}</div>
      ) : null}

      {status.state === "ready" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {months.map(({ year, monthIndex }) => (
            <MonthCard
              key={`${year}-${monthIndex}`}
              year={year}
              monthIndex={monthIndex}
              blockedSet={blockedSet}
              fullyBlockedSet={fullyBlockedSet}
              checkInSet={checkInSet}
              checkOutSet={checkOutSet}
              todayIso={todayIso}
              selection={activeSelection}
              onSelect={(iso: string) => {
                if (status.state !== "ready") return;
                if (fullyBlockedSet.has(iso)) return;

                const start = activeSelection.startIso;
                const end = activeSelection.endIso;

                if (!start || (start && end)) {
                  setSelection({ startIso: iso, endIso: null });
                  return;
                }

                if (compareIso(iso, start) < 0) {
                  setSelection({ startIso: iso, endIso: null });
                  return;
                }

                setSelection({ startIso: start, endIso: iso });
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[#103780]/15 ring-1 ring-[#103780]/30" />
          Reserved / unavailable
        </div>
        <div className="flex items-center gap-2">
          <span className="relative h-3 w-3 overflow-hidden rounded-sm ring-1 ring-[#103780]/30">
            <span className="absolute inset-0 bg-[#103780]/20" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
            <span className="absolute inset-0 bg-[#103780]/20" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
          </span>
          Check-in / check-out day (half-day)
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-white ring-1 ring-slate-200" />
          Available
        </div>
      </div>
    </section>
  );
}

function MonthCard({
  year,
  monthIndex,
  blockedSet,
  fullyBlockedSet,
  checkInSet,
  checkOutSet,
  todayIso,
  selection,
  onSelect,
}: {
  year: number;
  monthIndex: number;
  blockedSet: Set<string>;
  fullyBlockedSet: Set<string>;
  checkInSet: Set<string>;
  checkOutSet: Set<string>;
  todayIso: string;
  selection: { startIso: string | null; endIso: string | null };
  onSelect: (iso: string) => void;
}) {
  const totalDays = daysInMonth(year, monthIndex);
  const offset = startWeekday(year, monthIndex);

  const cells: Array<{ day: number | null; iso: string | null }> = [];
  for (let i = 0; i < offset; i += 1) cells.push({ day: null, iso: null });
  for (let day = 1; day <= totalDays; day += 1) {
    const iso = isoDateFromParts(year, monthIndex, day);
    cells.push({ day, iso });
  }
  while (cells.length % 7 !== 0) cells.push({ day: null, iso: null });

  const label = monthLabel(year, monthIndex);

  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{label}</h3>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-xs text-slate-500">
        {weekdayLabels.map((d) => (
          <div key={d} className="px-1 py-1 text-center font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((cell, idx) => {
          if (!cell.day || !cell.iso) {
            return <div key={`empty-${idx}`} className="h-9 rounded-lg" />;
          }

          const isBlocked = blockedSet.has(cell.iso);
          const isFullyBlocked = fullyBlockedSet.has(cell.iso);
          const isCheckIn = checkInSet.has(cell.iso);
          const isCheckOut = checkOutSet.has(cell.iso);
          const isToday = cell.iso === todayIso;

          const selectionStart = selection.startIso;
          const selectionEnd = selection.endIso;
          const isSelectedStart = selectionStart === cell.iso;
          const isSelectedEnd = selectionEnd === cell.iso;
          const isInSelectedRange =
            Boolean(selectionStart && selectionEnd && isBetweenInclusive(cell.iso, selectionStart!, selectionEnd!));
          const showSelectionOverlay = isSelectedStart || isSelectedEnd || isInSelectedRange;

          const base = "relative h-9 rounded-lg text-center text-sm leading-9";
          const open = "bg-white text-slate-900 ring-1 ring-slate-200";
          const blocked = "bg-[#103780]/15 text-[#103780] ring-1 ring-[#103780]/30";
          const selected = "bg-[#103780] text-white ring-2 ring-[#103780] shadow-sm font-semibold";
          const inRange = "bg-[#103780]/10 ring-2 ring-[#103780]/30";
          const today = "ring-2 ring-[#103780]";
          const disabled = "opacity-50 cursor-not-allowed";

          const clickable = !isFullyBlocked;
          const className = [
            base,
            isFullyBlocked ? blocked : open,
            isInSelectedRange ? inRange : "",
            isSelectedStart || isSelectedEnd ? selected : "",
            isToday ? today : "",
            clickable ? "cursor-pointer hover:bg-[#103780]/5 hover:ring-[#103780]/40" : disabled,
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={cell.iso}
              type="button"
              onClick={() => {
                if (!clickable) return;
                onSelect(cell.iso!);
              }}
              className={className}
              title={
                isFullyBlocked
                  ? "Reserved"
                  : isCheckIn && isCheckOut
                    ? "Check-in / check-out"
                    : isCheckIn
                      ? "Check-in day"
                      : isCheckOut
                        ? "Check-out day"
                        : isBlocked
                          ? "Reserved"
                          : "Available"
              }
            >
              {isCheckOut ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-[2] rounded-lg bg-[#103780]/20"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                />
              ) : null}
              {isCheckIn ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-[2] rounded-lg bg-[#103780]/20"
                  style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                />
              ) : null}
              {showSelectionOverlay ? (
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 z-[5] rounded-lg ${
                    isSelectedStart || isSelectedEnd ? "bg-[#103780]" : "bg-[#103780]/15"
                  }`}
                />
              ) : null}
              <span className="relative z-10">{cell.day}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
