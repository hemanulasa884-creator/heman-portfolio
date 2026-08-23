import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans antialiased">
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="py-6 text-center text-slate-500 border-t border-slate-800 text-sm">
        © {new Date().getFullYear()} Heman Ulasa. All rights reserved.
      </footer>
    </div>
  );
}

export default App;