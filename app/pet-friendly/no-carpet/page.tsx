import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("no-carpet");

export default function Page() {
  return <PetFriendlyTopic slug="no-carpet" />;
}
