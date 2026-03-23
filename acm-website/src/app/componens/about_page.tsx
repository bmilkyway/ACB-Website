"use client"
import { motion } from "framer-motion";
import { Navbar } from "./navbar";
import { MemberCard } from "./MemberCard";
import { MemberDTO } from "../service/members/member_data";
import { Heart, Users, Flag, Zap } from "lucide-react";

type Props = {
  members: MemberDTO[];
};

const values = [
  {
    icon: <Heart size={24} />,
    title: "Szenvedély",
    description:
      "Az amerikai autók iránti rajongás köt össze minket. Minden találkozó egy közös élmény, ahol a szeretet a motor.",
  },
  {
    icon: <Users size={24} />,
    title: "Közösség",
    description:
      "Több mint 500 tagból álló aktív közösség, akik megosztják tudásukat, tapasztalataikat és barátságukat.",
  },
  {
    icon: <Flag size={24} />,
    title: "Hagyomány",
    description:
      "Évek óta szervezzük az ország legnagyobb amerikai autós találkozóit – büszkék vagyunk a hagyományainkra.",
  },
  {
    icon: <Zap size={24} />,
    title: "Élmény",
    description:
      "Minden esemény gondosan megtervezett, felejthetetlen élményt nyújt résztvevőinknek.",
  },
];

export function AboutPageClient({ members }: Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Rólunk</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Az American Cars Brothers egy szenvedélyes közösség, amely az amerikai autók szerelmeseit hozza össze.
            Célunk egyszerű: emlékezetes pillanatokat teremteni azoknak, akik osztoznak a V8-as szívdobbanásban.
          </p>
        </motion.div>
      </section>

      {/* TÖRTÉNET */}
      <section className="px-6 md:px-20 py-16 bg-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">A mi történetünk</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Néhány barát egy garázsban, egy közös szenvedéllyel – így indult az American Cars Brothers.
              Amit egykor kis baráti összejövetelnek szántunk, mára az ország egyik legnagyobb és legaktívabb
              amerikai autós közösségévé nőtte ki magát.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Évente több tucat eseményt szervezünk az ország különböző pontjain: autótalálkozóktól kezdve
              versenyeken át egészen exkluzív bemutatókig. Mindenkit szívesen látunk – akár csak most
              ismerkedsz az amerikai autók világával.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "500+", label: "Tagunk van" },
              { number: "50+",  label: "Esemény évente" },
              { number: "8+",   label: "Év tapasztalat" },
              { number: "20+",  label: "Városban jelen" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 rounded-2xl p-6 text-center border border-white/5"
              >
                <p className="text-3xl font-extrabold text-indigo-400 mb-1">{stat.number}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ÉRTÉKEK */}
      <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Értékeink</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-800 rounded-2xl p-6 border border-white/5 flex gap-4"
            >
              <div className="text-indigo-400 mt-1 shrink-0">{v.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CSAPAT */}
      <section className="px-6 md:px-20 py-20 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">A csapat</h2>

          {members.length === 0 ? (
            <p className="text-center text-gray-500">Nincsenek megjeleníthető tagok.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member, i) => (
                <MemberCard key={member.memberid} member={member} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
