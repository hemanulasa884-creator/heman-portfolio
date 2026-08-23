import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>

          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl mb-6 shadow-lg">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">Dec 2025 – June 2026</span>
            <h3 className="text-lg font-bold text-white mt-3">Intern - Full Stack Developer</h3>
            <p className="text-slate-400 text-sm mb-3">Asian Technology Solutions Pvt Ltd | Hyderabad, India[cite: 2]</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1.5 font-normal">
              <li>Developing scalable enterprise web applications using full-stack architectures[cite: 2].</li>
              <li>Engineered REST APIs, database models, and integrated modern web interfaces[cite: 2].</li>
              <li>Collaborating with development teams on real-world production systems[cite: 2].</li>
            </ul>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl mb-8 shadow-lg">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">July 2025 – Sep 2025</span>
            <h3 className="text-lg font-bold text-white mt-3">MERN Stack Developer Intern</h3>
            <p className="text-slate-400 text-sm mb-3">Doctor Appointment & Health Record System[cite: 1]</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1.5 font-normal">
              <li>Engineered Node.js/Express.js REST APIs with MongoDB CRUD operations[cite: 1].</li>
              <li>Implemented JWT authentication and role-based access control[cite: 1].</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-4 shadow-lg">
            <div>
              <h3 className="text-white font-bold">B.Tech - Computer Science & Engineering (AI & ML)</h3>
              <p className="text-slate-400 text-sm">Mohan Babu University, Tirupati | CGPA: 8.06[cite: 1]</p>
            </div>
            <div className="border-t border-slate-700/60 pt-3">
              <h3 className="text-white font-bold">Class XII (Intermediate)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi Junior College | 61.9%[cite: 1]</p>
            </div>
            <div className="border-t border-slate-700/60 pt-3">
              <h3 className="text-white font-bold">Class X (SSC)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi School | 99%[cite: 1]</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl mb-8 space-y-3.5 shadow-lg">
            {[
              "Full Stack Developer Internship Certificate – Asian Technology Solutions[cite: 2]",
              "Python Essentials 1 – Cisco Networking Academy[cite: 1]",
              "Python Essentials 2 – Cisco Networking Academy[cite: 1]",
              "Machine Learning for Computer Vision – MathWorks[cite: 1]",
              "Introduction to Cybersecurity – Cisco Networking Academy[cite: 1]"
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-normal">
                <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Key Strengths</h2>
          <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl space-y-3.5 shadow-lg">
            {[
              "Strong problem-solving and analytical thinking skills[cite: 1]",
              "Quick learner adaptable to new AI frameworks and software platforms[cite: 1]",
              "Proficient in debugging, logical reasoning, and system architecture[cite: 1]",
              "Proven ability to work independently and collaboratively[cite: 1]"
            ].map((str, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-normal">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>{str}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}