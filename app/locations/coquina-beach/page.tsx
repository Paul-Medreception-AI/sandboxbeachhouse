import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("coquina-beach");

export default function Page() {
  return <LocationPage slug="coquina-beach" />;
}
