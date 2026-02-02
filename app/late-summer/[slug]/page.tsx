import type { Metadata } from "next";

import LateSummerTopic, { getLateSummerMetadata, getLateSummerSlugs } from "../LateSummerTopic";

export function generateStaticParams() {
  return getLateSummerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getLateSummerMetadata(slug);
}

export default async function LateSummerTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LateSummerTopic slug={slug} />;
}
