import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { name: "Programming Languages", skills: ["Java", "Python", "C"] },
  { name: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { name: "Backend & APIs", skills: ["Node.js", "Express.js", "FastAPI"] },
  { name: "Databases", skills: ["MySQL", "MongoDB"] },
  { name: "AI/ML Integrations", skills: ["LLM API Integration", "AI Chatbots", "LangChain", "Qdrant Vector DB"] },
  { name: "Cloud Platforms", skills: ["AWS (EC2, S3, Lambda, RDS)", "Google Cloud", "Azure"] },
  { name: "Tools & IDEs", skills: ["VS Code", "Android Studio", "Eclipse", "IntelliJ IDEA", "Postman", "Git"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700"
          >
            <h3 className="text-sky-400 font-bold mb-4 text-lg">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, sIdx) => (
                <span key={sIdx} className="bg-slate-900 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-700">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}