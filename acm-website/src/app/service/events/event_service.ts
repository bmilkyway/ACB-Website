import pool from "../dbservice";
import { EventDTO, EventRow } from "./event_data";

///Lekéri az összes eventet
export async function getAllEvents(): Promise<EventDTO[]> {
  const [rows] = await pool.query("SELECT * FROM Events");

  return (rows as EventRow[]).map((event): EventDTO => ({
    eventid: event.eventid,
    title: event.title,
    description: event.description ?? "",
    image: event.image
      ? `data:image/jpeg;base64,${event.image.toString("base64")}`
      : "",
    date: event.date?.toISOString() ?? null,
    location: event.location ?? null,
    youtubeUrl: event.youtubeUrl??null
  }));
}


///ID alapján lekér egy eventet
export async function getEventById(id: number): Promise<EventDTO | null> {
  console.log(id);
  const [rows] = await pool.query(
    "SELECT * FROM Events WHERE eventid = ?", [id]
  );
  const event = (rows as EventRow[])[0];
  if (!event) return null;

  return {
    eventid: event.eventid,
    title: event.title,
    description: event.description ?? "",
    image: event.image
      ? `data:image/jpeg;base64,${event.image.toString("base64")}`
      : "",
    youtubeUrl: event.youtubeUrl
  };
}
