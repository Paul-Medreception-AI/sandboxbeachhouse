import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("snowbird-community");

export default function Page() {
  return <LongStayPage slug="snowbird-community" />;
}
