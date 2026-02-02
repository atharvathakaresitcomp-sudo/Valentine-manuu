
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Music, Star, Camera } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import ElusiveButton from './components/ElusiveButton';
import LovePath from './components/LovePath';

const REASONS = [
  "The way your eyes sparkle whenever you smile.",
  "How you make every single moment feel like a fairy tale.",
  "Your kindness that melts my heart every day.",
  "The way you believe in us, even when things get tough.",
  "Our little inside jokes that make me laugh for hours.",
  "The warmth of your hugs—they feel like home.",
  "How you are the most beautiful person I've ever known.",
  "Because you are my soulmate and my forever."
];

// Placeholder high-quality romantic images
const PHOTOS = [
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516589174184-c6848463ec7d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800&auto=format&fit=crop",
];

export default function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleYes = () => {
    setHasAccepted(true);
    
    // Initial big burst of hearts and poppers
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffd700']
    });

    // Continuous celebration
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-rose-50 text-rose-900 font-sans selection:bg-rose-200">
      <FloatingHearts count={30} />
      
      <AnimatePresence mode="wait">
        {!hasAccepted ? (
          <motion.div 
            key="proposal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            className="flex flex-col items-center justify-center min-h-screen p-6 text-center z-10 relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Heart size={120} className="text-red-500 fill-red-500 drop-shadow-xl" />
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-romantic font-bold mb-6 text-rose-600">
              Hey Mannuu...
            </h1>
            <h2 className="text-3xl md:text-5xl font-romantic mb-12 text-rose-500">
              Will you be my Valentine?
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center min-h-[200px] w-full">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
                className="px-14 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full text-2xl font-bold shadow-xl z-20"
              >
                YES! ❤️
              </motion.button>
              
              <ElusiveButton />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="celebration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* Celebration Screen */}
            <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md p-12 rounded-[2rem] shadow-2xl border border-rose-100 max-w-3xl"
              >
                <h2 className="text-6xl md:text-8xl font-romantic text-red-600 mb-6">
                  Yay! I love you!
                </h2>
                <div className="flex justify-center gap-4 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} animate={{ y: [0, -20, 0] }} transition={{ delay: i * 0.1, repeat: Infinity }}>
                      <Heart size={40} className="text-red-400 fill-red-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-medium text-rose-800 mb-8 leading-relaxed">
                  Mannuu, you've made me the luckiest person alive. This Valentine's is going to be our best one yet!
                </p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-rose-400 flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                  <span className="uppercase tracking-widest text-sm font-bold">Scroll for our story</span>
                  <div className="w-1 h-12 bg-rose-200 rounded-full" />
                </motion.div>
              </motion.div>
            </section>

            {/* Reasons List with Flowing Path */}
            <section className="py-24 px-6 relative max-w-4xl mx-auto">
              <h3 className="text-5xl font-romantic text-center mb-24 text-rose-600">Why I Adore You</h3>
              <div className="relative">
                <LovePath />
                {REASONS.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center mb-24 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 p-6 bg-white rounded-2xl shadow-lg border border-rose-50 text-xl italic text-rose-700">
                      "{reason}"
                    </div>
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-24 bg-rose-100/40">
              <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-5xl font-romantic text-center mb-16 text-rose-600">Our Memories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PHOTOS.map((url, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                      className="p-3 bg-white shadow-xl rounded-lg"
                    >
                      <img src={url} alt="Us" className="w-full aspect-square object-cover rounded shadow-inner" />
                      <div className="mt-4 text-center font-romantic text-xl text-rose-400">
                        Forever & Always
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final Message */}
            <section className="min-h-screen flex flex-col items-center justify-center p-12 text-center bg-white">
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="max-w-2xl"
              >
                <Heart size={80} className="text-red-500 fill-red-500 mx-auto mb-10" />
                <h4 className="text-5xl font-romantic text-rose-600 mb-8">To My Dear Mannuu,</h4>
                <p className="text-2xl text-rose-700 leading-relaxed mb-12">
                  Every day with you feels like a gift. Thank you for choosing me. I promise to love you more with every heartbeat.
                </p>
                <div className="text-4xl font-romantic text-red-500">
                  Forever Yours, <br/>
                  <span className="text-5xl">Atharva</span>
                </div>
                <p className="mt-20 text-rose-200 text-xs tracking-widest uppercase">Happy Valentine's Day 2025</p>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
