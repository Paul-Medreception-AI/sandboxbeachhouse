import { GuidePage, getGuideMetadata } from "../../../components/GuidePage";

export const metadata = getGuideMetadata("things-to-do");

export default function Page() {
  return <GuidePage slug="things-to-do" />;
}
