import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-beaches");

export default function Page() {
  return <GuidePage slug="best-beaches" />;
}
