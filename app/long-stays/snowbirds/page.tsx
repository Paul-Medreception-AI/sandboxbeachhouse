import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("snowbirds");

export default function Page() {
  return <LongStayPage slug="snowbirds" />;
}
