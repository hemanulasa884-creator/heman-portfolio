import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Contact</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm md:text-base">
        Let's work together 🚀 Feel free to connect via email or my professional profiles.
      </p>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Email - Opens web Gmail compose */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hemanulasa884@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/heman-ulasa-639422327"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hemanulasa884-creator/heman-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700/70 bg-slate-900/60 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-200 text-sm font-medium shadow-md hover:shadow-cyan-500/10"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>

      <footer className="mt-16 text-xs text-slate-500">
        © 2026 Heman Ulasa. All rights reserved.
      </footer>
    </section>
  );
}