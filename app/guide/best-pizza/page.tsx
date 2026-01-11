import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-pizza");

export default function Page() {
  return <GuidePage slug="best-pizza" />;
}
