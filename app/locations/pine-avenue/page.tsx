import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("pine-avenue");

export default function Page() {
  return <LocationPage slug="pine-avenue" />;
}
