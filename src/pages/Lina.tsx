import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    export default function Lina() {
      const [isBlooming, setIsBlooming] = useState(false);

      return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-serif selection:bg-red-900/50 selection:text-white overflow-hidden relative pb-32">
          
          {/* Subtle fog animation background */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
            <motion.div 
              animate={{ 
                x: [-100, 100],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-zinc-800 to-transparent blur-3xl"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Hero Section */}
          <section className="relative pt-40 pb-24 px-8 max-w-5xl mx-auto flex flex-col items-center text-center z-10">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 120 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-px bg-gradient-to-b from-transparent via-zinc-500 to-transparent mb-12"
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl font-medium tracking-widest text-zinc-100 mb-8 uppercase"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}
            >
              С 8 марта, Лина!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto tracking-wide"
            >
             Желаем тебе счастья, весёлых дней, отличного настроения и побольше поводов для улыбки!
            </motion.p>
          </section>

          {/* Gallery Section - Strict Grid */}
          <section className="py-20 px-8 max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800"
                >
                  <img 
                    src={`https://raw.githubusercontent.com/hanchatwer123/8thmarch/main/src/photo/lina.jpg`}
                    alt="Dark aesthetic"
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interactive Surprise - The Black Rose */}
          <section className="py-32 flex flex-col items-center justify-center relative z-10">
            <div className="relative">
              <motion.button
                onClick={() => setIsBlooming(true)}
                className="relative group outline-none"
                whileHover={{ scale: 1.05 }}
              >
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 24 24" 
                  fill={isBlooming ? "#7f1d1d" : "none"} 
                  stroke={isBlooming ? "#991b1b" : "#52525b"} 
                  strokeWidth="0.5" 
                  className="transition-colors duration-1000 ease-in-out drop-shadow-[0_0_15px_rgba(153,27,27,0.5)]"
                >
                  <path d="M12 22v-6m0 0a4 4 0 0 0-4-4H5.5a4.5 4.5 0 0 1 0-9C7 3 9 5.5 12 7c3-1.5 5-4 6.5-4a4.5 4.5 0 0 1 0 9H16a4 4 0 0 0-4 4z" />
                </svg>
                
                {!isBlooming && (
                  <motion.div 
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-4 rounded-full border border-zinc-700/50"
                  />
                )}
              </motion.button>

              <AnimatePresence>
                {isBlooming && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-12 w-80 text-center"
                  >
                    <h3 className="text-2xl text-red-800 mb-4 tracking-wider uppercase">Оставайся собой</h3>
                    <p className="text-zinc-400 text-sm leading-loose">
                      Продолжай радовать своих близких своим присутствием и улыбкой. Оставайся такой же загадочной и уникальной, с 8 марта!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

        </div>
      );
    }
