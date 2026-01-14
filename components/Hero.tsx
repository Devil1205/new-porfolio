
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] -z-10"
      ></motion.div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="text-center max-w-5xl space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 bg-slate-800/40 border border-slate-700/50 rounded-full text-xs font-mono tracking-widest text-purple-400 uppercase"
        >
          &lt; Hello, I'm {PERSONAL_INFO.name} /&gt;
        </motion.div>
        
        <motion.h1 
          className="text-7xl md:text-[110px] font-black tracking-tight leading-[0.9] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Building <span className="gradient-text">scalable</span> <br /> 
          production apps.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Full Stack Developer with <span className="text-slate-200">{PERSONAL_INFO.experienceYears} years</span> of experience 
          delivering clean, optimized solutions using the <span className="text-white font-medium">MERN/PERN</span> stack.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-purple-600 rounded-full font-black text-white hover:bg-purple-700 transition-all flex items-center justify-center gap-3 text-lg"
          >
            Explore Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 glass-panel border border-white/10 rounded-full font-black text-white hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-lg"
          >
            Get in Touch
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
