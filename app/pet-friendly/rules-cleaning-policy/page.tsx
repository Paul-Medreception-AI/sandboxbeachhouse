import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("rules-cleaning-policy");

export default function Page() {
  return <PetFriendlyTopic slug="rules-cleaning-policy" />;
}
