
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          <span className="gradient-text">PULKIT</span>.S
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-black text-xs font-black rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            HIRE ME
          </a>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
