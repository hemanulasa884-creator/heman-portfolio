const projects = [
  {
    title: "AI Healthcare Chatbot",
    desc: "Predicts health conditions using ML models and interactive conversational UI.",
    github: "https://github.com/your-username/healthcare-chatbot",
    demo: "https://your-demo-link.com",
    tags: ["Python", "React", "FastAPI", "Scikit-Learn"]
  },
  // Add other projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-slate-700 text-blue-400 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-sm bg-slate-700 text-white px-3 py-2 rounded hover:bg-slate-600 transition">GitHub</a>
              <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500 transition">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}