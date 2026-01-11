import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("weekend-escapes");

export default function Page() {
  return <ExperienceTopic slug="weekend-escapes" />;
}
