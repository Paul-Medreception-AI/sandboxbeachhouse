import type { Metadata } from "next";

import SeasonalTopic, { getSeasonalMetadata, getSeasonalSlugs } from "../SeasonalTopic";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return getSeasonalSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getSeasonalMetadata(params.slug);
}

export default function SeasonalTopicPage({ params }: { params: { slug: string } }) {
  return <SeasonalTopic slug={params.slug} />;
}
