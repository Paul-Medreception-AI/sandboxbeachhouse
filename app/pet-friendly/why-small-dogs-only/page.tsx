import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("why-small-dogs-only");

export default function Page() {
  return <PetFriendlyTopic slug="why-small-dogs-only" />;
}
