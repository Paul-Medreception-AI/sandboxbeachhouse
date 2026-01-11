import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("quiet-neighborhood");

export default function Page() {
  return <PetFriendlyTopic slug="quiet-neighborhood" />;
}
