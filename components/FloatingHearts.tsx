
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FloatingHearts({ count }: { count: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: '110vh', 
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: '-10vh',
            x: `${Math.random() * 100}vw`,
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "linear"
          }}
          className="absolute text-rose-200/50"
        >
          <Heart size={Math.random() * 30 + 15} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
