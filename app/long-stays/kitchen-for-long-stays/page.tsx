import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("kitchen-for-long-stays");

export default function Page() {
  return <LongStayPage slug="kitchen-for-long-stays" />;
}
