function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-xl  border border-gray-700 text-white p-6">
      <h1 className="text-xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>

      <div className="flex gap-2 flex-wrap mb-4">
        
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        <a
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
          href={project.gitHub}
          target="_blank"
        >
          Github
        </a>
        <a
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
          href={project.liveDemo}
          target="_blank"
        >
          LiveDemo
        </a>
      </div>
      {project.image && <img src={project.image} alt={project.title} />}
      
    </div>
  );
}

export default ProjectCard;
