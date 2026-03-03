import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Home, ArrowLeft } from 'lucide-react';
    import { motion } from 'framer-motion';

    export default function Navigation() {
      const location = useLocation();
      const isHome = location.pathname === '/';

      if (isHome) return null;

      return (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-6 z-50 mix-blend-difference text-white"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
        </motion.nav>
      );
    }