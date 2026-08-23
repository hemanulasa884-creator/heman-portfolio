import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 max-w-5xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-6">
          <Sparkles size={14} /> AI & Full-Stack Developer
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-sky-400">Heman Krishna Ulasa</span>
        </h1>

        <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Final-year B.Tech CSE (AI & ML) student engineering high-performance RAG pipelines, AI-driven applications, and enterprise web solutions[cite: 1].
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-sky-500/25 flex items-center gap-2"
          >
            Explore Projects <ExternalLink size={18} />
          </a>
          <a 
            href="mailto:hemanulasa884@gmail.com" 
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all border border-slate-700 flex items-center gap-2"
          >
            <Mail size={18} /> Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}