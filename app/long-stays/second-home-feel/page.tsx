import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("second-home-feel");

export default function Page() {
  return <LongStayPage slug="second-home-feel" />;
}
