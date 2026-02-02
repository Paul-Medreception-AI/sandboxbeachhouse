import { notFound } from "next/navigation";
import EventTopic, { getEventMetadata } from "@/components/EventTopic";
import { getEventBySlug, getEvents } from "@/lib/events";

export const revalidate = 604800;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return {};
  return getEventMetadata(event);
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return notFound();
  return <EventTopic event={event} />;
}
