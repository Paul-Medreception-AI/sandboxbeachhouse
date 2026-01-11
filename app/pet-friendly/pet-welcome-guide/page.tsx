import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("pet-welcome-guide");

export default function Page() {
  return <PetFriendlyTopic slug="pet-welcome-guide" />;
}
