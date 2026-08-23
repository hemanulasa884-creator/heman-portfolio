import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 max-w-6xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sky-400 text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles size={14} /> AI & Full-Stack Developer
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Hi, I'm <span className="text-sky-400">Heman Krishna Ulasa</span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Final-year B.Tech CSE (AI & ML) student engineering high-performance RAG pipelines, AI-driven applications, and enterprise web solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="#projects" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2 shadow-lg shadow-sky-500/20">
            Explore Projects <ExternalLink size={18} />
          </a>
          <a href="mailto:hemanulasa884@gmail.com" className="glass-card text-slate-200 font-semibold px-6 py-3 rounded-xl transition flex items-center gap-2">
            <Mail size={18} /> Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}