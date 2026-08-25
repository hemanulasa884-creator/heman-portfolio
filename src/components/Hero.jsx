import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 max-w-5xl mx-auto text-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(3,7,18,0) 70%)',
          filter: 'blur(60px)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8 cursor-pointer"
          style={{
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'
          }}
        >
          <Sparkles size={16} className="animate-spin" /> AI & Full-Stack Developer
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          Hi, I'm <span style={{ color: '#38bdf8', textShadow: '0 0 35px rgba(56, 189, 248, 0.5)' }}>Heman Ulasa</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Final-year B.Tech CSE (AI & ML) student engineering high-performance RAG pipelines, AI-driven applications, and enterprise web solutions.
        </p>

        <div className="flex flex-wrap gap-5 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.08, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3 transition-all"
            style={{
              backgroundColor: '#0284c7',
              boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.5)'
            }}
          >
            Explore Projects <ExternalLink size={18} />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.08, translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hemanulasa884@gmail.com" 
            className="text-slate-200 font-semibold px-8 py-4 rounded-xl flex items-center gap-3 border transition-all"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              borderColor: 'rgba(51, 65, 85, 0.8)'
            }}
          >
            <Mail size={18} /> Get In Touch
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}