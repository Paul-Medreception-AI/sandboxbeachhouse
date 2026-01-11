import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("gulf-drive-corridor");

export default function Page() {
  return <LocationPage slug="gulf-drive-corridor" />;
}
