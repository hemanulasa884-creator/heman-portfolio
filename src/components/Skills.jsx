import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

const skillCategories = [
  { name: "Programming Languages", skills: ["Python", "Java"] },
  { name: "Web Technologies", skills: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { name: "Backend & APIs", skills: ["Node.js", "Express.js", "FastAPI"] },
  { name: "Databases", skills: ["MySQL", "MongoDB"] },
  { name: "AI/ML Integrations", skills: ["LLM API Integration", "AI Chatbots", "LangChain", "Qdrant Vector DB"] },
  { name: "Cloud Platforms", skills: ["AWS (EC2, S3, Lambda, RDS)", "GCP", "Azure"] },
  { name: "Tools & IDEs", skills: ["VS Code", "Android Studio", "IntelliJ IDEA", "Postman", "Git"] }
];

function TiltCard({ cat, idx }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 18,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.03
      });
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
    >
      <div 
        ref={tiltRef}
        className="p-7 rounded-2xl cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          transformStyle: 'preserve-3d',
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
        }}
      >
        <h3 
          className="font-bold text-xl mb-4"
          style={{ 
            color: '#38bdf8', 
            transform: 'translateZ(30px)',
            textShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
          }}
        >
          {cat.name}
        </h3>
        <div 
          className="flex flex-wrap gap-2.5"
          style={{ transform: 'translateZ(20px)' }}
        >
          {cat.skills.map((s, sIdx) => (
            <span 
              key={sIdx} 
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg border"
              style={{
                backgroundColor: '#0f172a',
                color: '#e2e8f0',
                borderColor: 'rgba(51, 65, 85, 0.8)'
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center tracking-tight">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <TiltCard key={idx} cat={cat} idx={idx} />
        ))}
      </div>
    </section>
  );
}