import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("cortez");

export default function Page() {
  return <LocationPage slug="cortez" />;
}
