"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EventDTO } from "../service/events/event_data";
import { EventCard } from "./EventCard";
import Link from "next/link";

type Props = {
    events: EventDTO[];
  };
  
export function LandingPageClient({events }: Props){

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
          {/* HERO */}
          <section className="w-full px-6 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                American Cars Brothers
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Amerikai autós találkozók, események és élmények egy helyen - hogy minden út egy történetté váljon.
              </p>
              <div className="flex gap-4">
                <Link href="/events" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all">
                  Események <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="px-6 py-3 border border-gray-300 text-white rounded-xl font-medium hover:bg-white/10 transition-all">
                  Rólunk
                </Link>
              </div>
            </div>
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src="/assets/landing_hero.jpg"
                alt="Preview"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </section>
    
        {/* Rendezvények */}
        <section className="px-6 md:px-20 py-24 bg-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Rendezvényeink</h2>
              <div className="grid md:grid-cols-3 gap-10">
                {events.map((event: EventDTO) => (
                  <EventCard
                   key={event.eventid}
                   event={event}
                  />
                ))}
              </div>
          </section>
    
          {/* Szponzor */}
          <section className="px-6 md:px-20 py-24 text-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-6">Támogatnál?</h2>
            <p className="text-lg mb-10 text-gray-400">
              Készen állsz arra, hogy együtt valósítsuk meg az igazi Amerikai életérzést?
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow hover:shadow-lg hover:bg-gray-100 transition-all">
              Vedd fel velünk a kapcsolatot.
            </Link>
          </section>
    
          {/* FOOTER */}
          <footer className="px-6 md:px-20 py-10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} American Cars Brothers. All rights reserved.
          </footer>
        </div>
      );
    }
