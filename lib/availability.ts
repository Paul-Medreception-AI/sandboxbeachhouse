export type AvailabilityData = {
  ok: boolean;
  propertyId: number;
  sourceUrl: string;
  fetchedAt: string;
  durationMs: number;
  blockedDates: string[];
  blockedRanges: { start: string; end: string }[];
};

export type OpenDateRange = {
  start: string;
  end: string;
  nights: number;
  slug: string;
  month: string;
  year: string;
  season: "winter" | "spring" | "summer" | "fall";
  isLastMinute: boolean;
  isHoliday: boolean;
  holidayName?: string;
};

export async function fetchAvailability(): Promise<AvailabilityData> {
  // During build time, fetch directly from the API source instead of localhost
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_BASE_URL) {
    // Fetch directly from BeachRentals API during build
    const propertyId = 140;
    const sourceUrl = `https://rentals.beachrentals.mobi/rns/api/calendar/${propertyId}`;
    
    const response = await fetch(sourceUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      // Return empty data if API fails during build
      return {
        ok: false,
        propertyId,
        sourceUrl,
        fetchedAt: new Date().toISOString(),
        durationMs: 0,
        blockedDates: [],
        blockedRanges: [],
      };
    }

    const raw = await response.json() as any[];
    
    // Process the data (simplified version of API route logic)
    const blockedDates = Array.from(
      new Set(
        raw
          .filter((day) => typeof day?.Year === "number" && typeof day?.Month === "number" && typeof day?.Day === "number")
          .map((day) => `${day.Year}-${String(day.Month).padStart(2, "0")}-${String(day.Day).padStart(2, "0")}`),
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

    const blockedRanges = Array.from(rangesMap.values()).sort((a, b) => a.start.localeCompare(b.start));

    return {
      ok: true,
      propertyId,
      sourceUrl,
      fetchedAt: new Date().toISOString(),
      durationMs: 0,
      blockedDates,
      blockedRanges,
    };
  }

  // In development or when BASE_URL is set, use the API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/availability`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch availability");
  }
  return res.json();
}

function parseMdYToIso(value: string): string | null {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const [, mm, dd, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
}

export function calculateOpenRanges(blockedRanges: { start: string; end: string }[]): OpenDateRange[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 18);

  const openRanges: OpenDateRange[] = [];
  const sortedBlocked = [...blockedRanges].sort((a, b) => a.start.localeCompare(b.start));

  let currentDate = new Date(today);

  for (const blocked of sortedBlocked) {
    const blockedStart = new Date(blocked.start);
    blockedStart.setHours(0, 0, 0, 0);

    if (blockedStart > maxDate) break;

    if (currentDate < blockedStart) {
      const nights = Math.floor((blockedStart.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
      if (nights >= 3) {
        const startIso = currentDate.toISOString().split("T")[0];
        const endIso = blockedStart.toISOString().split("T")[0];
        openRanges.push(createOpenDateRange(startIso, endIso, nights));
      }
    }

    const blockedEnd = new Date(blocked.end);
    blockedEnd.setHours(0, 0, 0, 0);
    if (blockedEnd > currentDate) {
      currentDate = blockedEnd;
    }
  }

  if (currentDate < maxDate) {
    const nights = Math.floor((maxDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    if (nights >= 3) {
      const startIso = currentDate.toISOString().split("T")[0];
      const endIso = maxDate.toISOString().split("T")[0];
      openRanges.push(createOpenDateRange(startIso, endIso, nights));
    }
  }

  return openRanges;
}

function createOpenDateRange(start: string, end: string, nights: number): OpenDateRange {
  const startDate = new Date(start);
  const month = startDate.toLocaleDateString("en-US", { month: "long" }).toLowerCase();
  const year = startDate.getFullYear().toString();
  const slug = createSlug(start, end);
  const season = getSeason(startDate);
  const isLastMinute = isWithinDays(startDate, 30);
  const { isHoliday, holidayName } = checkHoliday(startDate, new Date(end));

  return {
    start,
    end,
    nights,
    slug,
    month,
    year,
    season,
    isLastMinute,
    isHoliday,
    holidayName,
  };
}

function createSlug(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startMonth = startDate.toLocaleDateString("en-US", { month: "short" }).toLowerCase();
  const endMonth = endDate.toLocaleDateString("en-US", { month: "short" }).toLowerCase();
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const year = startDate.getFullYear();

  if (startMonth === endMonth) {
    return `${startMonth}-${startDay}-${endDay}-${year}`;
  }
  return `${startMonth}-${startDay}-${endMonth}-${endDay}-${year}`;
}

function getSeason(date: Date): "winter" | "spring" | "summer" | "fall" {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  return "winter";
}

function isWithinDays(date: Date, days: number): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = date.getTime() - today.getTime();
  return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
}

function checkHoliday(start: Date, end: Date): { isHoliday: boolean; holidayName?: string } {
  const year = start.getFullYear();
  const holidays = [
    { name: "Memorial Day", date: getMemorialDay(year) },
    { name: "4th of July", date: new Date(year, 6, 4) },
    { name: "Labor Day", date: getLaborDay(year) },
    { name: "Thanksgiving", date: getThanksgiving(year) },
    { name: "Christmas", date: new Date(year, 11, 25) },
    { name: "New Year", date: new Date(year, 0, 1) },
    { name: "Spring Break", date: getSpringBreak(year) },
  ];

  for (const holiday of holidays) {
    if (holiday.date >= start && holiday.date <= end) {
      return { isHoliday: true, holidayName: holiday.name };
    }
  }

  return { isHoliday: false };
}

function getMemorialDay(year: number): Date {
  const may = new Date(year, 4, 31);
  while (may.getDay() !== 1) {
    may.setDate(may.getDate() - 1);
  }
  return may;
}

function getLaborDay(year: number): Date {
  const sept = new Date(year, 8, 1);
  while (sept.getDay() !== 1) {
    sept.setDate(sept.getDate() + 1);
  }
  return sept;
}

function getThanksgiving(year: number): Date {
  const nov = new Date(year, 10, 1);
  let thursdays = 0;
  while (thursdays < 4) {
    if (nov.getDay() === 4) thursdays++;
    if (thursdays < 4) nov.setDate(nov.getDate() + 1);
  }
  return nov;
}

function getSpringBreak(year: number): Date {
  return new Date(year, 2, 15);
}

export function formatDateRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startMonth = startDate.toLocaleDateString("en-US", { month: "long" });
  const endMonth = endDate.toLocaleDateString("en-US", { month: "long" });
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const year = startDate.getFullYear();

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  }
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
}

export function getSeasonalContent(season: "winter" | "spring" | "summer" | "fall", month: string) {
  const content = {
    winter: {
      title: "Winter Paradise on Anna Maria Island",
      description: "Escape the cold and enjoy perfect beach weather with temperatures in the 70s. Winter is ideal for peaceful beach walks, stunning sunsets, and exploring local restaurants without the summer crowds.",
      activities: ["Beach walks in perfect weather", "Sunset watching", "Fishing", "Local dining", "Manatee spotting"],
      weather: "Comfortable 70-75°F days, cool evenings",
    },
    spring: {
      title: "Spring Break & Perfect Beach Days",
      description: "Spring brings warm sunshine, calm Gulf waters, and blooming island beauty. Perfect for families, couples, and anyone seeking the ideal beach vacation before summer heat arrives.",
      activities: ["Swimming in warm Gulf waters", "Shelling", "Kayaking", "Beach volleyball", "Island trolley tours"],
      weather: "Warm 75-85°F with gentle breezes",
    },
    summer: {
      title: "Peak Summer Beach Season",
      description: "Experience the full Florida summer with hot sunny days, warm Gulf waters, and long beach evenings. The private pool is perfect for cooling off between beach sessions.",
      activities: ["All-day beach time", "Pool lounging", "Evening beach walks", "Fishing", "Water sports"],
      weather: "Hot 85-92°F with afternoon sea breezes",
    },
    fall: {
      title: "Fall Tranquility & Ideal Weather",
      description: "Fall offers the best of both worlds: warm beach weather without the summer heat, fewer crowds, and still-warm Gulf waters. Perfect for a peaceful, relaxing getaway.",
      activities: ["Uncrowded beach days", "Fishing", "Biking", "Local festivals", "Sunset cruises"],
      weather: "Perfect 75-85°F with lower humidity",
    },
  };

  return content[season];
}
