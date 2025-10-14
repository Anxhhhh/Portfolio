import React from "react";
import { motion } from "framer-motion";

export const PortfolioHero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 font-display text-gray-100 antialiased">
      {/* Glowing Background Effect */}
      <div className="glow-effect"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black text-gray-100 dark:text-white mb-2 tracking-tighter"
        >
          Ansh
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium text-gray-300 dark:text-gray-400 mb-8"
        >
          AI & ML Engineer | Full Stack Developer
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          href="#projects"
          className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-500 ease-out transform hover:scale-110 focus:scale-110"
        >
          {/* Button Background with Glass Effect */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl group-hover:bg-white transition-all duration-500"></div>
          
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-110"></div>
          
          {/* Inner Border */}
          <div className="absolute inset-[1px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Button Content */}
          <span className="relative flex items-center z-10 group-hover:text-white transition-colors duration-500">
            <span className="mr-3 text-2xl">🚀</span>
            View My Work
            <svg className="ml-3 w-6 h-6 transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </motion.a>
      </div>

      {/* Inline CSS for Glow Effect */}
      <style jsx>{`
        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px #0da6f2, 0 0 10px #0da6f2, 0 0 20px #0da6f2, 0 0 40px #0da6f2;
          }
          100% {
            box-shadow: 0 0 20px #0da6f2, 0 0 40px #0da6f2, 0 0 80px #0da6f2, 0 0 100px #0da6f2;
          }
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(13, 166, 242, 0.3) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          filter: blur(100px);
          animation: glowing 8s alternate infinite;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};
