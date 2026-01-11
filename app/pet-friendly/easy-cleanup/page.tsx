import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("easy-cleanup");

export default function Page() {
  return <PetFriendlyTopic slug="easy-cleanup" />;
}
