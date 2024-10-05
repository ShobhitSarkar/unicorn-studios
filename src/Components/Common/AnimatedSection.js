import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;