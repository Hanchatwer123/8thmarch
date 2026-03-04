import React, { useEffect, useRef, useState } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import { Sparkles } from "lucide-react";

    // Ariana page with an embedded, keyboard-activated Secret Fan Mode Easter egg.
    // All behavior, listeners and visuals are self-contained in this file.

    export default function Aizeshka(): JSX.Element {
      const [secretActive, setSecretActive] = useState(false);
      const [overlayVisible, setOverlayVisible] = useState(false);
      const bufferRef = useRef<string>(""); // typed characters buffer
      const timeoutRef = useRef<number | null>(null);

      // Normal particle intensity baseline; when secretActive is true they intensify.
      const PARTICLE_COUNT = 18;

      useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
          const key = e.key;

          // Only consider printable characters and Backspace
          if (key.length === 1) {
            // append char
            bufferRef.current += key.toLowerCase();
            if (bufferRef.current.length > 10) {
              bufferRef.current = bufferRef.current.slice(-10);
            }
          } else if (key === "Backspace") {
            bufferRef.current = bufferRef.current.slice(0, -1);
          } else {
            return;
          }

          const buf = bufferRef.current;

          // triggers: "beyhive" or "navy" (case-insensitive)
          if (buf.endsWith("beyhive") || buf.endsWith("navy")) {
            activateSecretMode();
            // reset buffer after activation
            bufferRef.current = "";
          }
        };

        window.addEventListener("keydown", handleKey);
        return () => {
          window.removeEventListener("keydown", handleKey);
          if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
          }
        };
      }, []);

      const activateSecretMode = () => {
        // Small debounce guard if rapidly triggered
        if (secretActive) return;
        setSecretActive(true);
        // show overlay after a short lead-in for dramatic timing
        timeoutRef.current = window.setTimeout(() => {
          setOverlayVisible(true);
        }, 250);
      };

      const deactivateSecretMode = () => {
        setOverlayVisible(false);
        // reduce effects gracefully: wait for overlay exit animation then fully turn off
        window.setTimeout(() => {
          setSecretActive(false);
        }, 450);
      };

      // Particle generator helper to produce deterministic styles
      const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const left = (i * 13) % 100;
        const top = (i * 7 + 8) % 100;
        const size = 6 + (i % 4) * 2;
        const delay = (i % 7) * 0.12;
        return { id: i, left, top, size, delay };
      });

      // Motion variants
      const overlayVariants = {
        hidden: { opacity: 0, scale: 0.92 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
      };

      return (
        <div className="min-h-screen relative bg-gradient-to-b from-[#0b0710] to-[#13081a] text-white overflow-hidden selection:bg-pink-600/20">
          {/* Glow pulse wrapper: subtle pulse applied to entire page when secret mode active */}
          <motion.div
            animate={secretActive ? { filter: ["drop-shadow(0 0 8px rgba(160,120,255,0.12))", "drop-shadow(0 0 18px rgba(255,200,80,0.08))"], scale: [1, 1.007, 1] } : {}}
            transition={secretActive ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
            className="min-h-screen relative z-0"
          >
            {/* Ambient background: subtle texture and stage */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              {/* Stage beams (appear when secret active) */}
              <AnimatePresence>
                {secretActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 z-10"
                    aria-hidden
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.5, 0.25], y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[16%] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,235,180,0.06), rgba(160,120,255,0.05) 30%, rgba(255,200,80,0.02) 60%, transparent 100%)",
                        mixBlendMode: "screen",
                        filter: "blur(28px)",
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.36, 0.12], y: [0, -10, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.28 }}
                      className="absolute left-1/4 top-0 h-full w-[10%] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(160,120,255,0.05), rgba(255,200,80,0.03) 30%, transparent 100%)",
                        mixBlendMode: "screen",
                        filter: "blur(36px)",
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.28, 0.08], y: [0, -8, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.56 }}
                      className="absolute right-1/4 top-0 h-full w-[10%] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,200,80,0.04), rgba(160,120,255,0.04) 30%, transparent 100%)",
                        mixBlendMode: "screen",
                        filter: "blur(36px)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Particles (golden + purple) */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0.06, scale: 0.85 }}
                    animate={
                      secretActive
                        ? {
                            y: [0, -18 - (p.id % 6), 0],
                            x: [0, (p.id % 2 === 0 ? -8 : 8), 0],
                            opacity: [0.12, 0.95, 0.22],
                            scale: [1, 1.6, 1],
                          }
                        : {
                            y: [0, p.id % 2 === 0 ? -6 : 6, 0],
                            opacity: [0.06, 0.3, 0.06],
                            scale: [0.9, 1, 0.9],
                          }
                    }
                    transition={
                      secretActive
                        ? { duration: 2.6 + ((p.id % 5) * 0.12), delay: p.delay, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 6 + (p.id % 4), delay: p.delay, repeat: Infinity, ease: "easeInOut" }
                    }
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      width: p.size,
                      height: p.size,
                      borderRadius: 9999,
                      boxShadow: secretActive ? "0 6px 20px rgba(255,200,80,0.14), 0 2px 8px rgba(160,120,255,0.06)" : "0 4px 14px rgba(0,0,0,0.2)",
                      background: p.id % 2 === 0 ? "radial-gradient(circle at 30% 30%, rgba(255,215,120,0.9), rgba(255,200,80,0.6))" : "radial-gradient(circle at 30% 30%, rgba(160,120,255,0.95), rgba(120,80,220,0.6))",
                      mixBlendMode: "screen",
                      transformOrigin: "center",
                      position: "absolute",
                    }}
                  />
                ))}
              </div>

              {/* Bass-pulse visual (no audio) */}
              <AnimatePresence>
                {secretActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.18, scale: [0.98, 1.06, 0.98] }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-12 z-30 pointer-events-none"
                    style={{
                      width: 460,
                      height: 220,
                      borderRadius: 240,
                      background: "radial-gradient(ellipse at center, rgba(255,200,80,0.08), rgba(160,120,255,0.06) 45%, transparent 70%)",
                      filter: "blur(36px)",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Page content */}
            <header className="relative z-40 pt-28 pb-10 px-6 max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-3 bg-white/6 px-3 py-2 rounded-full border border-white/8 backdrop-blur-sm mx-auto mb-6"
              >
                <Sparkles className="w-5 h-5 text-pink-200" />
                <span className="text-xs uppercase tracking-widest text-white/90">Ariana</span>
              </motion.div>

              <motion.h1
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-serif text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              >
                Secret Fan Mode — Try typing...
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.16 }}
                className="mt-4 text-sm text-white/70 max-w-2xl mx-auto"
              >
                Type the hidden word anywhere: "BeyHive" or "Navy" (case-insensitive) to reveal a premium, concert-style surprise.
              </motion.p>
            </header>

            {/* Mock gallery (keeps page feeling complete) */}
            <section className="px-6 max-w-6xl mx-auto py-8 z-40">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-b from-white/3 to-transparent p-2"
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#1b1124] to-[#0c0510] rounded-lg flex items-center justify-center">
                      <div className="text-sm text-white/80 px-6">Memory Space {n}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Animated personal message area */}
            <section className="px-6 max-w-4xl mx-auto py-6 z-40">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="bg-white/6 border border-white/8 rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-medium">For a Queen-Like Energy</h3>
                <p className="text-sm text-white/70 mt-2">You are luminous, confident, and unforgettable — a private stage reserved for greatness.</p>
              </motion.div>
            </section>
          </motion.div>

          {/* Secret Fan Mode Overlay */}
          <AnimatePresence>
            {overlayVisible && (
              <motion.div
                key="fan-mode-overlay"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-50 flex items-center justify-center p-6"
              >
                {/* Slight darken backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-black backdrop-blur-sm pointer-events-none"
                />

                {/* Overlay content card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.96, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-60 max-w-3xl mx-auto bg-gradient-to-br from-[#13061a]/80 to-[#1f0b25]/70 border border-white/8 rounded-3xl p-8 text-center shadow-[0_40px_120px_rgba(10,6,20,0.8)]"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-[rgba(255,230,180,1)] mb-3">Queen Recognizes Queen.</h2>
                  <p className="text-sm text-white/80 mb-6">You know the energy. You live the legacy.</p>

                  <div className="flex items-center justify-center gap-4">
                    <motion.button
                      onClick={deactivateSecretMode}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 py-2 rounded-full bg-gradient-to-tr from-[#ffd77a] to-[#b88bff] text-black font-medium border border-white/10 shadow-md"
                    >
                      Return to Reality
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }
