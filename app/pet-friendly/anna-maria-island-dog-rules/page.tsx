import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("anna-maria-island-dog-rules");

export default function Page() {
  return <PetFriendlyTopic slug="anna-maria-island-dog-rules" />;
}
