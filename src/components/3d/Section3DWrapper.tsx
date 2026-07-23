import React from 'react';
import { motion } from 'motion/react';

interface Section3DWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Section3DWrapper: React.FC<Section3DWrapperProps> = ({
  children,
  id,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, rotateX: 12, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};
