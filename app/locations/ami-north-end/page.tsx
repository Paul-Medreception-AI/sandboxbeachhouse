import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("ami-north-end");

export default function Page() {
  return <LocationPage slug="ami-north-end" />;
}
