import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("quiet-winter-rentals");

export default function Page() {
  return <LongStayPage slug="quiet-winter-rentals" />;
}
