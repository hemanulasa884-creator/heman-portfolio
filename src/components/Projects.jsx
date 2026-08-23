import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Play, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Enterprise RAG Knowledge Engine",
    desc: "Production-grade RAG pipeline featuring PDF document ingestion, semantic chunking, Qdrant vector store search, and contextual response verification using OpenAI and FastAPI.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio/tree/main/enterprise-rag-engine",
    demo: "http://localhost:5174",
    tags: ["FastAPI", "Python", "LangChain", "Qdrant", "React", "OpenAI"],
    featured: true
  },
  {
    title: "Healthcare AI Chatbot",
    desc: "AI-powered medical assistant generating contextual healthcare guidance with real-time interaction, FastAPI backend, LLM API integration, JWT security, and MongoDB storage.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio",
    demo: "#",
    tags: ["Python", "FastAPI", "MongoDB", "JWT", "LLM API", "HTML/CSS/JS"],
    featured: false
  },
  {
    title: "Doctor Appointment & Health Record System",
    desc: "Full-stack MERN application simplifying online doctor appointment scheduling and health records management with role-based access control (Doctor, Patient, Admin).",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio",
    demo: "#",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">Real-world AI implementations, full-stack systems, and production pipelines.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card glass-card-hover p-7 rounded-2xl flex flex-col justify-between relative group"
          >
            <div>
              {p.featured && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full mb-4">
                  <Sparkles size={12} /> Featured Project
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{p.title}</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed font-light">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-900/90 text-sky-300 text-xs px-2.5 py-1 rounded-md border border-slate-700/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 items-center pt-4 border-t border-slate-800">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1.5 transition">
                <FolderGit2 size={16} /> Code
              </a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="ml-auto bg-sky-500 hover:bg-sky-400 text-white font-semibold px-4 py-2 rounded-lg text-xs transition flex items-center gap-1.5 shadow-md shadow-sky-500/20">
                <Play size={14} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}