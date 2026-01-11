import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("wellness-retreat");

export default function Page() {
  return <ExperienceTopic slug="wellness-retreat" />;
}
