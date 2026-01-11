import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-ice-cream");

export default function Page() {
  return <GuidePage slug="best-ice-cream" />;
}
