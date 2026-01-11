import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-restaurants");

export default function Page() {
  return <GuidePage slug="best-restaurants" />;
}
