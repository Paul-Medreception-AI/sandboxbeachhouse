import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("live-music");

export default function Page() {
  return <GuidePage slug="live-music" />;
}
