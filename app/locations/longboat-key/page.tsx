import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("longboat-key");

export default function Page() {
  return <LocationPage slug="longboat-key" />;
}
