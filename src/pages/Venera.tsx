import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Heart, Cat, Sparkles } from 'lucide-react';

    export default function Venera() {
      const [showSurprise, setShowSurprise] = useState(false);

      // Moved complex cursor data URI to a constant to prevent JSX parsing issues
      const cursorClass = `cursor-[url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23ffb6c1" stroke="%23ff69b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.43-2.4 1-3.44 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26.65-.17 1.33-.26 2-.26z"/></svg>'),_auto]`;

      return (
        <div className={`min-h-screen bg-[#FFF0F5] text-[#8B5A83] font-sans selection:bg-pink-200 overflow-hidden relative pb-32 ${cursorClass}`}>
          
          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute text-pink-300"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  scale: 0.5 + Math.random(),
                }}
              >
                <Cat size={48} strokeWidth={1} />
              </motion.div>
            ))}
          </div>

          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto text-center z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-full shadow-[0_0_40px_rgba(255,182,193,0.4)] border border-pink-100"
            >
              <Sparkles className="text-pink-400 w-8 h-8" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-[#db7093] mb-6 drop-shadow-sm"
            >
              С 8 Марта, Венера!
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#a0522d] max-w-2xl mx-auto leading-relaxed"
            >
              Welcome to your Vanilla Pink Dream. May your day be as sweet, elegant, and perfectly soft as this universe.
            </motion.p>
          </section>

          {/* Gallery Section - Polaroid style */}
          <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: i % 2 === 0 ? 3 : -3 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white p-4 pb-12 rounded-[2rem] shadow-xl border border-pink-50 relative"
                >
                  <div className="aspect-square bg-pink-100 rounded-[1.5rem] overflow-hidden relative">
                    <img 
                      src={`https://raw.githubusercontent.com/hanchatwer123/8thmarch/main/src/photo/venera.png`}
                      className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <Heart className="absolute bottom-4 right-6 text-pink-300 fill-pink-100" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Video Section - Soft TV Shape */}
          <section className="py-16 px-6 max-w-4xl mx-auto z-10 relative">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 shadow-2xl border border-pink-100 text-center"
            >
              <div className="aspect-video rounded-[2rem] border-4 border-pink-200/50 overflow-hidden">
  <div className="aspect-video rounded-[2rem] border-4 border-pink-200/50 overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/v2qMQiKxlp0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
</div>
            </motion.div>
          </section>

          {/* Interactive Surprise */}
          <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
            <AnimatePresence>
              {showSurprise && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: -20 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-72 bg-white p-6 rounded-[2rem] shadow-2xl border-2 border-pink-200 text-center"
                >
                  <p className="text-lg font-medium text-pink-600 mb-2">Ты самая чудесная! 🌸</p>
                  <p className="text-sm text-pink-400">Пусть каждый твой день будет наполнен нежностью и котиками.</p>
                  
                  {/* Confetti simulation */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`confetti-${i}`}
                      initial={{ y: 0, x: 0, opacity: 1 }}
                      animate={{ 
                        y: -100 - Math.random() * 100, 
                        x: (Math.random() - 0.5) * 200,
                        opacity: 0,
                        rotate: Math.random() * 360
                      }}
                      transition={{ duration: 1 + Math.random(), ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-400 rounded-full"
                      style={{ backgroundColor: ['#ffb6c1', '#ff69b4', '#ffc0cb'][Math.floor(Math.random() * 3)] }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSurprise(!showSurprise)}
              className="w-20 h-20 bg-gradient-to-tr from-pink-300 to-pink-200 rounded-full shadow-[0_0_30px_rgba(255,182,193,0.8)] border-4 border-white flex items-center justify-center group relative overflow-hidden"
            >
              <Cat className="text-white w-10 h-10 group-hover:animate-bounce" fill="currentColor" />
            </motion.button>
          </div>
        </div>
      );
    }
