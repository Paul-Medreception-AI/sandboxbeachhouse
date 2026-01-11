import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("birthday-trips");

export default function Page() {
  return <ExperienceTopic slug="birthday-trips" />;
}
