import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";

function ProjectsPage() {
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        `https://api.github.com/users/bibekkunwar/repos`,
      );

      if (!response.ok) {
        setError("Failed to fetch data" + response.status);
        return;
      }
      const data = await response.json();
      console.log(data);
      setRepo(data);
    }

    fetchRepos();
  }, []);

  return (
    <div className=" min-h-screen px-8 py-16">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="bg-[#2d374b] rounded-2xl">
        {error && <p className="text-red-400 mt-4">{error}</p>}

        <h2 className="text-2xl font-bold text-white p-6 mt-16 mb-10 text-center">
          GitHub Repositories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repo.map((r) => (
            <div
              key={r.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4"
            >
              <h3 className="font-bold">{r.name}</h3>
              <p className="text-gray-400 text-sm">{r.description}</p>
              <a
                href={r.html_url}
                target="_blank"
                className="text-blue-400 text-sm mt-2 block"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
