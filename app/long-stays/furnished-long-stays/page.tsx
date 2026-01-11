import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("furnished-long-stays");

export default function Page() {
  return <LongStayPage slug="furnished-long-stays" />;
}
