import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("bean-point");

export default function Page() {
  return <LocationPage slug="bean-point" />;
}
