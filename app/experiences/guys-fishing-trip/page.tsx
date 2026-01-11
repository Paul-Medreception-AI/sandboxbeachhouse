import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("guys-fishing-trip");

export default function Page() {
  return <ExperienceTopic slug="guys-fishing-trip" />;
}
