import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Sparkles, Gift } from "lucide-react";

export default function Banu() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const wish = () => {
    setSpinning(true);
    setResult(null);
    const pick = 1 + Math.floor(Math.random() * 5); // 1..5
    setTimeout(() => {
      setResult(pick);
      setSpinning(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0424] via-[#100820] to-[#06111b] text-white overflow-hidden relative">
      {/* Floating constellation particles (slow twinkle) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.9, 0.2],
              y: [0, i % 2 === 0 ? -6 : 6, 0],
              scale: [0.6, 1.1, 0.6],
            }}
            transition={{
              duration: 4 + (i % 3),
              delay: i * 0.12,
              repeat: Infinity,
              ease: [0.22, 0.9, 0.36, 1],
            }}
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 9 + 6) % 100}%`,
            }}
            className="absolute rounded-full w-1.5 h-1.5 bg-gradient-to-tr from-violet-400 to-gold-300 blur-sm"
          />
        ))}
      </div>

      {/* Hero */}
      <header className="pt-28 pb-8 px-6 max-w-4xl mx-auto text-center z-20 relative">
        <motion.h1
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif tracking-tight text-violet-100"
        >
          Бану,
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm text-violet-200/60 mt-3"
        >
          С 8 Марта!
        </motion.p>
      </header>

      {/* Character card style gallery */}
      <section className="px-6 max-w-6xl mx-auto py-10 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative rounded-2xl border border-violet-700/30 overflow-hidden bg-gradient-to-br from-[#07102b]/20 to-[#0b0620]/30 p-4"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-b from-violet-800/20 to-transparent">
                <img
                  src={`https://raw.githubusercontent.com/hanchatwer123/8thmarch/main/src/photo/banu.jpeg`}
                  className="w-full h-full object-cover opacity-85 mix-blend-screen"
                />
              </div>
              <div className="absolute right-4 top-4 p-2 bg-black/40 rounded-lg border border-white/5">
                <Star className="w-4 h-4 text-gold-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

 {/* Wish animation showcase */}
<section className="px-6 max-w-4xl mx-auto py-6 z-20">
  <div className="rounded-xl border border-white/8 overflow-hidden bg-gradient-to-br from-[#081229]/60 to-[#1b0f3a]/60 p-10 relative text-center">

    {/* Falling star */}
    <motion.div
      initial={{ x: -200, y: -120, opacity: 0 }}
      animate={{ x: 200, y: 120, opacity: 1 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
      className="absolute top-0 left-0"
    >
      <Sparkles className="w-8 h-8 text-yellow-300" />
    </motion.div>

    {/* Main glow */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="inline-block p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/10"
    >
      <p className="text-yellow-300 text-xl font-semibold mb-2">
        ⭐⭐⭐⭐⭐ Legendary
      </p>

      <p className="text-white text-lg">
        Rare character unlocked
      </p>

      <p className="text-violet-200 mt-2">
        Бану ✨
      </p>
    </motion.div>

    {/* Golden burst */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1.6, opacity: 0 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="w-40 h-40 rounded-full bg-yellow-400/20 blur-2xl"></div>
    </motion.div>

  </div>
</section>

      {/* Wish Gacha */}
      <section className="px-6 max-w-3xl mx-auto py-12 z-30">
        <div className="bg-gradient-to-br from-[#06102a]/40 to-[#0b0520]/40 border border-white/8 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-medium mb-3">Гача сим</h3>
          <p className="text-sm text-violet-200/60 mb-6">Press the Wish button</p>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={wish}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 26 }}
              className="px-6 py-3 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 shadow-lg border border-white/10 flex items-center gap-3"
            >
              <Gift className="w-5 h-5" />
              <span className="font-medium">Wish</span>
            </motion.button>
          </div>

          <div className="mt-8">
            <AnimatePresence>
              {spinning && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center gap-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0 }}
                      animate={{ y: [-6, 6, -2] }}
                      transition={{
                        duration: 0.7 + i * 0.06,
                        repeat: Infinity,
                        ease: [0.3, 0.8, 0.4, 1],
                      }}
                      className="w-20 h-28 bg-gradient-to-b from-violet-800/40 to-transparent rounded-lg border border-white/6"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 mx-auto max-w-sm bg-gradient-to-br from-[#2c1550] to-[#231033] border border-gold-300/10 p-6 rounded-2xl text-center shadow-[0_30px_80px_rgba(92,47,120,0.2)]"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gold-300 to-yellow-200 flex items-center justify-center text-[#06030a] text-xl font-bold shadow-md">
                      ✨
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl mb-1">Legendary!</h4>
                  <p className="text-sm text-violet-200/70">Желаем тебе счастья, удачи в жизни и самое главное продолжай радовать своих близких своим присутствием!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <style>{`
            /* gold color alias */
            .text-gold-300 { color: #f6d365; }
            .bg-gold-300 { background: #f6d365; }
          `}</style>
    </div>
  );
}
