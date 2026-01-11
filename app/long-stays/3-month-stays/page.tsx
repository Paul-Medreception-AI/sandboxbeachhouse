import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("3-month-stays");

export default function Page() {
  return <LongStayPage slug="3-month-stays" />;
}
