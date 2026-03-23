"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./navbar";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export function ContactPageClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Szimulált küldés – itt integrálható egy API route
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSent(true);
  };

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kapcsolat</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Kérdésed van? Szeretnél csatlakozni, vagy támogatni minket? Írj nekünk bátran!
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-20 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Elérhetőségeink</h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <Mail size={20} />,
                  label: "E-mail",
                  value: "info@americancarsbrothers.hu",
                },
                {
                  icon: <Phone size={20} />,
                  label: "Telefon",
                  value: "+36 30 123 4567",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Székhely",
                  value: "Budapest, Magyarország",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-6 bg-gray-800 rounded-2xl border border-white/5">
            <p className="text-sm text-gray-400 leading-relaxed">
              Általában <span className="text-white font-semibold">1–2 munkanapon belül</span> válaszolunk
              minden megkeresésre. Rendezvényszervezéssel, szponzorációval vagy tagsággal kapcsolatos
              kérdéseket is szívesen fogadunk.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
              <CheckCircle size={48} className="text-indigo-400" />
              <h3 className="text-2xl font-bold">Üzenet elküldve!</h3>
              <p className="text-gray-400">
                Köszönjük megkeresésed. Hamarosan felvesszük veled a kapcsolatot.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="mt-4 px-5 py-2 border border-white/20 rounded-xl text-sm hover:bg-white/5 transition-all"
              >
                Új üzenet írása
              </button>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-2xl p-8 border border-white/5 flex flex-col gap-5">
              <h2 className="text-xl font-bold mb-1">Írj nekünk</h2>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                  Neved
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Pl. Kovács Péter"
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                  E-mail cím
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="pelda@email.hu"
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                  Üzeneted
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Miben segíthetünk?"
                  className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.message}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200"
              >
                {loading ? (
                  <span className="animate-pulse">Küldés...</span>
                ) : (
                  <>
                    Küldés <Send size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}
