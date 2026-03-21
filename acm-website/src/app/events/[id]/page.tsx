import { EventPageClient } from "@/app/componens/event_page";
import { EventDTO } from "@/app/service/events/event_data";
import { getEventById } from "@/app/service/events/event_service";
import { notFound } from "next/dist/client/components/not-found";

type EventPageProps = {
    params: {id:number};
}

export default async function EventPage({params}: EventPageProps){
    const {id} = await params;
    const event = await getEventById(id);
    console.log("Ezt az id-t kérem le:",{id});
     if (!event) return notFound();
    return <EventPageClient event={event!}/>
}