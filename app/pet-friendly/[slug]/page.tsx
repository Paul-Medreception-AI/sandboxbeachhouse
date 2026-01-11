import type { Metadata } from "next";

import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

import { petFriendlyPages } from "@/app/pet-friendly/data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return petFriendlyPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getPetFriendlyMetadata(params.slug);
}

export default function PetFriendlyTopicPage({ params }: { params: { slug: string } }) {
  return <PetFriendlyTopic slug={params.slug} />;
}
