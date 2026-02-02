import type { Metadata } from "next";

import WhereToStayTopic, { getWhereToStayMetadata, getWhereToStaySlugs } from "../WhereToStayTopic";

export function generateStaticParams() {
  return getWhereToStaySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getWhereToStayMetadata(params.slug);
}

export default function WhereToStayTopicPage({ params }: { params: { slug: string } }) {
  return <WhereToStayTopic slug={params.slug} />;
}
