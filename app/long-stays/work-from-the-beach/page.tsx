import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("work-from-the-beach");

export default function Page() {
  return <LongStayPage slug="work-from-the-beach" />;
}
