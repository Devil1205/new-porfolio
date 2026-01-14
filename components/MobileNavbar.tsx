
import React from 'react';
import { motion } from 'framer-motion';

const MobileNavbar: React.FC = () => {
  return (
    <nav className="fixed w-full bottom-0 left-0 z-50 glass-panel rounded-full px-6 py-4 md:hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 text-[13px] xs:text-sm font-medium text-slate-400 m-auto">
          {['Home', 'About', 'Experience', 'Skills', 'Projects'].map((item) => (
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
        
      </div>
    </nav>
  );
};

export default MobileNavbar;
