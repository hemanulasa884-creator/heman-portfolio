import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, BrainCircuit, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  { name: "Programming Languages", icon: Code2, skills: ["Java", "Python", "C"] },
  { name: "Web Technologies", icon: Layout, skills: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { name: "Backend & APIs", icon: Server, skills: ["Node.js", "Express.js", "FastAPI"] },
  { name: "Databases", icon: Database, skills: ["MySQL", "MongoDB"] },
  { name: "AI/ML Integrations", icon: BrainCircuit, skills: ["LLM API Integration", "AI Chatbots", "LangChain", "Qdrant Vector DB"] },
  { name: "Cloud Platforms", icon: Cloud, skills: ["AWS (EC2, S3, Lambda, RDS)", "GCP", "Azure"] },
  { name: "Tools & IDEs", icon: Wrench, skills: ["VS Code", "Android Studio", "IntelliJ IDEA", "Postman", "Git"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Technical Expertise</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">Core technology stack categorized across AI systems, cloud infrastructure, and full-stack software development.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-bold text-lg">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="bg-slate-900/90 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700/60 group-hover:border-sky-500/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}