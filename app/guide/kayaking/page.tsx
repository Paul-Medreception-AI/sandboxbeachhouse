import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("kayaking");

export default function Page() {
  return <GuidePage slug="kayaking" />;
}
