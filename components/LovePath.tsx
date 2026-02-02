
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function LovePath() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 pointer-events-none">
      <div className="absolute inset-0 bg-rose-100/50 rounded-full" />
      <motion.div 
        style={{ scaleY }}
        className="absolute inset-0 bg-gradient-to-b from-red-400 to-rose-600 origin-top rounded-full shadow-[0_0_10px_rgba(239,68,68,0.3)]"
      />
      {[0.2, 0.4, 0.6, 0.8].map((p, i) => (
        <div key={i} className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rotate-45" style={{ top: `${p * 100}%` }} />
      ))}
    </div>
  );
}
