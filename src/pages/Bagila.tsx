import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";

export default function Bagila() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6fbff] via-[#eef7ff] to-[#e2f1ff] text-[#335f7a] overflow-hidden relative">
      
      {/* Soft wind motion */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 left-8 w-40 h-40 bg-[#ffffff66] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 w-56 h-56 bg-[#eaf6ff] rounded-full blur-3xl"
        />
      </div>

      {/* Hero */}
      <header className="pt-28 pb-8 px-6 max-w-4xl mx-auto text-center z-10 relative">
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-[#3f6f8e]"
        >
          Багила
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm text-[#547f9c]/80 mt-3"
        >
          Clean, proud, and warm — a minimalist patriotic greeting.
        </motion.p>
      </header>

      {/* Photo gallery */}
      <section className="px-6 max-w-5xl mx-auto py-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden border border-white bg-[#ffffffee] p-1 shadow-sm"
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

      {/* Video area */}
      <section className="px-6 max-w-4xl mx-auto py-6 z-10">
        <div className="rounded-xl border border-white overflow-hidden bg-[#f9fdff] p-4">
          <div className="aspect-video bg-[#eef7ff] rounded-md flex items-center justify-center">
            <p className="text-[#567d99]">
              A short captured moment — sunlight and serenity.
            </p>
          </div>
        </div>
      </section>

<motion.div
  onClick={() => setOpen(!open)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="relative cursor-pointer"
>

  {/* Sun */}
  <div className="w-28 h-28 rounded-full bg-[#ffd66b] flex items-center justify-center shadow-[0_20px_60px_rgba(255,215,120,0.25)] border-2 border-[#ffe8a3] relative z-10">
    <Sun className="w-10 h-10 text-white" />
  </div>

  {/* Sun rays animation */}
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1.4, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: i * 45 }}
            animate={{ rotate: i * 45 }}
            className="absolute w-1 h-24 bg-yellow-300 rounded-full"
            style={{
              transformOrigin: "center bottom",
            }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>

  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-[#5b86a4]">
    Tap the Sun
  </div>

</motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mt-4 bg-[#ffffffee] border border-[#fff0c4] rounded-2xl p-6 max-w-md text-center"
              >
                <h3 className="text-lg font-semibold text-[#3f6f8e]">
                  С праздником!
                </h3>

                <p className="text-sm text-[#547f9c] mt-2">
                  Пусть свет и гордость наполняют твой день.  
                  Ты излучаешь чистоту и тепло.
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
