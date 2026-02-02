import type { Metadata } from "next";

import NearTopic, { getNearMetadata, getNearSlugs } from "../NearTopic";

export const dynamicParams = true;
export const revalidate = 86400;
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return getNearSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getNearMetadata(slug);
}

export default async function NearTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <NearTopic slug={slug} />;
}
