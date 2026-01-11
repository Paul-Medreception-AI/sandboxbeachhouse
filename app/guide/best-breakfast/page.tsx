import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-breakfast");

export default function Page() {
  return <GuidePage slug="best-breakfast" />;
}
