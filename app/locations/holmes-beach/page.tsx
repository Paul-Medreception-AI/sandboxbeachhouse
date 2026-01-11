import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("holmes-beach");

export default function Page() {
  return <LocationPage slug="holmes-beach" />;
}
