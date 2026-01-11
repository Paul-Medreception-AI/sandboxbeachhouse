import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("extended-stays");

export default function Page() {
  return <LongStayPage slug="extended-stays" />;
}
