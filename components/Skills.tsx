
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black mb-6 tracking-tight">Technical <span className="gradient-text">Mastery.</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Proficient in modern full-stack engineering with a heavy focus on performance, 
            optimized data structures, and production-grade deployments.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill) => (
          <motion.div 
            key={skill.name} 
            variants={itemVariants}
            className="group moving-border-container transition-transform duration-500 hover:-translate-y-2"
          >
            {/* The Moving Border Logic */}
            <div className="moving-border-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="moving-border-content p-8 h-full flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">{skill.category}</div>
                <div className="text-xl font-black mb-6 text-white group-hover:text-purple-400 transition-colors">{skill.name}</div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden p-[1px]">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                  ></motion.div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-tighter text-slate-600">
                  <span>Skill Level</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
