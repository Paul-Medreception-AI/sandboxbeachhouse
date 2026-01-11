import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("couples-retreat");

export default function Page() {
  return <ExperienceTopic slug="couples-retreat" />;
}
