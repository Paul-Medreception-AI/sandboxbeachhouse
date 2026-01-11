import ExperienceTopic, { getExperienceMetadata } from "../ExperienceTopic";

export const metadata = getExperienceMetadata("elopement-stays");

export default function Page() {
  return <ExperienceTopic slug="elopement-stays" />;
}
