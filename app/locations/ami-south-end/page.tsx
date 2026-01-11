import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("ami-south-end");

export default function Page() {
  return <LocationPage slug="ami-south-end" />;
}
