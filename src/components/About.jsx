import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience & Education */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-sky-400" size={28} />
            <h2 className="text-3xl font-extrabold text-white">Work Experience</h2>
          </div>

          {/* Asian Technology Solutions Internship */}
          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 mb-6 relative">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Dec 2025 – June 2026
            </span>
            <h3 className="text-xl font-bold text-white mt-3">Intern - Full Stack Developer</h3>
            <p className="text-slate-400 text-sm font-medium mb-4">Asian Technology Solutions Pvt Ltd | Hyderabad, India</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 font-light">
              <li>Developing scalable enterprise web applications across full-stack architectures[cite: 2].</li>
              <li>Engineered REST APIs, database models, and integrated modern frontend modules[cite: 2].</li>
              <li>Collaborating with cross-functional development teams on active production projects[cite: 2].</li>
            </ul>
          </div>

          {/* MERN Stack Internship */}
          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 mb-12">
            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              July 2025 – Sep 2025
            </span>
            <h3 className="text-xl font-bold text-white mt-3">MERN Stack Developer Intern</h3>
            <p className="text-slate-400 text-sm font-medium mb-4">Doctor Appointment & Health Record System[cite: 1]</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2 font-light">
              <li>Engineered Node.js/Express.js REST APIs with MongoDB CRUD operations[cite: 1].</li>
              <li>Implemented JWT authentication and role-based access control[cite: 1].</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-sky-400" size={28} />
            <h2 className="text-3xl font-extrabold text-white">Education</h2>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 space-y-5">
            <div>
              <h3 className="text-white font-bold text-lg">B.Tech - Computer Science & Engineering (AI & ML)</h3>
              <p className="text-slate-400 text-sm">Mohan Babu University, Tirupati | Graduating 2026 | CGPA: 8.06[cite: 1]</p>
            </div>
            <div className="border-t border-slate-800 pt-4">
              <h3 className="text-white font-bold">Class XII (Intermediate)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi Junior College | 61.9%[cite: 1]</p>
            </div>
            <div className="border-t border-slate-800 pt-4">
              <h3 className="text-white font-bold">Class X (SSC)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi School | 99%[cite: 1]</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Strengths */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-sky-400" size={28} />
            <h2 className="text-3xl font-extrabold text-white">Certifications</h2>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 mb-12 space-y-4">
            {[
              "Full Stack Developer Internship Certificate – Asian Technology Solutions[cite: 2]",
              "Python Essentials 1 – Cisco Networking Academy[cite: 1]",
              "Python Essentials 2 – Cisco Networking Academy[cite: 1]",
              "Machine Learning for Computer Vision – MathWorks[cite: 1]",
              "Introduction to Cybersecurity – Cisco Networking Academy[cite: 1]"
            ].map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                <CheckCircle2 size={18} className="text-sky-400 mt-0.5 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-sky-400" size={28} />
            <h2 className="text-3xl font-extrabold text-white">Key Strengths</h2>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-700/80 space-y-4">
            {[
              "Strong problem-solving and analytical thinking skills[cite: 1]",
              "Quick learner adaptable to new AI frameworks and enterprise tools[cite: 1]",
              "Proficient in debugging, system logic, and API architecture[cite: 1]",
              "Proven ability to work independently and collaboratively[cite: 1]"
            ].map((str, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span>{str}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}