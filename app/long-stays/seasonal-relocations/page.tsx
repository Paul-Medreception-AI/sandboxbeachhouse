import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("seasonal-relocations");

export default function Page() {
  return <LongStayPage slug="seasonal-relocations" />;
}
