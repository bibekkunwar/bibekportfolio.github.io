import { Link } from "react-router-dom";
import profilePhoto from "../assets/profilePhoto.jpg";

function HeroPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white mb-6 px-8 md:px-0 pt-16 md:pt-0">
      <div>
        <div className="mb-7">
          <img
            className="rounded-full w-64 h-64 object-cover mb-6 border-4 border-blue-600 mx-auto"
            src={profilePhoto}
            alt="Bibek Kunwar"
          />
          <h2 className="text-3xl font-bold mb-2 text-center">
            Bibek Kunwar
          </h2>{" "}
        </div>

        <h1 className="text-4xl font-bold mb-4 text-center">
          Junior Software Developer
        </h1>
        <p className="max-w-xl text-center px-4 md:px-0">
          I'm a Sydney-based Computer Science graduate with hands-on experience
          in frontend development and a willingness to adapt to whatever the
          role requires. Currently building projects with React, tailwindcss and
          modern web tools. Looking for a junior or support role where I can
          contribute from day one, learn from the team, and grow in any
          direction the work takes me.
        </p>
      </div>
      <div className="flex gap-6 mt-6">
        <Link
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
          to="/projects"
        >
          View My Projects
        </Link>
        <a
          className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg"
          href="/bibekportfolio.github.io/Bibek_Kunwar.pdf"
          download="/Bibek_Kunwar.pdf"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default HeroPage;
