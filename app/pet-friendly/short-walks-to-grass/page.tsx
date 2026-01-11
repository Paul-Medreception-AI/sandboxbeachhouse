import PetFriendlyTopic, { getPetFriendlyMetadata } from "../PetFriendlyTopic";

export const metadata = getPetFriendlyMetadata("short-walks-to-grass");

export default function Page() {
  return <PetFriendlyTopic slug="short-walks-to-grass" />;
}
