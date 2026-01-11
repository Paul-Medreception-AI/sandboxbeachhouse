import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("anniversary");

export default function Page() {
  return <ExperienceTopic slug="anniversary" />;
}
