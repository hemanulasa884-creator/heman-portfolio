import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Contact</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm md:text-base">
        Let's work together 🚀 Feel free to connect via email or my professional profiles.
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Email */}
        <a
          href="mailto:hemanulasa884@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <Mail size={18} />
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/heman-ulasa-639422327"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hemanulasa884-creator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
      </div>

      <footer className="mt-16 text-xs text-slate-500">
        © 2026 Heman Ulasa. All rights reserved.
      </footer>
    </section>
  );
}