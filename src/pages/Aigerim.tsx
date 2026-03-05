import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function Aigerim() {
  const [sealOpen, setSealOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02130f] to-[#06251f] text-white overflow-x-hidden relative">
      {/* Subtle traditional ornament silhouettes that parallax with scroll */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#0f3a2e" stopOpacity="0.85" />
              <stop offset="1" stopColor="#083525" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <g fill="url(#g1)" opacity="0.7">
            <path d="M10 80 C 30 10, 70 10, 90 80 L 90 100 L 10 100 Z" />
          </g>
        </svg>
      </div>

      {/* Hero */}
      <header className="pt-28 pb-8 px-6 max-w-5xl mx-auto z-20 relative text-center">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-emerald-200 tracking-tight">Айгерим</h1>
          <p className="text-sm text-emerald-100/70 mt-3">С 8 марта, Айгерим! </p>
        </motion.div>
      </header>

      {/* Two-column luxury layout with ornament */}
      <section className="px-6 max-w-6xl mx-auto py-12 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-3 bg-emerald-900/30 px-3 py-1 rounded-full border border-white/6">
              <Crown className="w-5 h-5 text-gold-300" />
              <span className="text-xs uppercase tracking-widest">Royal</span>
            </div>
            <h2 className="text-3xl font-serif">Девушка Орынбека</h2>
            <p className="text-sm text-emerald-100/80 max-w-xl leading-relaxed">
              Желаем тебе счастья, здоровья, хорошего настроения и успехов в учёбе. Оставайся такой же доброй, весёлой и радостной!
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/6 bg-[#042822]/80 p-6">
              <img
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=900&auto=format&fit=crop"
                alt="aigerim"
                className="w-full h-full object-cover rounded-xl opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo gallery — ornament-framed horizontal cards */}
      <section className="px-6 max-w-6xl mx-auto py-8 z-20">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 36 }}
              className="min-w-[260px] bg-[#042821]/30 rounded-2xl border border-white/6 p-4"
            >
              <div className="h-44 rounded-lg overflow-hidden mb-3">
                <img
                  src={`https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=900&auto=format&fit=crop`}
                  alt={`aigerim-${n}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Royal seal interactive reveal */}
      <section className="px-6 max-w-3xl mx-auto py-12 z-30">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="relative"
            onClick={() => setSealOpen(!sealOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-600 to-[#82d3a0] flex items-center justify-center border-2 border-gold-300 shadow-[0_20px_60px_rgba(4,69,48,0.35)] cursor-pointer">
              <Sparkles className="w-10 h-10 text-white/90" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-emerald-100/80">Open Seal</div>
          </motion.div>

          <AnimatePresence>
            {sealOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.2, 0.9, 0.3, 1] }}
                className="mt-4 bg-white/6 border border-white/8 rounded-2xl p-6 max-w-md text-center"
              >
                <h3 className="text-xl font-serif text-emerald-100 mb-2">Дорогая, Айгерим</h3>
                <p className="text-sm text-emerald-50/80">Пусть все твои мечты сбываются и ты двигалась только вперед. С 8 Марта!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer shimmer bar */}
      <footer className="absolute left-0 right-0 bottom-0 z-10">
        <div
          className="h-2 w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,215,0,0.05), rgba(255,215,0,0.18), rgba(255,255,255,0.02))",
            filter: "blur(8px)",
          }}
        />
      </footer>

      <style>{`
            .text-gold-300 { color: #f6d365; }
          `}</style>
    </div>
  );
}
