
import { motion } from "framer-motion";
import { EventDTO } from "../service/events/event_data";
import Link from "next/link";

type EventCardProps = {
  event: EventDTO
}
export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.eventid}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative h-60 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
      <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full transition-all duration-500 group-hover:h-[70%]">
        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
        <p className="text-sm text-gray-100">{event.description}</p>
      </div>
    </motion.div>
    </Link>
  );
}