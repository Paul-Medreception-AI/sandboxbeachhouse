import type { Metadata } from "next";

import HolidayTopic, { getHolidayMetadata, getHolidaySlugs } from "../HolidayTopic";

export const dynamicParams = false;
export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getHolidaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getHolidayMetadata(slug);
}

export default async function HolidayTopicPage({ params }: Props) {
  const { slug } = await params;
  return <HolidayTopic slug={slug} />;
}
