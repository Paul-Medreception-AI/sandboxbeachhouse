import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("bridge-street");

export default function Page() {
  return <LocationPage slug="bridge-street" />;
}
