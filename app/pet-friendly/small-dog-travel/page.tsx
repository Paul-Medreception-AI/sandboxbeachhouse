import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("small-dog-travel");

export default function Page() {
  return <PetFriendlyTopic slug="small-dog-travel" />;
}
