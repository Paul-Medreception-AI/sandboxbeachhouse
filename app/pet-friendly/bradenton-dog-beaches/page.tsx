import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("bradenton-dog-beaches");

export default function Page() {
  return <PetFriendlyTopic slug="bradenton-dog-beaches" />;
}
