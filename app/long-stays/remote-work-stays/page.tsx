import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("remote-work-stays");

export default function Page() {
  return <LongStayPage slug="remote-work-stays" />;
}
