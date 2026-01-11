import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("no-stairs-for-dogs");

export default function Page() {
  return <PetFriendlyTopic slug="no-stairs-for-dogs" />;
}
