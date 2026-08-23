import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Enterprise RAG Knowledge Engine",
    desc: "Production-grade RAG pipeline featuring PDF document ingestion, semantic chunking, Qdrant vector store search, and contextual response verification using OpenAI and FastAPI.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio/tree/main/enterprise-rag-engine",
    demo: "http://localhost:5174",
    tags: ["FastAPI", "Python", "LangChain", "Qdrant", "React", "OpenAI"]
  },
  {
    title: "Healthcare AI Chatbot",
    desc: "AI-powered medical assistant generating contextual healthcare guidance with real-time interaction, FastAPI backend, LLM API integration, JWT security, and MongoDB storage.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio",
    demo: "#",
    tags: ["Python", "FastAPI", "MongoDB", "JWT", "LLM API", "HTML/CSS/JS"]
  },
  {
    title: "Doctor Appointment & Health Record System",
    desc: "Full-stack MERN application simplifying online doctor appointment scheduling and health records management with role-based access control (Doctor, Patient, Admin).",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio",
    demo: "#",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white mb-10 text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-sky-400 mb-3">{p.title}</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-900 text-sky-300 text-xs px-2.5 py-1 rounded-md border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-center pt-4 border-t border-slate-800">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-sm underline">
                GitHub Repo
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="ml-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-1.5 rounded-lg text-xs transition">
                Live Demo ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}