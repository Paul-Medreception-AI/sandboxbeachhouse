import type { Metadata } from "next";

import LateSummerTopic, { getLateSummerMetadata, getLateSummerSlugs } from "../LateSummerTopic";

export function generateStaticParams() {
  return getLateSummerSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getLateSummerMetadata(params.slug);
}

export default function LateSummerTopicPage({ params }: { params: { slug: string } }) {
  return <LateSummerTopic slug={params.slug} />;
}
