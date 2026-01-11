import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("shopping");

export default function Page() {
  return <GuidePage slug="shopping" />;
}
