import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("best-seafood");

export default function Page() {
  return <GuidePage slug="best-seafood" />;
}
