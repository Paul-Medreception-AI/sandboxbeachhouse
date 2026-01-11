import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("second-honeymoon");

export default function Page() {
  return <ExperienceTopic slug="second-honeymoon" />;
}
