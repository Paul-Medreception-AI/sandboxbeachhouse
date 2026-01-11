import { LocationPage, getLocationMetadata } from "../../../components/LocationPage";

export const metadata = getLocationMetadata("anna-maria-island");

export default function Page() {
  return <LocationPage slug="anna-maria-island" />;
}
