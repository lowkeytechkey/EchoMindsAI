import { motion } from 'framer-motion';
import React from 'react';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInWhenVisible({ children, delay = 0 }: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay * 0.2,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}