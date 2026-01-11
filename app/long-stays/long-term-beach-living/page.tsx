import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("long-term-beach-living");

export default function Page() {
  return <LongStayPage slug="long-term-beach-living" />;
}
