import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-3">Contact</h2>
      <p className="text-gray-400 mb-6">Let's work together 🚀</p>
      
      <div className="flex gap-8 justify-center items-center">
        <a
          href="mailto:hemanulasa884@gmail.com"
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/heman-ulasa-639422327"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/hemanulasa884-creator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-medium"
        >
          GitHub
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © 2026 Heman Ulasa. All rights reserved.
      </footer>
    </section>
  );
}