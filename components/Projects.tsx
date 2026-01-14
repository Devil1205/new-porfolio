
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#020617]/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-6xl font-black tracking-tight">Recent Artifacts.</h2>
            <p className="text-xl text-slate-400 font-light max-w-xl">Engineering solutions for scale, speed, and real-world impact.</p>
          </div>
          <motion.div 
            className="hidden md:block h-px flex-1 bg-white/5 mx-20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id} 
              className="group glass-panel rounded-[40px] overflow-hidden hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay link icon */}
                <a href={project.demoUrl} target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-purple-600/20 backdrop-blur-sm">
                   <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                   </div>
                </a>
              </div>

              <div className="p-10 space-y-6 flex-1 flex flex-col">
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-800/80 rounded-full border border-white/5 text-slate-400 group-hover:text-purple-400 transition-colors">{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-black group-hover:gradient-text transition-all">{project.title}</h3>
                
                <p className="text-slate-400 leading-relaxed font-light text-lg flex-1">
                  {project.description}
                </p>
                
                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                  <a href={project.repoUrl} aria-disabled={project.repoUrl?true:false} className={`text-sm font-black flex items-center gap-2 group/btn ${project.repoUrl?'hover:text-white':'cursor-not-allowed opacity-30'} transition-colors text-slate-400`}>
                    Source Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </a>
                  <a href={project.demoUrl} className="px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-xs font-black uppercase tracking-widest transition-all">Live Preview</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
