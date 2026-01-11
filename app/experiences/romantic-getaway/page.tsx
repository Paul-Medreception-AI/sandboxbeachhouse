import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("romantic-getaway");

export default function Page() {
  return <ExperienceTopic slug="romantic-getaway" />;
}
