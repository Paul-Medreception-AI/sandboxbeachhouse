import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("girls-weekend");

export default function Page() {
  return <ExperienceTopic slug="girls-weekend" />;
}
