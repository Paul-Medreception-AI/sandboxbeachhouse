import type { RawEvent } from "./events-types";

export async function fetchBradentonGulfIslandsEvents(): Promise<RawEvent[]> {
  try {
    console.log("🔄 Fetching Bradenton Gulf Islands events...");
    const response = await fetch("https://www.bradentongulfislands.com/events/?ical=1", {
      next: { revalidate: 604800 },
      headers: {
        "User-Agent": "SandboxBeachHouse/1.0",
      },
    });
    if (!response.ok) {
      console.error(`❌ Bradenton Gulf Islands fetch failed: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch Bradenton Gulf Islands events: ${response.status}`);
    }
    const icsText = await response.text();
    console.log(`📥 Bradenton Gulf Islands ICS length: ${icsText.length} chars`);
    const events = parseICS(icsText, "Bradenton Gulf Islands");
    console.log(`✅ Parsed ${events.length} events from Bradenton Gulf Islands`);
    return events;
  } catch (error) {
    console.error("❌ Error fetching Bradenton Gulf Islands events:", error);
    return [];
  }
}

export async function fetchAMIChamberEvents(): Promise<RawEvent[]> {
  try {
    console.log("🔄 Fetching AMI Chamber events...");
    const response = await fetch(
      "https://www.annamariaislandchamber.org/events/?ical=1&tribe_display=list",
      {
        next: { revalidate: 604800 },
        headers: {
          "User-Agent": "SandboxBeachHouse/1.0",
        },
      }
    );
    if (!response.ok) {
      console.error(`❌ AMI Chamber fetch failed: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch AMI Chamber events: ${response.status}`);
    }
    const icsText = await response.text();
    console.log(`📥 AMI Chamber ICS length: ${icsText.length} chars`);
    const events = parseICS(icsText, "AMI Chamber");
    console.log(`✅ Parsed ${events.length} events from AMI Chamber`);
    return events;
  } catch (error) {
    console.error("❌ Error fetching AMI Chamber events:", error);
    return [];
  }
}

export async function fetchHerrigCenterEvents(): Promise<RawEvent[]> {
  try {
    console.log("🔄 Fetching Herrig Center events...");
    const response = await fetch("https://herrigcenter.org/events/?ical=1", {
      next: { revalidate: 604800 },
      headers: {
        "User-Agent": "SandboxBeachHouse/1.0",
      },
    });
    if (!response.ok) {
      console.error(`❌ Herrig Center fetch failed: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch Herrig Center events: ${response.status}`);
    }
    const icsText = await response.text();
    console.log(`📥 Herrig Center ICS length: ${icsText.length} chars`);
    const events = parseICS(icsText, "Herrig Center");
    console.log(`✅ Parsed ${events.length} events from Herrig Center`);
    return events;
  } catch (error) {
    console.error("❌ Error fetching Herrig Center events:", error);
    return [];
  }
}

function parseICS(icsText: string, source: string): RawEvent[] {
  const events: RawEvent[] = [];
  const lines = icsText.split(/\r?\n/);
  let currentEvent: Partial<RawEvent> | null = null;
  let currentField = "";
  let currentValue = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "BEGIN:VEVENT") {
      currentEvent = { source, categories: [], tags: [] };
      currentField = "";
      currentValue = "";
    } else if (line === "END:VEVENT" && currentEvent) {
      if (currentEvent.title && currentEvent.startDate) {
        events.push(currentEvent as RawEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith(" ") && currentField) {
        currentValue += line.substring(1);
      } else {
        if (currentField && currentValue) {
          processICSField(currentEvent, currentField, currentValue);
        }

        const colonIndex = line.indexOf(":");
        if (colonIndex > 0) {
          currentField = line.substring(0, colonIndex);
          currentValue = line.substring(colonIndex + 1);
        } else {
          currentField = "";
          currentValue = "";
        }
      }
    }
  }

  if (currentEvent && currentField && currentValue) {
    processICSField(currentEvent, currentField, currentValue);
  }

  return events;
}

function processICSField(event: Partial<RawEvent>, field: string, value: string) {
  const fieldName = field.split(";")[0];

  switch (fieldName) {
    case "UID":
      event.id = value;
      break;
    case "SUMMARY":
      event.title = decodeICSValue(value);
      break;
    case "DESCRIPTION":
      event.description = decodeICSValue(value);
      break;
    case "DTSTART":
      event.startDate = parseICSDate(value);
      break;
    case "DTEND":
      event.endDate = parseICSDate(value);
      break;
    case "LOCATION":
      event.locationName = decodeICSValue(value);
      break;
    case "URL":
      event.url = value;
      break;
    case "CATEGORIES":
      event.categories = value.split(",").map((c) => c.trim());
      break;
  }
}

function decodeICSValue(value: string): string {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

function parseICSDate(dateStr: string): string {
  const match = dateStr.match(/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?/);
  if (!match) return dateStr;

  const [, year, month, day, , hour = "00", minute = "00", second = "00"] = match;
  return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
}

export async function fetchAllEvents(): Promise<RawEvent[]> {
  const [bradentonEvents, amiEvents, herrigEvents] = await Promise.all([
    fetchBradentonGulfIslandsEvents(),
    fetchAMIChamberEvents(),
    fetchHerrigCenterEvents(),
  ]);

  return [...bradentonEvents, ...amiEvents, ...herrigEvents];
}
