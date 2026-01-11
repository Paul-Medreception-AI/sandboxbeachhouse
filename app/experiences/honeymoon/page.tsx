import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("honeymoon");

export default function Page() {
  return <ExperienceTopic slug="honeymoon" />;
}
