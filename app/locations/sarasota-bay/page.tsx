import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("sarasota-bay");

export default function Page() {
  return <LocationPage slug="sarasota-bay" />;
}
