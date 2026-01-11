import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("boating");

export default function Page() {
  return <GuidePage slug="boating" />;
}
