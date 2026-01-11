import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("cortez-fishing-village");

export default function Page() {
  return <LocationPage slug="cortez-fishing-village" />;
}
