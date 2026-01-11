import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("manatee-public-beach");

export default function Page() {
  return <LocationPage slug="manatee-public-beach" />;
}
