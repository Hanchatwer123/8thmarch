import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";

export default function Bagila() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fdff] to-[#e8f7ff] text-sky-900 overflow-hidden relative">
      {/* Soft wind motion — subtle translated shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 left-8 w-40 h-40 bg-white/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 w-56 h-56 bg-white/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero */}
      <header className="pt-28 pb-8 px-6 max-w-4xl mx-auto text-center z-10 relative">
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-serif text-sky-800"
        >
          Багила
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm text-sky-700/70 mt-3"
        >
          Clean, proud, and warm — a minimalist patriotic greeting.
        </motion.p>
      </header>

      {/* Photo strip gallery — minimal grid with soft shadows */}
      <section className="px-6 max-w-5xl mx-auto py-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-lg overflow-hidden border border-white/60 bg-white p-1 shadow-sm"
            >
              <img
                src={`https://placehold.co/800x400`}
                alt={`bagila-${n}`}
                className="w-full h-36 object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video area simple */}
      <section className="px-6 max-w-4xl mx-auto py-6 z-10">
        <div className="rounded-xl border border-white/20 overflow-hidden bg-white/60 p-4">
          <div className="aspect-video bg-sky-50 rounded-md flex items-center justify-center">
            <p className="text-sky-700/80">A short captured moment — sunlight and serenity.</p>
          </div>
        </div>
      </section>

      {/* Golden sun interactive surprise */}
      <section className="px-6 max-w-3xl mx-auto py-12 z-30">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="relative cursor-pointer"
          >
            <div className="w-28 h-28 rounded-full bg-yellow-300 flex items-center justify-center shadow-[0_20px_60px_rgba(252,211,77,0.18)] border-2 border-yellow-200">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-sky-700/80">Tap the Sun</div>
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.2, 1, 0.36, 1] }}
                className="mt-4 bg-white/90 border border-yellow-100 rounded-2xl p-6 max-w-md text-center"
              >
                <h3 className="text-lg font-semibold text-sky-800">С праздником!</h3>
                <p className="text-sm text-sky-700/80 mt-2">
                  Пусть свет и гордость наполняют твой день. Ты излучаешь чистоту и тепло.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <footer className="absolute left-0 right-0 bottom-0 z-10">
        <div className="h-6 w-full bg-gradient-to-t from-white/60 to-transparent" />
      </footer>
    </div>
  );
}