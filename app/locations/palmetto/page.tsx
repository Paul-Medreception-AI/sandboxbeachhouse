import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("palmetto");

export default function Page() {
  return <LocationPage slug="palmetto" />;
}
