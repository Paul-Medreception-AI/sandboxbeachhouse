import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("retiree-travel");

export default function Page() {
  return <LongStayPage slug="retiree-travel" />;
}
