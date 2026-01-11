import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("snowbird-pet-stays");

export default function Page() {
  return <PetFriendlyTopic slug="snowbird-pet-stays" />;
}
