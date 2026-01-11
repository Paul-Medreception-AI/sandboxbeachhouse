import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("family-dog-friendly");

export default function Page() {
  return <PetFriendlyTopic slug="family-dog-friendly" />;
}
