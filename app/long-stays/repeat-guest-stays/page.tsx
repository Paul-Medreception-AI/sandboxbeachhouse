import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("repeat-guest-stays");

export default function Page() {
  return <LongStayPage slug="repeat-guest-stays" />;
}
