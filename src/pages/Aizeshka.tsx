import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Aizere: React.FC = () => {
    const [mood, setMood] = useState<'queen' | 'savage' | 'diamond' | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecretMode, setIsSecretMode] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 1000 });

    useEffect(() => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    // Easter Egg logic
    useEffect(() => {
        if (isSecretMode) return;

        let keyBuffer = '';
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore modifier keys alone
            if (['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) return;

            keyBuffer = (keyBuffer + e.key).slice(-15).toLowerCase();

            if (keyBuffer.includes('beyhive') || keyBuffer.includes('navy')) {
                setIsSecretMode(true);
                keyBuffer = ''; // reset buffer
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSecretMode]);

    const moodColors = {
        queen: 'from-amber-900/40 via-[#0b0b0f] to-[#0b0b0f]',
        savage: 'from-red-900/40 via-[#0b0b0f] to-[#0b0b0f]',
        diamond: 'from-cyan-900/40 via-[#0b0b0f] to-[#0b0b0f]',
        default: 'from-purple-900/20 via-[#0b0b0f] to-[#0b0b0f]',
    };

    const activeColor = mood ? moodColors[mood] : moodColors.default;

    const moodMessages = {
        queen: "Ну чо за королева. Продолжай также править этим миром и моим сердцем",
        savage: "Я обожаю огонь в твоих глазах, уверенность в твоих действиях. Никто не встанет на твоем пути, а если кто то и встанет то я им не позволю своей бицухой ХАХЗЫАПХ=ЫВХАХЫВАХЫ=АХВ",
        diamond: "Ты красивая, идеальная и любые твои минус для меня плюс. Ты бриллиантищу просто бож"
    };

    const cards = [
        { text: "Who wants that perfect love story any way, anyway? Cliché, Cliché, Cliché, Cliché" },
        { text: "OHH I LOVE YOU SO. BUT WHY I LOVE YOU, I'LL NEVER KNOW" },
        { text: "Drunk in love we be all night, love, love" },
        { text: "Ты моя звездочка, который никогда не надоедает." },
        { text: "Ты для меня не просто человек. Ты легенда в моей истории." },
        { text: "You and me would stop this love drought" }
    ];

    return (
        <motion.div
            className={`min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative transition-colors duration-1000 bg-gradient-to-br ${activeColor}`}
            animate={isSecretMode ? {
                boxShadow: [
                    "inset 0 0 50px rgba(147,51,234,0.3)",
                    "inset 0 0 150px rgba(147,51,234,0.7)",
                    "inset 0 0 50px rgba(147,51,234,0.3)"
                ]
            } : {
                boxShadow: "inset 0 0 0px rgba(0,0,0,0)"
            }}
            transition={{ duration: 1.5, repeat: isSecretMode ? Infinity : 0, ease: "easeInOut" }}
        >

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

                {/* Darkening overlay in Secret Mode */}
                <AnimatePresence>
                    {isSecretMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 bg-black/80 z-0"
                        />
                    )}
                </AnimatePresence>

                {/* Stage Lights */}
                <motion.div
                    animate={{ rotate: [0, 5, -5, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(88,28,135,0.2)_0%,rgba(0,0,0,0)_60%)] blur-3xl transform skew-x-12 z-0"
                />
                <motion.div
                    animate={{ rotate: [0, -5, 5, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(127,29,29,0.2)_0%,rgba(212,175,55,0.1)_30%,rgba(0,0,0,0)_60%)] blur-3xl transform -skew-x-12 z-0"
                />

                {/* Secret Mode Intense Beams */}
                <AnimatePresence>
                    {isSecretMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ rotate: [0, 15, -15, 0], opacity: [0.5, 0.9, 0.5] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-1/4 w-[200%] h-[200%] bg-[radial-gradient(ellipse,rgba(212,175,55,0.25)_0%,rgba(147,51,234,0.2)_30%,rgba(0,0,0,0)_60%)] blur-3xl transform skew-y-12 z-0"
                        />
                    )}
                </AnimatePresence>

                {/* Particles */}
                {[...Array(isSecretMode ? 80 : 30)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}-${isSecretMode}`}
                        className={`absolute rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] z-0 ${isSecretMode
                            ? (Math.random() > 0.5 ? 'bg-purple-400' : 'bg-[#d4af37]')
                            : (mood === 'diamond' ? 'bg-cyan-300' : mood === 'savage' ? 'bg-red-400' : 'bg-[#d4af37]')
                            }`}
                        style={{
                            width: isSecretMode ? Math.random() * 6 + 2 : Math.random() * 4 + 1,
                            height: isSecretMode ? Math.random() * 6 + 2 : Math.random() * 4 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100 - Math.random() * (isSecretMode ? 400 : 200)],
                            opacity: [0, Math.random() * 0.8 + 0.2, 0],
                            scale: [0, isSecretMode ? 1.5 : 1, 0]
                        }}
                        transition={{
                            duration: isSecretMode ? Math.random() * 4 + 3 : Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className={`relative z-10 container mx-auto px-4 py-20 flex flex-col items-center ${isSecretMode ? 'blur-sm pointer-events-none' : ''} transition-all duration-1000`}>

                {/* 1. HERO SECTION */}
                <section className="text-center min-h-[60vh] flex flex-col justify-center items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:200%_auto]">
                            <motion.span
                                animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#d4af37] to-white"
                            >
                                С 8 Марта, Айзешка —<br />Ты моя настоящая королева.
                            </motion.span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1.5 }}
                            className="text-xl md:text-3xl text-gray-400 font-light tracking-wide mt-4 md:mt-8"
                        >
                            Baddie, diva, slay Shawty :)
                        </motion.p>
                    </motion.div>
                </section>

                {/* 2. DIVA ENERGY CARDS */}
                <section className="py-24 w-full max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#d4af37] tracking-widest uppercase"
                    >
                        Diva Energy
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                                className="group relative p-10 min-h-[160px] flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden cursor-pointer"
                                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Shine effect */}
                                <div className="absolute -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shine" />

                                <p className="relative z-10 text-xl font-medium text-center text-gray-200 group-hover:text-white transition-colors">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. CHOOSE YOUR MOOD */}
                <section className="py-24 text-center w-full max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-300 tracking-wider uppercase">Choose one of the modes</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button onClick={() => setMood('queen')} className="px-10 py-4 rounded-full text-xl font-medium border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]">
                            1.
                        </button>
                        <button onClick={() => setMood('savage')} className="px-10 py-4 rounded-full text-xl font-medium border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)]">
                            2.
                        </button>
                        <button onClick={() => setMood('diamond')} className="px-10 py-4 rounded-full text-xl font-medium border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]">
                            3.
                        </button>
                    </div>

                    <div className="mt-16 h-24 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {mood && (
                                <motion.div
                                    key={mood}
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -30 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    className="text-2xl md:text-3xl font-light italic"
                                    style={{
                                        color: mood === 'diamond' ? '#67e8f9' : mood === 'savage' ? '#fca5a5' : '#fde047'
                                    }}
                                >
                                    "{moodMessages[mood]}"
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* 4. LUXURY MESSAGE REVEAL */}
                <section className="py-40 w-full flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="group relative px-14 py-6 bg-gradient-to-r from-[#d4af37] via-[#fef08a] to-[#d4af37] text-black font-extrabold text-2xl md:text-3xl rounded-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_80px_rgba(212,175,55,0.9)]"
                    >
                        <div className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
                        Open Your Crown
                    </motion.button>
                </section>

            </div>

            {/* SECRET FAN MODE OVERLAY */}
            <AnimatePresence>
                {isSecretMode && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 1.5 }}
                        className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 bass-pulse-container pointer-events-auto"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                            className="text-center"
                        >
                            <motion.h2
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
                                className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-purple-300 to-[#d4af37] uppercase tracking-widest drop-shadow-[0_0_40px_rgba(212,175,55,0.5)] mb-6"
                            >
                                Queen Recognizes<br />Queen.
                            </motion.h2>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="text-3xl md:text-5xl text-purple-200 font-light italic drop-shadow-md"
                            >
                                "Imperfections make you more beautiful."
                            </motion.p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 3, duration: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsSecretMode(false)}
                            className="absolute bottom-16 md:bottom-24 px-10 py-4 rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-900/40 hover:text-white transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] backdrop-blur-md text-xl md:text-2xl font-medium tracking-wide"
                        >
                            Return to Reality
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* REVEAL MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b0f]/95 backdrop-blur-2xl p-4 md:p-8 ${isSecretMode ? 'hidden' : ''}`}
                    >
                        {/* Modal Particles */}
                        {[...Array(60)].map((_, i) => (
                            <motion.div
                                key={`modal-particle-${i}`}
                                className="absolute w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_20px_#d4af37]"
                                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                animate={{
                                    x: (Math.random() - 0.5) * windowDimensions.width * 1.5,
                                    y: (Math.random() - 0.5) * windowDimensions.height * 1.5,
                                    opacity: 0,
                                    scale: 0
                                }}
                                transition={{ duration: 2.5 + Math.random() * 2, ease: "easeOut" }}
                            />
                        ))}

                        <motion.div
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            transition={{ delay: 0.4, duration: 1, type: "spring" }}
                            className="max-w-4xl w-full p-12 md:p-20 rounded-[3rem] bg-neutral-900/40 border border-[#d4af37]/30 shadow-[0_0_80px_rgba(212,175,55,0.2)] text-center relative overflow-hidden"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-8 right-8 text-gray-400 hover:text-[#d4af37] transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <h3 className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-12 mt-4 tracking-wide shadow-black drop-shadow-lg">
                                Ты — идеальный соулмейт.
                            </h3>
                            <div className="space-y-8 text-xl md:text-3xl text-gray-200 font-light leading-relaxed">
                                <p>
                                    Я не знал о твоём существовании, но я теперь не могу представить и дня без общения с тобой.
                                </p>
                                <p>
                                    В тебе сочетается невероятная сила и хрупкая элегантность.
                                    Твоя энергия заряжает залы, а твой свет способен разогнать любую тьму.
                                </p>
                                <p className="text-[#d4af37] font-medium text-3xl md:text-4xl pt-8">
                                    Сияй. Вдохновляй. Покоряй.
                                </p>
                                <p className="italic text-gray-400 text-lg md:text-xl pt-12">
                                    С праздником, бесподобная Айз.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shine {
          100% { transform: translateX(300%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out forwards;
        }
        .bass-pulse-container {
          animation: bassPulse 0.8s infinite alternate ease-in-out;
        }
        @keyframes bassPulse {
          0% { transform: scale(1); filter: brightness(1); }
          100% { transform: scale(1.01); filter: brightness(1.1); }
        }
      `}} />
        </motion.div>
    );
};

export default Aizere;
