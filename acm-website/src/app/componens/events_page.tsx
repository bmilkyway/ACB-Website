"use client"
import { motion } from "framer-motion";
import { EventDTO } from "../service/events/event_data";
import { EventCard } from "./EventCard";
import { Navbar } from "./navbar";
import { Calendar } from "lucide-react";

type Props = {
  events: EventDTO[];
};

export function EventsPageClient({ events }: Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <Calendar size={14} />
            Összes rendezvény
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Eseményeink</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fedezd fel az összes American Cars Brothers találkozót és rendezvényt – múltbeli és közelgő egyaránt.
          </p>
        </motion.div>
      </section>

      {/* EVENTS GRID */}
      <section className="px-6 md:px-20 pb-24">
        {events.length === 0 ? (
          <div className="text-center text-gray-500 py-24">
            <p className="text-xl">Jelenleg nincsenek elérhető események.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event, i) => (
              <motion.div
                key={event.eventid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
