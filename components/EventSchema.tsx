import type { EventRecord } from "@/lib/events-types";

export default function EventSchema({ event }: { event: EventRecord }) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description || event.excerpt,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anna Maria Island",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    organizer: {
      "@type": "Organization",
      name: event.source,
    },
  };

  if (event.url) {
    schema.url = event.url;
  }

  if (event.image) {
    schema.image = event.image;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
