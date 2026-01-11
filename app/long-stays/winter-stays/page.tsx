import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("winter-stays");

export default function Page() {
  return <LongStayPage slug="winter-stays" />;
}
