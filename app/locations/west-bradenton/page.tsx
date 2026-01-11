import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("west-bradenton");

export default function Page() {
  return <LocationPage slug="west-bradenton" />;
}
