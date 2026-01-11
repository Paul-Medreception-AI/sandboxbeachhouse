import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("dogs-35-lbs-or-less");

export default function Page() {
  return <PetFriendlyTopic slug="dogs-35-lbs-or-less" />;
}
