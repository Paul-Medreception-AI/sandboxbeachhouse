import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-coffee");

export default function Page() {
  return <GuidePage slug="best-coffee" />;
}
