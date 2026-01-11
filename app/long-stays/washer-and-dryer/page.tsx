import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("washer-and-dryer");

export default function Page() {
  return <LongStayPage slug="washer-and-dryer" />;
}
