import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("babymoon");

export default function Page() {
  return <ExperienceTopic slug="babymoon" />;
}
