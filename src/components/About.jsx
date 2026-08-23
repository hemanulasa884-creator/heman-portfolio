import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience & Education */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>
          
          {/* Asian Technology Solutions Internship */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
            <span className="text-xs text-sky-400 font-semibold uppercase">Dec 2025 – June 2026</span>
            <h3 className="text-lg font-bold text-white mt-1">Intern - Full Stack Developer</h3>
            <p className="text-slate-400 text-sm mb-3">Asian Technology Solutions Pvt Ltd | Hyderabad, India</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Assisted in developing and maintaining scalable web applications using front-end and back-end stacks.</li>
              <li>Engineered custom REST APIs, integrated database solutions, and connected modern web frameworks.</li>
              <li>Collaborated with senior development teams on real-world production projects.</li>
            </ul>
          </div>

          {/* MERN Internship */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
            <span className="text-xs text-sky-400 font-semibold uppercase">July 2025 – Sep 2025</span>
            <h3 className="text-lg font-bold text-white mt-1">MERN Stack Developer Intern</h3>
            <p className="text-slate-400 text-sm mb-3">Project: Doctor Appointment & Health Record System</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Designed RESTful APIs using Node.js, Express.js, and MongoDB.</li>
              <li>Implemented JWT authentication and role-based access control.</li>
              <li>Tested endpoints using Postman and managed version control with Git.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
            <div>
              <h3 className="text-white font-bold">B.Tech - Computer Science & Engineering (AI & ML)</h3>
              <p className="text-slate-400 text-sm">Mohan Babu University, Tirupati | Passout: 2026 | CGPA: 8.06</p>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h3 className="text-white font-bold">Class XII (Intermediate)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi Junior College, Eluru | Percentage: 61.9%</p>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h3 className="text-white font-bold">Class X (SSC)</h3>
              <p className="text-slate-400 text-sm">Sree Bharathi School, Eluru | Percentage: 99%</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Strengths */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8 space-y-3">
            {[
              "Full Stack Developer Internship Certificate – Asian Technology Solutions",
              "Python Essentials 1 – Cisco Networking Academy",
              "Python Essentials 2 – Cisco Networking Academy",
              "Machine Learning for Computer Vision – MathWorks",
              "Introduction to Cybersecurity – Cisco Networking Academy"
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                {cert}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Key Strengths</h2>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-3">
            {[
              "Strong problem-solving and analytical thinking",
              "Quick learner adaptable to emerging AI & software tech",
              "Proficient in debugging and logical reasoning",
              "Effective independent and collaborative team member"
            ].map((str, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {str}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}