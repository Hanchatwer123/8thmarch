import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Heart, Play } from "lucide-react";

type ChoiceKey = "A" | "B" | "C" | null;

export default function Alisa() {
  const [choice, setChoice] = useState<ChoiceKey>(null);
  const [reveal, setReveal] = useState(false);

  const messages: Record<Exclude<ChoiceKey, null>, string> = {
    A: "Твоя креативность - редка, продолжай быть такой же уникальной и скрашивать этот мир своим мышлением!",
    B: "Твоя доброта искренняя и заразна! Продолжай делать этот мир добрее!",
    C: "Твоя искренность - довольно редкое качество. Пусть эта честность всегда будет приносить тебе тёплые моменты в жизни. С 8 Марта!",
  };

  const choose = (k: ChoiceKey) => {
    setChoice(k);
    setTimeout(() => setReveal(true), 420);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden font-mono selection:bg-pink-200">
      {/* Background soft hand-drawn emotive shapes (pixel-like sprites) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.6, 0.1],
              y: [0, (i % 2 === 0 ? -14 : 14), 0],
            }}
            transition={{
              duration: 6 + (i % 3),
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${(i * 11) % 100}%`,
              top: `${10 + (i * 7) % 80}%`,
            }}
            className="absolute w-6 h-6 bg-white/8 rounded-sm"
          />
        ))}
      </div>

      <header className="pt-24 pb-6 px-6 max-w-4xl mx-auto z-10 relative text-center">
        <motion.h1
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold"
        >
          Алиса,
        </motion.h1>
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-white/70 mt-2"
        >
          С 8 марта!
        </motion.p>
      </header>

      {/* Pixel Gallery — stacked tiles */}
      <section className="px-6 max-w-5xl mx-auto py-8 z-10">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="rounded-md overflow-hidden border border-white/6 bg-white/3 aspect-square"
            >
              <img
                src={`https://raw.githubusercontent.com/hanchatwer123/8thmarch/main/src/photo/alisa.jpeg`}
                className="w-full h-full object-cover image-rendering-pixelated"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dialogue / Interactive Surprise */}
      <section className="px-6 max-w-3xl mx-auto py-12 z-10">
        <div className="bg-white/6 border border-white/8 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <MessageSquare className="w-10 h-10 text-white/90" />
            <div>
              <h3 className="text-lg font-medium">Выбери слово</h3>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <motion.button
              onClick={() => choose("A")}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-2 rounded-md bg-white/8 hover:bg-white/12 transition"
            >
              Креативность
            </motion.button>
            <motion.button
              onClick={() => choose("B")}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-2 rounded-md bg-white/8 hover:bg-white/12 transition"
            >
              Доброта
            </motion.button>
            <motion.button
              onClick={() => choose("C")}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-2 rounded-md bg-white/8 hover:bg-white/12 transition"
            >
              Честность
            </motion.button>
          </div>

          <AnimatePresence>
            {choice && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 bg-black/70 border border-white/6 rounded-lg p-4"
              >
                <p className="text-sm md:text-base">{messages[choice]}</p>

                <div className="mt-3 flex gap-3">
                  <motion.button
                    onClick={() => {
                      setReveal(false);
                      setChoice(null);
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="px-3 py-1 bg-white/8 rounded"
                  >
                    Назад
                  </motion.button>

                  <motion.button
                    onClick={() => setReveal(true)}
                    whileHover={{ scale: 1.03 }}
                    className="px-3 py-1 bg-white/10 rounded ml-auto"
                  >
                    Раскрыть
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {reveal && choice && (
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="mt-6 bg-gradient-to-br from-pink-500/20 to-sky-400/12 border border-white/8 rounded-2xl p-6 text-center"
              >
                <div className="flex items-center justify-center gap-3">
                  <Heart className="w-6 h-6 text-pink-300" />
                  <h4 className="font-semibold">Message</h4>
                </div>
                <p className="mt-3 text-sm">{messages[choice]}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Small video area styled like retro game window */}
      <section className="px-6 max-w-3xl mx-auto pb-24">
        <div className="bg-white/5 border border-white/8 rounded-lg p-4 flex items-center gap-4">
          <div className="w-28 h-20 bg-black rounded-sm border border-white/6 flex items-center justify-center">
            <Play className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-white/60 mt-1">✨</p>
          </div>
        </div> 
      </section>

      <iframe
  src="https://www.youtube.com/embed/0UkRqMFMZic?autoplay=1&loop=1&playlist=0UkRqMFMZic"
  allow="autoplay"
  className="hidden"
/>

      <style>{`
            .image-rendering-pixelated {
              image-rendering: pixelated;
              image-rendering: crisp-edges;
            }
          `}</style>
    </div>
  );
}
