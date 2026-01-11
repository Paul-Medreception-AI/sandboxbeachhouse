import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("healthcare-access");

export default function Page() {
  return <LongStayPage slug="healthcare-access" />;
}
