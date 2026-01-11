import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("fenced-yard");

export default function Page() {
  return <PetFriendlyTopic slug="fenced-yard" />;
}
