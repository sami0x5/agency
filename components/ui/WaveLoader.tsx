import { motion } from 'motion/react';
import React from 'react';

const WaveLoader = () => {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          className="w-1 h-4 rounded-full relative"
          style={{
            background: '#ffffff',
          }}
          animate={{
            scaleY: [1, 1.5, 0.5, 1.5, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}>
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/20 to-transparent"></div>

          {/* Top highlight */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/3 rounded-t-full bg-white/30"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default WaveLoader;
