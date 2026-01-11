import type { Metadata } from "next";

import { locations } from "@/lib/locations";
import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  return getLocationMetadata(params.slug);
}

export default function LocationSlugPage({ params }: PageProps) {
  return <LocationPage slug={params.slug} />;
}
