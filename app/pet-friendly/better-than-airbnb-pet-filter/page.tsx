import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("better-than-airbnb-pet-filter");

export default function Page() {
  return <PetFriendlyTopic slug="better-than-airbnb-pet-filter" />;
}
