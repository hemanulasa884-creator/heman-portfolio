import React from 'react';

const projects = [
  {
    title: "Enterprise RAG Knowledge Engine",
    desc: "Production-grade RAG pipeline using FastAPI, LangChain, Qdrant Vector DB, and OpenAI with PDF ingestion and semantic chunking.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio/tree/main/enterprise-rag-engine",
    demo: "#",
    tags: ["FastAPI", "Python", "LangChain", "Qdrant", "React", "OpenAI"]
  },
  {
    title: "AI Healthcare Chatbot",
    desc: "Predicts health conditions using ML models with an interactive conversational UI.",
    github: "https://github.com/hemanulasa884-creator/heman-portfolio",
    demo: "#",
    tags: ["Python", "React", "FastAPI", "Scikit-Learn"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-sky-400">{p.title}</h3>
              <p className="text-slate-300 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-900 text-sky-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline text-sm">GitHub Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}