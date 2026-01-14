
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import { PERSONAL_INFO } from './constants';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Interactive Background Glow */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-20"
        animate={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <motion.section 
          id="about" 
          className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 "></div>
            <div className="aspect-square glass-panel rounded-3xl overflow-hidden relative z-10 p-2">
              <img 
                src="/me.jpg" 
                alt="Pulkit Sachdeva" 
                className="w-full h-full object-cover transition-all duration-1000 rounded-2xl " 
              />
            </div>
            <motion.div 
              className="absolute -bottom-10 -right-5 sm:right-10 glass-panel p-4 sm:p-8 rounded-3xl border-purple-500/20 z-20 shadow-2xl shadow-purple-900/20"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-5xl font-black text-purple-400">{PERSONAL_INFO.experienceYears}</div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-1">Years of Craft</div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tight leading-none">
                Engineering <br />
                <span className="text-slate-500">Excellence.</span>
              </h2>
              <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              I'm Pulkit, a full stack developer focused on building production-grade applications that can handle <span className="text-white font-medium">hundreds of thousands of users</span>. 
              Currently at Neuronimbus Software Services (P) Ltd., I've delivered <span className="text-white font-medium">7+ scalable projects</span> by following clean coding strategies and deep database optimization.
            </p>
            
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              My core mission is to bridge business needs with <span className="text-white font-medium">high-performance tech</span>. I reduced page load times by 87% for major clients using SSR and query tuning.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/5">
              <div>
                <div className="text-2xl font-bold text-white">7+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scalable Apps</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">87%</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Speed Gain</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">300k+</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Monthly Users</div>
              </div>
            </div>
          </div>
        </motion.section>

        <Experience />
        <Skills />
        <Projects />

        <motion.section 
          id="contact" 
          className="py-20 px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto glass-panel p-8 xs:p-16 md:p-24 rounded-[60px] text-center space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
            
            <h2 className="text-5xl xs:text-6xl font-black tracking-tighter">Ready to <br /><span className="gradient-text">scale your project?</span></h2>
            
            <p className="text-xl xs:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Based in New Delhi, working globally. Let's build something exceptional together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <motion.a 
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black font-black text-md xs:text-lg rounded-full shadow-2xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-3"
              >
                Let's Chat
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>
              </motion.a>
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 glass-panel font-black text-md xs:text-lg rounded-full border-white/10 hover:bg-white/10 transition-all"
              >
                Top of Page
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-bold">
            <span className="gradient-text">{PERSONAL_INFO.name.toUpperCase()}</span> <span className="font-normal text-slate-600 text-xs ml-2">© 2024</span>
          </div>
          <div className="flex gap-10">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* <Chatbot /> */}
    </div>
  );
}

export default App;
