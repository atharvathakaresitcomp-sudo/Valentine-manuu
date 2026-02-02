
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ElusiveButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = (Math.random() - 0.5) * (window.innerWidth * 0.6);
    const randomY = (Math.random() - 0.5) * (window.innerHeight * 0.6);
    setPos({ x: randomX, y: randomY });
  };

  return (
    <motion.button
      animate={{ x: pos.x, y: pos.y }}
      onMouseEnter={moveButton}
      onClick={moveButton}
      className="px-10 py-3 bg-white text-rose-300 border-2 border-rose-100 rounded-full text-xl font-semibold shadow-md z-20"
    >
      No... 🥺
    </motion.button>
  );
}
