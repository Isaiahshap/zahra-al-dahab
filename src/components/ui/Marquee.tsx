"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function Marquee({ 
  text, 
  direction = 'left', 
  speed = 40, 
  className = '' 
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      className={`overflow-hidden whitespace-nowrap py-2 ${className}`}
      ref={marqueeRef}
    >
      <div className="flex">
        <motion.div
          className="flex min-w-full flex-nowrap items-center justify-center gap-4 text-sm md:text-base font-medium tracking-wider"
          animate={{
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1000 / speed,
          }}
        >
          {Array(10).fill(text).map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 