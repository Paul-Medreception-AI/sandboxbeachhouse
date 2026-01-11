import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-bars");

export default function Page() {
  return <GuidePage slug="best-bars" />;
}
