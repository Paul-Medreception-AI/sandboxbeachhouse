import { NextResponse } from "next/server";
import { getEvents } from "@/lib/events";
import { fetchAllEvents } from "@/lib/events-source";

export async function GET() {
  try {
    const rawEvents = await fetchAllEvents();
    const normalizedEvents = await getEvents(true);
    const now = new Date();
    const upcomingEvents = normalizedEvents.filter((e) => new Date(e.startDate) >= now);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      stats: {
        rawEventsFetched: rawEvents.length,
        normalizedEvents: normalizedEvents.length,
        upcomingEvents: upcomingEvents.length,
      },
      rawEventDates: rawEvents.slice(0, 10).map((e) => ({
        title: e.title,
        startDate: e.startDate,
        source: e.source,
      })),
      upcomingEventDates: upcomingEvents.slice(0, 10).map((e) => ({
        title: e.title,
        startDate: e.startDate,
        categories: e.categories,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
