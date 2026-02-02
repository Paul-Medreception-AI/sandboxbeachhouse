import { NextResponse } from "next/server";
import { clearEventsCache } from "@/lib/events";

export async function GET() {
  clearEventsCache();
  return NextResponse.json({ success: true, message: "Events cache cleared" });
}
