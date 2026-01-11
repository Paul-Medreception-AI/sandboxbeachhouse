import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("outdoor-rinse-station");

export default function Page() {
  return <PetFriendlyTopic slug="outdoor-rinse-station" />;
}
