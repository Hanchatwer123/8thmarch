import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sword, Play } from "lucide-react";

export default function Akku() {
  const [strike, setStrike] = useState(false);

  const triggerStrike = () => {
    // rapid snap motion then reveal compliment
    setStrike(true);
    window.setTimeout(() => setStrike(false), 2200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040612] to-[#071028] text-blue-50 overflow-hidden relative">
      {/* Ambient lightning particles (fast, sharp) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              x: [0, (i % 2 === 0 ? -60 : 60), 0],
              rotate: [0, (i % 2 === 0 ? -3 : 3), 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: [0.2, 1, 0.3, 1], // sharp snap-like cubic
            }}
            style={{
              top: `${10 + i * 10}%`,
              left: `${(i * 13) % 100}%`,
            }}
            className="absolute w-0.5 h-24 bg-gradient-to-b from-white/60 to-transparent blur-sm"
          />
        ))}
      </div>

      {/* Dramatic Hero */}
      <header className="pt-28 pb-12 px-6 max-w-5xl mx-auto z-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-4 relative inline-block">
            <span className="block leading-tight text-[#e0e8ff]">С 8 марта, </span>
            <span className="block text-[#f3c6d3] text-opacity-80 text-5xl md:text-7xl leading-tight glitch-accents">Акку!</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="rounded-lg bg-gradient-to-br from-black/40 to-white/2 border border-gray-800 p-4 shadow-2xl backdrop-blur-sm">
            <p className="text-lg md:text-xl font-medium">С праздником!</p>
            <p className="text-sm text-blue-200/60 mt-2 max-w-xl">Желаем тебе ежедневного счастья, радости и хорошего настроения!</p>
          </div>
        </motion.div>
      </header>

      {/* Gallery — diagonal film-strip layout */}
      <section className="px-6 max-w-6xl mx-auto py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr transform -skew-y-2">
          {[1, 2, 3].map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotate: i - 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.6, -0.05, 0.1, 0.99], type: "tween" }}
              className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#071028]/40 shadow-[0_30px_80px_rgba(2,6,23,0.6)]"
            >
              <div className="aspect-[16/10] bg-gradient-to-tr from-[#0b1930] to-[#0b1220] p-4 flex items-center justify-center">
                <img
                  src={`https://raw.githubusercontent.com/hanchatwer123/8thmarch/main/src/photo/akku.jpg`}
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video area — cinematic player card */}
      <section className="px-6 max-w-4xl mx-auto py-8 z-20 relative">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-3xl overflow-hidden border border-gray-800 bg-[#020417]/60 shadow-2xl"
        >
          <div className="aspect-video relative bg-black">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop"
              alt="cinematic"
              className="w-full h-full object-cover opacity-70"
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Play className="w-14 h-14 text-white/90 drop-shadow-lg" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Surprise — Sword summon / lightning strike */}
      <div className="fixed bottom-10 right-8 z-40">
        <motion.button
          onClick={triggerStrike}
          whileHover={{ rotate: -6, scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 700, damping: 18 }}
          className="relative bg-gradient-to-tr from-[#0ea5e9] to-[#7c3aed] p-4 rounded-full shadow-[0_15px_40px_rgba(124,58,237,0.35)] border border-white/10"
          aria-label="Summon lightning"
        >
          <Sword className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Lightning flash overlay */}
      <AnimatePresence>
        {strike && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 bg-white/30"
            />
            <motion.div
              initial={{ scaleY: 0.2, opacity: 0 }}
              animate={{ scaleY: 1.1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1/4 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(200,230,255,0.6) 20%, rgba(120,170,255,0.0) 60%)",
                mixBlendMode: "screen",
                filter: "blur(14px)",
              }}
            />
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.18, 0.9, 0.36, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full px-6"
            >
              <div className="mx-auto max-w-2xl bg-gradient-to-tr from-[#071233]/80 to-[#081a2a]/80 border border-white/10 p-8 rounded-2xl shadow-2xl text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Грация</h3>
                <p className="text-sm text-blue-100/80">
                  Желаю тебе хорошего настроения, уверенности и ярких побед в жизни.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Unique VHS-style text glitch CSS (scoped) */}
      <style>{`
            .glitch-accents {
              position: relative;
            }
            .glitch-accents::before,
            .glitch-accents::after {
              content: attr(data-text);
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              clip-path: inset(0 0 0 0);
            }
            /* small flicker effect */
            @keyframes flickerHue {
              0% { opacity: 1; filter: hue-rotate(0deg) saturate(1); transform: translateX(0); }
              30% { opacity: 0.8; filter: hue-rotate(8deg) saturate(1.2); transform: translateX(-1px); }
              60% { opacity: 0.95; filter: hue-rotate(-6deg) saturate(0.9); transform: translateX(1px); }
              100% { opacity: 1; filter: hue-rotate(0deg) saturate(1); transform: translateX(0); }
            }
            .glitch-accents {
              animation: flickerHue 3s infinite;
              text-shadow: 0 6px 40px rgba(20,50,120,0.4);
            }
          `}</style>
    </div>
  );
}
