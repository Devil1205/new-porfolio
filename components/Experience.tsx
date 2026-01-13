
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-5xl font-black mb-6 tracking-tight">Professional <span className="gradient-text">Journey.</span></h2>
        <div className="h-1 w-20 bg-purple-600 rounded-full mb-8"></div>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-12 group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-500"></div>
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="glass-panel p-8 md:p-10 rounded-[40px] border-white/5 hover:border-purple-500/20 transition-all duration-500 shadow-2xl shadow-black/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-black text-white group-hover:gradient-text transition-all duration-500">{exp.role}</h3>
                  <div className="text-purple-400 font-mono text-sm mt-1">{exp.company}</div>
                </div>
                <div className="text-right flex flex-col items-start md:items-end">
                  <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-300 border border-white/5">
                    {exp.duration}
                  </span>
                  <span className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 text-lg leading-relaxed font-light">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
