import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-16 pb-12 max-w-6xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-8 shadow-lg shadow-sky-500/10"
        >
          <Sparkles size={14} className="animate-pulse" /> AI & Full-Stack Developer
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent text-glow">Heman Krishna Ulasa</span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Final-year B.Tech CSE (AI & ML) student engineering high-performance RAG pipelines, AI-driven applications, and enterprise web solutions.
        </p>
        
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <a href="#projects" className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center gap-3">
            Explore Projects <ExternalLink size={18} />
          </a>
          <a href="mailto:hemanulasa884@gmail.com" className="glass-card hover:bg-slate-800/80 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all border border-slate-700/80 flex items-center gap-3 hover:-translate-y-0.5">
            <Mail size={18} /> Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}