import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("anna-maria-city");

export default function Page() {
  return <LocationPage slug="anna-maria-city" />;
}
