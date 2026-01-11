import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("spa-like-vacations");

export default function Page() {
  return <ExperienceTopic slug="spa-like-vacations" />;
}
