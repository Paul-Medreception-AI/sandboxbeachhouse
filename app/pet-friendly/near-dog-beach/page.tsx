import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("near-dog-beach");

export default function Page() {
  return <PetFriendlyTopic slug="near-dog-beach" />;
}
