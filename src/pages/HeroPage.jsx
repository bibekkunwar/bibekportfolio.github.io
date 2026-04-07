import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">Junior Software Developer</h1>
        <p className="max-w-xl text-center">
          I'm a Sydney-based Computer Science graduate with hands-on experience
          in frontend development and a willingness to adapt to whatever the
          role requires. Currently building projects with React, tailwindcss and
          modern web tools. Looking for a junior or support role where I can
          contribute from day one, learn from the team, and grow in any
          direction the work takes me.
        </p>
      </div>
      <div className="flex gap-6 mt-6">
        <Link className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg" to="/projects">
          View My Projects
        </Link>
        <a
          className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg"
          href="#"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default HeroPage;
