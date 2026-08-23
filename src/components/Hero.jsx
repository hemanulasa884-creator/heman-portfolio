import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-12 pb-20 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="text-sky-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
          Software Developer & AI/ML Engineer
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Heman Krishna Ulasa
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Final-year B.Tech CSE (AI & ML) student specializing in building full-stack web applications, AI-powered systems, and LLM integrations.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a href="#projects" className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
            View Live Projects <ExternalLink size={18} />
          </a>
          <a href="mailto:hemanulasa884@gmail.com" className="border border-slate-700 hover:border-slate-500 text-slate-300 font-medium px-6 py-3 rounded-lg transition flex items-center gap-2">
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}