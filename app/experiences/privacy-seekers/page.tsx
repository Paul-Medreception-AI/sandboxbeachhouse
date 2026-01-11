import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("privacy-seekers");

export default function Page() {
  return <ExperienceTopic slug="privacy-seekers" />;
}
