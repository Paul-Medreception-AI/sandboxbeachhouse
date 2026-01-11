import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("dog-friendly-beach-house");

export default function Page() {
  return <PetFriendlyTopic slug="dog-friendly-beach-house" />;
}
