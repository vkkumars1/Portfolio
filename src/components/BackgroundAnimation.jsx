import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 20, color: 'bg-blue-500' },
  { type: 'square', size: 30, color: 'bg-green-500' },
  { type: 'triangle', size: 25, color: 'bg-yellow-500' },
  { type: 'pentagon', size: 35, color: 'bg-red-500' },
];

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} opacity-10`}
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'triangle' ? '0' : '4px',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : shape.type === 'pentagon' ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : 'none',
          }}
          animate={{
            x: ['0vw', '100vw'],
            y: ['0vh', '100vh'],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

