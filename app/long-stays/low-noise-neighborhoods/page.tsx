import { LongStayPage, getLongStayMetadata } from "../../../components/LongStayPage";

export const metadata = getLongStayMetadata("low-noise-neighborhoods");

export default function Page() {
  return <LongStayPage slug="low-noise-neighborhoods" />;
}
