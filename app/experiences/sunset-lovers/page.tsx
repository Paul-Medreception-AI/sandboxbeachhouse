import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("sunset-lovers");

export default function Page() {
  return <ExperienceTopic slug="sunset-lovers" />;
}
