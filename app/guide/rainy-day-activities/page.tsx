import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("rainy-day-activities");

export default function Page() {
  return <GuidePage slug="rainy-day-activities" />;
}
