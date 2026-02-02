import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { clearEventsCache } from "@/lib/events";

export async function GET() {
  clearEventsCache();
  
  // Revalidate all events pages at CDN level
  revalidatePath("/events", "layout");
  revalidatePath("/events/category/[slug]", "page");
  revalidatePath("/events/month/[slug]", "page");
  revalidatePath("/events/[slug]", "page");
  
  return NextResponse.json({ 
    success: true, 
    message: "Events cache cleared and pages revalidated" 
  });
}
