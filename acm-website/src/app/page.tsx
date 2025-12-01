"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* HERO */}
      <section className="w-full px-6 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            American Cars Brothers
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Amerikai autós találkozók, események és élmények egy helyen - hogy minden út egy történetté váljon.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all">
              Események <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 transition-all">
              Rólunk
            </button>
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
          {[
            {
              title: "III. American Car Brothers - Tiszakécske",
              text: "2026. 04. 25 6060 Tiszakécske, Dózsa Telep u. 71",
              image:"/assets/II_Tiszakecske.jpg",
            },
            {
              title: "II. American Car Brothers - Dabas Dabas",
              text: "2370 Dabas, Várástér utca",
              image:"/assets/I_Dabas.jpg",
            },
            {
              title: "I. American Car Brothers - Tiszakécske",
              text: "2025. 04. 26. 6060 Tiszakécske, Dózsa Telep u. 71",
              image:"/assets/I_Tiszakecske.jpg",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{scale: 1.05}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type:"spring", stiffness:200, damping:150}}
              className="group relative h-60 rounded-2xl overflow-hidden shadow-sd  transition-all duration-500 hover:shadow-xl"
            >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${f.image})` }}
></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
            <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full transition-all duration-500 group-hover:h-[70%]">
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Szponzor */}
      <section className="px-6 md:px-20 py-24 text-center bg-gray-300 text-white">
        <h2 className="text-4xl font-bold mb-6">Támogatnál?</h2>
        <p className="text-lg mb-10 text-indigo-100">
          Készen állsz arra, hogy együtt valósítsuk meg az igazi Ameriakai életérzést?
        </p>
        <button className="px-8 py-4 bg-white text-gray-600 font-semibold rounded-xl shadow hover:shadow-lg transition-all">
          Vedd fel velünk a kapcsolatot.
        </button>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} American Cars Brothers. All rights reserved.
      </footer>
    </div>
  );
}
