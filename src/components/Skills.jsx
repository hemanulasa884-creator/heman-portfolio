export default function Skills() {
  const skills = ["Python", "Java", "AI/ML", "HTML", "CSS", "JavaScript", "Git"];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-blue-500">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}