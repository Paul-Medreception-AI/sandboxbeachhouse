import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("wine-dine-stays");

export default function Page() {
  return <ExperienceTopic slug="wine-dine-stays" />;
}
