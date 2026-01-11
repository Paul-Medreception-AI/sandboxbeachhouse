import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 86400; // refresh once per day

type RawCalendarDay = {
  Month: number;
  Day: number;
  Year: number;
  Arrive?: string;
  Depart?: string;
};

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function isoDateFromParts(year: number, month: number, day: number) {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function parseMdYToIso(value: string): string | null {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const [, mm, dd, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
}

export async function GET() {
  const propertyId = 140;
  const sourceUrl = `https://rentals.beachrentals.mobi/rns/api/calendar/${propertyId}`;
  const startedAt = Date.now();

  const response = await fetch(sourceUrl, {
    headers: { Accept: "application/json" },
    next: { revalidate },
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: `Upstream calendar request failed (${response.status}).`,
        status: response.status,
      },
      { status: 502 },
    );
  }

  const raw = (await response.json()) as RawCalendarDay[];

  const blockedDates = Array.from(
    new Set(
      raw
        .filter((day) => typeof day?.Year === "number" && typeof day?.Month === "number" && typeof day?.Day === "number")
        .map((day) => isoDateFromParts(day.Year, day.Month, day.Day)),
    ),
  ).sort();

  const rangesMap = new Map<string, { start: string; end: string }>();
  for (const item of raw) {
    if (!item.Arrive || !item.Depart) continue;
    const start = parseMdYToIso(item.Arrive);
    const end = parseMdYToIso(item.Depart);
    if (!start || !end) continue;
    const key = `${start}__${end}`;
    if (!rangesMap.has(key)) {
      rangesMap.set(key, { start, end });
    }
  }

  const blockedRanges = Array.from(rangesMap.values()).sort((a, b) => {
    if (a.start < b.start) return -1;
    if (a.start > b.start) return 1;
    return 0;
  });

  return NextResponse.json({
    ok: true,
    propertyId,
    sourceUrl,
    fetchedAt: new Date().toISOString(),
    durationMs: Date.now() - startedAt,
    blockedDates,
    blockedRanges,
  });
}
