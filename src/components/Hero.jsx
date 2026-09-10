import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6">
        <span>✨ AI & FULL-STACK DEVELOPER</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Heman Ulasa</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
        Software Developer & AI/ML Engineer specializing in developing scalable web applications, 
        intelligent AI models, and enterprise-grade software solutions.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Explore Projects Button */}
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition duration-200"
        >
          <span>Explore Projects</span>
          <ExternalLink size={16} />
        </a>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Heman_Krishna_Ulasa_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-cyan-400/50 text-white font-semibold text-sm transition duration-200 shadow-md"
        >
          <Download size={16} className="text-cyan-400" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
}