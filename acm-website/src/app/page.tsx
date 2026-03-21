import { getAllEvents } from "./service/events/event_service";
import { LandingPageClient } from "./componens/landing_page";

export default async  function LandingService() {
  const events = await getAllEvents();

  return <LandingPageClient events={events} />;
}