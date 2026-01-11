import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("monthly-rentals");

export default function Page() {
  return <LongStayPage slug="monthly-rentals" />;
}
