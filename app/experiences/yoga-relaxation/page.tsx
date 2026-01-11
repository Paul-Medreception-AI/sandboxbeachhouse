import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("yoga-relaxation");

export default function Page() {
  return <ExperienceTopic slug="yoga-relaxation" />;
}
