import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import { FolderGit2, Play, Sparkles } from 'lucide-react';

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

function ProjectCard({ p, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.25,
        scale: 1.02
      });
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        ref={cardRef}
        className="p-8 rounded-2xl flex flex-col justify-between h-full cursor-pointer"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 15px 35px -15px rgba(0,0,0,0.6)'
        }}
      >
        <div style={{ transform: 'translateZ(25px)' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#38bdf8' }}>{p.title}</h3>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed font-normal">{p.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {p.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-xs px-3 py-1 rounded-md border font-medium"
                style={{
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  borderColor: '#0284c7'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
          className="flex gap-4 items-center pt-5 border-t border-slate-700/60"
          style={{ transform: 'translateZ(20px)' }}
        >
          <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-2">
            <FolderGit2 size={16} /> Code
          </a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="ml-auto text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5" style={{ backgroundColor: '#0284c7' }}>
            <Play size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <ProjectCard key={index} p={p} index={index} />
        ))}
      </div>
    </section>
  );
}