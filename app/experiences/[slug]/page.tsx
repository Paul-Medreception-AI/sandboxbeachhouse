import type { Metadata } from "next";

import ExperienceTopic, { getExperienceMetadata, getExperienceSlugs } from "../ExperienceTopic";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getExperienceMetadata(params.slug);
}

export default function ExperienceTopicPage({ params }: { params: { slug: string } }) {
  return <ExperienceTopic slug={params.slug} />;
}
