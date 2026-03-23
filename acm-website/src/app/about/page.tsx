import { getAllMembers } from "../service/members/member_service";
import { AboutPageClient } from "../componens/about_page";

export default async function AboutPage() {
  const members = await getAllMembers();
  return <AboutPageClient members={members} />;
}
