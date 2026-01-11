import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("proposal-trips");

export default function Page() {
  return <ExperienceTopic slug="proposal-trips" />;
}
