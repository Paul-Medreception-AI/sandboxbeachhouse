import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("bradenton-beach");

export default function Page() {
  return <LocationPage slug="bradenton-beach" />;
}
