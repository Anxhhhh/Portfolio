import React from "react";
import { motion } from "framer-motion";

export const PortfolioHero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          ANSH
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          AI & ML Engineer | Full Stack Developer
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};
