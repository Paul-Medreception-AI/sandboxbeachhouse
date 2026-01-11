import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("mini-moon");

export default function Page() {
  return <ExperienceTopic slug="mini-moon" />;
}
