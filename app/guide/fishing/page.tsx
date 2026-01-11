import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("fishing");

export default function Page() {
  return <GuidePage slug="fishing" />;
}
