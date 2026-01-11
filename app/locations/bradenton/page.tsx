import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("bradenton");

export default function Page() {
  return <LocationPage slug="bradenton" />;
}
