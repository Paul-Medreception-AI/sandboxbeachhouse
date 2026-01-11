import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("walk-to-beach-with-dog");

export default function Page() {
  return <PetFriendlyTopic slug="walk-to-beach-with-dog" />;
}
