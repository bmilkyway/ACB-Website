import { getAllEvents } from "../service/events/event_service";
import { EventsPageClient } from "../componens/events_page";

export default async function EventsPage() {
  const events = await getAllEvents();
  return <EventsPageClient events={events} />;
}
