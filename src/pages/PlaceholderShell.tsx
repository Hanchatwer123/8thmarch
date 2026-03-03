import React from 'react';
    import { motion } from 'framer-motion';

    interface Props {
      name: string;
      themeTitle: string;
      description: string;
      colors: string;
    }

    export default function PlaceholderShell({ name, themeTitle, description, colors }: Props) {
      return (
        <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${colors}`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl text-center p-12 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-6 uppercase tracking-widest border border-white/5">
              Route Shell Initiated
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {name}
            </h1>
            <h2 className="text-xl text-white/80 mb-8 font-serif italic">
              Theme: {themeTitle}
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
            <p className="text-white/60 leading-relaxed mb-8">
              {description}
            </p>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm text-white/90">
                <span className="font-semibold text-white">Status:</span> Pending Generation. 
                Use Meku to fully implement this page according to the strict aesthetic guidelines.
              </p>
            </div>
          </motion.div>
        </div>
      );
    }