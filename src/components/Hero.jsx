export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-400">Heman Ulasa</span>
      </h1>

      <p className="mt-4 text-xl text-gray-300">
        AI & ML Engineer | Full Stack Developer
      </p>

      <p className="mt-2 text-gray-400">
        Building intelligent systems & scalable web apps
      </p>

      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-3 border rounded-xl hover:bg-white hover:text-black">
          View Projects
        </a>

        <a href="/resume.pdf" download className="px-6 py-3 rounded-xl bg-blue-500 hover:scale-105">
          Download Resume
        </a>
      </div>
    </section>
  );
}