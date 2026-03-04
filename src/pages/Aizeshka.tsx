import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    export default function Dilnaz() {
      const [moonRevealed, setMoonRevealed] = useState(false);

      return (
        <div className="min-h-screen bg-[#0f071a] text-purple-100 font-serif selection:bg-fuchsia-900/50 overflow-hidden relative pb-32">
          
          {/* Falling Petals Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, x: Math.random() * window.innerWidth, rotate: 0 }}
                animate={{ 
                  y: window.innerHeight + 50,
                  x: `calc(${Math.random() * 100}vw)`,
                  rotate: 360
                }}
                transition={{ 
                  duration: 10 + Math.random() * 10, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 5
                }}
                className="absolute w-4 h-4 bg-purple-900/40 rounded-tl-full rounded-br-full blur-[1px]"
              />
            ))}
          </div>

          {/* Glowing accents */}
          <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-fuchsia-900/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 space-y-6"
              >
                <p className="text-fuchsia-500/80 tracking-[0.3em] uppercase text-sm">Noir Romantic</p>
                <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
                  С праздником,<br/>
                  <span className="italic text-purple-400">Дильназ</span>
                </h1>
                <div className="w-12 h-[1px] bg-purple-500/50" />
                <p className="text-lg text-purple-300/80 max-w-md leading-relaxed">
                  Where darkness meets emotion. A cinematic journey dedicated to your unique, dramatic beauty.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex-1 relative"
              >
                <div className="aspect-[4/5] w-full max-w-sm mx-auto rounded-t-full border border-purple-800/30 overflow-hidden relative shadow-[0_0_50px_rgba(88,28,135,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f071a] via-transparent to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop" 
                    alt="Romantic dark floral"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Asymmetric Gallery */}
          <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col gap-24">
              {[1, 2].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`flex items-center gap-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 aspect-video bg-purple-950/50 border border-purple-800/20 rounded-lg overflow-hidden relative group">
                     <img 
                        src={`https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop`}
                        alt="Aesthetic detail"
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                      />
                  </div>
                  <div className="w-1/2 space-y-4">
                    <h3 className="text-2xl text-purple-200">Midnight Thoughts</h3>
                    <p className="text-purple-400/60 leading-relaxed text-sm">
                      Elegance found in the quiet moments.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Interactive Moon Surprise */}
          <section className="py-32 flex flex-col items-center justify-center relative z-20">
            <motion.div
              animate={{ 
                boxShadow: moonRevealed 
                  ? "0 0 100px 20px rgba(216, 180, 254, 0.4)" 
                  : "0 0 40px 5px rgba(216, 180, 254, 0.1)"
              }}
              className="rounded-full bg-purple-100 cursor-pointer relative transition-all duration-1000"
              onClick={() => setMoonRevealed(true)}
              style={{
                width: moonRevealed ? '300px' : '100px',
                height: moonRevealed ? '300px' : '100px',
              }}
            >
              {/* Moon craters texture simulation */}
              <div className="absolute inset-0 rounded-full opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              
              {!moonRevealed && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center text-purple-900 font-bold tracking-widest text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  CLICK
                </motion.div>
              )}

              <AnimatePresence>
                {moonRevealed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-purple-950 p-8 text-center"
                  >
                    <h4 className="text-2xl font-bold mb-4">Ты сияешь</h4>
                    <p className="text-sm font-medium opacity-80">
                      Даже в самой глубокой ночи твой свет уникален. С праздником весны, оставайся такой же глубокой и прекрасной.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

        </div>
      );
    }
