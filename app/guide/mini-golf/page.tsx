import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("mini-golf");

export default function Page() {
  return <GuidePage slug="mini-golf" />;
}
