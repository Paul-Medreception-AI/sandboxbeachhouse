import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("quiet-escape");

export default function Page() {
  return <ExperienceTopic slug="quiet-escape" />;
}
